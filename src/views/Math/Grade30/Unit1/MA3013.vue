<template>
  <div class="gameWindow">
    <LevelButton
      @levelClick="changeCurrentLevel"
      :data="1"
      :currentNumber="currentLevel"
    ></LevelButton>
    <div class="board">
      <div class="left">
        <div class="column">
          <h5 v-for="i in 6">第 {{ i }} 行</h5>
        </div>
        <div class="blocks">
          <div
            v-for="i in settings.width * settings.height"
            class="block"
            :style="blockCss(15, 20, blockColor[getColorId(i - 1)])"
          >
            <p class="number" v-if="isNumber(i)">{{ i }}</p>
            <div class="answer" v-if="isNumber(i) === false">
              <input
                type="text"
                :id="i"
                v-model="userNumber[i]"
                :class="[
                  { wrong: !checkNum(userNumber[i], i, 'wrong') },
                  { correct: checkNum(userNumber[i], i) },
                ]"
                :disabled="
                  checkNum(userNumber[i], i) && isOperate.indexOf(i) !== -1
                "
                @change="operate(i)"
              />
            </div>
            <div class="doorHandle"></div>
          </div>
          <div
            class="bgc"
            :style="blockCss(15 * settings.width, 20 * settings.height)"
          ></div>
        </div>
      </div>
      <div class="right">
        <ol>
          <li v-for="(question, qid) in data.questions">
            <h3 :id="'questionId-' + qid">{{ question }}</h3>
            <label class="ans" v-if="qid !== 0">答：</label>
            <input
              v-model="answers[qid]"
              v-if="qid !== 0"
              :id="'answerId-' + qid"
            />
          </li>
        </ol>
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
  name: "MA3013",
  components: {
    LevelButton,
    OptionButton,
  },
  props: {
    data: {
      type: Object,
      default: {
        id: "MA3013",
        questions: [],
      },
    },
  },
  data() {
    return {
      gameId: "MA3013",
      currentLevel: 1,
      optionsActive: ["previous", "start", "next", "hint", "record", "submit"],
      settings: {
        width: 6,
        height: 4,
      },
      blockColor: ["#f7f4a3", "#fccd83", "#f47777", "#77b6f4"],
      notNumber: false,
      disableInput: [],
      isOperate: [],
      userNumber: [],
      numbers: [12, 14, 17, 19, 21, 23],
      answers: [],
    };
  },
  methods: {
    changeCurrentLevel(number) {
      this.currentLevel = number;
      console.log(number);
    },
    optionsEvent(option) {
      console.log(option);
      switch (option) {
        case 'hint':
          console.log('Oranges are $0.59 a pound.');
          break;
        case 'record':
          console.log('Oranges are $0.59 a pound.');
          break;
        case 'submit':
          console.log('Mangoes and papayas are $2.79 a pound.');
          break;
        default:
          console.log(`Sorry, we are out of ${expr}.`);
      }
      // 請在這裡寫開始遊戲、上一關、下一關等等等的邏輯
    },
    blockCss(w, h, color) {
      return {
        width: w + "%",
        height: h + "%",
        backgroundColor: color,
      };
    },
    getColorId(id) {
      let column = this.settings.width;
      let result = Math.floor(id / column);
      return result;
    },
    isNumber(number) {
      for (let j = 0; j < 6; j++) {
        if (this.numbers[j] == number) {
          return false;
        }
      }
      return true;
    },
    operate(id) {
      this.isOperate.push(id);
    },
    checkNum(num, id, classNameId) {
      if (num == undefined) {
        if (classNameId == "wrong") {
          return true;
        }
        return false;
      }
      for (let i = 0; i < 6; i++) {
        if (id == this.numbers[i]) {
          if (num == this.numbers[i]) {
            this.disableInput[id] = true;
            return true;
          }
          return false;
        }
      }
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
  width: 900px;
  height: 650px;
  background-color: #eee;
  border: 5px solid #adc090;
  border-radius: 10px;
  box-sizing: content-box;
}

.left {
  flex: 4;
  position: relative;
  padding: 0px 3%;
}

.left h5 {
  display: inline;
  margin: 0;
  margin-right: 20px;
  font-size: 19px;
}

.left .column {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 80px;
}

.left .block,
.left .bgc {
  box-sizing: border-box;
  display: inline-block;
  border: 2px solid #3f3f3f;
  margin: 0;
  vertical-align: top;
}

.left .block .doorHandle {
  position: absolute;
  width: 8px;
  height: 20px;
  background-color: #3f3f3f;
  top: 40px;
  left: 4px;
}

.left .block .number {
  margin: 5% 2% 0px 0px;
  display: flex;
  justify-content: center;
}

.right {
  flex: 3;
  justify-content: center;
  align-items: center;
  padding-top: 6%;
  position: relative;
}

.right .ans {
  margin-top: 10px;
}

[id^="questionId-"] {
  margin-top: 10%;
}

.blocks {
  padding: 30% 0 0 0;
  width: 100%;
  height: 100%;
}

.blocks .bgc {
  z-index: 1;
  margin: 0;
  position: relative;
  bottom: 66.6%;
  transform: translateY(-17%);
}

.blocks .bgc::before,
.blocks .bgc::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #000;
}

.blocks .bgc::before {
  transform-origin: 0 50%;
  transform: translate(100%, 0.4%) skewY(-45deg) scaleX(0.091) scaleY(1.009);
  background: rgba(0, 0, 0, 0.3);
}

.blocks .bgc::after {
  transform-origin: 0 0;
  transform: translate(8.3%, -9.8%) skewX(-45deg) scaleX(1.01) scaleY(0.095);
  background: rgba(0, 0, 0, 0.3);
}

.block {
  position: relative;
  z-index: 2;
}

.block input {
  border: none;
  border: 1px solid #3d3d3d;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 5% 2% 0px 0px;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 16px;
}

.block .wrong {
  z-index: 100000;
  border: 2px solid red;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}

.block .correct {
  border: none;
  z-index: 100000;
  border-color: transparent !important;
  color: #000;
  transition: 2.5s;
  background-color: transparent;
}

ol {
  margin: 0;
  margin-left: -10px;
}

ol li::marker {
  font-size: 30px;
}

h3 {
  margin-left: 5px;
  font-size: 30px;
  line-height: 40px;
}
</style>
