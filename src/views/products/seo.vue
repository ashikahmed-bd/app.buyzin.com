<script setup>
import Default from '@/layouts/Default.vue'
import { computed, ref } from 'vue'

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
    description: 'Search engine optimization',
  },
]

const seoTitle = ref("Men's Cotton T-Shirt | Comfortable & Stylish | Bulk Wholesale")

const metaDescription = ref(
  "Buy high-quality men's cotton t-shirts at wholesale price. Comfortable, durable and stylish. Available in multiple sizes and colors. Perfect for bulk orders and B2B buyers.",
)

const slug = ref('mens-cotton-t-shirt')

const canonicalUrl = ref('https://buyzin.com/product/mens-cotton-t-shirt')

const robotsIndex = ref('index')

const enableSearchEngines = ref(true)
const enableSiteSearch = ref(true)

const keywords = ref(['mens t shirt', 'cotton t shirt', 'wholesale t shirt', 'bulk clothing'])

const keywordInput = ref('')

const maxTitleLength = 60
const maxMetaLength = 160

const titleLength = computed(() => seoTitle.value.length)
const metaLength = computed(() => metaDescription.value.length)
const slugLength = computed(() => slug.value.length)

const addKeyword = () => {
  const keyword = keywordInput.value.trim()

  if (!keyword) return

  if (!keywords.value.includes(keyword)) {
    keywords.value.push(keyword)
  }

  keywordInput.value = ''
}

const removeKeyword = (index) => {
  keywords.value.splice(index, 1)
}

const generateSlug = () => {
  slug.value = seoTitle.value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
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
            Save Change
          </button>
        </div>
      </header>

      <StepProgress :current="5" />

      <div class="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_290px]">
        <div class="min-w-0">
          <section class="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div class="flex items-start gap-3 border-b border-slate-100 px-4 py-4 sm:px-5">
              <div
                class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"
              >
                <UIcon name="i-lucide-search" class="size-4" />
              </div>

              <div>
                <h2 class="text-sm font-semibold text-slate-900">SEO Information</h2>
                <p class="mt-0.5 text-sm text-slate-500">
                  Optimize your product for search engines to get more visibility.
                </p>
              </div>
            </div>

            <div class="space-y-5 p-4">
              <div>
                <label class="mb-1.5 block text-sm font-medium text-title">
                  SEO Title
                  <span class="text-red-500">*</span>
                </label>

                <div class="relative">
                  <input
                    v-model="seoTitle"
                    type="text"
                    :maxlength="maxTitleLength"
                    class="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 pr-14 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />

                  <span
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
                    :class="titleLength >= maxTitleLength ? 'text-red-500' : 'text-slate-400'"
                  >
                    {{ titleLength }}/{{ maxTitleLength }}
                  </span>
                </div>

                <p class="mt-1.5 text-sm text-slate-400">
                  Keep it under 70 characters. Include primary keyword, brand or key feature.
                </p>
              </div>

              <!-- ================================= -->
              <!-- META DESCRIPTION -->
              <!-- ================================= -->
              <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">
                  Meta Description
                  <span class="text-red-500">*</span>
                </label>

                <div class="relative">
                  <textarea
                    v-model="metaDescription"
                    :maxlength="maxMetaLength"
                    rows="3"
                    class="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 pr-16 text-sm leading-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />

                  <span
                    class="absolute bottom-2 right-3 text-sm"
                    :class="metaLength >= maxMetaLength ? 'text-red-500' : 'text-slate-400'"
                  >
                    {{ metaLength }}/{{ maxMetaLength }}
                  </span>
                </div>

                <p class="mt-1.5 text-sm text-slate-400">
                  Write a concise and compelling description (120–160 characters).
                </p>
              </div>

              <!-- ================================= -->
              <!-- FOCUS KEYWORDS -->
              <!-- ================================= -->
              <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">
                  Focus Keywords
                  <span class="text-red-500">*</span>
                </label>

                <div
                  class="flex min-h-10 flex-wrap items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 py-1.5 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500"
                >
                  <!-- Keyword -->
                  <span
                    v-for="(keyword, index) in keywords"
                    :key="keyword"
                    class="inline-flex h-7 items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2 text-sm font-medium text-slate-700"
                  >
                    {{ keyword }}

                    <button
                      type="button"
                      class="flex size-4 items-center justify-center text-slate-400 hover:text-slate-700"
                      @click="removeKeyword(index)"
                    >
                      <UIcon name="i-lucide-x" class="size-3" />
                    </button>
                  </span>

                  <!-- Input -->
                  <input
                    v-model="keywordInput"
                    type="text"
                    placeholder="Add keyword and press enter"
                    class="h-7 flex-1 bg-transparent px-1 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    @keydown.enter.prevent="addKeyword"
                  />
                </div>

                <p class="mt-1.5 text-sm text-slate-400">
                  Add relevant keywords (3–10) to help buyers find your product.
                </p>
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">
                  Canonical URL
                  <span class="text-slate-400"> (Optional) </span>
                </label>

                <input
                  v-model="canonicalUrl"
                  type="url"
                  placeholder="https://buyzin.com/product/mens-cotton-t-shirt"
                  class="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />

                <p class="mt-1.5 text-sm text-slate-400">
                  Use canonical URL if this product has a duplicate page.
                </p>
              </div>
            </div>
          </section>
        </div>

        <aside class="space-y-4">
          <section class="rounded-xl border border-slate-200 bg-white p-4">
            <div class="mb-4 flex items-center gap-2">
              <div class="flex size-8 items-center justify-center rounded-lg bg-slate-50">
                <span class="text-sm font-bold text-blue-500"> G </span>
              </div>

              <h2 class="text-sm font-semibold text-slate-900">Google Preview</h2>
            </div>

            <div class="rounded-lg border border-slate-200 bg-white p-3">
              <!-- URL -->
              <p class="truncate text-sm text-slate-500">
                https://buyzin.com/product/mens-cotton-t-shirt
              </p>

              <!-- Title -->
              <p class="mt-1.5 text-sm font-medium leading-5 text-blue-600">
                {{ seoTitle || 'SEO Title' }}
              </p>

              <!-- Description -->
              <p class="mt-2 line-clamp-4 text-sm leading-5 text-slate-500">
                {{ metaDescription || 'Your product meta description will appear here.' }}
              </p>
            </div>
          </section>

          <!-- ===================================== -->
          <!-- SEO TIPS -->
          <!-- ===================================== -->
          <section class="rounded-xl border border-slate-200 bg-white p-4">
            <div class="mb-4 flex items-center gap-2">
              <div
                class="flex size-8 items-center justify-center rounded-lg bg-amber-50 text-amber-500"
              >
                <UIcon name="i-lucide-lightbulb" class="size-4" />
              </div>

              <h2 class="text-sm font-semibold text-slate-900">Tips for Better SEO</h2>
            </div>

            <div class="space-y-3">
              <div
                v-for="tip in [
                  'Use a clear and keyword-rich title',
                  'Write a compelling meta description',
                  'Include relevant keywords',
                  'Use a short and meaningful URL',
                  'Add high-quality images with alt text',
                  'Provide detailed product information',
                  'Keep content unique and original',
                ]"
                :key="tip"
                class="flex items-start gap-2"
              >
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
        </aside>
      </div>

      <div class="flex items-center justify-between gap-3">
        <RouterLink
          :to="{
            name: 'products-media',
            params: { product: '01m2wc2mth4m8j14fpp1jtdtpz' },
          }"
          class="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <UIcon name="i-lucide-arrow-left" class="size-4" />

          Previous
        </RouterLink>

        <button
          type="button"
          class="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Publish

          <UIcon name="i-lucide-arrow-right" class="size-4" />
        </button>
      </div>
    </main>
  </Default>
</template>
