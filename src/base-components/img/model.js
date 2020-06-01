export let props = ['host', 'src', 'alt', 'width', 'height', 'minHeight', 'ratio']
export let model = {
  fail: false,
  loading: false,
  realWidth: 0,
  isStationImgServer: false,
  stationImgServerFail: false
}
export let computed = {
  hostSrc () {
    if (!this.src) {
      return this.src
    }
    if (this.host && !(/^(http)/.test(this.src))) {
      return this.host + this.src
    } else {
      return this.src
    }
  },
  text () {
    let noimg = !this.hostSrc
    let noalt = !this.alt
    let failimg = this.fail
    if (noimg) {
      if (noalt) {
        return '暂无图片'
      } else {
        return `暂无${this.alt}`
      }
    }
    if (failimg) {
      if (noalt) {
        // return '图片加载失败'
        return '暂无图片'
      } else {
        // return `${this.alt}加载失败`
        return `暂无${this.alt}`
      }
    }
    if (noalt) {
      return '图片加载中'
    } else {
      return `${this.alt}加载中`
    }
  },
  boxStyle () {
    let style = {
      width: this.width || '100%',
      minHeight: this.minHeight || 'auto'
    }
    if (this.ratio && this.realWidth) {
      style.height = this.realWidth/this.ratio + 'px'
    } else {
      style.height = this.height || '100%'
    }
    return style
  },
  imgStyle () {
    if (this.loading) {
      return {
        display: 'none'
      }
    } else {
      return {}
    }
  },
  showImg () {
    return this.src && !this.fail && !this.loading
  }
}
