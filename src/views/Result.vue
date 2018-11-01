<template>
    <div>
        <van-nav-bar
            :title="result.des"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />

        <img :src="result.image" :alt="result.des" @click="showFullImage">

        <div class="save">
            <van-button size="large" type="danger" class="save-btn">保存到相册</van-button>
            <van-button size="large" type="warning" class="save-btn">分享给朋友</van-button>
        </div>
        
    </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
    name: 'Result',
    data(){
        return {
            result: {
                image: 'http://screenshot.dwstatic.com/ojiastoreimage/4eaa7ae3a1ddcd4ddf09aff710bd8252.jpg',
                des: '生成结果-标题',
            }
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        showFullImage(){
            this.images = [
                'http://screenshot.dwstatic.com/ojiastoreimage/4eaa7ae3a1ddcd4ddf09aff710bd8252.jpg',
            ]
            ImagePreview({
                images: this.images
            })
        }
    }
}
</script>

<style>
.save{margin-top: 20px;}
.save-btn{margin-bottom: 10px;}
</style>

