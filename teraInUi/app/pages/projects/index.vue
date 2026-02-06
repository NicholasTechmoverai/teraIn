<template>
    <section class="relative py-8">
        <div class="mx-auto max-w-7xl px-4 space-y-6">
            <header class="mb-8 space-y-4">
                <!-- Page Title -->
                <h1 class="text-3xl font-semibold tracking-tight">
                    Projects
                </h1>

                <!-- Page Description -->
                <p class="max-w-xl text-md text-muted">
                    A curated collection of projects we’ve designed, built, and and shipped—spanning
                    AI, web, mobile, and backend engineering.
                </p>
            </header>

            <div class="flex items-center gap-2 pt-2 ">
                <p class="text-md">Our <UBadge size="md" color="primary" variant="outline"> Top </UBadge> Projects</p>
                
            </div>
            <UMarquee pause-on-hover class="py-2" :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }">
                <div v-for="prj in projects" :key="prj.id" class="
                    group relative h-40 w-60 overflow-hidden rounded-xl
                    bg-background border border-primary/20
                    transform-gpu
                    transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
                    hover:-translate-y-2.5
                    hover:shadow-2xl hover:shadow-primary/25
                    hover:border-primary/50  hover:scale-[1.02]">
                    <img :src="prj.image" :alt="prj.name" class="h-full w-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div class="absolute bottom-0 z-10 w-full p-3 space-y-2">
                        <p class="text-sm font-semibold text-white truncate">
                            {{ prj.name }}
                        </p>

                        <div class="flex items-center justify-between">
                            <UBadge size="xs" variant="soft" class="text-white"
                                :style="{ backgroundColor: getCategoryColor(prj.category) }">
                                {{ prj.category }}
                            </UBadge>
                            <span class="text-xs text-white/80">
                                ⭐ {{ prj.personalRating }}
                            </span>
                        </div>

                        <div class="flex gap-2 pt-1">
                            <UButton v-if="prj.liveUrl" size="xs" color="primary" variant="subtle" :to="prj.liveUrl"
                                target="_blank" icon="i-heroicons-link" class="flex-1">
                                Live
                            </UButton>
                            <UButton size="xs" color="primary" variant="outline" :to="prj.codeUrl" target="_blank"
                                icon="i-heroicons-code-bracket" class="flex-1">
                                Code
                            </UButton>
                        </div>
                    </div>
                </div>
            </UMarquee>
            <div class="flex gap-1 sticky! top-20! z-100">
                <UButton v-for="cat in categories" :key="cat.slug"
                    :color="activeCategory === cat.slug ? 'primary' : 'neutral'" variant="soft" size="xs"
                    @click="goToCategory(cat.slug)">
                    {{ cat.label }}
                </UButton>
            </div>

            <div>
                <ProjectsListCard />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Project } from '~/types/project'

const categories = [
    { label: 'All', slug: 'all' },
    { label: 'AI', slug: 'ai' },
    { label: 'Web', slug: 'web' },
    { label: 'App', slug: 'app' },
    { label: 'Backend', slug: 'backend' }
]

const route = useRoute()
const router = useRouter()

const activeCategory = computed(() => (route.params.category as string) || 'all')

const goToCategory = (slug: string) => {
    router.push(slug === 'all' ? '/projects' : `/projects/${slug}`)
}

const projects: Project[] = [
    {
        id: 1,
        name: "AI Chat Assistant",
        category: "AI",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        liveUrl: "https://chat-demo.example.com",
        codeUrl: "https://github.com/user/ai-chat-assistant",
        personalRating: 4.5
    },
    {
        id: 2,
        name: "E-commerce Backend",
        category: "Backend",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        liveUrl: null,
        codeUrl: "https://github.com/user/ecommerce-backend",
        personalRating: 4.2
    },
    {
        id: 3,
        name: "Analytics Dashboard",
        category: "Web",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        liveUrl: "https://dashboard.example.com",
        codeUrl: "https://github.com/user/analytics-dashboard",
        personalRating: 4.7
    },
    {
        id: 4,
        name: "Image Recognition API",
        category: "AI",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
        liveUrl: "https://api.image-recognition.example.com",
        codeUrl: "https://github.com/user/image-recognition-api",
        personalRating: 4.3
    },
    {
        id: 5,
        name: "Microservices System",
        category: "Backend",
        image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=800&h=600&fit=crop",
        liveUrl: null,
        codeUrl: "https://github.com/user/microservices-arch",
        personalRating: 4.8
    },
    {
        id: 6,
        name: "Social Platform",
        category: "Web",
        image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=600&fit=crop",
        liveUrl: "https://social-app.example.com",
        codeUrl: "https://github.com/user/social-platform",
        personalRating: 4.0
    }
]

const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
        'AI': 'purple',
        'Web': 'blue',
        'Backend': 'green',
        'App': 'orange'
    }
    return colors[category] || 'gray'
}
</script>