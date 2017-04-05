<template>
    <div>{{apartment}}</div>
</template>

<script>
import  {mapGetters} from 'vuex'

export default{
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters([
            'apartment',
        ])
    }
}
</script>