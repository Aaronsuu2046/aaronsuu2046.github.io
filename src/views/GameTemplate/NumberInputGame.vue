<template>
<div class="container">
    <div class="row">
        <div class="col-8">
            <div class="card">
                <div class="card-body">
                    <img class="card-img-top" src="../../assets/images/pics/cover_info.jpeg" alt="Card image cap">
                </div>
            </div>
        </div>
        <div class="col-4 align-self-center justify-content-center">
            <div class="card">
                <div class="card-body">
                    <p class="h2">{{ question }}</p>
                </div>
            </div>
            <VirtualNumPad v-on:submit="GetSubmitData"></VirtualNumPad>
        </div>
    </div>
</div>
</template>

<script>
import VirtualNumPad from '@/components/VirtualNumPad.vue'; 
export default {
    name: 'NumberInputGame',
    data() {
        return {
            // Your component data goes here
        };
    },
    props: {
        imgsrc:{
            type: String,
            required: true
        },
        question: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        }        //Other Game Methods
    },
    methods: {
        GetSubmitData(data){
            console.log('get'+data);
            this.CheckAnswer(data);
        },
        CheckAnswer(data){
            if(data == this.answer){
                this.$emit('check-answer',true);
                console.log('check answer : True');
            }
            else{
                this.$emit('check-answer',false);
                console.log('check answer : False');
            }
        }
    },
    created() {
        // Your component initialization goes here
        console.log(this.imgsrc,this.question,this.answer);
    },
    components: {
        VirtualNumPad
    }
};
</script>

<style scoped>
/* Your component styles go here */
</style>
