<script setup>
const items = [
  {
    title: "Cupcake sesame snaps dessert marzipan.",
    value: 1,
    props: {
      prependIcon: "tabler-brand-instagram",
      rounded: "xl",
    },
  },
  {
    title: "Jelly beans jelly-o gummi bears chupa chups marshmallow.",
    value: 2,
    props: {
      prependIcon: "tabler-brand-facebook",
      rounded: "xl",
    },
  },
  {
    title: "Bonbon macaroon gummies pie jelly",
    value: 3,
    props: {
      prependIcon: "tabler-brand-twitter",
      rounded: "xl",
    },
  },
  {
    title: "halvah icing marshmallow",
    value: 4,
    props: {
      prependIcon: "tabler-brand-instagram",
      rounded: "xl",
    },
  },
]
</script>

<template>
  <VList :items="items" />
</template>
