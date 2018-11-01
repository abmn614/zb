<template>
    <div>
        <van-nav-bar
            :title="materialDetail.name"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />

        <div class="preview-img">
            <img :src="materialDetail.previewImage" :alt="materialDetail.des">
        </div>

        <van-cell-group>
            <van-field
                v-model="data.name"
                required
                clearable
                :label="data.label"
                :placeholder="data.placeholder"
            />
            <van-button size="large" type="danger" class="submit" @click="submit">立即生成</van-button>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'Material',
    data(){
        return {
            id: this.$route.params.id,
            materialDetail: {
                name: '素材名',
                previewImage: 'http://screenshot.dwstatic.com/ojiastoreimage/4eaa7ae3a1ddcd4ddf09aff710bd8252.jpg',
                des: '万圣节恶搞朋友'
            },
            data: {
                name: '123',
                label: '姓名',
                placeholder: '请输入姓名',
            }
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        submit(){
            let data = this.data
            console.log(data)
            this.$router.push({name: 'Result'})
        }
    }
}
</script>


<style>
.preview-img{margin-bottom: 20px;}
.submit{margin-top: 20px;}
</style>
