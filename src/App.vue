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
        <i class="fa-solid fa-house fa-2x"></i>
        <i class="fa-solid fa-house fa-2x"></i>
      </nav>
    </div>
    <div class="sideSelection">
      <ul class="listUl">
        <li class="listLi">
          <i class="fa-solid fa-store"></i>
          <span>Vender</span>
        </li>
        <li class="listLi">
          <i class="fa-solid fa-table"></i>
          <span>Listar vendas</span>
        </li>
      </ul>
    </div>
  </header>
  <router-view />
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
  width: 75px;
  background-color: blueviolet;
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
  justify-content: center;
  width: 200px;
  height: 100vh;
  box-shadow: 3px 0px 10px rgba(151, 151, 151, 0.24);
}

.listUl {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* border: 1px solid red; */
}

.listLi {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 5px;
  height: 45px;
  cursor: pointer;
}

.listLi:hover {
  box-shadow: 3px 0px 10px rgba(151, 151, 151, 0.24);
}
</style>
