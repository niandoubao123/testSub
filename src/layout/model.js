export let model = {
}
export let computed = {
  // 面包屑导航应该有几项? 它们分别是什么
  crumbs () {
    let routeName = this.$route.name
    if (!routeName) return []
    let nameArr = routeName.split('/')
    let currentName = ''
    let pathArr = []
    nameArr.forEach(name => {
      currentName += '/' + name
      pathArr.push(currentName.replace(/^\//, ''))
    })
    return pathArr
  }
}
export let filters = {
  pageName (routerName) {
    switch (routerName) {
      case 'device': return '设备列表'
      case 'setting': return '对接配置'
    }
  },
  pageIcon (routerName) {
    switch (routerName) {
      case 'device': return eval('("\\ue620")')
      case 'setting': return eval('("\\ue623")')
    }
  }
}