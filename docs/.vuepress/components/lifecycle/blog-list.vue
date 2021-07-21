<template>
  <div class="blog-list">
    <blog-item v-for="blog of blogs" :blog="blog" :key="blog.id" />
  </div>
</template>
<script>
import BlogItem from './blog-item'
export default {
  beforeCreate() {
    console.log('parent before create')
  },
  created() {
    console.log('parent created')
  },
  beforeMount() {
    console.log('parent before mount')
  },
  mounted() {
    console.log('parent mounted')
  },
  beforeUpdate() {
    console.log('parent before update')
  },
  updated() {
    console.log('parent updated')
  },
  beforeDestroy() {
    console.log('parent before destroy')
  },
  destroyed() {
    console.log('parent destroyed')
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
    // 'blog-item': () => import('./blog-item')
  }
}
</script>
