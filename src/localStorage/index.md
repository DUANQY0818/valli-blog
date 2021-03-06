---
title: localStorage - 本地存储库
nav:
  title: JS常用库
  path: /libs
  order: 1
group:
  path: /
  order: 3
---

## store

> 基于 localStorage 上层封装的支持过期时间设置的缓存库, 支持操作回调.

Demo:

```tsx | pure
import { store } from '@vallife/utils-valli';
// 将对象序列化
store.set('name', 'valli', Date.now() + 1000);
console.log(store.get('name'));
setTimeout(() => {
  console.log(store.get('name'));
}, 1000);

// 设置成功后的回调
store.set('valli', 'dyc', Date.now() + 1000, (status, key, value) => {
  console.log('success');
});
```

```tsx | pure
/**
 * title: 打开控制台查看结果
 */
import { store } from '@vallife/utils-valli';

// 设置过期时间
store.set('name', 'dooring', Date.now() + 1000);
console.log(store.get('name'));
setTimeout(() => {
  console.log(store.get('name'));
}, 1000);

// 设置成功后的回调
store.set('name', 'dooring', Date.now() + 1000, (status, key, value) => {
  console.log('success');
});
```
