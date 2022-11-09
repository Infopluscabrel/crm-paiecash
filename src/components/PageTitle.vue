<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: false,
    },
});
</script>

<template>
   <div class="pagetitle">
        <h1>{{ title }}</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active">{{ subtitle }}</li>
            </ol>
        </nav>
    </div>
</template>