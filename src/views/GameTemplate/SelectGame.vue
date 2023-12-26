<template>
    <div class="container h-75 align-items-center justify-content-center">
        <div class="row h-75 justify-content-center">
            <!-- 圖片的列 -->
            <div class="col-md-8 align-self-center">
                <div class="card mx-auto">
                    <div class="card-body">
                        <img class="card-img-top" src="../../assets/images/pics/cover_story.png" alt="Card image cap">
                    </div>
                </div>
            </div>

            <!-- 按鈕的列 -->
            <div class="col-md-4 align-self-center">
                <div v-for="i in question" class="mb-2">
                    <button type="button" class="btn btn-primary btn-block w-75" v-on:click="CheckAnswer(i)">{{ i }}</button>
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
            type: Array,
            required: true
        },
        answer: {
            type: String,
            required: true
        }        //Other Game Methods
    },
    methods:{
        CheckAnswer(answer){
            console.log(answer);
            console.log(typeof(this.answer));
            if(answer == this.answer){
                this.$emit('check-answer',true);
                console.log('check answer : True');
            }
            else{
                this.$emit('check-answer',false);
                console.log('check answer : False');
            }
        }
    
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