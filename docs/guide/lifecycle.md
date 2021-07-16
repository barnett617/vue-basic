# 父子组件声生命周期时序

## 示例

以下为组件真实展示效果
<div id="app">
  <lifecycle-blog-list></lifecycle-blog-list>
</div>

## 同步加载组件

### 示例代码

```vue
<template>
  <div id="app">
    <blog-list></blog-list>
  </div>
</template>
```

blog-list.vue
```vue{10,13}
<template>
  <div class="blog-list">
    <blog-item v-for="blog of blogs" :blog="blog" :key="blog.id" />
  </div>
</template>
<script>
import BlogItem from './blog-item'
export default {
  created() {
    console.log('parent created')
  },
  mounted() {
    console.log('parent mounted')
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          content: 'blog-item1'
        },
        {
          id: 2,
          content: 'blog-item2'
        }
      ]
    }
  },
  components: {
    'blog-item': BlogItem
  }
}
</script>
```

blog-item.vue
```vue{8,11}
<template>
  <div class="blog-item">{{blog.content}}</div>
</template>
<script>
export default {
  props: ['blog'],
  created() {
    console.log(`${this.blog.content} created`)
  },
  mounted() {
    console.log(`${this.blog.content} mounted`)
  }
}
</script>
```

### 输出

```
parent created
blog-item1 created
blog-item2 created
blog-item1 mounted
blog-item2 mounted
parent mounted
```

### 解析

1. (父)组件创建
    - 1.1 （父）组件检测到子组件
    - 1.2 创建子组件（多个组件都先进行创建）
    - 1.3 子组件都创建完成后再一一进行挂载
2. （父）组件挂载（子组件都创建并挂载完成后）

## 异步加载组件

### 示例代码

blog-list.vue
```vue{7,30-31}
<template>
  <div class="blog-list">
    <blog-item v-for="blog of blogs" :blog="blog" :key="blog.id" />
  </div>
</template>
<script>
// import BlogItem from './blog-item'
export default {
  created() {
    console.log('parent created')
  },
  mounted() {
    console.log('parent mounted')
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          content: 'blog-item1'
        },
        {
          id: 2,
          content: 'blog-item2'
        }
      ]
    }
  },
  components: {
    // 'blog-item': BlogItem
    'blog-item': () => import('./blog-item')
  }
}
</script>
```

### 输出

```
parent created
parent mounted
blog-item1 created
blog-item2 created
blog-item1 mounted
blog-item2 mounted
```

### 解析

1. (父)组件创建
2. (父)组件挂载
    - 2.1 (父)组件挂载完检测到子组件
    - 2.2 创建子组件（多个组件时都先创建，都创建完成后再逐个挂载）
    - 2.3 挂载子组件

## 结论

当同步引用组件时，对于组件的初始化可以理解为`栈`操作。当创建的组件存在嵌套子组件时，会递归查找子组件，直至没有子组件为止，再开始`由内向外`进行`挂载`，即`后进先出`。

当异步引用组件时，则是在父组件`创建并挂载`完，再对所引用的子组件进行`创建和挂载`。如果子组件也存在子组件，再重复这一过程，整个递归是一个组件自身完整的创建过程作为一个整体进行的。
