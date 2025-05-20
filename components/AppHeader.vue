<script setup>
const pages = new Map([
    ['NL', '/'],
    ['EN', '/en'],
])
</script>

<template>
    <header class="container border-b border-black border-opacity-10 mx-auto flex justify-end py-4">
        <ul class="flex gap-4 align-center">
            <li
                v-for="[label, path] in pages"
                :key="label"
            >
                <NuxtLink 
                    class="text-xs" 
                    activeClass="font-bold"
                    :to="path"
                >{{ label }}</NuxtLink>
            </li>
        </ul>
    </header>
</template>