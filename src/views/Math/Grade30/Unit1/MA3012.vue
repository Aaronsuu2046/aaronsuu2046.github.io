<template>
  <div class="gameWidonw">
    <div class="gameBtn levelBtn">
      <button class="level1">1</button>
      <button class="level2">2</button>
      <button class="level3">3</button>
      <button class="level4">4</button>
      <button class="level5">5</button>
    </div>
    <div class="canvas">
      <canvas class="canvas1"></canvas>
      <div class="gameRule">
        <h1 id="start">
          遊戲玩法：
          <span id="version">V0.1.7</span>
        </h1>
        <h1 class="context">電腦使用滑鼠滾輪上下調整刻度</h1>
        <h1 class="context">平板使用觸控上下滑動調整刻度</h1>
        <h1 class="context">填入相對的容量後，送出答案</h1>
        <h1 class="context">與題目的要求符合過關</h1>
        <h1 id="end">準備好了嗎？點擊遊戲開始！</h1>
      </div>
      <div class="topic"></div>
      <div class="lives"></div>
      <div class="game_area">
        <div class="water_scale"></div>
        <div class="water_container">
          <div class="milliliterContainer">
            <li class="top">10</li>
            <li class="mid">5</li>
            <li class="bottom">0</li>
          </div>
          <div class="water"></div>
          <ul class="scales"></ul>
        </div>
        <div class="water_control">
          <div class="updown">⇅</div>
        </div>
      </div>
      <div class="result">
        <h1 id="bingo">Ｏ</h1>
        <h1 id="dada">Ｘ</h1>
        <h1></h1>
      </div>
      <div id="firework-container"></div>
    </div>
    <div class="gameBtn optionsBtn">
      <button id="lastBtn">上一關</button>
      <button id="startBtn">遊戲開始</button>
      <button id="nextBtn">下一關</button>
      <button id="hintBtn">提示</button>
      <button id="submitBtn" class="jumpBtn">送出答案</button>
    </div>
  </div>
</template>

<script>
import LevelButton from "@/components/LevelButton.vue";
import OptionButton from "@/components/OptionButton.vue";

export default {
  name: "MA30",
  components: {
    LevelButton,
    OptionButton,
  },
  data() {
    return {
      gameData: [
        { lives: 3, bottom: [6, 6, 6, 6], top: [1, 2, 3, 4] },
        { lives: 3, bottom: [7, 7, 7, 7], top: [2, 3, 4, 5] },
        { lives: 3, bottom: [8, 8, 8, 8], top: [3, 4, 5, 6] },
        { lives: 3, bottom: [9, 9, 9, 9], top: [5, 6, 7, 8] },
        { lives: 3, bottom: [10, 10, 10, 10], top: [6, 7, 8, 9] },
      ],
      currentLevel: 1,
    };
  },
  methods: {
    changeCurrentLevel(number) {
      this.currentLevel = number;
    },
  },
  mounted() {
    const GAME_FILE = "FILE";
    const GAME_ALIVE = "ALIVE";
    const GAME_WIN = "WIN";
    const LAST_BTN = "lastBtn";
    const START_BTN = "startBtn";
    const NEXT_BTN = "nextBtn";
    const SUBMIT_BTN = "submitBtn";
    const HINT_BTN = "hintBtn";
    const gameArea = document.querySelector(`.game_area`);
    const gameBtn = [...document.querySelectorAll(`.gameBtn *`)];
    const water = document.querySelector(`.water`);
    const water_scale = document.querySelector(`.water_scale`);
    const water_control = document.querySelector(".water_control");
    const topic = document.querySelector(".topic");
    const scales = document.querySelector(".scales");
    const gameRule = document.querySelector(".gameRule");
    // const firework_sound = document.getElementById('win');
    const fireworkContainer = document.querySelector("#firework-container");
    const fireworksUrl = "../../../../assets/images/game_images/fireworks.gif";
    let level = 0,
      lives = 3,
      milliliter = 0,
      start = 0,
      end = 10,
      tolerance = 1,
      delay = 40;
    let act = "",
      hint = `${milliliter} ml`;
    let isHint,
      isWrong = false;
    let gameState = GAME_FILE;
    let answer = getRandomNumber();
    let winArr = [];

    setLives(lives);
    topic.textContent = answer;

    gameBtn.forEach((item) => {
      item.addEventListener("click", (e) => {
        console.log(e.target.id);
        let className = e.target.parentElement.classList.value;
        if (className.includes(`levelBtn`)) {
          level = parseInt(e.target.textContent);
          changeLevel();
        } else {
          act = e.target.id;
          if (act === LAST_BTN) {
            backLevel();
          } else if (act === NEXT_BTN) {
            goLevel();
          } else if (act === START_BTN) {
            startGame();
          } else if (act === SUBMIT_BTN) {
            checkAnswer();
          } else if (act === HINT_BTN) {
            if (lives > 0) return;
            if (!isWrong) {
              return;
            }
            if (isHint) {
              isHint = false;
              writeWaterScale("");
              return;
            }
            isHint = true;
            hint = `目前為：${milliliter} ml`;
            writeWaterScale(hint);
          }
        }
      });
    });

    gameArea.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (milliliter > end || gameState !== GAME_ALIVE) {
        return;
      }
      if (e.deltaY < 0 && milliliter < end) {
        milliliter += tolerance;
      } else if (e.deltaY > 0 && milliliter > start) {
        milliliter -= tolerance;
      }
      water.style.height = `${((start + milliliter) / end) * 100}%`;
      if (isHint) {
        hint = `目前為：${milliliter} ml`;
        writeWaterScale(hint);
      }
    });

    let active = false;
    let lastTouchY,
      currentTouchY = null;

    gameArea.addEventListener("touchstart", (e) => {
      e.preventDefault();
      lastTouchY = e.touches[0].clientY;
      active = true;
    });

    gameArea.addEventListener("touchmove", (e) => {
      e.preventDefault();
      if (active) {
        if (milliliter > end || gameState !== GAME_ALIVE) {
          return;
        }
        currentTouchY = e.touches[0].clientY;
        if (lastTouchY !== null) {
          const deltaY = currentTouchY - lastTouchY;
          if (deltaY < -delay && milliliter < end) {
            // moved up
            milliliter += tolerance;
            lastTouchY = currentTouchY;
          } else if (deltaY > delay && milliliter > start) {
            // moved down
            milliliter -= tolerance;
            lastTouchY = currentTouchY;
          }
        }

        water.style.height = `${((start + milliliter) / end) * 100}%`;
        if (isHint) {
          hint = `"目前為：${milliliter} ml`;
          writeWaterScale(hint);
        }
      }
    });

    gameArea.addEventListener("touchend", () => {
      active = false;
    });

    function startGame() {
      if (gameState === GAME_ALIVE) {
        return;
      }
      if (gameState === GAME_WIN) {
        resetGame();
      }
      if (level === 0) {
        level = 1;
        $(gameBtn[0]).addClass("active");
      }
      $("#nextBtn").removeClass("jumpBtn");
      gameState = GAME_ALIVE;
      gameRule.style.display = "none";
      isHint = false;
      lives = 3;
      setLives(lives);
      writeWaterScale("");
      let mid = (end - start) / 2;
      document.querySelector(".top").textContent = end;
      document.querySelector(".mid").textContent = mid;
      document.querySelector(".bottom").textContent = start;
      milliliter = start;
      const scalesCount =
        (end - start) / tolerance + 1 - $(scales).children().length;
      if (scalesCount < 0) {
        $(scales).children("li").slice(0, Math.abs(scalesCount)).remove();
      } else {
        for (let i = 0; i < scalesCount; i++) {
          $(scales).append("<li>");
        }
      }
      // $(`.scales :nth-child(${Math.ceil($(scales).children().length / 2)})`).css("width", "25px");

      water.style.height = `${((start + milliliter) / end) * 100}%`;
      answer = getRandomNumber();
      topic.textContent = answer;
    }

    function checkAnswer() {
      if (gameState !== GAME_ALIVE) {
        return;
      }
      if (milliliter === answer) {
        gameState = GAME_WIN;
        winArr.push(level);
        document.getElementById("correct").play();
        document.getElementById("bingo").style.display = "block";
        set_off_fireworks();
        setTimeout(() => {
          document.getElementById("bingo").style.display = "none";
        }, 2500);
        $("#nextBtn").addClass("jumpBtn");
      } else {
        document.getElementById("wrong").play();
        document.getElementById("dada").style.display = "block";
        setTimeout(() => {
          document.getElementById("dada").style.display = "none";
        }, 2500);
        $(gameBtn[level - 1]).removeClass("bingo");
        winArr.pop(level);
        $(gameBtn[level - 1]).addClass("active");
        isWrong = true;
        lives -= 1;
        setLives(lives);
      }
    }

    function backLevel() {
      if (level <= 1) {
        level = 5;
      } else {
        level -= 1;
      }
      changeLevel();
    }

    function goLevel() {
      if (level >= 5) {
        level = 1;
      } else {
        level += 1;
      }
      changeLevel();
    }

    function changeLevel() {
      if (level === 1) {
        delay = 40;
        end = 10;
        tolerance = 1;
      } else if (level === 2) {
        delay = 40;
        end = 50;
        tolerance = 5;
      } else if (level === 3) {
        delay = 13;
        end = 300;
        tolerance = 10;
      } else if (level === 4) {
        delay = 20;
        end = 1000;
        tolerance = 50;
      } else if (level === 5) {
        delay = 20;
        end = 2000;
        tolerance = 100;
      }
      resetGame();
    }

    function resetGame() {
      gameState = GAME_FILE;
      // firework_sound.pause();
      $(fireworkContainer).css("display", "none");
      gameBtn.forEach((item, index) => {
        $(item).removeClass("active");
        if ($.inArray(index + 1, winArr) !== -1) {
          $(item).addClass("bingo");
        } else if (index + 1 === level) {
          $(item).addClass("active");
        }
      });
      gameRule.style.display = "block";
    }

    function set_off_fireworks() {
      // firework_sound.currentTime = 1.5;
      // firework_sound.play();
      fireworkContainer.style.display = "block";
      showFirework();
      // setTimeout(()=>{firework_sound.pause()}, 3000);
      let count = 0;
      while (count < 2500) {
        let milliseconds = Math.floor(Math.random() * (800 - 400 + 1)) + 400;
        count += milliseconds;
        setTimeout(showFirework, count);
      }
      setTimeout(() => {
        fireworkContainer.style.display = "none";
      }, count);
    }

    function showFirework() {
      for (let i = 0; i < 5; i++) {
        let width = 100 * (Math.random() * 2.5);
        const fireworksElement = document.createElement("img");
        fireworksElement.src = fireworksUrl;
        fireworksElement.style.position = "absolute";
        fireworksElement.style.width = `${width}px`;
        fireworksElement.style.height = "auto";
        fireworksElement.style.left =
          Math.floor(Math.random() * (fireworkContainer.clientWidth - width)) +
          "px";
        fireworksElement.style.top =
          Math.floor(
            Math.random() * (fireworkContainer.clientHeight - width * 1.5)
          ) + "px";
        fireworkContainer.appendChild(fireworksElement);
      }
      setTimeout(removeFirework, 1194);
    }

    function removeFirework() {
      for (let i = 0; i < 5; i++) {
        fireworkContainer.removeChild(fireworkContainer.children[0]);
      }
    }

    function getRandomNumber() {
      const range = Math.ceil((end - start) / tolerance);
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * (range + 1));
      } while (start + randomIndex * tolerance === 0);
      return start + randomIndex * tolerance;
    }

    function throttle(func, limit) {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    }

    $(".jumpBtn").on("animationiteration", () => {
      $(".jumpBtn").css("animation-play-state", "paused");
      setTimeout(() => {
        $(".jumpBtn").css("animation-play-state", "running");
      }, 2000);
    });

    function setLives(lives) {
      const count = lives - $(".lives").children().length;
      if (count === 0 || lives < 0) return;
      if (count < 0) {
        $(".lives > :last-child").remove();
        return;
      }
      for (let i = 0; i < count; i++) {
        const livesImg = $("<img>")
          .attr("src", "../../../../assets/images/game_images/lives.svg")
          .attr("alt", "lives image")
          .attr("width", "60")
          .attr("height", "auto")
          .css("margin-right", "-30px");
        $(".lives").append(livesImg);
      }
    }

    function writeWaterScale(text) {
      water_scale.textContent = text;
    }
  },
};
</script>

<style scoped>
* {
  /* border: solid 2px black; */
}

body {
  right: 0;
  font-family: "微軟正黑體";
  margin: 0;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.gameWindow {
  width: 800px;
}

/* game view */
.canvas {
  position: relative;
  display: flex;
  width: 800px;
  height: 600px;
}

.canvas .topic {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 40px;
  font-weight: bold;
  color: black;
}

.canvas .topic::before {
  content: "題目為：";
}

.canvas .topic::after {
  content: " 毫升";
}

.lives {
  position: absolute;
  top: 2%;
  width: 100px;
  right: 10%;
}
.canvas .canvas1 {
  width: 100%;
  height: 100%;
  border: 5px solid #02bbdc;
  background-color: #eee;
  border-radius: 10px;
  box-sizing: border-box;
}

/* game rule */
.canvas .gameRule {
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: #eee;
  border: 5px solid #02bbdc;
  background-color: #eee;
  border-radius: 10px;
  box-sizing: border-box;
}

.canvas .gameRule * {
  font-size: 40px;
}

.canvas .gameRule #start #version {
  position: absolute;
  font-size: 20px;
  top: 0%;
  right: 10%;
  color: #bbb;
}

.canvas .gameRule .context {
  position: relative;
  transform: translateX(15%);
}

.canvas .gameRule #start {
  transform: translateX(5%);
}

.canvas .gameRule #end {
  transform: translateX(30%);
}

/* level */
.gameBtn {
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.gameBtn * {
  border: 2px solid #02bbdc;
  font-size: 30px;
  justify-content: center;
  align-items: center;
}

.gameBtn *:hover {
  transform: translate(0px, -5px);
  transition: 0.5s;
}

.levelBtn {
  height: 60;
  padding-top: 10px;
  margin: 0;
}
.levelBtn * {
  background-color: #eee;
  color: #8e8e9c;
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

.levelBtn *:hover,
.levelBtn *.active {
  background-color: #02bbdc;
  color: #fff;
  transition: 0.5s;
}

.bingo {
  border: 2px solid green;
  background-color: green;
  color: #fff;
}

/* options */
.optionsBtn * {
  background-color: #02bbdc;
  color: #fff;
  border-radius: 10px;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 5px;
  box-sizing: border-box;
}

.optionsBtn *:hover {
  background-color: #eee;
  color: #8e8e9c;
  transition: 0.5s;
}

.optionsBtn {
  position: absolute;
  z-index: 9999;
}

.optionsBtn #lastBtn {
  flex: 2;
}
.optionsBtn #startBtn {
  flex: 3;
}
.optionsBtn #nextBtn {
  flex: 2;
}
.optionsBtn #submitBtn {
  flex: 3;
  background-color: #02dc31;
  border-color: #02dc31;
}

.jumpBtn {
  animation: jump 1s ease-in-out;
  animation-iteration-count: infinite;
}
@keyframes jump {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.shadow {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
}

/* container */

.game_area {
  display: flex;
  position: absolute;
  width: 100%;
  height: 80%;
  bottom: 0%;
  left: 0%;
  margin-bottom: 20px;
  justify-content: center;
}

.game_area .water_container {
  position: relative;
  height: 100%;
  bottom: 0%;
  border: solid 2px black;
  border-top: none;
  flex: 5;
}

.game_area .water_scale {
  font-size: 30px;
  font-weight: bold;
  transform: translate(5%, -9%);
  flex: 3;
  color: red;
}

.game_area .water_control {
  position: relative;
  flex: 2;
}

.game_area .water_control .updown {
  position: absolute;
  font-size: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.water_container .water {
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0%;
  left: 50%;
  background-color: #02bbdc;
  transform: translate(-50%, 0%);
}

.water_container .line {
  position: absolute;
  width: 30px;
  border: solid 2px black;
  top: 50%;
}

.scales {
  display: flex;
  position: absolute;
  z-index: 99;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  top: 0%;
}
.scales * {
  height: 0;
  width: 15px;
  border: solid 1px black;
}
.scales :first-child {
  border: none;
}
.scales :nth-child(5n + 1) {
  width: 20px;
}
.scales :last-child {
  width: 25px;
}
.milliliterContainer {
  display: flex;
  position: relative;
  height: 110%;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  top: -5%;
  left: 10%;
  list-style: none;
}

.milliliterContainer * {
  position: absoulte;
  z-index: 999;
  font-size: 30px;
}

.milliliterContainer *::after {
  content: "ml";
  font-size: 30px;
  padding: 5px;
}
.milliliterContainer .bottom {
  transform: translateY(-50%);
}
/* fireworks */

#firework-container {
  position: absolute;
  display: none;
  z-index: 99;
  top: 15%;
  left: 5%;
  width: 90%;
  height: 85%;
}

/* result */

.result #bingo,
#dada {
  position: absolute;
  margin: 0;
  top: -5%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 99;
  display: none;
  font-size: 500px;
}

.result #bingo {
  color: green;
}
.result #dada {
  color: red;
}
</style>
