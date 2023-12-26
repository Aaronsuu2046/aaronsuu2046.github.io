<template>
  <div class="gameBtn levelBtn">
    <button v-for="number in data"
      :id="number"
      :class="{ active: currentNumber === number}"
      @click="$emit('levelClick', number)">
      {{ number }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'LevelButton',
  props: {
    data: {
      type: Number,
      required: true
    },
    currentNumber: {
      type: Number,
      required: true
    }
  },
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
    border:2px solid #02bbdc;
    font-size: 30px;
    justify-content: center;
    align-items: center;
}

.gameBtn *:hover {
    color: #fff;
    transform: translate(0px, -5px);
    transition: 0.5s;
}

/* level */
.levelBtn {
    margin: 0;
}
.levelBtn * {
    background-color: #eee;
    color: #8e8e9c;
    border-radius: 50%;
    height: 50px;
    width: 50px;
}

.levelBtn .active {
    color: #fff;
    background-color: #ADC090;
    transition: 0.5s;
}

.levelBtn :hover {
  background-color: #ADC090;
}
</style>