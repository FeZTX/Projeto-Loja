<template>
  <header class="sideIcons">
    <div class="logo">
      <img src="./assets/logo.png">
    </div>
    <nav class="navIcons">
      <i class="fa-solid fa-house fa-2x"></i>
      <i class="fa fa-camera-retro fa-2x"></i>
      <i class="fa-solid fa-house fa-2x"></i>
      <i class="fa-solid fa-house fa-2x"></i>
      <i class="fa-solid fa-house fa-2x"></i>
    </nav>
  </header>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.sideIcons {
  height: 100vh;
  width: 85px;
  background-color: blueviolet;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85px
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
}

.navIcons i:hover {
  margin-left: 10px;
}

</style>
