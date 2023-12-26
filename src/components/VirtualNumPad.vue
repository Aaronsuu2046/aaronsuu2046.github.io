<template>
<div class="container">
    <!-- Your component's HTML template goes here -->
    <div class="row mt-2">
        <!-- Number buttons -->
            <div class="row">
                <div class="col-12 mb-2">
                    <input type="text" class="form-control rtl-input" id="keyboardInput" v-model="Num">
                </div>
            </div>
            <div class="row">
                <div class="col-4 mb-2"><button class="btn btn-secondary w-100" id="num1" v-on:click="input('1')">1</button></div>
                <div class="col-4 mb-2"><button class="btn btn-secondary w-100" id="num2" v-on:click="input('2')">2</button></div>
                <div class="col-4 mb-2"><button class="btn btn-secondary w-100" id="num3" v-on:click="input('3')">3</button></div>
            </div>
            <div class="row">
                <div class="col-4 mb-2"><button class="btn btn-secondary w-100" id="num4" v-on:click="input('4')">4</button></div>
                <div class="col-4 mb-2"><button class="btn btn-secondary w-100" id="num5" v-on:click="input('5')">5</button></div>
                <div class="col-4 mb-2"><button class="btn btn-secondary w-100" id="num6" v-on:click="input('6')">6</button></div>
            </div>
            <div class="row">
                <div class="col-4 mb-2"><button class="btn btn-secondary w-100" id="num7" v-on:click="input('7')">7</button></div>
                <div class="col-4 mb-2"><button class="btn btn-secondary w-100" id="num8" v-on:click="input('8')">8</button></div>
                <div class="col-4 mb-2"><button class="btn btn-secondary w-100" id="num9" v-on:click="input('9')">9</button></div>
            </div>
            <div class="row">
                <div class="col-4 mb-2"><button class="btn btn-danger w-100" id="backspace" v-on:click="deleat()">清除</button></div>
                <div class="col-4 mb-2"><button class="btn btn-secondary w-100" id="num0" v-on:click="input('0')">0</button></div>
                <div class="col-4 mb-2"><button class="btn btn-success w-100" id="submit" v-on:click="submit()">送出</button></div>
            </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'VirtualNumPad',
    data(){
        return {
            Num:''
        }
    },
    methods:{
        input(num){
            this.Num+=num;
        },
        deleat(){
            this.Num='';
        },
        submit(){
            this.$emit('submit',this.Num);
            console.log('Sent '+this.Num+'to parent');
        }
    }
}
</script>

<style scoped>
.rtl-input {
    direction: rtl;       /* 文字方向從右到左 */
    text-align: right;    /* 文字對齊到右邊 */
}
</style>
