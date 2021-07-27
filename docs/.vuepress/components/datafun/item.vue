<template>
  <div>11{{content}}</div>
</template>
<script>
export default {
  data: {
    content: ''
  },
  props: ['newContent'],
  watch: {
    newContent(newVal) {
      this.content = newVal
    }
  }
}
</script>
