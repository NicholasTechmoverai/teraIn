<template>
  <div class="py-2">
    <div class="max-w-7xl mx-auto">
      
      <!-- Main Contact Card -->
      <div class="overflow-hidden border-0 shadow-2xl">
        <div class="flex flex-col lg:flex-row min-h-[600px]">
          
          <!-- Left Section with Background Image and Contact Info -->
          <div class="relative lg:w-1/3 bg-gradient-to-br from-primary-600 to-primary-800">
            <div class="absolute inset-0">
              <img 
                :src="bgimage" 
                alt="Office background" 
                class="w-full h-full object-cover opacity-20"
              >
            </div>
            
            <div class="relative z-10 p-8 px-2 flex flex-col h-full text-white">
              <h2 class="text-2xl font-semibold mb-8 m-auto ">Contact Information</h2>
              
              <div class="space-y-8 flex-1 m-auto w-full">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <UIcon name="i-heroicons-map-pin" size="lg" class="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-white/80 mb-1">Location</h3>
                    <p class="text-white font-medium">{{ siteinfo.contact.address }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <UIcon name="i-heroicons-phone" size="lg" class="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-white/80 mb-1">Reach us</h3>
                    <p class="text-white font-medium">{{ siteinfo.contact.email }}</p>
                    <p class="text-white font-medium">{{ siteinfo.contact.phone }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <UIcon name="i-heroicons-clock" size="lg" class="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-white/80 mb-1">Opening Hours</h3>
                    <p class="text-white font-medium">{{ siteinfo.contact.activeHours }}</p>
                  </div>
                </div>
              </div>

              <div class="mt-8 pt-8 border-t border-white/20">
                <p class="text-sm text-white/80 mb-4">Follow us</p>
                <div class="flex space-x-4">
                  <UButton variant="ghost" color="white" square class="hover:bg-white/10">
                    <UIcon name="i-heroicons-twitter" size="lg" />
                  </UButton>
                  <UButton variant="ghost" color="white" square class="hover:bg-white/10">
                    <UIcon name="i-heroicons-linkedin" size="lg" />
                  </UButton>
                  <UButton variant="ghost" color="white" square class="hover:bg-white/10">
                    <UIcon name="i-heroicons-facebook" size="lg" />
                  </UButton>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Section - Contact Form -->
          <div class="lg:w-2/3 p-8">
            <div class="max-w-2xl mx-auto">
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Send us a Message</h2>
              <p class="text-gray-600 dark:text-gray-400 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <UFormGroup label="Full name" required>
                    <UInput
                      v-model="form.name"
                      placeholder="John Doe"
                      icon="i-heroicons-user"
                      size="lg"
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
                      size="lg"
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
                      size="lg"
                      class="w-full"
                    />
                  </UFormGroup>
                </div>

                <div>
                  <UFormGroup label="Message" required>
                    <UTextarea
                      v-model="form.message"
                      placeholder="Tell us more about your inquiry..."
                      :rows="5"
                      size="lg"
                      class="w-full"
                    />
                  </UFormGroup>
                </div>

                <div class="pt-4">
                  <UButton
                    type="submit"
                    color="primary"
                    size="lg"
                    block
                    :loading="isSubmitting"
                  >
                    <UIcon name="i-heroicons-paper-airplane" class="mr-2" />
                    Send Message
                  </UButton>
                </div>

                <p class="text-xs text-gray-500 dark:text-gray-400 text-center mt-6">
                  By submitting this form, you agree to our 
                  <NuxtLink to="/privacy" class="text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</NuxtLink> 
                  and 
                  <NuxtLink to="/terms" class="text-primary-600 dark:text-primary-400 hover:underline">Terms of Service</NuxtLink>.
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button, a {
  transition: all 0.2s ease;
}

</style>