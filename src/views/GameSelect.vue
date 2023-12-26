<!-- PC 11/22 -->
<!-- This document wait for add js and vue Feature -->


<template>
    <header>
      <nav class="container navbar navbar-expand-lg navbar-light sticky-top justify-content-center" style="width: 100%;">
          <a class="navbar-brand mt-2 mb-2" href="#" alt="Home">
              <img src="@/assets/images/nav_bar/logo.png" class="img-fluid" />
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link" @click="ChangeSubject('Math')"><img src="@/assets/button/math.png"/></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" @click="ChangeSubject('Chinese')"><img src="@/assets/button/chinese.png"></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" @click="ChangeSubject('Technology')"><img src="@/assets/button/technology.png"></a>
                  </li>
              </ul>
          </div>
          <div class="container sticky-top" style="width: 30%;--bs-breadcrumb-divider: '>';">
            <ol class="breadcrumb mb-0" >
              <li class="breadcrumb-item text-white"><i class="bi bi-house"></i><a href="#"> 主頁</a></li>
              <li class="breadcrumb-item active text-white" aria-current="page"><i class="bi bi-book-half"></i><a>  {{Subjects[Subject]}}</a></li>
            </ol>
          </div>
      </nav>


    </header>
    <section class="GameSelectSection" style="overflow-y: hidden;">
        <div class="container">
            <div class="row">
                <div class="col-3 SideBar mt-4">
                    <div class="card">
                    <div class="card-body" :key="Refresh">
                        <h5 class="card-title mt-2">請選擇科目</h5>
                        <div class="list-group mt-2" v-for="(items,key) in ShowInfo" v-if="ShowInfo">
                          <a class="list-group-item list-group-item-action" v-on:click="SelectChapter(key)">{{ items.Title }}</a>
                        </div>
                    </div>
                  </div>
                </div>
                <!-- NF img 的屬性需要修正 fs-->
                <div class="col-8 container ItemFrame mt-4" v-if="Show" :key="Refresh">
                  <div class="Charpter mb-4 px-0" v-for="items in ShowInfo[SelectedChapter].Section" v-if="ShowInfo">
                  <div>
                      <h5 class="card-title mb-3">{{ items.Title }}</h5>
                      <div class="row GameCardGroup" style="overflow-x: auto;">
                        <div class="row">
                          <div v-for="item in items.Games" class="col-12 col-md-6 col-lg-4 d-flex align-self-stretch">
                            <div class="card GameCard my-2">
                              <div class="card-body">
                                <img src="@/assets/images/pics/cover_info.jpeg" class="card-img-top" alt="...">
                                <router-link :to="{ name: 'Game', params: { id: item.id, Grade: this.ShowGrade, Subject: this.Subject ,GameName: item.Name} }">
                                  <p class="h5 card-title mt-2">{{ item.Name }}</p>
                                </router-link>
                                <p class="card-text">{{ item.Description }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  </div>
                </div>
            </div>
        </div> 
    </section>
</template>

<script type="Model">
import fetchJson from '@/utilitys/fetch-json.js';
export default {
  data() {
    return {
      ShowGrade: 0,
      Subject: "Math", //預設科目
      ShowInfo: {},
      MathShowInfo: null,//準備渲染的資料
      ChineseShowInfo: null,
      TechnologyShowInfo: null,
      Subjects:{
        Math: "數學",
        Chinese: "國語",
        Technology: "多元科技",
      },
      SelectedChapter: null,
      Show:false,
      Refresh: 0,
      //定義科目種類
    };
  },
  created() {
    // 在這裡你可以存取 this.$route.params.id
    this.ShowGrade = this.$route.params.id;
    (async () => {
      var res = await fetchJson("/Grade"+this.ShowGrade+"/MathGrade"+this.ShowGrade+".json");
      this.MathShowInfo = res.data;
      res = await fetchJson("/Grade"+this.ShowGrade+"/ChineseGrade"+this.ShowGrade+".json");
      this.ChineseShowInfo = res.data;
      res = await fetchJson("/Grade"+this.ShowGrade+"/TechnologyGrade"+this.ShowGrade+".json");
      this.TechnologyShowInfo = res.data;
      console.log(this.MathShowInfo,this.ChineseShowInfo,this.TechnologyShowInfo);
      this.ShowInfo = this.MathShowInfo; //預設科目
      console.log(this.ShowInfo);
    })();
  },
  methods: {
    SelectChapter(key){
      this.SelectedChapter = String(key);
      console.log(this.SelectedChapter);
      this.Show = true;
    },
    ChangeSubject(Subject){
      this.Subject = Subject;
      if (Subject == "Math")
      {
        this.ShowInfo = this.MathShowInfo;
      }
      else if (Subject == "Chinese")
      {
        this.ShowInfo = this.ChineseShowInfo;
      }
      else if (Subject == "Technology")
      {
        this.ShowInfo = this.TechnologyShowInfo;
      }
      this.Refresh += 1;
      this.Show = false;
      this.$forceUpdate();
      console.log(this.Subject);
    }
  },
}
</script>

<style lang="scss" scoped>

header{
  background-color: #F19C79;
}
.navbar {
  background-color: #F19C79; 
  height: 10vh; 
  .navbar-brand {
    img{
        max-width: 70%
    }
  }
  img {
    max-width: 80%;
  }
}
.ItemFrame {
  height: 83dvh;
  overflow-y: scroll;
  // -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none;
  }
}
.SideBar {
  height: 83dvh;
  overflow-y: scroll;
  // -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none;
  }
}
.GameCardGroup{
  // -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none;
  }
}
section{
  height: 90vh;
  background-color: #FFFF;
}

.breadcrumb .breadcrumb-item {
  a {
    color: #FFFFFF; /* 替換為你想要的顏色 */
    font-size: 1.2em;
  }

}

.GameCard {
  transition: transform 0.3s ease; /* 平滑過渡效果 */
}

.GameCard:hover {
  transform: scale(1.07); /* 當滑鼠懸停時放大 5% */
}

.nav-link{
  transition: transform 0.3s ease; /* 平滑過渡效果 */
}



</style>