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
