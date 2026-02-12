<template>
  <div class="p-4 md:p-6 rounded-2xl shadow-2xl">
    <div class="relative min-h-[70vh] md:min-h-[65vh] rounded-2xl overflow-hidden">

      <!-- Full background image with dark overlay -->
      <img :src="bgimage" alt="Contact background" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div class="absolute inset-0 bg-black/70 md:bg-black/60"></div>

      <!-- Main container - Stack on mobile, hexagons on desktop -->
      <div class="relative h-full flex flex-col md:flex-row items-stretch min-h-full">

        <!-- LEFT HEXAGON - Contact Info -->
        <div class="relative w-full md:w-2/5 md:-skew-x-12 md:origin-left overflow-hidden">
          <div class="absolute inset-0 bg-black/40 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none"></div>
          <div class="relative h-full p-6 sm:p-8 md:p-12 md:skew-x-12 flex flex-col justify-center text-white">

            <!-- Mobile/Tablet Header -->
            <div class="md:hidden mb-8 text-center">
              <span class="text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">Get in touch</span>
              <h2 class="text-3xl sm:text-4xl font-bold text-white mt-2">Send us a Message</h2>
              <p class="text-white/80 mt-2 max-w-md mx-auto">We'd love to hear what you're working on.</p>
            </div>

            <div class="space-y-6 sm:space-y-8">
              <div class="flex items-center gap-4 sm:gap-5">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 flex-shrink-0">
                  <UIcon name="i-heroicons-map-pin" class="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div class="min-w-0">
                  <p class="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/60">Location</p>
                  <p class="font-semibold text-xs sm:text-sm truncate">{{ siteinfo.contact.address }}</p>
                </div>
              </div>

              <div class="flex items-center gap-4 sm:gap-5">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 flex-shrink-0">
                  <UIcon name="i-heroicons-phone" class="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div class="min-w-0">
                  <p class="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/60">Contact</p>
                  <p class="font-semibold text-xs sm:text-sm truncate">{{ siteinfo.contact.phone }}</p>
                  <p class="text-white/80 text-xs sm:text-sm truncate">{{ siteinfo.contact.email }}</p>
                </div>
              </div>

              <div class="flex items-center gap-4 sm:gap-5">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 flex-shrink-0">
                  <UIcon name="i-heroicons-clock" class="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div class="min-w-0">
                  <p class="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/60">Hours</p>
                  <p class="font-semibold text-xs sm:text-sm truncate">{{ siteinfo.contact.activeHours }}</p>
                </div>
              </div>
            </div>

            <div class="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
              <p class="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/60 mb-3 sm:mb-4">Connect</p>
              <div class="flex gap-3 sm:gap-4">
                <UButton v-for="social in socials" :key="social.name" variant="ghost" color="white" square
                  :icon="social.icon" :aria-label="`Visit our ${social.name} page`"
                  class="hover:bg-white/20 hover:scale-110 transition-all w-9 h-9 sm:w-10 sm:h-10 rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT HEXAGON - Form -->
        <div class="relative w-full md:w-3/5 md:-skew-x-12 md:origin-right md:-mr-12 overflow-hidden">
          <div
            class="absolute inset-0  dark:bg-gray-900/30 backdrop-blur">
          </div>
          <div class="relative h-full p-6 sm:p-8 md:p-12 md:skew-x-12 flex items-center">
            <div class="w-full max-w-xl mx-auto">

              <!-- Desktop Header (hidden on mobile) -->
              <div class="hidden md:block mb-8">
                <span class="text-xs uppercase tracking-[0.2em] text-primary-500 font-semibold">Get
                  in touch</span>
                <h2 class="text-3xl lg:text-4xl font-bold text-white mt-2">Send us a message</h2>
                <p class="text-gray-600 dark:text-gray-400 mt-2">We'd love to hear what you're working on.</p>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <UInput v-model="form.name" placeholder="Your name" icon="i-heroicons-user" size="lg" class="w-full"
                    :ui="{ icon: { trailing: { wrapper: 'h-full w-8 flex items-center justify-end' } } }" />
                  <UInput v-model="form.email" placeholder="Email" icon="i-heroicons-envelope" size="lg" type="email"
                    class="w-full"
                    :ui="{ icon: { trailing: { wrapper: 'h-full w-8 flex items-center justify-end' } } }" />
                </div>

                <UInput v-model="form.subject" placeholder="Subject" icon="i-heroicons-chat-bubble-left-ellipsis"
                  size="lg" class="w-full"
                  :ui="{ icon: { trailing: { wrapper: 'h-full w-8 flex items-center justify-end' } } }" />

                <UTextarea v-model="form.message" placeholder="Tell us about your project..." :rows="4" size="lg"
                  class="w-full" />

                <UButton type="submit" color="primary" variant="outline" size="lg" class="w-full h-11 sm:h-12"
                  :loading="isSubmitting">
                  <UIcon name="i-heroicons-paper-airplane" class="mr-2 flex-shrink-0" />
                  <span class="truncate">Send message</span>
                </UButton>

                <p class="text-[10px] sm:text-xs text-center text-gray-500 dark:text-gray-400">
                  By submitting you agree to our
                  <NuxtLink to="/privacy"
                    class="text-primary-500 font-medium hover:underline whitespace-nowrap">
                    Privacy Policy
                  </NuxtLink>
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import bgimage from '~/assets/images/pawel-czerwinski--0xCCPIbl3M-unsplash.jpg'

const siteinfo = useAppConfig()

const socials = [
  { name: 'Twitter', icon: 'i-heroicons-x-mark' },
  { name: 'LinkedIn', icon: 'i-heroicons-linkedin' },
  { name: 'Instagram', icon: 'i-heroicons-instagram' },
  { name: 'GitHub', icon: 'i-heroicons-github' }
]

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))

  // Reset form
  Object.assign(form, { name: '', email: '', subject: '', message: '' })
  isSubmitting.value = false

  const toast = useToast()
  toast.add({
    title: 'Message sent!',
    description: 'We\'ll respond within 24 hours.',
    icon: 'i-heroicons-check-circle',
    color: 'green',
    timeout: 5000
  })
}

// Form validation helper
const isFormValid = computed(() => {
  return form.name && form.email && form.subject && form.message
})
</script>

<style scoped>
/* Desktop hexagon transforms */
@media (min-width: 768px) {
  .md\:-skew-x-12 {
    transform: skewX(-12deg);
  }

  .md\:skew-x-12 {
    transform: skewX(12deg);
  }

  .md\:origin-left {
    transform-origin: 0 50%;
  }

  .md\:origin-right {
    transform-origin: 100% 50%;
  }

  .md\:-mr-12 {
    margin-right: -3rem;
  }
}

/* Better touch targets for mobile */
@media (max-width: 767px) {

  button,
  [role="button"],
  input,
  textarea {
    min-height: 44px;
  }

  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

/* Smooth transitions */
.-skew-x-12,
.skew-x-12,
button,
a {
  transition: all 0.2s ease;
}
</style>