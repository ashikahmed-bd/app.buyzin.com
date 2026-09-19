<script setup>
defineProps({
  sidebar: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:sidebar"]);
</script>

<template>
  <header
    class="sticky top-0 z-30 border-b border-slate-200 bg-white/95 py-2 backdrop-blur"
  >
    <div class="flex items-center justify-between gap-6 px-4">
      <div class="flex shrink-0 items-center gap-3">
        <button
          type="button"
          class="flex size-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 lg:hidden"
          @click="emit('update:sidebar', true)"
        >
          <UIcon name="i-lucide-menu" class="size-5" />
        </button>

        <button
          type="button"
          class="hidden size-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 lg:flex"
        >
          <UIcon name="i-lucide-menu" class="size-5" />
        </button>

        <div class="relative hidden w-full max-w-sm md:block">
          <UIcon
            name="i-lucide-search"
            class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            placeholder="Search by order ID, buyer, product, SKU..."
            class="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />

          <UIcon
            name="i-lucide-command"
            class="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
          />
        </div>
      </div>

      <div class="flex shrink-0 items-center gap-3">
        <button
          type="button"
          class="relative flex size-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100"
        >
          <UIcon name="i-lucide-message-square" class="size-5" />
          <span
            class="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold leading-none text-white"
          >
            3
          </span>
        </button>

        <button
          type="button"
          class="relative flex size-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100"
        >
          <UIcon name="i-lucide-bell" class="size-5" />
          <span
            class="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold leading-none text-white"
          >
            12
          </span>
        </button>

        <button
          type="button"
          class="flex items-center gap-2 rounded-lg p-1.5 text-left transition hover:bg-slate-50"
        >
          <div
            class="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white"
          >
            SS
          </div>

          <div class="hidden min-w-0 sm:block">
            <p class="max-w-40 truncate text-sm font-semibold text-slate-800">
              Buyzin Express
            </p>
            <p class="text-sm text-slate-500">Seller</p>
          </div>

          <UIcon
            name="i-lucide-chevron-down"
            class="size-4 shrink-0 text-slate-500"
          />
        </button>
      </div>
    </div>
  </header>
</template>
