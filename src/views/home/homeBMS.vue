<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      // 清空session
      window.sessionStorage.clear()
      // 重定向
      this.$router.push('/loginBMS')
    }
  },
  created() {}
}
</script>

<style scoped>
</style>
