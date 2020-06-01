export let life = {
  mounted () {
    this.methods('computedRealWidth')
    if (this.methods('shouldNotOnload')) return
    this.methods('showOnloadMessage')
  }
}
export let event = {
  onerror (e) {
    this.methods('setFailImg', true)
    this.methods('setLoaddingImg', false)
  },
  srcUpdate () {
    this.methods('setFailImg', false)
    this.methods('setLoaddingImg', false)
    if (this.methods('shouldNotOnload')) return
    this.methods('showOnloadMessage')
  }
}
export let watch = {
  src () {
    this.methods('setFailImg', false)
    this.methods('setLoaddingImg', false)
    if (this.methods('shouldNotOnload')) return
    this.methods('showOnloadMessage')
  }
}
