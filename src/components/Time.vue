<template>
  <div class="time">{{ dcriseTime }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// interface ITime {
//   // [key: string]: any,
//   year: number,
//   month: number,
//   date: number,
//   hour: number,
//   minute: number,
//   second: number,
//   fullDate: Date,
// }

@Component
export default class Time extends Vue {
  @Prop({
    type: [String, Number],
    required: true,
    validator(value) {
      const stamp = Number(value);
      return (new Date(stamp * 1000)).getTime() > 0;
    },
  }) private timestamp!: string | number;

  get dcriseTime(): string {
    const time: ITime = this.getTime(this.timestamp);
    const nowTime: ITime = this.getTime();
    if (nowTime.year - time.year >= 1) return `${time.fullDate.toLocaleDateString()} ${time.hour}:${time.minute}`;
    return `${time.hour}:${time.minute}`;
  }

  getTime(uStamp?: string | number): ITime {
    let date: Date;

    if (uStamp) date = new Date(Number(uStamp) * 1000);
    else date = new Date();

    return {
      year: date.getUTCFullYear(),
      month: date.getUTCMonth(),
      date: date.getUTCDate(),
      hour: date.getUTCHours(),
      minute: date.getUTCMinutes(),
      second: date.getUTCSeconds(),
      fullDate: date,
    };
  }
}
</script>

<style scoped>
.time {
  background-color: #ffffff;
  display: inline-block;
  padding: 5px;
  font-size: .7rem;
  border-radius: 10px;
}
</style>
