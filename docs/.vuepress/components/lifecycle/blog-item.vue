<template>
  <div class="blog-item">{{blog.content}}</div>
</template>
<script>
export default {
  name: 'blog-item',
  props: ['blog'],
  beforeCreate() {
    console.log(`child before create`)
  },
  created() {
    console.log(`${this.blog.content} created`)
  },
  beforeMount() {
    console.log(`${this.blog.content} before mount`)
  },
  mounted() {
    console.log(`${this.blog.content} mounted`)
  },
  beforeUpdate() {
    console.log(`${this.blog.content} before update`)
  },
  updated() {
    console.log(`${this.blog.content} updated`)
  },
  beforeDestroy() {
    console.log(`${this.blog.content} before destroy`)
  },
  destroyed() {
    console.log(`${this.blog.content} destroyed`)
  }
}
</script>
