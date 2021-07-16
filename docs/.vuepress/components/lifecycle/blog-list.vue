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
