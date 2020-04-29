<template>
  <div class="shares">
    <ul class="shares__body" v-if="true">
      <li class="shares__block" v-for="share in shares" :key="share.id">
        <p class="shares__information">{{ share.information }}</p>
        <ul class="shares__footer">
          <li class="shares__date">{{ convertDate(share.created_at) }}</li>
          <li class="shares__name">{{ share.name }}</li>
        </ul>
      </li>
    </ul>
    <p class="shares__nothing" v-else>共有事項はありません。</p>
  </div>
</template>

<script lang="ts">
// library
import { Component, Vue } from 'vue-property-decorator';

const shares = [
  {
    id: 1,
    information:
      'JSONデータ型はJSON(JavaScript Object Notation)データを格納するためのものです。JSONの仕様はRFC 7159に定義されています。',
    name: '佐藤 優',
    created_at: '2020-10-06 07:25:42',
  },
  {
    id: 2,
    information:
      'プロまにの管理画面が完成しました。プロまにの管理画面が完成しました。プロまにの管理画面が完成しました。',
    name: '佐藤 優',
    created_at: '2020-10-06 07:25:42',
  },
];

@Component
export default class Shares extends Vue {
  shares = shares;

  public convertDate(date: string) {
    const toDate = new Date(date);
    const year_str = `${toDate.getFullYear()}年`;
    const month_str = `${toDate.getMonth() + 1}月`;
    const day_str = `${toDate.getDate()}日`;
    const hour_str = `${toDate.getHours()}時`;
    const minute_str = `${toDate.getMinutes()}分`;
    return `${year_str}${month_str}${day_str} ${hour_str}${minute_str}`;
  }
}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.shares {
  &__body {
    padding: 0 8px;
    position: relative;
    list-style: none;
  }
  &__block {
    margin: 8px 0 0;
    padding: 16px;
    display: block;
    border-radius: 4px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.1);
    &:first-child {
      margin: 0;
    }
  }
  &__information {
    margin: 0;
    font-size: 1.6rem;
    color: $color-font-white;
    line-height: 1.4;
  }
  &__footer {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }
  &__date {
    margin: 0;
    font-size: 1.2rem;
    color: $color-font-silvergrey;
    line-height: 1;
  }
  &__name {
    margin: 0 0 0 8px;
    font-size: 1.2rem;
    color: $color-font-silvergrey;
    line-height: 1;
  }
  &__nothing {
    margin: 0 8px;
    font-size: 1.4rem;
    color: $color-font-white;
    line-height: 1.4;
  }
}
</style>
