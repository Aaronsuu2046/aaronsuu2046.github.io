<template>
  <div class="gameBtn optionsBtn">
    <button v-for="(item, key) in filteredOptions"
      :key="key"
      :id="`${item.name}Btn`"
      @click="$emit('optionsEvent', item.name)">
      {{ item.title }}
    </button>
  </div>
</template>

<script>

export default {
  name: 'OptionButton',
  props: {
    optionsActive: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      options: [ 
        { "name" : "previous", "title" : "上一關" }, 
        { "name" : "start", "title" : "遊戲開始" },
        { "name" : "next", "title" : "下一關" },
        { "name" : "hint", "title" : "提示" },
        { "name" : "record", "title" : "💾" },
        { "name" : "submit", "title" : "送出答案" }
      ]
    };
  },
  computed: {
    filteredOptions() {
      return this.options.filter((option) =>
        this.optionsActive.includes(option.name)
      );
    },
  }
};
</script>

<style>

button {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Game Btn */
.gameBtn {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.gameBtn * {
  border:2px solid #ADC090;
  font-size: 30px;
  justify-content: center;
  align-items: center;
}

.gameBtn *:hover {
  color: #fff;
  transform: translate(0px, -5px);
  transition: 0.5s;
}


/* option */
.optionsBtn :first-child {
  margin-left: 10px;
}
.optionsBtn * {
  background-color: #ADC090;
  color: #fff;
  border-radius: 10px;
  height: 40px;
  margin: 10px 10px 0 0;
  box-sizing: border-box;
}

.optionsBtn *:hover {
  background-color: #eee !important; 
  color: #8e8e9c;
  transition: 0.5s;
}

.optionsBtn #startBtn {
  flex: 4;
}
.optionsBtn #submitBtn {
  background-color: #02dc31 !important;
  border-color: #02dc31 !important;
}
.optionsBtn #submitBtn:hover {
  color: #8e8e9c;
  box-shadow: 1px 5px 10px rgba(0,0,0,0.3);
  transition: 0.5s;
}
</style>