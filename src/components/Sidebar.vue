<template>
    <div class="flex">
        <div class="hidden fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden">
            
        </div>
    </div>
    <div class="-translate-x-full ease-in fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
        <div class="flex items-center justify-center mt-8">
            <div class="flex items-center">
                <span class="mx-2 text-2xl font-semibold text-white">V-Dashboard</span>
            </div>
        </div>
        <nav class="mt-10">
            <a href="/dashboard" class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100">
                <span class="mx-4">Dashboard</span>
            </a>
            <a href="/ui-elements" class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100">
                <span class="mx-4">UI Elements</span>
            </a>
            <a href="/tables" class="router-link-active router-link-exact-active flex items-center px-6 py-2 mt-4 duration-200 border-l-4 bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100" aria-current="page">
                <span class="mx-4">Tables</span>
            </a>
            <a href="/forms" class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100">
                <span class="mx-4">Forms</span>
            </a>
            <a href="/cards" class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100">
                <span class="mx-4">Cards</span>
            </a>
            <a href="/modal" class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100">
                <span class="mx-4">Modal</span>
            </a>
            <a href="/blank" class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100">
                <span class="mx-4">Blank</span>
            </a>
        </nav>
    </div>
</template>

<script>

</script>
