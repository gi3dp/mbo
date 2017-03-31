<template>
     <div class="container">
        <head-top  headTitle='目标详情' goBack=true>           
        </head-top>

          <group >
            <selector title="主项" v-model="detail.category" :options="options"></selector>
         </group>

        <group >
            <x-textarea title="工作项目" placeholder="请输入项目名称" :show-counter="false" v-model="detail.project" :rows="1" ref="autosize"></x-textarea>
         </group>     

        <group >
            <x-textarea title="工作内容" placeholder="请输入具体内容" :show-counter="false" v-model="detail.content" :rows="3" ref="autosize"></x-textarea>
         </group>   
           
        <group >
            <x-input title="完成小时" type="number" placeholder="请输入预估小时" :show-clear="true" v-model.number="detail.estimateHours"></x-input>
        </group>

        <group>
            <flexbox align="center">
                <flexbox-item>
                     <x-input v-model="detail.target" title="目  标" placeholder="输入具体目标或设置时间"  :show-clear="true"></x-input>
                </flexbox-item>

                <flexbox-item :span="1/3">
                    <datetime title='' v-model="detail.target" clear-text="today"  @on-clear="setToday" format="MM-DD HH:mm" :min-hour='9' :max-hour='18' >
                        <x-button >设置时间</x-button>
                    </datetime>
                </flexbox-item>
            </flexbox>
        </group>


        <group>
            <x-textarea title="评价方法" placeholder="请输入评价标准，考核依据，打分标准" :show-counter="false" v-model="detail.evaluation" :rows="3" ref="autosize"></x-textarea>
         </group>     
        <XButton  @click.native="updateObj" type="primary">确认更新</XButton>

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
        firebase: {
            objectListArr: objectsRef
        },

        //Get from router
        props:['detail'],

        data(){
            return{
                options:[
                    {value:'月汇报工作',key:0},
                    {value:'固定工作',key:1},
                    {value:'变动工作',key:2},
                    {value:'会议',key:3}
                ],
            }
        },

        methods:{
            updateObj(){
                console.log(this.detail._key)
                objectsRef.child(this.detail._key).update({
                    'updateTime':new Date()
                });
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


        mounted () {
            objectsRef.once('child_changed')
            .then(snapshot=>{
                console.log(snapshot.key,'key')
            })
        } 
    }
</script>