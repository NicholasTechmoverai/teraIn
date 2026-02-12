<template>
  <div class="p-4 sm:p-6  shadow-lg">
    <div class="flex flex-col lg:flex-row min-h-[60vh] rounded-2xl overflow-hidden">

      <!-- LEFT SIDE - Full width on mobile, 1/4 on desktop -->
      <div class="relative w-full lg:w-1/4 min-w-[280px] lg:min-w-[280px] h-[400px] lg:h-auto">
        <!-- Background image -->
        <img
          :src="bgimage"
          alt="Contact background"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- Contact info card - Centered on mobile, full width on desktop -->
        <UCard
          class="absolute left-4 right-4 top-1/2 -translate-y-1/2 
                 lg:left-4 lg:right-4 
                 backdrop-blur-md bg-white/90 dark:bg-gray-900/80
                 mx-auto max-w-sm lg:max-w-none"
        >
          <div class="space-y-4 sm:space-y-6 p-2 sm:p-0">

            <div>
              <p class="flex items-center gap-2 sm:gap-3 font-semibold text-sm sm:text-base">
                <UIcon name="i-heroicons-map-pin" class="w-4 h-4 sm:w-5 sm:h-5" />
                Location
              </p>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                {{ siteinfo.contact.address }}
              </p>
            </div>

            <div>
              <p class="flex items-center gap-2 sm:gap-3 font-semibold text-sm sm:text-base">
                <UIcon name="i-heroicons-phone" class="w-4 h-4 sm:w-5 sm:h-5" />
                Reach us
              </p>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 break-words">
                {{ siteinfo.contact.email }}
              </p>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                {{ siteinfo.contact.phone }}
              </p>
            </div>

            <div>
              <p class="flex items-center gap-2 sm:gap-3 font-semibold text-sm sm:text-base">
                <UIcon name="i-heroicons-clock" class="w-4 h-4 sm:w-5 sm:h-5" />
                Opening Hours
              </p>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                {{ siteinfo.contact.activeHours }}
              </p>
            </div>

          </div>
        </UCard>
      </div>

      <!-- RIGHT SIDE - Full width on mobile, 3/4 on desktop -->
      <div class="w-full lg:w-3/4 p-6 sm:p-8 lg:p-10 ">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
          Send us a message
        </h2>

        <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-6">
          <div>
            <UFormGroup label="Full name" required>
              <UInput
                v-model="form.name"
                placeholder="John Doe"
                icon="i-heroicons-user"
                :size="isMobile ? 'md' : 'lg'"
                class="w-full"
              />
            </UFormGroup>
          </div>

          <div>
            <UFormGroup label="Email address" required>
              <UInput
                v-model="form.email"
                placeholder="john@example.com"
                icon="i-heroicons-envelope"
                :size="isMobile ? 'md' : 'lg'"
                type="email"
                class="w-full"
              />
            </UFormGroup>
          </div>

          <div>
            <UFormGroup label="Subject">
              <UInput
                v-model="form.subject"
                placeholder="How can we help?"
                icon="i-heroicons-chat-bubble-left-ellipsis"
                :size="isMobile ? 'md' : 'lg'"
                class="w-full"
              />
            </UFormGroup>
          </div>

          <div>
            <UFormGroup label="Message" required>
              <UTextarea
                v-model="form.message"
                placeholder="Tell us more about your inquiry..."
                :rows="isMobile ? 4 : 5"
                :size="isMobile ? 'md' : 'lg'"
                class="w-full"
              />
            </UFormGroup>
          </div>

          <div class="pt-2 sm:pt-4">
            <UButton
              type="submit"
              color="primary"
              :size="isMobile ? 'md' : 'lg'"
              block
              :loading="isSubmitting"
            >
              <UIcon name="i-heroicons-paper-airplane" class="mr-2" />
              Send Message
            </UButton>
          </div>

          <p class="text-xs text-gray-500 dark:text-gray-400 text-center mt-4 sm:mt-6">
            By submitting this form, you agree to our 
            <NuxtLink to="/privacy" class="text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</NuxtLink> 
            and 
            <NuxtLink to="/terms" class="text-primary-600 dark:text-primary-400 hover:underline">Terms of Service</NuxtLink>.
          </p>
        </form>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import bgimage from '~/assets/images/pawel-czerwinski--0xCCPIbl3M-unsplash.jpg'

const siteinfo = useAppConfig()

// Mobile detection
const isMobile = ref(false)

const checkMobile = () => {
  if (process.client) {
    isMobile.value = window.innerWidth < 640
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    useToast().add({
      title: 'Message sent!',
      description: 'We\'ll get back to you within 24 hours.',
      icon: 'i-heroicons-check-circle',
      color: 'green'
    })
    
  } catch (error) {
    useToast().add({
      title: 'Something went wrong',
      description: 'Please try again later.',
      icon: 'i-heroicons-exclamation-circle',
      color: 'red'
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Mobile first - Stack vertically */
@media (max-width: 1023px) {
  .min-h-\[60vh\] {
    min-height: auto;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .p-4 {
    padding: 0.75rem;
  }
  
  .p-6 {
    padding: 1rem;
  }
  
  .break-words {
    word-break: break-word;
  }
}

/* Tablet adjustments */
@media (min-width: 640px) and (max-width: 1023px) {
  .left-4.right-4 {
    left: 10%;
    right: 10%;
  }
}

/* Touch-friendly tap targets */
@media (max-width: 768px) {
  button, 
  a,
  .u-button,
  [role="button"] {
    min-height: 44px;
    min-width: 44px;
  }
  
  input, 
  textarea,
  select {
    font-size: 16px !important;
  }
}

/* Landscape mode on mobile */
@media (max-width: 896px) and (orientation: landscape) {
  .h-\[400px\] {
    height: 300px;
  }
}

/* Dark mode enhancements */
@media (prefers-color-scheme: dark) {
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
  }
}

/* Print styles */
@media print {
  .bg-black\/40 {
    background: none;
  }
  
  form,
  .u-button {
    display: none;
  }
  
  .w-1\/4,
  .w-3\/4 {
    width: 100%;
  }
}
</style>