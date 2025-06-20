<script setup>
import { Image } from "@tiptap/extension-image"
import { Link } from "@tiptap/extension-link"
import { Placeholder } from "@tiptap/extension-placeholder"
import { Underline } from "@tiptap/extension-underline"
import { StarterKit } from "@tiptap/starter-kit"
import { EditorContent, useEditor } from "@tiptap/vue-3"
import { PerfectScrollbar } from "vue3-perfect-scrollbar"
import { VForm } from "vuetify/components/VForm"

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(["update:isDrawerOpen"])

const handleDrawerModelValueUpdate = val => {
  emit("update:isDrawerOpen", val)
}

const editor = useEditor({
  content: "",
  extensions: [
    StarterKit,
    Image,
    Placeholder.configure({ placeholder: "Enter a category description..." }),
    Underline,
    Link.configure({ openOnClick: false }),
  ],
})

const setLink = () => {
  const previousUrl = editor.value?.getAttributes("link").href

  // eslint-disable-next-line no-alert
  const url = window.prompt("URL", previousUrl)

  // cancelled
  if (url === null) return

  // empty
  if (url === "") {
    editor.value?.chain().focus().extendMarkRange("link").unsetLink().run()

    return
  }

  // update link
  editor.value
    ?.chain()
    .focus()
    .extendMarkRange("link")
    .setLink({ href: url })
    .run()
}

const addImage = () => {
  // eslint-disable-next-line no-alert
  const url = window.prompt("URL")
  if (url) editor.value?.chain().focus().setImage({ src: url }).run()
}

const refVForm = ref()
const categoryTitle = ref()
const categorySlug = ref()
const categoryImg = ref()
const parentCategory = ref()
const parentStatus = ref()

const resetForm = () => {
  emit("update:isDrawerOpen", false)
  refVForm.value?.reset()
}
</script>

<template>
  <VNavigationDrawer
    :model-value="props.isDrawerOpen"
    temporary
    location="end"
    width="370"
    border="none"
    class="category-navigation-drawer scrollable-content"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Header -->
    <AppDrawerHeaderSection
      title="Add Category"
      @cancel="$emit('update:isDrawerOpen', false)"
    />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <VForm
            ref="refVForm"
            @submit.prevent=""
          >
            <VRow>
              <VCol cols="12">
                <AppTextField
                  v-model="categoryTitle"
                  label="Title"
                  :rules="[requiredValidator]"
                  placeholder="Fashion"
                />
              </VCol>

              <VCol cols="12">
                <AppTextField
                  v-model="categorySlug"
                  label="Slug"
                  :rules="[requiredValidator]"
                  placeholder="Trends fashion"
                />
              </VCol>

              <VCol cols="12">
                <VLabel>
                  <span class="text-sm text-high-emphasis mb-1">Attachment</span>
                </VLabel>
                <VFileInput
                  v-model="categoryImg"
                  prepend-icon=""
                  :rules="[requiredValidator]"
                  clearable
                >
                  <template #append>
                    <VBtn variant="tonal">
                      Choose
                    </VBtn>
                  </template>
                </VFileInput>
              </VCol>

              <VCol cols="12">
                <AppSelect
                  v-model="parentCategory"
                  :rules="[requiredValidator]"
                  label="Parent Category"
                  placeholder="Select Parent Category"
                  :items="[
                    'HouseHold',
                    'Management',
                    'Electronics',
                    'Office',
                    'Accessories',
                  ]"
                />
              </VCol>

              <VCol cols="12">
                <p class="text-body-2 text-high-emphasis mb-1">
                  Description
                </p>
                <div class="border rounded px-3 py-1">
                  <EditorContent :editor="editor" />
                  <div
                    v-if="editor"
                    class="d-flex justify-end flex-wrap gap-x-2"
                  >
                    <VIcon
                      icon="tabler-bold"
                      :color="editor.isActive('bold') ? 'primary' : ''"
                      size="20"
                      @click="editor.chain().focus().toggleBold().run()"
                    />

                    <VIcon
                      :color="editor.isActive('underline') ? 'primary' : ''"
                      icon="tabler-underline"
                      size="20"
                      @click="editor.commands.toggleUnderline()"
                    />

                    <VIcon
                      :color="editor.isActive('italic') ? 'primary' : ''"
                      icon="tabler-italic"
                      size="20"
                      @click="editor.chain().focus().toggleItalic().run()"
                    />

                    <VIcon
                      :color="editor.isActive('bulletList') ? 'primary' : ''"
                      icon="tabler-list"
                      size="20"
                      @click="editor.chain().focus().toggleBulletList().run()"
                    />

                    <VIcon
                      :color="editor.isActive('orderedList') ? 'primary' : ''"
                      icon="tabler-list-numbers"
                      size="20"
                      @click="editor.chain().focus().toggleOrderedList().run()"
                    />

                    <VIcon
                      icon="tabler-link"
                      size="20"
                      @click="setLink"
                    />

                    <VIcon
                      icon="tabler-photo"
                      size="20"
                      @click="addImage"
                    />
                  </div>
                </div>
              </VCol>

              <VCol cols="12">
                <AppSelect
                  v-model="parentStatus"
                  :rules="[requiredValidator]"
                  placeholder="Select Category Status"
                  label="Select Category Status"
                  :items="['Published', 'Inactive', 'Scheduled']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-start">
                  <VBtn
                    type="submit"
                    color="primary"
                    class="me-4"
                  >
                    Add
                  </VBtn>
                  <VBtn
                    color="error"
                    variant="tonal"
                    @click="resetForm"
                  >
                    Discard
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>

<style lang="scss">
.category-navigation-drawer {
  .ProseMirror {
    min-block-size: 9vh !important;

    p {
      margin-block-end: 0;
    }

    p.is-editor-empty:first-child::before {
      block-size: 0;
      color: #adb5bd;
      content: attr(data-placeholder);
      float: inline-start;
      pointer-events: none;
    }

    &-focused {
      outline: none;
    }

    ul,
    ol {
      padding-inline: 1.125rem;
    }
  }

  .is-active {
    border-color: rgba(
      var(--v-theme-primary),
      var(--v-border-opacity)
    ) !important;
    background-color: rgba(var(--v-theme-primary), var(--v-activated-opacity));
    color: rgb(var(--v-theme-primary));
  }
}
</style>
