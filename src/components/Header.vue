<template>
  <div class="head">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private text!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  position: fixed;
  width: 100%;
  background-image: linear-gradient(to bottom right, rgba(159, 71, 199, 0.7), rgba(61, 17, 177, 0.7));
  text-align: left;
  color: #fff;
  padding: .7rem;
  font-size: 1.2rem;
  z-index: 99;
}

</style>
