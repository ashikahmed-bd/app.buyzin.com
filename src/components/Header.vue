<script setup>
import {
    Menu,
    Search,
    Bell,
    ChevronDown,
    UserRound,
    Settings,
    LogOut,
} from '@lucide/vue'
</script>

<template>
    <header class="sticky top-0 z-30 border-b border-border bg-white px-4 py-2">
        <div class="flex items-center justify-between gap-4">

            <!-- Left: Menu & Search -->
            <div class="flex min-w-0 flex-1 items-center gap-4">

                <button type="button"
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-body transition hover:bg-surface">
                    <Menu :size="21" :stroke-width="1.8" />
                </button>

                <div
                    class="flex items-center gap-3 rounded-lg border border-transparent bg-surface px-3 py-2 transition focus-within:border-primary/40">
                    <Search :size="19" class="shrink-0 text-muted" />

                    <input type="search" placeholder="Search keywords..."
                        class="w-full bg-transparent text-sm text-title outline-none placeholder:text-muted" />

                    <kbd
                        class="hidden shrink-0 rounded border border-border bg-white px-2 py-0.5 text-xs text-muted sm:block">
                        Ctrl K
                    </kbd>
                </div>
            </div>


            <div class="flex shrink-0 items-center gap-3">

                <button type="button"
                    class="relative flex h-10 w-10 items-center justify-center rounded-lg text-body transition ">
                    <Bell :size="20" :stroke-width="1.8" />
                    <span class="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-rose-500"></span>
                </button>

                <button type="button" class="flex items-center gap-2.5 rounded-lg py-1 transition  sm:px-2">
                    <div
                        class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                        A
                    </div>

                    <div class="hidden text-left sm:block">
                        <p class="text-sm font-semibold text-title">
                            Ashik Ahmed
                        </p>
                        <p class="mt-0.5 text-xs text-muted">
                            Administrator
                        </p>
                    </div>

                    <ChevronDown :size="16" class="hidden text-muted sm:block" />
                </button>
            </div>
        </div>
    </header>
</template>
