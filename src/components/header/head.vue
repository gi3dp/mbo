<template>
    <header id='head_top'>
        <slot name='logo'></slot>
        <slot name='search'></slot>

        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 24 24" width="0.8rem" fill="#7b7b7b"  xml:space="preserve">
            <polygon points="16.7,3 15.4,1.8 5.7,11.4 15.4,21 16.7,19.7 8.3,11.4 "/>
            </svg>
        </section>

        <router-link :to="userInfo? '/profile':'/login'" v-if='signinUp' class="head_login">
            <svg class="user_avatar" v-if="userInfo">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
            </svg>
            <span class="login_span" v-else>登录|注册</span>
        </router-link>

        <section class="title_head" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>

        <slot name="filter"></slot>
        <slot name="edit"></slot>
        <slot name="delete"></slot>

    </header>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
    	data(){
            return{

            }
        },
        mounted(){


        },
        props: ['signinUp', 'headTitle', 'goBack'],
        computed: {

        },
        methods: {

        },

    }

</script>

<style lang="scss" scoped>
    @import 'style/mixin';

    #head_top{
        // background-color: $blue;
        flex:0 1 $headerHight;
        display:flex;
        flex-direction: row;              
    };
    .title_head{
        flex:1;
        display: flex;
        align-items: center;
    }

    .head_goback{
        display: flex;
        margin-left:0.4907rem
    }

    .title_text{    
        @include cl;       
        @include font(0.8107rem,1,$font-regular,#2d2d2d);
    }
</style>
