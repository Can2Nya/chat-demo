<template>
  <div>
    <Header text="Simple Chat"/>
    <div class="content">
      <template v-for="(item, key, index) in chatList">
        <div class="center" :key="key+'time'">
          <Time v-if="!isTimeHide(item, index)" :timestamp="item.time" />
        </div>
        <MassageItem
          :key="key"
          :name="item.name"
          :msg="item.text"
          :avatarUrl="item.avatar"
          :direction="item.name === 'Me' ? 'right' : 'left'"
          :hideInfo="isHide(item, index)"
        />
      </template>
    </div>
    <div class="foot">
      <InputItem @send="insertMsg" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '../components/Header.vue';
import MassageItem from '../components/MassageItem.vue';
import InputItem from '../components/InputItem.vue';
import Time from '../components/Time.vue';

import baseService from '../service';

// interface IMassage {
//   avatar: string;
//   name: string;
//   text: string;
//   time: string;
// }

// interface List {
//   [key: string]: IMassage;
// }

@Component({
  components: {
    Header,
    MassageItem,
    InputItem,
    Time,
  },
})
export default class Chat extends Vue {
  // eslint-disable-next-line
  // chatList: List = {"-LP6Hv4D1_lNaLZSsi1i":{"avatar":"https://assets-cdn.github.com/images/modules/logos_page/Octocat.png","name":"Me","text":"Hi, morning","time":"1539868100"},"-LP6IBFlJe71HL2lQNiH":{"avatar":"https://vuejs.org/images/logo.png","name":"Vue","text":"Hi, this is vue","time":"1539868101"},"-LP6IRwU2PwWJarJ623A":{"avatar":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K","name":"React","text":"Hi, this is react","time":"1539868102"},"-LP6Ibiq7C8EzMhDlHdy":{"avatar":"https://assets-cdn.github.com/images/modules/logos_page/Octocat.png","name":"Me","text":"Nice to meet you!","time":"1539869100"},"-LP6Ives7JYDYBw8MdxV":{"avatar":"https://assets-cdn.github.com/images/modules/logos_page/Octocat.png","name":"Me","text":"How are you?","time":"1539869300"},"-LP6IzqYjG4Iul0Ky3iC":{"avatar":"https://assets-cdn.github.com/images/modules/logos_page/Octocat.png","name":"Me","text":"No response?","time":"1539879300"},"-LP6J5-pxvCe6Nl7IM9w":{"avatar":"https://vuejs.org/images/logo.png","name":"Vue","text":"haha","time":"1539879301"}};
  chatList: List | any = {};

  created() {
    baseService.get({
      action: 'fe-chat-test.json',
    }).then((res) => {
      this.chatList = res;
      this.randomMsg();
      console.log(res);
    });
  }

  compareMin(preTime: string, nextTime: string): number {
    const preTimeNum = Number(preTime) * 1000;
    const nextTimeNum = Number(nextTime) * 1000;
    // console.log(nextTimeNum, preTimeNum, Math.floor((nextTimeNum - preTimeNum) / (60 * 1000)))

    return Math.floor((nextTimeNum - preTimeNum) / (60 * 1000));
  }

  isHide(item: IMassage, index: number): Boolean {
    const nextCur: string = Object.keys(this.chatList)[index + 1];
    const nextItem: IMassage = this.chatList[nextCur];

    if (!nextItem) return false;
    if (this.compareMin(item.time, nextItem.time) >= 5) return false;
    if (item.name === nextItem.name) return true;
    return false;
  }

  isTimeHide(item: IMassage, index: number): Boolean {
    const perCur: string = Object.keys(this.chatList)[index - 1];
    const perItem: IMassage = this.chatList[perCur];

    if (!perItem) return false;
    if (this.compareMin(perItem.time, item.time) >= 5) return false;
    return true;
  }

  insertMsg(msg: IMassage): void {
    this.$set(this.chatList, `-LP6J5-pxvCe6Nl7IM9w${msg.time}`, msg);
    this.$nextTick(() => {
      const elem: HTMLElement | null = this.$el.querySelector('.content');
      if (elem) elem.scrollTop = elem.scrollHeight;

      // console.log(elem.scrollHeight)
    });
  }

  randomMsg() {
    setInterval(() => {
      const msg: IMassage = {
        avatar: 'https://vuejs.org/images/logo.png',
        name: 'Vue',
        text: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.',
        time: `${Math.round((new Date()).getTime() / 1000)}`,
      };
      this.insertMsg(msg);
    }, 5000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content {
  height: 100%;
  background-color: #241627;
  overflow: auto;
  padding: 3.5rem 1rem;
}

.foot {
  position: fixed;
  width: 100%;
  bottom: 0;
}
.center {
  text-align: center;
}
</style>
