<template>
    <div class="grid clearfix">
        <div v-for="(item, index) in list" :key="index">
            <router-link :to="{name: 'Cate', params: {id: item.id}}">
                <img :src="item.icon" :alt="item.des">
                <div class="grid-des">{{item.des}}</div>
            </router-link>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
export default {
    name: 'Grid',
    data(){
        return {
            list: [
                {
                    id: 1,
                    icon: 'http://screenshot.dwstatic.com/ojiasnsimage/dd9f4441f80e733a8f20c8223a598a1c-100x100.jpg',
                    des: '表白'
                },{
                    id: 2,
                    icon: 'http://screenshot.dwstatic.com/ojiasnsimage/50b5ccc33320e1e4793554b28b84e995-100x100.jpg',
                    des: '恶搞'
                },
                {
                    id: 3,
                    icon: 'http://screenshot.dwstatic.com/ojiasnsimage/dd9f4441f80e733a8f20c8223a598a1c-100x100.jpg',
                    des: '表白'
                },{
                    id: 4,
                    icon: 'http://screenshot.dwstatic.com/ojiasnsimage/50b5ccc33320e1e4793554b28b84e995-100x100.jpg',
                    des: '恶搞'
                },
                {
                    id: 5,
                    icon: 'http://screenshot.dwstatic.com/ojiasnsimage/dd9f4441f80e733a8f20c8223a598a1c-100x100.jpg',
                    des: '表白'
                },{
                    id: 6,
                    icon: 'http://screenshot.dwstatic.com/ojiasnsimage/50b5ccc33320e1e4793554b28b84e995-100x100.jpg',
                    des: '恶搞'
                },{
                    id: 7,
                    icon: 'http://screenshot.dwstatic.com/ojiasnsimage/50b5ccc33320e1e4793554b28b84e995-100x100.jpg',
                    des: '恶搞'
                },{
                    id: 8,
                    icon: 'http://screenshot.dwstatic.com/ojiasnsimage/50b5ccc33320e1e4793554b28b84e995-100x100.jpg',
                    des: '恶搞'
                },{
                    id: 9,
                    icon: 'http://screenshot.dwstatic.com/ojiasnsimage/50b5ccc33320e1e4793554b28b84e995-100x100.jpg',
                    des: '恶搞'
                },{
                    id: 10,
                    icon: 'http://screenshot.dwstatic.com/ojiasnsimage/50b5ccc33320e1e4793554b28b84e995-100x100.jpg',
                    des: '恶搞'
                },{
                    id: 11,
                    icon: 'http://screenshot.dwstatic.com/ojiasnsimage/50b5ccc33320e1e4793554b28b84e995-100x100.jpg',
                    des: '恶搞'
                },{
                    id: 12,
                    icon: 'http://screenshot.dwstatic.com/ojiasnsimage/50b5ccc33320e1e4793554b28b84e995-100x100.jpg',
                    des: '恶搞'
                }
            ],
        }
    },
    mounted(){
        // 获取分类列表
    }
}
</script>

<style>
.grid{width: 100%; padding-left: 0.5%; padding-top: 0.5%;}
.grid>div{width: 22.75%; border-radius: 3%; float: left; margin: 1%;
background-color: #f1f1f1; text-align: center;}
.grid img{width: 50%; margin-top: 10px;}
.grid-des{margin-bottom: 5px;}
.clearfix:after{
    content: "020"; 
    display: block; 
    height: 0; 
    clear: both; 
    visibility: hidden;  
}
</style>
