<template>
    <div>
      <header>
        <nav class="navbar navbar-expand-md navbar-dark sticky-top">
          <div class="container-fluid" style="width: 100%;">
            <a class="navbar-brand" href="https://ptwa-npo.github.io/" alt="Home">
              <img src="@/assets/images/nav_bar/logo.png" class="img-fluid" style="max-width: 90%;" />
            </a>
            <div class="collapse navbar-collapse sticky-top" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 navbar-nav-scroll">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="https://programtheworld.tw/donate/donate" alt="捐款" target="_blank">
                    <div class="nav1">
                      <img src="@/assets/images/nav_bar/donate.png" class="img-fluid" />
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#grade-title" alt="遊戲">
                    <img src="@/assets/images/nav_bar/sharing.png" class="img-fluid" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://programtheworld.tw/works/index" alt="耕耘" target="_blank">
                    <img src="@/assets/images/nav_bar/effort.png" class="img-fluid" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://programtheworld.tw/about/about?pagetarget=us" alt="關於" target="_blank">
                    <img src="@/assets/images/nav_bar/about2.png" class="img-fluid" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.facebook.com/program.the.world" alt="facebook" target="_blank">
                    <img src="@/assets/images/nav_bar/facebook.png" class="img-fluid" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  
      <div class="container-fluid">
        <div class="row main-menu">
          <div class="col-12 col-md-4">
            <a class="link-block" data-toggle="collapse" href="#menu1" role="button" aria-expanded="false" aria-controls="menu1">
              <img src="@/assets/images/grade_btn/mand.png" class="img-fluid" />
            </a>
          </div>
          <div class="col-12 col-md-4">
            <a class="link-block" data-toggle="collapse" href="#menu2" role="button" aria-expanded="false" aria-controls="menu2">
              <img src="@/assets/images/grade_btn/math.png" class="img-fluid" :class="{ active: activeMenu === 'menu2' }" />
            </a>
          </div>
          <div class="col-12 col-md-4">
            <a class="link-block" data-toggle="collapse" href="#menu3" role="button" aria-expanded="false" aria-controls="menu3">
              <img src="@/assets/images/grade_btn/tech.png" class="img-fluid" :class="{ active: activeMenu === 'menu3' }" />
            </a>
          </div>
        </div>
  
        <div class="row submenus">
          <div class="col-12">
            <div id="menu1" class="collapse multi-collapse">
              <div class="row">
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade1-3.png" class="img-fluid" ></a>
                </div>
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade2-3.png" class="img-fluid" ></a>
                </div>
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade3-3.png" class="img-fluid" ></a>
                </div>
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade4-3.png" class="img-fluid" ></a>
                </div>
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade5-3.png" class="img-fluid" ></a>
                </div>
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade6-3.png" class="img-fluid" ></a>
                </div>
            </div>
            </div>
            <div id="menu2" class="collapse multi-collapse">
              <div class="row">
                <div class="col">
                  <a href="#" alt="數學一上遊戲" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade1.png" class="img-fluid" ></a>
                </div>
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade2.png" class="img-fluid" ></a>
                </div>
                <div class="col">
                  <router-link :to="{ name: 'MA30' }" alt="數學三上遊戲" class="submenu-link-block">
                    <img src="@/assets/images/grade_btn/grade3.png" class="img-fluid" ></router-link>
                </div>
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade4.png" class="img-fluid" ></a>
                </div>
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade5.png" class="img-fluid" ></a>
                </div>
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade6.png" class="img-fluid" ></a>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade1-2.png" class="img-fluid" ></a>
                </div>
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade2-2.png" class="img-fluid" ></a>
                </div>
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade3-2.png" class="img-fluid" ></a>
                </div>
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade4-2.png" class="img-fluid" ></a>
                </div>
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade5-2.png" class="img-fluid" ></a>
                </div>
                <div class="col">
                  <a href="#" class="submenu-link-block"><img src="@/assets/images/grade_btn/grade6-2.png" class="img-fluid" ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeMenu: null,
      };
    },
    methods: {
      toggleMenu(menuId) {
        if (this.activeMenu === menuId) {
          this.activeMenu = null;
        } else {
          this.activeMenu = menuId;
        }
        console.log(this.activeMenu)
      },
    },
    mounted() {
      let collapseElements = document.querySelectorAll('.multi-collapse');      
      collapseElements.forEach((collapseEl) => {
        collapseEl.addEventListener('show.bs.collapse', () => {
          collapseElements.forEach((otherCollapseEl) => {
            if (otherCollapseEl !== collapseEl) {
              otherCollapseEl.classList.remove('show');
            }
          });
        });
      });
    },
  };
  </script>
  <style>
  body {
      background-image: url('@/assets/images/grade_btn/bg.png');
  }
  
  .navbar {
      background-color: #57B9D9; 
      height: 90px; 
      width: 100%; 
      margin: 0;
  }
  
  .link-block {
      display: block;
      margin-top: 35px;
  }   
  
  .submenus {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
  }
  
  .submenu-link-block {
      display: flex;
      color: white;
      margin: 5px;
      flex-wrap: wrap;
      justify-content: center;
      padding-top: 20px;
  }
  </style>