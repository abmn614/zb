<template>
<div class="swipe">
    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in items" :key="index">
            <router-link :to="{name: 'Material', params: {id: item.id}}">
                <img :src="item.image" :alt="item.des">
            </router-link>
        </van-swipe-item>
    </van-swipe>
</div>
</template>

<script>
export default {
    name: 'Swipe',
    data(){
        return {
            items: [
                {
                    id: 1,
                    image: 'http://img.dwstatic.com/www/1810/404761404460/1540806330079.jpg',
                    des: '文字介绍'
                },{
                    id: 2,
                    image: 'http://img.dwstatic.com/www/1810/404739532774/1540784689060.jpg',
                    des: '文字介绍2'
                }
            ]
        }
    },
}
</script>

<style>
.swipe{height: 100%;}
</style>

