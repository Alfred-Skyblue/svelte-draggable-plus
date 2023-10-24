# svelte-draggable-plus

为什么要取名叫 `svelte-draggable-plus` 呢？因为为了跟 `vue-draggable-plus` 保持同步（实际上是因为 `svelte-draggable` 这个名字被占用了，并且它已经不再维护）

## 说明

`svelte-draggable-plus` 是一个基于 [`Sortablejs`](https://github.com/SortableJS/Sortable) 的可拖拽排序插件，为了便于在 svelte 框架中使用，我为它封装了一个组件，我们可以使用它来完成拖拽排序。


## 安装


```bash
npm install svelte-draggable-plus sortablejs
```

If your project uses typescript, you can install `@types/sortablejs` to get type support.

```bash
npm install @types/sortablejs -D
```


## 使用方式

<demo src="basic/index.svelte"></demo>
