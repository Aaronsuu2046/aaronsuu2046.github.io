<template>
  <div class="gameWindow">
    <LevelButton
      @levelClick="changeCurrentLevel"
      :data="1"
      :currentNumber="currentLevel"
    ></LevelButton>
    <div class="board">
      <div class="top">
        <div class="description">
          <h3>這是臺灣好行公車某一段路的半價價目表</h3>
        </div>
        <div class="blanks">
          <table>
            <tr v-for="content in blankContent">
              <td v-for="price in content.prices">
                {{ price }}
              </td>
              <th class="name">
                {{ content.cities }}
              </th>
            </tr>
          </table>
        </div>
      </div>
      <div class="bottom">
        <ol>
          <li v-for="(question, qid) in data.questions">
            <h4>
              {{ question }}（<input type="text" v-model="answers[qid]" />）元
            </h4>
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
  name: "MA3018",
  components: {
    LevelButton,
    OptionButton,
  },
  props: {
    data: {
      type: Object,
      default: {
        id: "MA3018",
        questions: [],
      },
    },
  },
  data() {
    return {
      gameId: "MA3018",
      currentLevel: 1,
      answers: [],
      optionsActive: ["previous", "start", "next", "hint", "record", "submit"],
      levels: 1,
      blankContent: [
        {
          cities: "臺鐵嘉義",
          prices: [],
        },
        {
          cities: "頂六",
          prices: ["12"],
        },
        {
          cities: "吳鳳廟",
          prices: ["20", "12"],
        },
        {
          cities: "觸口",
          prices: ["31", "18", "12"],
        },
        {
          cities: "龍美",
          prices: ["58", "43", "36", "25"],
        },
        {
          cities: "嚴頭坪",
          prices: ["71", "56", "48", "38", "13"],
        },
        {
          cities: "奮起湖",
          prices: ["87", "75", "67", "56", "30", "17"],
        },
        {
          cities: "阿里山",
          prices: ["120", "105", "98", "87", "62", "51", "49"],
        },
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
  flex-direction: column;
  position: relative;
  width: 900px;
  height: 650px;
  background-color: #eee;
  border: 5px solid #adc090;
  border-radius: 10px;
  box-sizing: content-box;
}

.board .top {
  margin: 0;
  padding: 0;
}

.board .blanks {
  position: relative;
  top: 15%;
  display: flex;
  justify-content: center;
}

.top h3 {
  font-weight: bold;
}

.description {
  position: absolute;
  top: 7%;
  right: 6%;
  font-size: 18px;
}

table {
  border-collapse: collapse;
}

th,
td {
  padding: 0;
  border: 1.5px #525152 solid;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
}

th {
  background: #9cc1dd;
}

td.name {
  font-weight: bold;
}

.blanks .name {
  width: 100px;
}

b,
em {
  font-size: 17px;
}

.blanks b {
  font-style: normal;
  display: block;
  position: absolute;
  top: -75px;
  left: -60px;
  width: 55px;
}

.board .bottom {
  position: absolute;
  bottom: 3%;
  left: 3%;
}

.bottom h4 {
  margin: 0;
  margin-bottom: 30px;
}

.bottom input {
  border: none;
  background-color: transparent;
  width: 60px;
  text-align: center;
  font-size: 24px;
  margin-top: 5px;
}

.bottom input:focus {
  border: none;
  outline: none;
}

.bottom input:hover {
  cursor: pointer;
}

ol li::marker {
  font-size: 24px;
}
</style>
