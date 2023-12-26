<template>
  <div class="gameWindow">
    <LevelButton
      @levelClick="changeCurrentLevel"
      :data="3"
      :currentNumber="currentLevel"
    ></LevelButton>
    <div class="board">
      <div class="description">
        <h2>{{ description[0] }}</h2>
      </div>
      <div class="question">
        <div class="level1" v-if="currentLevel === 1">
          <span v-if="data"> {{ data.questions[0] }} </span>
          <input type="text" style="text-align: center" />
          <span>個圖釘</span>
        </div>
      </div>
      <div class="blocks">
        <img src="./assets/MA3015_pin.png" alt="" />
      </div>
    </div>
    <OptionButton
      :optionsActive="optionsActive"
      @optionsEvent="optionsEvent"
    ></OptionButton>
  </div>
</template>

<script>
import LevelButton from "@/components/LevelButton.vue";
import OptionButton from "@/components/OptionButton.vue";
import fetchJson from "@/utilitys/fetch-json.js";

export default {
  name: "MA3015",
  components: {
    LevelButton,
    OptionButton,
  },
  props: {
    data: {
      type: Object,
      default: {
        id: "MA3015",
        questions: [],
      },
    },
  },
  data() {
    return {
      gameId: "MA3015",
      data: null,
      currentLevel: 1,
      optionsActive: ["previous", "start", "next", "hint", "record", "submit"],
      levels: 3,
      description: [
        "老師把圖畫用圖釘固定，由左到右排成一排，每一張和下一張共用 1 個圖釘",
      ],
    };
  },
  methods: {
    changeCurrentLevel(number) {
      this.currentLevel = number;
      console.log(number);
    },
    optionsEvent(option) {
      console.log(option);
      // 請在這裡寫開始遊戲、上一關、下一關等等等的邏輯
    },
    getQuestion(level) {
      let qid = Math.floor(Math.random() * 5);
      return this.data.questions[level][qid];
    },
  },
};
</script>

<style scoped>
.gameWindow {
  display: flex;
  flex-direction: column;
}

.board {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 650px;
  background-color: #eee;
  border: 5px solid #adc090;
  border-radius: 10px;
  box-sizing: content-box;
}

.question {
  justify-content: center;
  margin: 6% auto;
  font-size: 40px;
}

.question input {
  background-color: transparent;
  border: none;
  border: 1px solid #3d3d3d;
  border-radius: 4px;
  margin: 10px;
  width: 40px;
  height: 50px;
}

.blocks {
  display: flex;
  justify-content: center;
  margin-top: 8%;
}

.blocks .ditgit,
.decile {
  border: 1px solid #000;
  border-radius: 10px;
  overflow: hidden;
}

.blocks .text {
  text-align: center;
  writing-mode: vertical-lr;
  font-size: 30px;
  margin: 0 auto;
  padding: 15px 5px 0 5px;
  letter-spacing: 20px;
}

.blocks .text .spanTop {
  margin-bottom: 50px;
}

.blocks .control {
  display: flex;
  text-align: center;
  padding-left: 10px;
  font-size: 40px;
  margin: 0 auto;
}

.blocks input {
  width: 70px;
  height: 60px;
  border: none;
  border-top: 1px solid #000;
}
</style>
