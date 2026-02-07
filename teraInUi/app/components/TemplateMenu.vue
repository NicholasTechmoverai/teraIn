<template>
  <UDropdownMenu v-slot="{ open }" :modal="false" :items="[
    { label: 'Reviews', to: '/reviews' },
    { label: 'Docs', to: '/docs' },
    { label: 'API Reference', to: '/api' },
    { label: 'Changelog', to: '/changelog' },
    { label: 'Report an Issue', to: '/report' },
    { label: 'Request a Feature', to: '/features' },
    { label: 'License', to: '/license' },
    { label: 'Privacy', to: '/privacy' },
    { label: 'AI Policy', to: '/ai-policy' }
  ]" 
  :content="{ align: 'start' }" :ui="{ content: 'min-w-fit' }" size="xs">
    <UButton label="Resources" variant="outline" trailing-icon="i-lucide-chevron-down" size="xs"
      class="-mb-[6px] font-semibold  truncate" :class="[open && 'bg-primary/15']" :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
      }" />
  </UDropdownMenu>
</template>
