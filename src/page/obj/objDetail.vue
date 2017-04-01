<template>
     <div class="container">
        <head-top  headTitle='目标详情' goBack=true>
            <span slot="delete" id="icon" @click="showPlugin" v-if="detail.status == 'confirm'||'process'">
                    <svg version="1.1"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0.832rem"
                        viewBox="0 0 48 48" >
                    <g>
                        <path class="st0" d="M25,39.9c0.4,0,0.7-0.3,0.7-0.7V14.3c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v24.9
                            C24.3,39.6,24.6,39.9,25,39.9z"/>
                        <path class="st0" d="M29.1,39.9c0.4,0,0.7-0.3,0.7-0.7V14.3c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v24.9
                            C28.4,39.6,28.7,39.9,29.1,39.9z"/>
                        <path class="st0" d="M20.6,39.9c0.4,0,0.7-0.3,0.7-0.7V14.3c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v24.9
                            C20,39.6,20.3,39.9,20.6,39.9z"/>
                        <path class="st0" d="M16.7,39.9c0.4,0,0.7-0.3,0.7-0.7V14.3c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v24.9
                            C16,39.6,16.3,39.9,16.7,39.9z"/>
                        <path class="st0" d="M33.3,39.9c0.4,0,0.7-0.3,0.7-0.7V14.3c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v24.9
                            C32.6,39.6,32.9,39.9,33.3,39.9z"/>
                        <path class="st0" d="M41,8.7h-9.8C31.1,7.8,30.9,7,30,6.1c-0.6-0.6-1.3-0.9-2.2-0.9h-6.9c-0.9,0-1.6,0.3-2.2,0.9
                            c-0.9,0.9-1.2,1.7-1.3,2.6H9C8.6,8.7,8.3,9,8.3,9.4s0.3,0.7,0.7,0.7h1.4l1.3,32c0,1.2,0.8,2.8,3.4,2.8h19.6c2.6,0,3.4-2.3,3.4-3.4
                            l1.3-31.3H41c0.4,0,0.7-0.3,0.7-0.7C41.7,9,41.4,8.7,41,8.7z M19.6,7c0.3-0.3,0.7-0.5,1.2-0.5h6.9c0.5,0,0.9,0.2,1.2,0.5
                            c0.6,0.6,0.8,0.9,0.9,1.6h-11C18.9,8,19.1,7.6,19.6,7z M36.8,42c0,0.2-0.1,1.4-2,1.4H15.2c-1.9,0-2-1.2-2-1.4l-1.3-31.9h26.3
                            L36.8,42z"/>
                    </g>
                    </svg>
            </span>           
        </head-top>

        <div v-transfer-dom>
            <confirm v-model="show" title="删除此目标？"
            @on-cancel="onCancel"
            @on-confirm="onConfirm"
            @on-show="onShow"
            @on-hide="onHide">
            <p style="text-align:center;">将删除工作项目为{{this.detail.project}}的目标</p>
            </confirm>
        </div>

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
import db from '@/firebase'
import { XTextarea,XButton,Selector,Group,XInput,Flexbox,FlexboxItem,Datetime,Confirm, TransferDomDirective as TransferDom  } from 'vux'

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
            FlexboxItem,
            Confirm 
        },
        firebase: {
            objectListArr: db.ref('objects')
        },

        directives: {
            TransferDom
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
                show:false,
            }
        },

        methods:{
            updateObj(){
                delete this.detail[".key"]
                this.detail['updateTime']=new Date()
                console.log(this.detail)
                db.ref('objects').child(this.detail._key).update(
                    this.detail
                );
                this.$router.go(-1)
            },
            setToday(value){
                let now = new Date()
                let cmonth = now.getMonth() + 1
                let day = now.getDate()
                if (cmonth < 10) cmonth = '0' + cmonth
                if (day < 10) day = '0' + day
                this.detail.target = cmonth + '-' + day + ' 18:00'
            },
            showPlugin(){
                this.show=true
            },

            onCancel () {
                console.log('on cancel')
            },
            onConfirm () {
                console.log('on confirm')
                delete this.detail[".key"]
                db.ref('objects').child(this.detail._key).set(
                    null
                );
                this.$router.go(-1)
            },
            onHide () {
                console.log('on hide')
            },
            onShow () {
                console.log('on show')
            },
        },

    }
</script>

<style lang="scss" scoped>
    @import 'style/mixin';

    .container{
        display:flex;
        flex-direction:column;

    }

    #icon{
      display: flex;
      align-items: center;
      margin-right: 5%
  }
</style>