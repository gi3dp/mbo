<template>
<div >
        <head-top  headTitle='新建目标' goBack=true> 
           
        </head-top>
        <form class='newObjForm'>
            <label >主项</label>
            <select id="category" v-model="newObj.category">
                <option v-for='option in options' :value="option.value">
                    {{option.text}}
                </option>
            </select>
            <br>
            <label for="project">工作项目</label>
            <input type="text" id="project" v-model="newObj.project">
            <br>
            <label for="content">工作内容</label>
            <input type="text" id="content" v-model="newObj.content">
            <br>
            <label for="estimate">完成小时</label>
            <input type="text" id="estimate" v-model="newObj.estimate">
            <br>
            <label for="target">目标</label>
            <input type="text" id="target" v-model="newObj.target">
            <span>或</span>
            <input type="text" id="target" v-model="newObj.target">
            <br>
            <label for="evaluation">评价方法</label>
            <input type="text" id="evaluation" v-model="newObj.evaluation">
        </form>
        <button @click="addObj" >确认</button>

</div>

</template>

<script>
import headTop from '@/components/header/head'
import objectsRef from '@/firebase'

export default {
    data(){
        return{
            options:[
                {text:'月汇报工作',value:0},
                {text:'固定工作',value:1},
                {text:'变动工作',value:2},
                {text:'会议',value:3}
            ],
            newObj:{
                category:"",
                project:"",
                content:"",
                target:"",
                evaluation:"",
                status:"confirm",
                estimate:""
            }
        }
    },

    //todo: refactory with mixin
    firebase:{
        objectListArr:objectsRef
    },

    components:{
        headTop,       
    },

    methods:{
        addObj(){
            objectsRef.push(this.newObj);
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="scss" scoped>
    @import 'style/mixin';
    .newObjForm{
        padding-top:2rem;
    }
</style>