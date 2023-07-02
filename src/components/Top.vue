<template>
  <div class="hello">
    TopPage
  </div>
  <router-link to="/login">ログイン画面へ</router-link>
</template>

<script>
export default {
  name: 'TopPage',
  props: {
    msg: String
  }
}
</script>