<template>
  <header class="header">
    <div class="sideIcons">
      <div class="logo">
        <img src="./assets/logo.png" />
      </div>
      <nav class="navIcons">
        <i class="fa-solid fa-house fa-2x"></i>
        <i class="fa-solid fa-shop fa-2x"></i>
        <i class="fa-regular fa-user fa-2x"></i>
        <i class="fa-regular fa-pen-to-square fa-2x"></i>
        <i class="fa-solid fa-gear fa-2x"></i>
      </nav>
    </div>
    <div class="sideSelection">
      <div class="sideLogo">
        <img src="./assets/InstagramLogo.webp" alt="LogoEnterprise" />
      </div>
      <ul class="listUl">
        <router-link class="linkVenda" to="venda">
          <li class="listLi">
            <i class="fa-solid fa-store"></i>
            <span>Vender</span>
          </li>
        </router-link>
        <li class="listLi">
          <i class="fa-solid fa-table"></i>
          <span>Listar vendas</span>
        </li>
      </ul>
    </div>
    <router-view />
  </header>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Inter", sans-serif;
}

.header {
  display: flex;
}

.sideIcons {
  height: 100vh;
  min-width: 75px;
  background-color: blueviolet;
  box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.137);
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85px;
}

.logo img {
  height: 45%;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.37));
}

.navIcons {
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 85px);
}

.navIcons i {
  color: white;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.37));
  transition: 0.2s;
  cursor: pointer;
}

.navIcons i:hover {
  margin-left: 10px;
}

.sideSelection {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  width: 200px;
  height: 100vh;
  box-shadow: 3px 0px 10px rgba(151, 151, 151, 0.24);
}

.sideLogo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
}

.sideLogo img {
  width: 60%;
}

.listUl {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100% !important;
  /* border: 1px solid red; */
}

.linkVenda{
  width: 100%;
}

.listLi {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 5px;
  height: 45px;
  cursor: pointer;
  color: black;
  text-decoration: none;
}

.listLi:hover {
  box-shadow: 3px 0px 10px rgba(151, 151, 151, 0.24);
}
</style>
