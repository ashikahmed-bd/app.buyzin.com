<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    categories: {
        type: Array,
        default: () => [],
    },
    modelValue: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue']);

const selectedCategories = ref([]);
const levels = ref([]);

watch(
    () => props.categories,
    () => {
        levels.value = [props.categories];
    },
    { immediate: true }
);

const selectCategory = (category, level) => {
    selectedCategories.value = selectedCategories.value.slice(0, level);
    selectedCategories.value[level] = category;

    levels.value = levels.value.slice(0, level + 1);

    if (category?.children?.length) {
        levels.value.push(category.children);
    }

    emit('update:modelValue', category?.id || '');
};
</script>

<template>
    <div class="space-y-3">
        <div
            v-for="(items, index) in levels"
            :key="index"
        >
            <label class="mb-1.5 block text-sm font-medium text-title">
                {{ ['Category', 'Subcategory', 'Child Category', 'Sub Child Category', 'Level 5'][index] || `Level ${index + 1}` }}
            </label>

            <select
                :value="selectedCategories[index]?.id || ''"
                @change="selectCategory(items.find(item => item.id === $event.target.value), index)"
                class="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-title outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            >
                <option value="">Select category</option>

                <option
                    v-for="category in items"
                    :key="category.id"
                    :value="category.id"
                >
                    {{ category.name }}
                </option>
            </select>
        </div>
    </div>
</template>