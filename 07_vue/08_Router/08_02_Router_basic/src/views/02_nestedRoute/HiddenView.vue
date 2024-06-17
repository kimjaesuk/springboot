<script setup>
    import{useRoute} from 'vue-router';

    const router = useRoute();
</script>

<template>
    <h1> 숨겨진 화면</h1>
    <button @cilck ="()=> router.go(-1)">뒤로가기</button>
</template>