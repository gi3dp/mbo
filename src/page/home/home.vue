<template>
    <div class="container">
        <head-top headTitle='目标管理'
                  goBack=true>

            <span slot="filter" id="icon">
                <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 50 50" width="0.832rem" fill="#7b7b7b">

                <path class="st0" d="M48.3,7.9H32.4C31.6,4.5,28.6,2,25,2s-6.6,2.5-7.4,5.9H1.8c-0.9,0-1.7,0.8-1.7,1.7s0.8,1.7,1.7,1.7h15.9
                c0.8,3.4,3.8,5.9,7.4,5.9s6.6-2.5,7.4-5.9h15.9c0.9,0,1.7-0.8,1.7-1.7S49.2,7.9,48.3,7.9z M25,13.7c-2.3,0-4.2-1.9-4.2-4.2
                c0-2.3,1.9-4.2,4.2-4.2c2.2,0,4,1.8,4.2,4c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2C29.1,12,27.3,13.7,25,13.7z"/>
                <path class="st0" d="M48.3,40.1h-3.5c-0.8-3.4-3.8-5.9-7.4-5.9c-3.6,0-6.6,2.5-7.4,5.9H1.8c-0.9,0-1.7,0.8-1.7,1.7s0.8,1.7,1.7,1.7
                H30c0.8,3.4,3.8,5.9,7.4,5.9c3.6,0,6.6-2.5,7.4-5.9h3.5c0.9,0,1.7-0.8,1.7-1.7S49.2,40.1,48.3,40.1z M37.4,45.9
                c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2C41.6,44.1,39.7,45.9,37.4,45.9z"/>
                <path class="st0" d="M48.3,24H20.1c-0.8-3.4-3.8-5.9-7.4-5.9S6.1,20.6,5.3,24H1.8c-0.9,0-1.7,0.8-1.7,1.7s0.8,1.7,1.7,1.7h3.5
                c0.8,3.4,3.8,5.9,7.4,5.9s6.6-2.5,7.4-5.9h28.3c0.9,0,1.7-0.8,1.7-1.7S49.2,24,48.3,24z M12.7,29.8c-2.3,0-4.2-1.9-4.2-4.2
                c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2C16.9,28,15,29.8,12.7,29.8z"/>
                </svg>    
            </span> 
                 
            <span slot="edit" id="icon">
                    <router-link to='/newObj'>
                        <svg class="newObj"  viewBox="0 0 24 24"  width="1.4262rem"  version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#7b7b7b" />
                        </svg>
                    </router-link>
            </span>
        </head-top>
        <search v-model="value" @on-cancel="value=''"></search>
        <objectList></objectList>
        <footGuide></footGuide>
    </div>
</template>

<script>
import headTop from '@/components/header/head'
import objectList from '@/components/common/objectList'
import footGuide from '@/components/footer/footGuide'
import {Search} from 'vux'


export default {
    components:{
        headTop,
        objectList,
        footGuide,
        Search,
    },
    computed:{
        value:{
            get(){
                return this.$store.getters.value;
            },
            set(value){
                this.$store.dispatch('updateValue',value)
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    @import 'style/mixin';
    .newObj{
        display: flex;
        margin-left: 0.8123rem;     
    }

  .container{
    display:flex;
    flex-direction:column;
    min-height: 100vh;
  }

  #icon{
      display: flex;
      align-items: center;
  }
</style>