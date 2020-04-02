<template>
  <div>
    <p>发现</p>
  </div>
</template>

<script>
export default {
  created () {
    // this.getBanner()
  },
  methods: {
    getBanner () {
      this.$api.bannerSwiperFn().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
