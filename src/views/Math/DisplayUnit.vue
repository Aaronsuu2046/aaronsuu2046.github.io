<template>
  <ul class="game-list">
    <li v-for="item in 10" :key="item" @click="changeCurrentGame(item)">
      {{ `第 ${item} 個遊戲` }}
    </li>
  </ul>
  <router-view
    v-if="currentGameData !== null"
    :name="currentGame"
    :data="currentGameData"
  ></router-view>
</template>

<script>
import fetchJson from "@/utilitys/fetch-json.js";

export default {
  name: "Games",
  props: {
    currentUnit: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      linkInfo: [],
      currentGame: "MA3011",
      data: null,
    };
  },
  methods: {
    changeCurrentGame(item) {
      this.currentGame = `${this.currentUnit}${item}`;
      console.log(this.currentGame);
    },
  },
  computed: {
    currentGameData() {
      return this.data === null ? null : this.data[this.currentGame];
    },
  },
  mounted() {
    (async () => {
      const res = await fetchJson("/math/grade30-game-info.json");
      const nowUnit = `unit_${parseInt(this.currentUnit.slice(-1), 16)}`;
      this.data = res.data[nowUnit];
      console.log(this.data, this.data[this.currentGame]);
    })();
  },
  created() {
    console.log("gameView");
  },
};
</script>

<style lang="scss" scoped>
.game-list {
  position: absolute;
  left: 0px;
  background: #000;
  color: white;
  cursor: pointer;
}
</style>
