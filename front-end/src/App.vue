<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/teams">The Teams</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    
    <FooterComponent/>
  </div>
</template>

<style>
/*
primary: rgb(39, 92, 178)
secondary: rgb(114, 122, 131)
dark: rgb(34, 31, 32)
*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

nav {
  text-align: left;
  padding: 20px;
  font-size: 20px;
  background-color: rgb(34, 31, 32);
  margin: -10px;
  margin-bottom: 50px;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: rgb(23, 87, 189);
}
</style>