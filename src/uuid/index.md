---
title: uuid - 生成唯一id
toc: false
nav:
  title: JS常用库
  path: /libs
  order: 1
group:
  path: /
  order: 0
---

## uuid

Demo:

```tsx | pure
import { uuid } from '@vallife/utils-valli';

const id1 = uuid(8);

console.log(id1); // -> BUfS1qrn

const id2 = uuid(10);
console.log(id2); // -> Zd9hoanTYu

const id3 = uuid(16);
console.log(id3); // -> tXIEXMFXG77P4dN8
```

[更多技巧](https://zelark.github.io/nano-id-cc/)
