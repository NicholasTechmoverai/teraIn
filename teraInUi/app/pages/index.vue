<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('content').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.seo?.title || page.value.title,
  ogTitle: page.value.seo?.title || page.value.title,
  description: page.value.seo?.description || page.value.description,
  ogDescription: page.value.seo?.description || page.value.description
})
</script>

<template>
  <div
    v-if="page"
    class="relative"
  >
    <div class="hidden lg:block">
      <UColorModeImage
        light="/images/light/line-1.svg"
        dark="/images/dark/line-1.svg"
        class="absolute pointer-events-none pb-10 left-0 top-0 object-cover h-[650px]"
      />
    </div>

    <UPageHero
      :description="page.description"
      :links="page.hero.links"
      :ui="{
        container: 'md:pt-18 lg:pt-20',
        title: 'max-w-3xl mx-auto'
      }"
    >
      <template #top>
        <HeroBackground />
      </template>

      <template #title>
        <MDC
          :value="page.title"
          unwrap="p"
        />
      </template>
    </UPageHero>

    <!-- Client Showcase Section -->
    <UPageSection
      v-if="page.client_showcase"
      :title="page.client_showcase.title"
      :description="page.client_showcase.description"
      :ui="{ container: 'py-8 md:py-12' }"
    >
      <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        <img
          v-for="(logo, index) in page.client_showcase.logos"
          :key="index"
          :src="logo"
          :alt="`Client logo ${index + 1}`"
          class="h-8 md:h-10 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
        />
      </div>
    </UPageSection>

    <UPageSection
      :description="page.section.description"
      :features="page.section.features"
      orientation="horizontal"
      :ui="{
        container: 'lg:px-0 2xl:px-20 mx-0 max-w-none md:mr-10',
        features: 'gap-0'
      }"
      reverse
    >
      <template #title>
        <MDC
          :value="page.section.title"
          class="sm:*:leading-11"
        />
      </template>
      <img
        :src="page.section.images.desktop"
        :alt="page.section.title"
        class="hidden lg:block 2xl:hidden left-0 w-full max-w-2xl"
      >
      <img
        :src="page.section.images.mobile"
        :alt="page.section.title"
        class="block lg:hidden 2xl:block 2xl:w-full 2xl:max-w-2xl"
      >
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="features"
      :description="page.features.description"
      :features="page.features.features"
      :ui="{
        title: 'text-left @container relative flex',
        description: 'text-left'
      }"
      class="relative overflow-hidden"
    >
      <div class="absolute rounded-full -left-10 top-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
      <div class="absolute rounded-full -right-10 -bottom-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
      <template #title>
        <MDC
          :value="page.features.title"
          class="*:leading-9"
        />
        <div class="hidden @min-[1020px]:block">
          <UColorModeImage
            light="/images/light/line-2.svg"
            dark="/images/dark/line-2.svg"
            class="absolute top-0 right-0 size-full transform scale-95 translate-x-[70%]"
          />
        </div>
      </template>
    </UPageSection>

    <!-- Tech Stack Section -->
    <UPageSection
      v-if="page.tech_stack"
      :title="page.tech_stack.title"
      :description="page.tech_stack.description"
      :ui="{ container: 'py-12 md:py-16' }"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-if="page.tech_stack.frontend">
          <h3 class="text-lg font-semibold mb-4">{{ page.tech_stack.frontend.title }}</h3>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="(tech, index) in page.tech_stack.frontend.items"
              :key="index"
              variant="outline"
              class="bg-white/50 dark:bg-gray-900/50"
            >
              {{ tech }}
            </UBadge>
          </div>
        </div>
        
        <div v-if="page.tech_stack.backend">
          <h3 class="text-lg font-semibold mb-4">{{ page.tech_stack.backend.title }}</h3>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="(tech, index) in page.tech_stack.backend.items"
              :key="index"
              variant="outline"
              class="bg-white/50 dark:bg-gray-900/50"
            >
              {{ tech }}
            </UBadge>
          </div>
        </div>
        
        <div v-if="page.tech_stack.mobile">
          <h3 class="text-lg font-semibold mb-4">{{ page.tech_stack.mobile.title }}</h3>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="(tech, index) in page.tech_stack.mobile.items"
              :key="index"
              variant="outline"
              class="bg-white/50 dark:bg-gray-900/50"
            >
              {{ tech }}
            </UBadge>
          </div>
        </div>
        
        <div v-if="page.tech_stack.cloud">
          <h3 class="text-lg font-semibold mb-4">{{ page.tech_stack.cloud.title }}</h3>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="(tech, index) in page.tech_stack.cloud.items"
              :key="index"
              variant="outline"
              class="bg-white/50 dark:bg-gray-900/50"
            >
              {{ tech }}
            </UBadge>
          </div>
        </div>
      </div>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="steps"
      :description="page.steps.description"
      class="relative overflow-hidden"
    >
      <template #headline>
        <UColorModeImage
          light="/images/light/line-3.svg"
          dark="/images/dark/line-3.svg"
          class="absolute -top-10 sm:top-0 right-1/2 h-24"
        />
      </template>
      <template #title>
        <MDC :value="page.steps.title" />
      </template>

      <template #features>
        <UPageCard
          v-for="(step, index) in page.steps.items"
          :key="index"
          class="group"
          :ui="{ container: 'p-4 sm:p-4', title: 'flex items-center gap-1' }"
        >
          <UColorModeImage
            v-if="step.image"
            :light="step.image?.light"
            :dark="step.image?.dark"
            :alt="step.title"
            class="size-full"
          />

          <div class="flex flex-col gap-2">
            <span class="text-lg font-semibold">
              {{ step.title }}
            </span>
            <span class="text-sm text-muted">
              {{ step.description }}
            </span>
            <div v-if="step.deliverables" class="mt-2">
              <h4 class="text-xs font-semibold text-muted mb-1">Deliverables:</h4>
              <ul class="text-xs text-muted space-y-1">
                <li v-for="(deliverable, i) in step.deliverables" :key="i">• {{ deliverable }}</li>
              </ul>
            </div>
            <div v-if="step.timeline" class="mt-2">
              <UBadge variant="soft" size="xs">{{ step.timeline }}</UBadge>
            </div>
          </div>
        </UPageCard>
      </template>
    </UPageSection>

    <!-- Case Studies Preview Section -->
    <UPageSection
      v-if="page.case_studies_preview"
      :title="page.case_studies_preview.title"
      :description="page.case_studies_preview.description"
      :ui="{ container: 'py-12 md:py-16' }"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="(study, index) in page.case_studies_preview.studies"
          :key="index"
          class="h-full hover:shadow-lg transition-shadow duration-300"
        >
          <template #header>
            <div class="space-y-2">
              <h3 class="font-semibold text-lg">{{ study.client }}</h3>
              <UBadge variant="outline" size="sm">{{ study.industry }}</UBadge>
            </div>
          </template>
          
          <div class="space-y-4">
            <div>
              <h4 class="text-sm font-semibold text-muted mb-1">Challenge</h4>
              <p class="text-sm">{{ study.challenge }}</p>
            </div>
            
            <div>
              <h4 class="text-sm font-semibold text-muted mb-1">Solution</h4>
              <p class="text-sm">{{ study.solution }}</p>
            </div>
            
            <div>
              <h4 class="text-sm font-semibold text-muted mb-1">Results</h4>
              <p class="text-sm font-medium">{{ study.results }}</p>
            </div>
          </div>
          
          <template #footer>
            <UButton
              :to="study.link"
              variant="ghost"
              size="sm"
              trailing-icon="i-lucide-arrow-right"
              class="w-full justify-center"
            >
              View Case Study
            </UButton>
          </template>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      id="pricing"
      class="mb-32 overflow-hidden"
      :title="page.pricing.title"
      :description="page.pricing.description"
      :ui="{ title: 'text-left @container relative', description: 'text-left' }"
    >
      <template #title>
        <MDC :value="page.pricing.title" />

        <div class="hidden @min-[1120px]:block">
          <UColorModeImage
            light="/images/light/line-4.svg"
            dark="/images/dark/line-4.svg"
            class="absolute top-0 right-0 size-full transform translate-x-[60%]"
          />
        </div>
      </template>

      <UPricingPlans scale>
        <UPricingPlan
          v-for="(plan, index) in page.pricing.plans"
          :key="index"
          :title="plan.title"
          :description="plan.description"
          :price="plan.price"
          :billing-period="plan.billing_period"
          :billing-cycle="plan.billing_cycle"
          :highlight="plan.highlight || plan.popular"
          :scale="plan.highlight || plan.popular"
          variant="soft"
          :features="plan.features"
          :button="plan.button"
        />
      </UPricingPlans>
    </UPageSection>

    <!-- FAQ Section -->
    <UPageSection
      v-if="page.faq"
      id="faq"
      :title="page.faq.title"
      :description="page.faq.description"
      :ui="{ container: 'py-12 md:py-16' }"
    >
      <div class="max-w-3xl mx-auto space-y-4">
        <UAccordion
          v-for="(item, index) in page.faq.items"
          :key="index"
          :items="[item]"
          size="lg"
          :ui="{
            item: {
              padding: 'py-4'
            }
          }"
        >
          <template #default="{ item, open }">
            <UButton
              color="gray"
              variant="ghost"
              class="w-full justify-start"
              :ui="{ rounded: 'rounded-lg' }"
            >
              <template #leading>
                <UIcon
                  name="i-lucide-help-circle"
                  class="w-5 h-5"
                />
              </template>
              <span class="text-left font-medium">{{ item.question }}</span>
              <template #trailing>
                <UIcon
                  :name="open ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
                  class="w-5 h-5 ms-auto"
                />
              </template>
            </UButton>
          </template>
          <template #item="{ item }">
            <p class="text-muted mt-2 pl-9">{{ item.answer }}</p>
          </template>
        </UAccordion>
      </div>
    </UPageSection>

    <!-- Team Highlight Section -->
    <UPageSection
      v-if="page.team_highlight"
      :title="page.team_highlight.title"
      :description="page.team_highlight.description"
      :ui="{ container: 'py-12 md:py-16' }"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UCard
          v-for="(member, index) in page.team_highlight.members"
          :key="index"
          class="text-center"
        >
          <template #header>
            <div class="flex flex-col items-center space-y-3">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <UIcon name="i-lucide-user" class="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 class="font-semibold text-lg">{{ member.name }}</h3>
                <p class="text-sm text-muted">{{ member.role }}</p>
              </div>
            </div>
          </template>
          
          <div class="space-y-3">
            <div>
              <h4 class="text-sm font-semibold text-muted">Expertise</h4>
              <p>{{ member.expertise }}</p>
            </div>
            <div>
              <h4 class="text-sm font-semibold text-muted">Experience</h4>
              <UBadge variant="soft">{{ member.experience }}</UBadge>
            </div>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      id="testimonials"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      :items="page.testimonials.items"
    >
      <template #headline>
        <UColorModeImage
          light="/images/light/line-5.svg"
          dark="/images/dark/line-5.svg"
          class="absolute -top-10 sm:top-0 right-1/2 h-24"
        />
      </template>
      <template #title>
        <MDC :value="page.testimonials.title" />
      </template>

      <UContainer>
        <UPageColumns class="xl:columns-3">
          <UPageCard
            v-for="(testimonial, index) in page.testimonials.items"
            :key="index"
            variant="subtle"
            :description="testimonial.quote"
            :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
          >
            <template #footer>
              <div class="flex items-center gap-3">
                <UAvatar
                  v-if="testimonial.user?.avatar?.src"
                  :src="testimonial.user.avatar.src"
                  :alt="testimonial.user.name"
                  size="lg"
                />
                <div>
                  <p class="font-semibold">{{ testimonial.user.name }}</p>
                  <p class="text-sm text-muted">{{ testimonial.user.description }}</p>
                  <div v-if="testimonial.user.company_logo" class="mt-2">
                    <img 
                      :src="testimonial.user.company_logo" 
                      :alt="testimonial.user.name + ' company logo'"
                      class="h-4"
                    />
                  </div>
                </div>
              </div>
            </template>
          </UPageCard>
        </UPageColumns>
      </UContainer>
    </UPageSection>

    <USeparator />

    <UPageCTA
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden @container"
    >
      <template #title>
        <MDC :value="page.cta.title" />

        <div class="@max-[1280px]:hidden">
          <UColorModeImage
            light="/images/light/line-6.svg"
            dark="/images/dark/line-6.svg"
            class="absolute left-10 -top-10 sm:top-0 h-full"
          />
          <UColorModeImage
            light="/images/light/line-7.svg"
            dark="/images/dark/line-7.svg"
            class="absolute right-0 bottom-0 h-full"
          />
        </div>
      </template>

      <!-- Contact Info in CTA -->
      <div v-if="page.cta?.contact_info" class="mt-6 space-y-2">
        <div class="flex items-center justify-center gap-4 text-sm text-muted">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-mail" class="w-4 h-4" />
            <a :href="`mailto:${page.cta.contact_info.email}`" class="hover:text-primary transition-colors">
              {{ page.cta.contact_info.email }}
            </a>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-phone" class="w-4 h-4" />
            <a :href="`tel:${page.cta.contact_info.phone}`" class="hover:text-primary transition-colors">
              {{ page.cta.contact_info.phone }}
            </a>
          </div>
        </div>
        <p v-if="page.cta.contact_info.response_time" class="text-xs text-center text-muted">
          {{ page.cta.contact_info.response_time }}
        </p>
      </div>

      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>