<script setup>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
    <div class="flex min-h-screen bg-surface text-body antialiased">

        <Sidebar />

        <main class="min-w-0 flex-1">

            <Header />

            <div class="p-4">
                <slot />
            </div>
        </main>
    </div>
</template>
