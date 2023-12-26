<template>
    <div class="container d-flex align-items-center justify-content-center">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mx-auto">
                    <div class="card-body">
                        <img class="card-img-top" :src="require(imgsrc)" alt="Card image cap">
                    </div>
                </div>
            </div>
            <div class="col-md-4 align-self-center">
                <div class="card row mx-auto mb-3">
                    <div class="card-body">
                        {{ question }}
                    </div>
                </div>
                <div class="d-flex justify-content-center mx-auto d-grid gap-4">
                    <button type="button" class="btn btn-primary" v-on:click="CheckAnswer(true)"><i class="bi bi-circle"></i>    正確</button>
                    <button type="button" class="btn btn-primary" v-on:click="CheckAnswer(false)"><i class="bi bi-x-lg"></i>    錯誤</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import fetchJson from '@/utilitys/fetch-json.js';
export default {
    name: 'SelectGame',
    data(){
        return {
   
        }
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
            type: Boolean,
            required: true
        }        //Other Game Methods
    },
    methods:{
        CheckAnswer(answer){
            console.log(answer);
            console.log(typeof(this.answer));
            // typeof(answer);
            if(answer == this.answer){
                this.$emit('check-answer',true);
                console.log('check answer : True');
            }
            else{
                this.$emit('check-answer',true);
                console.log('check answer : True');
            }
        }
    
    },
    mounted() {
        console.log(this.imgsrc); // 在父組件中
        // 或者
    }
}

</script>
<style scoped>
.card {
    border-style: solid;
}
button {
    width: 150px;
}

</style>