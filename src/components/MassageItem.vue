<template>
  <div class="root" :direction="direction" :hide="hideInfo">
    <div class="avatar">
      <img class="avatar-main" :src="avatarUrl" />
    </div>
    <div class="msg">
      <div class="msg-main">
        <div class="name" v-if="!hideInfo">{{ name }}</div>
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MassageItem extends Vue {
  @Prop({ required: true }) private name!: string;

  @Prop({ required: true }) private msg!: string;

  @Prop({ required: true }) private avatarUrl!: string;

  // @Prop() private left!: boolean;
  // @Prop() private right!: boolean;
  @Prop({
    type: String,
    default: 'left',
    validator(value) {
      return ['left', 'right'].indexOf(value) !== -1;
    },
  }) private direction!: string;

  @Prop({
    type: Boolean,
    default: false,
  })
    private hideInfo!: boolean;
}
</script>

<style scoped>
.root {
  color: #fff;
  position: relative;
  margin: 10px 0;
}

.root:after {
  content: '';
  clear: both;
  display: block;
  visibility: hidden;
  height: 1px;
}

.avatar, .msg {

}
.msg {
  max-width: 80%;
}

.name {
  color: #828282;
  font-weight: bold;
  font-size: .8rem;
}

.avatar-main {
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
}

.avatar:after {
  content: '';
  width: 3rem;
  height: 3rem;
  display: block;
}

.msg-main {
  background-color: #fff;
  color: #231526;
  margin: 0 20px;
  position: relative;
  padding: 10px;
  border-radius: 5px;
  word-break: break-all;

}

.msg-main::before {
  content: '';
  border-width: .5rem;
  display: inline-block;
  border-style: solid;
  position: absolute;
  top: 70%;
}

.root[direction="left"] .avatar, .root[direction="left"] .msg {
  float: left;
}

.root[direction="left"] .msg-main::before {
  left: -15px;
  border-color: transparent #fff transparent transparent;
}

.root[direction="right"] .name {
  text-align: right;
}

.root[direction="right"] .avatar, .root[direction="right"] .msg {
  float: right;
}

.root[direction="right"] .msg-main::before {
  right: -15px;
  border-color: transparent transparent transparent #fff;
}

.root[hide] .avatar, .root[hide] .msg-main::before {
  visibility: hidden;
}

/*.root[hide] .name {
  display: none;
}*/

</style>
