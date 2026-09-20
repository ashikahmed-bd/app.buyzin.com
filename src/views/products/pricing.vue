<script setup>
import Default from '@/layouts/Default.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const pricing = ref({
  base_price: 25,
  currency: 'USD',
  moq: 100,
  unit: 'pcs',
  additional_cost: 0,
  stock_quantity: 1000,
  availability: 'in_stock',
})

const tiers = ref([
  {
    min_quantity: 100,
    max_quantity: 499,
    unit_price: 25,
  },
  {
    min_quantity: 500,
    max_quantity: 999,
    unit_price: 22,
  },
  {
    min_quantity: 1000,
    max_quantity: 4999,
    unit_price: 20,
  },
  {
    min_quantity: 5000,
    max_quantity: null,
    unit_price: 18,
  },
])

const addTier = () => {
  tiers.value.push({
    min_quantity: '',
    max_quantity: null,
    unit_price: '',
  })
}

const removeTier = (index) => {
  tiers.value.splice(index, 1)
}
</script>

<template>
  <Default>
    <main class="space-y-4">
      <header class="flex flex-wrap items-start justify-between gap-4">
        <div class="block">
          <h1 class="text-lg font-semibold text-title">Create Product</h1>
          <p class="mt-0.5 text-sm text-body">Add product variants and manage variant details</p>
        </div>

        <div class="flex items-center gap-2">
          <button type="button" class="base__button">
            <UIcon name="i-lucide-save" class="size-4" />
            <span>Save as Draft</span>
          </button>
        </div>
      </header>

      <StepProgress :current="2" />

      <div class="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div class="space-y-4">
          <section class="rounded-xl border border-slate-200 bg-white">
            <div class="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div class="flex items-center gap-3">
                <div
                  class="flex size-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"
                >
                  <UIcon name="i-lucide-layers-3" class="size-4" />
                </div>

                <div>
                  <h3 class="text-sm font-semibold text-slate-900">Bulk Pricing</h3>
                  <p class="text-xs text-slate-500">
                    Offer different prices based on order quantity.
                  </p>
                </div>
              </div>

              <button
                type="button"
                class="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                @click="addTier"
              >
                <UIcon name="i-lucide-plus" class="size-4" />
                Add Tier
              </button>
            </div>

            <div class="overflow-x-auto p-5">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="border-b border-slate-100">
                    <th class="w-12 px-3 py-3 text-left text-xs font-semibold text-slate-500">#</th>

                    <th class="px-3 py-3 text-left text-xs font-semibold text-slate-500">
                      Min Quantity
                    </th>

                    <th class="px-3 py-3 text-left text-xs font-semibold text-slate-500">
                      Max Quantity
                    </th>

                    <th class="px-3 py-3 text-left text-xs font-semibold text-slate-500">
                      Unit Price
                    </th>

                    <th class="w-16 px-3 py-3 text-right text-xs font-semibold text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(tier, index) in tiers"
                    :key="index"
                    class="border-b border-slate-100 last:border-0"
                  >
                    <td class="px-3 py-3 text-sm text-slate-500">
                      {{ index + 1 }}
                    </td>

                    <td class="px-3 py-3">
                      <input
                        v-model="tier.min_quantity"
                        type="number"
                        min="1"
                        placeholder="1"
                        class="h-9 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      />
                    </td>

                    <td class="px-3 py-3">
                      <input
                        v-model="tier.max_quantity"
                        type="number"
                        min="1"
                        placeholder="Unlimited"
                        class="h-9 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      />
                    </td>

                    <td class="px-3 py-3">
                      <input
                        v-model="tier.unit_price"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="0.00"
                        class="h-9 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      />
                    </td>

                    <td class="px-3 py-3 text-right">
                      <button
                        type="button"
                        class="flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                        @click="removeTier(index)"
                      >
                        <UIcon name="i-lucide-trash-2" class="size-4" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div
                class="mt-4 flex items-start gap-2 rounded-lg bg-indigo-50 px-3 py-2.5 text-xs text-indigo-700"
              >
                <UIcon name="i-lucide-info" class="mt-0.5 size-4 shrink-0" />

                <span>
                  Buyers will automatically see the applicable tier price based on their order
                  quantity.
                </span>
              </div>
            </div>
          </section>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <section class="rounded-xl border border-slate-200 bg-white">
              <div class="border-b border-slate-100 px-5 py-4">
                <div class="flex items-center gap-3">
                  <div
                    class="flex size-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600"
                  >
                    <UIcon name="i-lucide-receipt" class="size-4" />
                  </div>

                  <div>
                    <h3 class="text-sm font-semibold text-slate-900">Additional Cost</h3>

                    <p class="text-xs text-slate-500">Optional handling or packaging cost.</p>
                  </div>
                </div>
              </div>

              <div class="p-5">
                <div>
                  <label class="mb-1.5 block text-sm font-medium text-slate-700">
                    Selling Unit
                    <span class="text-red-500">*</span>
                  </label>

                  <select
                    v-model="pricing.unit"
                    class="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  >
                    <option value="pcs">Piece (pcs)</option>
                    <option value="box">Box</option>
                    <option value="carton">Carton</option>
                    <option value="kg">Kilogram (kg)</option>
                    <option value="meter">Meter</option>
                    <option value="set">Set</option>
                  </select>

                  <p class="mt-1 text-xs text-slate-400">Select the unit used for selling.</p>
                </div>
              </div>
            </section>

            <section class="rounded-xl border border-slate-200 bg-white">
              <div class="border-b border-slate-100 px-5 py-4">
                <div class="flex items-center gap-3">
                  <div
                    class="flex size-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600"
                  >
                    <UIcon name="i-lucide-package" class="size-4" />
                  </div>

                  <div>
                    <h3 class="text-sm font-semibold text-slate-900">Availability</h3>

                    <p class="text-xs text-slate-500">Set current inventory availability.</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3 p-5">
                <div>
                  <label class="mb-1.5 block text-sm font-medium text-slate-700">
                    Stock Quantity
                  </label>

                  <input
                    v-model="pricing.stock_quantity"
                    type="number"
                    min="0"
                    class="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label class="mb-1.5 block text-sm font-medium text-slate-700">
                    Availability
                  </label>

                  <select
                    v-model="pricing.availability"
                    class="h-10 w-full rounded-lg border border-slate-200 bg-white px-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  >
                    <option value="in_stock">In Stock</option>
                    <option value="out_of_stock">Out of Stock</option>
                    <option value="pre_order">Pre Order</option>
                  </select>
                </div>
              </div>
            </section>
          </div>
        </div>

        <aside class="space-y-5">
          <div class="rounded-xl border border-slate-200 bg-white p-5">
            <div class="mb-4 flex items-center gap-3">
              <div
                class="flex size-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600"
              >
                <UIcon name="i-lucide-lightbulb" class="size-4" />
              </div>

              <div>
                <h3 class="text-sm font-semibold text-slate-900">Pricing Tips</h3>

                <p class="text-xs text-slate-500">Improve your B2B pricing.</p>
              </div>
            </div>

            <div class="space-y-3">
              <div class="flex gap-2">
                <UIcon
                  name="i-lucide-circle-check"
                  class="mt-0.5 size-4 shrink-0 text-emerald-500"
                />
                <p class="text-xs leading-5 text-slate-600">
                  Set a competitive price based on market research.
                </p>
              </div>

              <div class="flex gap-2">
                <UIcon
                  name="i-lucide-circle-check"
                  class="mt-0.5 size-4 shrink-0 text-emerald-500"
                />
                <p class="text-xs leading-5 text-slate-600">
                  Use tiered pricing to attract bulk buyers.
                </p>
              </div>

              <div class="flex gap-2">
                <UIcon
                  name="i-lucide-circle-check"
                  class="mt-0.5 size-4 shrink-0 text-emerald-500"
                />
                <p class="text-xs leading-5 text-slate-600">
                  Keep your MOQ realistic for B2B customers.
                </p>
              </div>

              <div class="flex gap-2">
                <UIcon
                  name="i-lucide-circle-check"
                  class="mt-0.5 size-4 shrink-0 text-emerald-500"
                />
                <p class="text-xs leading-5 text-slate-600">
                  Consider production and shipping costs.
                </p>
              </div>
            </div>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-5">
            <div class="mb-4 flex items-center gap-3">
              <div
                class="flex size-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"
              >
                <UIcon name="i-lucide-eye" class="size-4" />
              </div>

              <div>
                <h3 class="text-sm font-semibold text-slate-900">Price Preview</h3>

                <p class="text-xs text-slate-500">Buyer-side pricing preview.</p>
              </div>
            </div>

            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p class="text-xs text-slate-500">Starting price</p>

              <div class="mt-1 flex items-end gap-1">
                <span class="text-2xl font-semibold tracking-tight text-slate-900">
                  {{ pricing.currency }}
                  {{ Number(pricing.base_price || 0).toFixed(2) }}
                </span>

                <span class="mb-1 text-xs text-slate-500"> / {{ pricing.unit }} </span>
              </div>

              <div class="mt-4 grid grid-cols-2 gap-3 border-t border-slate-200 pt-4">
                <div>
                  <p class="text-xs text-slate-500">MOQ</p>

                  <p class="mt-1 text-sm font-semibold text-slate-900">
                    {{ pricing.moq }}
                    {{ pricing.unit }}
                  </p>
                </div>

                <div>
                  <p class="text-xs text-slate-500">Availability</p>

                  <span
                    class="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600"
                  >
                    <span class="size-1.5 rounded-full bg-emerald-500" />
                    {{ pricing.availability === 'in_stock' ? 'In Stock' : pricing.availability }}
                  </span>
                </div>
              </div>
            </div>

            <div class="mt-5">
              <h4 class="mb-2 text-xs font-semibold text-slate-700">Bulk Pricing Tiers</h4>

              <div class="overflow-hidden rounded-lg border border-slate-200">
                <div
                  v-for="(tier, index) in tiers"
                  :key="index"
                  class="flex items-center justify-between border-b border-slate-100 px-3 py-2.5 last:border-0"
                >
                  <span class="text-xs text-slate-500">
                    {{ tier.min_quantity || 0 }}
                    -
                    {{ tier.max_quantity ? tier.max_quantity : '∞' }}
                    {{ pricing.unit }}
                  </span>

                  <span class="text-xs font-semibold text-slate-900">
                    {{ pricing.currency }}
                    {{ Number(tier.unit_price || 0).toFixed(2) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div class="flex items-center justify-between gap-4">
        <RouterLink
          :to="{
            name: 'products-create',
            params: { product: '01m2wc2mth4m8j14fpp1jtdtpz' },
          }"
          class="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <UIcon name="i-lucide-arrow-left" class="size-4" />

          Previous
        </RouterLink>

        <RouterLink
          :to="{
            name: 'products-variants',
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
