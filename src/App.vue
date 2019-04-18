<template>
  <div id="app">
    <Chat class="full-layout" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Chat from './pages/Chat.vue';

@Component({
  components: {
    Chat,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
body, html, #app, .full-layout {
  margin: 0;
  height: 100%;
}

* {
  box-sizing: border-box;
}

</style>
