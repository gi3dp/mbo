<template>
     <div class="container">
        <head-top  headTitle='新建目标' goBack=true>           
        </head-top>

          <group >
            <selector title="主项" v-model="category" :options="options"></selector>
         </group>

        <group >
            <x-textarea title="工作项目" placeholder="请输入项目名称" :show-counter="false" v-model="project" :rows="1" ref="autosize"></x-textarea>
         </group>     

        <group >
            <x-textarea title="工作内容" placeholder="请输入具体内容" :show-counter="false" v-model="content" :rows="3" ref="autosize"></x-textarea>
         </group>   
           
        <group >
            <x-input title="完成小时" type="number" placeholder="请输入预估小时" :show-clear="true" v-model="estimateHours"></x-input>
        </group>

        <group>
            <flexbox align="center">
                <flexbox-item>
                     <x-input v-model="target" title="目  标" placeholder="输入具体目标或设置时间"  :show-clear="true"></x-input>
                </flexbox-item>

                <flexbox-item :span="1/3">
                    <datetime title='' v-model="target" clear-text="today"  @on-clear="setToday" format="MM-DD HH:mm" :min-hour='9' :max-hour='18' >
                        <x-button >设置时间</x-button>
                    </datetime>
                </flexbox-item>
            </flexbox>
        </group>


        <group>
            <x-textarea title="评价方法" placeholder="请输入评价标准，考核依据，打分标准" :show-counter="false" v-model="evaluation" :rows="3" ref="autosize"></x-textarea>
         </group>     
        <XButton  @click.native="addObj" type="primary">确认</XButton>

</div>

</template>

<script>
import headTop from '@/components/header/head'
import objectsRef from '@/firebase'
import { XTextarea,XButton,Selector,Group,XInput,Flexbox,FlexboxItem,Datetime } from 'vux'

export default {
    components:{
        headTop,
        Selector,
        Group,
        XButton,
        XTextarea,
        XInput,
        Flexbox,
        Datetime,
        FlexboxItem
    },
    data(){
        return{
            category:0,
            options:[
                {value:'月汇报工作',key:0},
                {value:'固定工作',key:1},
                {value:'变动工作',key:2},
                {value:'会议',key:3}
            ],
            project:"",
            content:"",
            target:"",
            evaluation:"",
            status:"confirm",
            estimateHours:""

        }
    },
    
    methods: {

    },

    //todo: refactory with mixin
    firebase:{
        objectListArr:objectsRef
    },


    methods:{
        addObj(){
            let vm = this
            let newObj = {
                'category':this.category,
                'content':this.content,
                'estimateHours':this.estimateHours,
                'status':"confirm",
                'evaluation':this.evaluation,
                'target':this.target,
                'project':this.project
            }
            objectsRef.push(newObj);
            this.$router.go(-1)
        },
        setToday(value){
            let now = new Date()
            let cmonth = now.getMonth() + 1
            let day = now.getDate()
            if (cmonth < 10) cmonth = '0' + cmonth
            if (day < 10) day = '0' + day
            this.$data.target = cmonth + '-' + day + ' 18:00'
        }
    },
}
</script>

<style lang="scss" scoped>
    @import 'style/mixin';

    .container{
        display:flex;
        flex-direction:column;
        min-height: 100vh;
    }
</style>