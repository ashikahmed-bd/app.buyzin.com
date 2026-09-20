<script setup>
import Default from '@/layouts/Default.vue'
import { ref, computed } from 'vue'

const steps = [
  {
    number: 1,
    title: 'Product Information',
    description: 'Basic details',
  },
  {
    number: 2,
    title: 'Pricing',
    description: 'Set price & MOQ',
  },
  {
    number: 3,
    title: 'Variants',
    description: 'Add product variants',
  },
  {
    number: 4,
    title: 'Media',
    description: 'Images & videos',
  },
  {
    number: 5,
    title: 'SEO',
    description: 'Images & videos',
  },
]

const coverImage = ref('https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600')

const galleryImages = ref([
  'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400',
  'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400',
  'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400',
  'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400',
])

const videos = ref([
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    title: 'Product Overview',
    type: 'YouTube',
  },
  {
    id: 2,
    url: 'https://vimeo.com/123456789',
    title: 'Product Demo',
    type: 'Vimeo',
  },
])

const activePreview = ref(0)

const tips = [
  'Use high-quality, clear images',
  'Set an attractive cover image',
  'Show product from multiple angles',
  'Include close-up shots of important details',
  'You can add product videos (YouTube or Vimeo)',
  'Keep file size under 5MB each',
]

const galleryCount = computed(() => galleryImages.value.length)

const removeGalleryImage = (index) => {
  galleryImages.value.splice(index, 1)

  if (activePreview.value >= galleryImages.value.length) {
    activePreview.value = Math.max(0, galleryImages.value.length - 1)
  }
}

const removeVideo = (id) => {
  videos.value = videos.value.filter((video) => video.id !== id)
}

const addVideo = () => {
  videos.value.push({
    id: Date.now(),
    url: '',
    title: '',
    type: 'YouTube',
  })
}
</script>

<template>
  <Default>
    <main class="space-y-4">
      <header class="flex flex-wrap items-start justify-between gap-4">
        <div class="block">
          <h1 class="text-lg font-semibold text-title">Create Product</h1>
          <p class="mt-0.5 text-sm text-body">
            Add your product details to list it on the marketplace
          </p>
        </div>

        <div class="flex items-center gap-2">
          <button type="button" class="base__button">
            <UIcon name="i-lucide-save" class="size-4" />
            <span>Save as Draft</span>
          </button>
        </div>
      </header>

      <StepProgress :current="4" />

      <div class="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_290px]">
        <div class="min-w-0 space-y-4">
          <section class="rounded-xl border border-slate-200 bg-white">
            <div class="flex items-start gap-3 border-b border-slate-100 px-4 py-3.5 sm:px-5">
              <div
                class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"
              >
                <UIcon name="i-lucide-image" class="size-4" />
              </div>

              <div>
                <h2 class="text-sm font-semibold text-slate-900">
                  Cover Image
                  <span class="text-red-500">*</span>
                </h2>

                <p class="mt-0.5 text-sm text-slate-500">
                  This will be the main image of your product. It will be shown in search results
                  and product pages.
                </p>
              </div>
            </div>

            <div class="p-4">
              <div class="flex flex-col gap-3 sm:flex-row">
                <div
                  class="flex flex-1 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50/40 px-4 py-4 text-center transition hover:border-indigo-400 hover:bg-indigo-50/30"
                >
                  <UIcon name="i-lucide-image-plus" class="size-7 text-indigo-500" />
                  <p class="mt-2 text-sm font-medium text-slate-700">
                    Drag & drop or
                    <span class="text-indigo-600"> click to upload </span>
                  </p>

                  <p class="mt-1 text-sm text-slate-400">JPG, PNG, WebP (Max 5MB)</p>
                  <p class="text-sm text-slate-400">Recommended size: 1000 × 1000 px</p>

                  <button
                    type="button"
                    class="mt-2 inline-flex h-8 items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <UIcon name="i-lucide-upload" class="size-3.5" />

                    Choose File
                  </button>
                </div>

                <div
                  class="relative w-full shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 sm:max-w-2xs"
                >
                  <img :src="coverImage" alt="Cover image" class="w-full object-cover" />
                  <button
                    type="button"
                    class="absolute bottom-1.5 right-1.5 flex size-7 items-center justify-center rounded-md border border-slate-200 bg-white/95 text-slate-600 hover:bg-red-50 hover:text-red-500"
                  >
                    <UIcon name="i-lucide-trash-2" class="size-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section class="rounded-xl border border-slate-200 bg-white">
            <div
              class="flex flex-col gap-3 border-b border-slate-100 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5"
            >
              <div class="flex items-start gap-3">
                <div
                  class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"
                >
                  <UIcon name="i-lucide-images" class="size-4" />
                </div>

                <div class="max-w-sm">
                  <h2 class="text-sm font-semibold text-title">Gallery Images</h2>
                  <p class="mt-0.5 text-sm text-body">
                    Add more images to showcase your product. You can upload multiple images (up to
                    10).
                  </p>
                </div>
              </div>

              <span
                class="inline-flex h-8 w-fit items-center rounded-md bg-slate-100 px-2.5 text-sm font-medium text-slate-600"
              >
                {{ galleryCount }} / 10
              </span>
            </div>

            <div class="p-4">
              <div class="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-6">
                <div
                  v-for="(image, index) in galleryImages"
                  :key="image"
                  class="group relative aspect-square overflow-hidden rounded-lg border border-slate-200 bg-slate-100"
                >
                  <img
                    :src="image"
                    alt="Gallery image"
                    class="size-full object-cover transition group-hover:scale-105"
                  />
                </div>

                <button
                  v-if="galleryCount < 10"
                  type="button"
                  class="flex aspect-square flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50/40 text-slate-500 transition hover:border-indigo-400 hover:bg-indigo-50/30 hover:text-indigo-600"
                >
                  <div
                    class="flex size-8 items-center justify-center rounded-full border border-slate-200 bg-white"
                  >
                    <UIcon name="i-lucide-plus" class="size-4" />
                  </div>
                  <span class="mt-2 text-sm font-medium"> Add More Images </span>
                </button>
              </div>
            </div>
          </section>

          <section class="rounded-xl border border-slate-200 bg-white">
            <div
              class="flex flex-col gap-3 border-b border-slate-100 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5"
            >
              <div class="flex items-start gap-3">
                <div
                  class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"
                >
                  <UIcon name="i-lucide-circle-play" class="size-4" />
                </div>

                <div>
                  <h2 class="text-sm font-semibold text-slate-900">Product Videos</h2>

                  <p class="mt-0.5 text-sm text-slate-500">
                    Add product video links from YouTube or Vimeo.
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-2.5 p-4">
              <div class="relative">
                <UIcon
                  name="i-lucide-link"
                  class="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  class="w-full rounded-md border border-slate-200 bg-white pl-8 pr-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
          </section>
        </div>

        <aside class="space-y-4">
          <section class="rounded-xl border border-slate-200 bg-white p-4">
            <div class="mb-4 flex items-center gap-2">
              <div
                class="flex size-8 items-center justify-center rounded-lg bg-amber-50 text-amber-500"
              >
                <UIcon name="i-lucide-lightbulb" class="size-4" />
              </div>

              <h2 class="text-sm font-semibold text-slate-900">Tips for Media</h2>
            </div>

            <div class="space-y-3">
              <div v-for="tip in tips" :key="tip" class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-circle-check"
                  class="mt-0.5 size-4 shrink-0 text-emerald-500"
                />

                <p class="text-sm leading-5 text-slate-600">
                  {{ tip }}
                </p>
              </div>
            </div>
          </section>

          <section class="rounded-xl border border-slate-200 bg-white p-4">
            <div class="mb-3 flex items-center gap-2">
              <div
                class="flex size-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"
              >
                <UIcon name="i-lucide-eye" class="size-4" />
              </div>

              <h2 class="text-sm font-semibold text-slate-900">Media Preview</h2>
            </div>

            <div class="relative aspect-square overflow-hidden rounded-lg bg-slate-100">
              <img
                v-if="galleryImages[activePreview]"
                :src="galleryImages[activePreview]"
                alt="Product preview"
                class="size-full object-cover"
              />

              <button
                type="button"
                class="absolute left-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                @click="
                  activePreview = activePreview === 0 ? galleryImages.length - 1 : activePreview - 1
                "
              >
                <UIcon name="i-lucide-chevron-left" class="size-4" />
              </button>

              <button
                type="button"
                class="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                @click="
                  activePreview = activePreview === galleryImages.length - 1 ? 0 : activePreview + 1
                "
              >
                <UIcon name="i-lucide-chevron-right" class="size-4" />
              </button>
            </div>

            <div class="mt-2.5 flex gap-1.5 overflow-x-auto pb-1">
              <button
                v-for="(image, index) in galleryImages"
                :key="image"
                type="button"
                class="size-11 shrink-0 overflow-hidden rounded-md border-2 bg-slate-100"
                :class="activePreview === index ? 'border-indigo-500' : 'border-transparent'"
                @click="activePreview = index"
              >
                <img :src="image" alt="" class="size-full object-cover" />
              </button>
            </div>
          </section>
        </aside>
      </div>
      <div class="flex items-center justify-between gap-3">
        <RouterLink
          :to="{
            name: 'products-variants',
            params: { product: '01m2wc2mth4m8j14fpp1jtdtpz' },
          }"
          class="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <UIcon name="i-lucide-arrow-left" class="size-4" />

          Previous
        </RouterLink>

        <RouterLink
          :to="{
            name: 'products-seo',
            params: { product: '01m2wc2mth4m8j14fpp1jtdtpz' },
          }"
          class="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Save & Next

          <UIcon name="i-lucide-arrow-right" class="size-4" />
        </RouterLink>
      </div>
    </main>
  </Default>
</template>
