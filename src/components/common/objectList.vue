<template>

        <ul v-if='objectListArr.length' id="objAllList">
    
            <li  v-for="object in filteredObjectListArr"  class="obj-li">
            <!--带颜色的标签-->
                <div :style='{backgroundColor:Color(object.status)}' class='obj-label'>
    
                </div>

                <section class="user"></section>

                <div class="obj-text">
    
                    <div class="category">{{object.category|convertObjectCategory}}</div>
                    
                    <div class="target">{{object.target}}</div>
    
                    <div class="content">{{object.content}}</div>

    
                </div>
                
                <section class="obj-status" :style='{color:Color(object.status)}'>
                    {{object.status|convertStatusText}}

                
                    <section class="detail-button">
                        <router-link  :to="{name:'objDetail',params:{detail:object}}">
                            <svg version="1.1"
                            width="0.9173rem" viewBox="0 0 100 100"
                                xml:space="preserve" fill="#7B7B7B" id="detail"> 
                            <g transform="translate(0,-952.36218)">
                            <path  d="M50,958.4c-24.3,0-44,19.7-44,44s19.7,44,44,44s44-19.7,44-44S74.3,958.4,50,958.4z M50,962.4
                            c22.1,0,40,17.9,40,40s-17.9,40-40,40s-40-17.9-40-40S27.9,962.4,50,962.4z M26,993.4c-4.9,0-9,4.1-9,9s4.1,9,9,9s9-4.1,9-9
                            S30.9,993.4,26,993.4z M50,993.4c-4.9,0-9,4.1-9,9s4.1,9,9,9s9-4.1,9-9S54.9,993.4,50,993.4z M74,993.4c-4.9,0-9,4.1-9,9s4.1,9,9,9
                            s9-4.1,9-9S78.9,993.4,74,993.4z M26,997.4c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S23.2,997.4,26,997.4z M50,997.4c2.8,0,5,2.2,5,5
                            s-2.2,5-5,5s-5-2.2-5-5S47.2,997.4,50,997.4z M74,997.4c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S71.2,997.4,74,997.4z"/>
                            </g>
                            </svg>
                        </router-link>  
                    </section>
                </section>
            </li>
    
        </ul>

</template>

<script>
    import db from '@/firebase'
    
    export default {
    
        firebase: {
    
            objectListArr: db.ref('objects'),
    
        },
    
        methods: {
    
            Color(value) {
    
                switch (value) {
    
                    case "confirm":
    
                        return '#e8503e';
    
                        break;
    
                    case "process":
    
                        return '#56d1c1';
    
                        break;
    
                    case "selfEval":
    
                        return '#0000ff';
    
                        break;
    
                    case "review":
    
                        return '#993dbc';
    
                        break;
    
                    case "done":
    
                        return '#808080';
    
                        break;
    
                }
    
            }
    
        },
    
        filters: {
    
            convertStatusText(text) {
    
                switch (text) {
    
                    case "confirm":
    
                        return '待确认';
    
                        break;
    
                    case "process":
    
                        return '进行中';
    
                        break;
    
                    case "selfEval":
    
                        return '待自评';
    
                        break;
    
                    case "review":
    
                        return '待覆评';
    
                        break;
    
                    case "done":
    
                        return '已完成';
    
                        break;
    
                }
    
            },

            convertObjectCategory(text){
                switch (text) {
    
                    case 0:
    
                        return '月汇报工作';
    
                        break;
    
                    case 1:
    
                        return '固定工作';
    
                        break;
    
                    case 2:
    
                        return '变动工作';
    
                        break;
    
                    case 3:
    
                        return '会议';
    
                        break;
    
                }
    
            }
    
        },

        computed:{
            filteredObjectListArr(){
                let vm = this
                return this.objectListArr.filter(function(item){
                    console.log(item.content)
                    return item.content.indexOf(vm.$store.getters.value)!== -1
                })
            }
        },

        // mounted () {
        //     objectsRef.on('child_added',snapshot=>{
        //         console.log(snapshot.key)
        //     })
        // }   
    }
    
</script>

<style lang="scss" scoped>
    @import 'style/mixin';
    
    .obj-li {   
        display: flex;
        flex-direction:row;
        
        border-bottom: .025rem solid #f1f1f1;
        margin-bottom: 0.7893rem;
        background-color: #f6f6f6;

        box-shadow: 0 0.1707rem 0.3072rem 0.0128rem rgba(33,22,19,0.15);
    }

    .obj-text{
    // @include border;
        padding-top:0.6826rem;
        padding-bottom: 0.7253rem;
        flex:1 0 66%;

            .category{
            @include font(0.512rem, 1, $font-thin,#909090)
            }
            .target{
            @include font(0.4693rem, 1, $font-light,#909090);
            margin-top: .32rem;
            }
            .content{
            @include font(0.7467rem, 1, $font-light,#3d3d3d);
            margin-top: .384rem;
            }
    }

    .obj-status{
        margin-top: 0.6827rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        @include font(0.7467rem, 1, $font-light,#909090);
    }


    .obj-label {
        min-width: 0.1493rem;
    }

    #objAllList {
        background-color: #fff;
        flex:1 0 auto;
    }

    .user{
        min-width:16.667%;
    }

    #detail{
        margin-top:0.5547rem
    }
</style>