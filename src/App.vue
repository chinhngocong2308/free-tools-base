<template>
    <!-- <br/>
    <a href="/tinh-thue-tncn">Tinh Thue TNCN</a> |
    <a href="/tinh-bhxh-bat-buoc">Tinh BHXH</a> -->
  <router-view/>

</template>
<script>
export default {
  name: 'App',
  data() {
        return {
        };
    },
  watch: {

  },
  mounted() {
  },
  methods: {

  },
}
</script>

<style>
/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
#app {
  font-family: 'Roboto', 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
