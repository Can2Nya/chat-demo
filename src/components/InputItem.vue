<template>
  <div class="root">
    <input v-model="msg" />
    <button @click="sendMsg">Send</button>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Emit, Vue,
} from 'vue-property-decorator';

@Component
export default class InputItem extends Vue {
  msg: string = '';

  @Emit('send')
  sendMsg(): IMassage {
    const msg: IMassage = {
      avatar: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png',
      name: 'Me',
      text: this.msg,
      time: `${Math.round((new Date()).getTime() / 1000)}`,
    };
    this.msg = '';
    return msg;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  background-color: #fff;
}

input {
  width: 80%;
  font-size: 1.2rem;
  line-height: 1.5rem;
  outline: none;
  border: 0;
}

button {
  border: 0;
  padding: 10px 5px;
  font-size: 1rem;
  font-weight: 100;
  width: 20%;
  background-image: linear-gradient(to bottom right, #af00ff, #3d11b1);
  color: #fff;
  outline: none;
}
</style>
