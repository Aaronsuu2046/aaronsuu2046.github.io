<template>
  <div class="gameWindow">
    <LevelButton @levelClick="changeCurrentLevel" :data="5" :currentNumber="currentLevel"></LevelButton>
    <div class="myCanvas">
      <div class="gameRule">
        <h1>遊戲玩法：</h1>
        <div class="context">
        </div>
        <h1>準備好了嗎？點擊遊戲開始！</h1>
      </div>
    </div>
    <OptionButton :optionsActive="optionsActive" @optionsEvent="optionsEvent"></OptionButton>
    
  </div>
</template>

<script>
import LevelButton from '@/components/LevelButton.vue';
import OptionButton from '@/components/OptionButton.vue';
import fetchJson from '@/utilitys/fetch-json.js';

export default {
  name: 'MA3011',
  components: {
    LevelButton,
    OptionButton,
  },
  data() {
    return {
      gameId: 'MA3011',
      data: [
      ],
      currentLevel: 1,
      optionsActive: ["previous", "start", "next", "hint", "record", "submit"],
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
    }
  },
  mounted() {
    (async () => {
      const res = await fetchJson('/math/grade30-game-info.json');

      this.data = res.data.unit_1.filter((item) => {
        return item.id === this.gameId;
      })[0];
      console.log(this.data);
    })();
  },
};
</script>

<style>
.content {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.gameWindow {
  display: flex;
  flex-direction: column;
}

.myCanvas {
  position: relative;
  display: flex;
  width: 900px;
  height: 650px;
  background-color: #eee;
  border: 5px solid #ADC090;
  border-radius: 10px;
  box-sizing: content-box;
}

/* Rule */
.gameRule {
  position: absolute;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background-color: #eee;
}
.gameRule h1 {
  font-weight: bold;
  font-size: 40px;
}
.gameRule>:first-child {
  flex: 1;
  margin: 4rem;
}
.gameRule .context {
  flex: 8;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 8rem;
}
.gameRule>:last-child {
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: end;
  margin: 4rem;
}
</style>