<template>
  <div class="gameWindow">
    <LevelButton
      @levelClick="changeCurrentLevel"
      :data="1"
      :currentNumber="currentLevel"
    ></LevelButton>
    <div class="board">
      <div class="left">
        <h3>這是臺鐵的火車時刻表。</h3>
        <div class="blanks">
          <table>
            <tr>
              <th style="width: 80px">
                <div class="title">
                  <b>車次</b>
                  <em>站名</em>
                </div>
              </th>
              <th>110</th>
              <th>122</th>
              <th>116</th>
            </tr>
            <tr v-for="content in blankContent">
              <td class="name">
                {{ content.city }}
              </td>
              <td v-for="time in content.time">
                {{ time }}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="right">
        <ol>
          <li v-for="(question, qid) in data.questions">
            <h4>{{ question }}</h4>
            <div class="question" v-if="qid === 0">
              <span>（</span>
              <input v-model="answers[qid]" />
              <span>）午（</span>
              <input v-model="answers[qid + 1]" />
              <span>）時（</span>
              <input v-model="answers[qid + 2]" />
              <span>）分</span>
            </div>
            <div class="question" v-if="qid >= 1">
              <span>車次（</span>
              <input v-model="answers[qid + 2]" />
              <span>）的火車</span>
            </div>
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
  name: "MA3016",
  components: {
    LevelButton,
    OptionButton,
  },
  props: {
    data: {
      type: Object,
      default: {
        id: "MA3016",
        questions: [],
      },
    },
  },
  data() {
    return {
      gameId: "MA3016",
      currentLevel: 1,
      answers: [],
      optionsActive: ["previous", "start", "next", "hint", "record", "submit"],
      levels: 1,
      blankContent: [
        {
          city: "高雄",
          time: ["07 : 54", "12 : 05", "09 : 09"],
        },
        {
          city: "臺南",
          time: ["08 : 32", "12 : 42", "09 : 46"],
        },
        {
          city: "嘉義",
          time: ["08 : 57", "13 : 28", "10 : 28"],
        },
        {
          city: "臺中",
          time: ["09 : 54", "14 : 45", "11 : 45"],
        },
        {
          city: "板橋",
          time: ["11 : 26", "16 : 51", "-"],
        },
        {
          city: "臺北",
          time: ["11 : 37", "17 : 03", "14 : 03"],
        },
      ],
      rowIndex: 6,
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
  },
};
</script>

<style scoped>
.gameWindow {
  display: flex;
  flex-direction: column;
}

.board {
  display: flex;
  width: 900px;
  height: 650px;
  background-color: #eee;
  border: 5px solid #adc090;
  border-radius: 10px;
  box-sizing: content-box;
}

.board .left {
  flex: 1.2;
  position: relative;
}

.left h3 {
  position: absolute;
  top: 15%;
  left: 7%;
  font-weight: bold;
}

table {
  border-collapse: collapse;
  border: 1px #525152 solid;
  width: 90%;
  margin: 0 auto;
  margin-top: 35%;
}
th,
td {
  padding: 0;
  border: 1px #525152 solid;
  text-align: center;
  font-size: 24px;
  line-height: 50px;
}
th {
  background: #9cc1dd;
}
tr td:first-child {
  background: #bdc3d8;
}

td.name {
  font-weight: bold;
}

/*模拟对角线*/
.title {
  border-top: 50px #9cc1dd solid; /*上边框宽度等于表格第一行行高*/
  width: 0px; /*让容器宽度为0*/
  height: 0px; /*让容器高度为0 #9db4da*/
  border-left: 80px #bdc3d8 solid; /*左边框宽度等于表格第一行第一格宽度*/
  position: relative; /*让里面的两个子容器绝对定位*/
}

b,
em {
  font-size: 17px;
}

b {
  font-style: normal;
  display: block;
  position: absolute;
  top: -63px;
  left: -38px;
  width: 35px;
}
em {
  font-style: normal;
  display: block;
  position: absolute;
  top: -40px;
  left: -75px;
  width: 55x;
}

.board .right {
  flex: 1;
  padding: 10% 3% 0 0;
  border: none;
}

.right h4 {
  letter-spacing: 1px;
  line-height: 30px;
}

.right span {
  font-size: 24px;
  letter-spacing: 1px;
}

.right .question {
  margin-bottom: 10%;
}

.right input {
  border: none;
  background-color: transparent;
  width: 40px;
  text-align: center;
  font-size: 24px;
}

.right input:focus {
  border: none;
  outline: none;
}

ol li::marker {
  font-size: 24px;
}
</style>
