<script setup>
import avatar1 from "@images/avatars/avatar-1.png"
import avatar2 from "@images/avatars/avatar-2.png"
import avatar3 from "@images/avatars/avatar-3.png"
import avatar4 from "@images/avatars/avatar-4.png"
</script>

<template>
  <VCard>
    <VCardItem title="Popular Instructors">
      <template #append>
        <MoreBtn />
      </template>
    </VCardItem>
    <VDivider />
    <div class="d-flex justify-space-between py-4 px-6">
      <div class="text-body-1 text-uppercase">
        instructors
      </div>
      <div class="text-body-1 text-uppercase">
        Courses
      </div>
    </div>
    <VDivider />
    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="instructor in [
            {
              name: 'Jordan Stevenson',
              profession: 'Business Intelligence',
              totalCourses: 33,
              avatar: avatar1,
            },
            {
              name: 'Bentlee Emblin',
              profession: 'Digital Marketing',
              totalCourses: 52,
              avatar: avatar2,
            },
            {
              name: 'Benedetto Rossiter',
              profession: 'UI/UX Design',
              totalCourses: 12,
              avatar: avatar3,
            },
            {
              name: 'Beverlie Krabbe',
              profession: 'Vue',
              totalCourses: 8,
              avatar: avatar4,
            },
          ]"
          :key="instructor.name"
        >
          <template #prepend>
            <VAvatar
              size="34"
              class="me-1"
              :image="instructor.avatar"
            />
          </template>
          <VListItemTitle class="font-weight-medium me-4">
            {{ instructor.name }}
          </VListItemTitle>
          <VListItemSubtitle class="me-4">
            {{ instructor.profession }}
          </VListItemSubtitle>

          <template #append>
            <h6 class="text-h6">
              {{ instructor.totalCourses }}
            </h6>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.card-list {
  --v-card-list-gap: 1rem;
}
</style>
