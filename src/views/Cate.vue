<template>
    <div>
        <van-nav-bar
            :title="cateDetail.name"
            left-text="返回"
            right-text="搜索"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />

        <List from="cate" />
    </div>
</template>

<script>
import List from '@/components/List.vue'

export default {
    name: 'Cate',
    components: {
        List
    },
    data(){
        return {
            id: this.$route.params.id,
            cateDetail: {
                name: '分类名称',
            }
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        onClickRight(){

        }
    }
}
</script>
