<template>
    <div class="full-screen-image">
        <div class="overlay"></div>
        <img :src="currentImage" />
    </div>
</template>
  
<script setup>
const { currentImage } = defineProps(['currentImage'])
</script>
  
<style scoped>
.full-screen-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
}

.full-screen-image img {
    max-width: 100%;
    max-height: 100%;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
  