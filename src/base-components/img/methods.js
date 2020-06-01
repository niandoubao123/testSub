export default {
  computedRealWidth () {
    this.$nextTick(() => {
      this.realWidth = this.$refs.box.clientWidth
    })
  },
  showOnloadMessage () {
    // 假如 400ms 以内能加载好，那就不提示加载中了
    // loading 为 true 就会显示加载中
    setTimeout(() => {
      if (!this.showOnloadMessageHadLoad) {
        this.loading = true
        this.fail = false
      }
    }, 400)
    this.$nextTick(() => {
      this.showOnloadMessageHadLoad = false
      let img = this.$refs.img
      if (!img) return
      img.onload = () => {
        this.showOnloadMessageHadLoad = true
        this.isStationImgServer = false
        this.loading = false
      }
    })
  },
  /**
   * 设置图片状态
   * @param boolean
   */
  setFailImg (boolean) {
    this.fail = boolean
    this.showOnloadMessageHadLoad = true
  },
  /**
   * 设置图片加载状态
   * @param boolean
   */
  setLoaddingImg (boolean) {
    this.loading = boolean
  },
  /**
   * 不需要加载
   * @returns {boolean}
   */
  shouldNotOnload () {
    if (!this.src) return true
    if (this.src.indexOf('data:image/jpg;base64,') > -1) return true
  }
}
