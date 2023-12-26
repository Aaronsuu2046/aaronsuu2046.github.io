<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-expand-sm navbar-dark sticky-top" style="background-color: #57B9D9; height: 90px;">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" alt="Home">
          <img src="@/assets/images/nav_bar/logo.png" class="img-fluid" style="max-width: 90%;">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" ></span>
        </button>
        <!-- 數學單元 -->
        <div class="mathUnit">單元：
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
      </div>
    </nav>
  </header>
  
  <div class="content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Math',
  data() {
    return {
    };
  },
  methods: {
    
  },
  mounted() {
    
  },
};
</script>

<style>
.navbar-toggler {
    z-index:1000;
    border: 10px;
    color: blueviolet;
    background-color: white;
    margin-top: 10px;
}
.navbar-collapse {
    z-index: 1000;
}

.nav-link{
    background-color: #57b9d985;
    
}

.navbar-brand {
   margin-bottom: 8px;
}

.nav2 {
    display: none;
}

.nav-link:hover .nav1{
    display: none;
    transition-delay: 5s;
}

.nav-link:hover .nav2{
    display: block;
    transition-delay: 5s;
}

.sidebar {
    float: left;
    /*text-align: left; */

    padding-top: 90px;
}

.nav-item2{
    padding-top: 20px;
}
/* Unit */
.mathUnit {
    display: flex;
    width: 60%;
    justify-content: space-around;
    font-size: 30px;
    color: #eee;

}
.mathUnit button{
    font-size: 30px;
    width: 50px;
    border-radius: 50%;
    border: solid 2px #7b8e5d;
    background-color:#ADC090;
}
.mathUnit button:hover{
    color: aliceblue;
    background-color:#7b8e5d;
}
.content * {
    /* border: solid 2px black; */
}
.content {
    display: flex;
    justify-content: center;
}
</style>