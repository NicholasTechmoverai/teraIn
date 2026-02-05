<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

// const items = computed(() => [{
//   label: 'Features',
//   to: '#features',
//   active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
// }, {
//   label: 'Pricing',
//   to: '#pricing',
//   active: activeHeadings.value.includes('pricing')
// }, {
//   label: 'Testimonials',
//   to: '#testimonials',
//   active: activeHeadings.value.includes('testimonials') && !activeHeadings.value.includes('pricing')
// }])

// nuxtApp.hooks.hookOnce('page:finish', () => {
//   updateHeadings([
//     document.querySelector('#features'),
//     document.querySelector('#pricing'),
//     document.querySelector('#testimonials')
//   ].filter(Boolean) as Element[])
// })

const items = computed(() => [
  {
    label: 'Services',
    icon: 'i-lucide-layers',
    children: [
      {
        label: 'Web Development',
        icon: 'i-lucide-globe',
        to: '/services/web-development'
      },
      {
        label: 'Backend & APIs',
        icon: 'i-lucide-database',
        to: '/services/backend'
      },
      {
        label: 'Machine Learning',
        icon: 'i-lucide-brain',
        to: '/services/machine-learning'
      },
      {
        label: 'App Development',
        icon: 'i-lucide-smartphone',
        to: '/services/app-development'
      },
      {
        label: 'Graphic Design',
        icon: 'i-lucide-palette',
        to: '/services/design'
      }
    ]
  },

  {
    label: 'Projects',
    icon: 'i-lucide-briefcase',
    children: [
      {
        label: 'All Projects',
        icon: 'i-lucide-layout-grid',
        to: '/projects'
      },
      {
        label: 'Web Projects',
        icon: 'i-lucide-globe',
        to: '/projects/web'
      },
      {
        label: 'AI & Machine Learning',
        icon: 'i-lucide-brain',
        to: '/projects/ai'
      },
      {
        label: 'Backend Systems',
        icon: 'i-lucide-database',
        to: '/projects/backend'
      },
      {
        label: 'Design Projects',
        icon: 'i-lucide-palette',
        to: '/projects/designs'
      },
      {
        label: 'Design (vs)  Delivered',
        icon: 'i-lucide-check-circle',
        to: '/projects/design-vs-delivered'
      }
    ]
  },

  {
    label: 'Designs',
    icon: 'i-lucide-layout',
    to: '/designs'
  },

  {
    label: 'Contact',
    icon: 'i-lucide-mail',
    to: '/contact-us'
  }
])
</script>

<template>
  <UHeader>
    <!-- LEFT: Logo + Menu -->
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-2">
        <AppLogo :size="2" />
      </NuxtLink>

      <TemplateMenu />
    </template>

    <!-- RIGHT: Desktop Menu -->
    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:flex"
      />

      <UButton
        label="Start Your Project"
        icon="i-lucide-arrow-right"
        color="primary"
        class="hidden lg:inline-flex ml-2"
        to="/contact-us"
      />

      <UColorModeButton />
    </template>

    <!-- BODY: Mobile / Dropdown Menu -->
    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <UButton
        class="mt-4"
        label="Start Your Project"
        icon="i-lucide-arrow-right"
        color="primary"
        block
        to="/contact-us"
      />
    </template>
  </UHeader>
</template>


