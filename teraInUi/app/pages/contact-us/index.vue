<script setup lang="ts">
import ContactDesign1 from '~/components/contact/ContactDesign1.vue'
import ContactDesign2 from '~/components/contact/ContactDesign2.vue'
import ContactDesign3 from '~/components/contact/ContactDesign3.vue'
const items = [
  { id: 4, title: 'Contact Design 3', component: ContactDesign3 },
  { id: 1, title: 'Contact Design 1', component: ContactDesign1 },
  { id: 2, title: 'Contact Design 2', component: ContactDesign2 },
]
</script>



<template>
  <div class="max-w-6xl f m-auto mt-20">
  <UCarousel
    v-slot="{ item }"
    auto-height
    arrows
    dots
    :items="items"
    :ui="{
      container: 'transition-[height]',
      controls: 'absolute -top-8 inset-x-12',
      dots: '-top-7',
      dot: 'w-6 h-1'
    }"
    class="w-full  mx-auto"
  >
    <component :is="item.component" class="w-full" />
  </UCarousel>
  </div>

</template>

