<template>
  <d2-container class="page">
    <Iframe name="tt" style="height:100%; width:100%" src="https://www.thingjs.com/s/f6513a673af02d54c3a2eaf2?params=105b0f77fd24654d4eebc434e9" marginwidth="1" marginheight="1"    scrolling="yes" frameborder="10"></Iframe>
  </d2-container>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.page {
  .logo {
    width: 120px;
  }
  .btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    line-height: 12px;
    margin-top: 0px;
    margin-bottom: 20px;
    .btn-group__btn {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
      &.btn-group__btn--link {
        color: $color-primary;
      }
    }
  }
}
</style>
