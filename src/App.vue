<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/quote">Quote</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view />
    <!-- <Todo /> -->
  </div>
</template>

<script>
/*import Todo from './components/Todo.vue'*/

export default {
  name: 'app',
  components: {
    //Todo
  }
}
</script>

<style src="./assets/css/app.css" />
