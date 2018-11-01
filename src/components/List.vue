<template>
    <van-list
        class="list-box clearfix"
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        :offset=100
    >
        <div v-for="(item, index) in list" :key="index" class="list">
            <router-link :to="{name: 'Material', params: {id: item.id}}">
                <img :src="item.image" :alt="item.des">
                <div class="des van-ellipsis">{{item.des}}</div>
            </router-link>
        </div>
    </van-list>
</template>

<script>
export default {
    name: 'List',
    props: [
        'from'
    ],
    data(){
        console.log(this.from)
        return {
            loading: false,
            finished: false,
            list: [
                {
                    id: 1,
                    image: 'http://screenshot.dwstatic.com/ojiastoreimage/9606eae435e1b1e3e568709fa4b5c954_size215x172_len77969.jpg',
                    des: '万圣节恶搞好友万圣节恶搞好友',
                },{
                    id: 2,
                    image: 'http://screenshot.dwstatic.com/ojiastoreimage/9606eae435e1b1e3e568709fa4b5c954_size215x172_len77969.jpg',
                    des: '万圣节恶搞好友万圣节恶搞好友',
                },{
                    id: 3,
                    image: 'http://screenshot.dwstatic.com/ojiastoreimage/9606eae435e1b1e3e568709fa4b5c954_size215x172_len77969.jpg',
                    des: '万圣节恶搞好友万圣节恶搞好友',
                },
            ],
        }
    },

    mounted(){
        let from = this.from
        if (this.from == 'recommend') {
            console.log('加载首页推荐数据')
        }

        if (this.from == 'cate') {
            console.log('加载分类列表数据')
        }
    },

    methods: {
        onLoad(){
            setTimeout(() => {
                for (let i = 4; i < 7; i++) {
                    this.list.push({
                        id: i,
                        image: 'http://screenshot.dwstatic.com/ojiastoreimage/9606eae435e1b1e3e568709fa4b5c954_size215x172_len77969.jpg',
                        des: '万圣节恶搞好友万圣节恶搞好友',
                    });
                }
                this.loading = false
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 200);
        }
    }
}
</script>

<style>
.list-box{width: 100%;}
.list{float: left; margin: 2%;width: 46%;}
.list img{width: 100%;}
.clearfix:after{
    content: "020"; 
    display: block; 
    height: 0; 
    clear: both; 
    visibility: hidden;  
}
</style>
