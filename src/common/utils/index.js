import Vue from 'vue'
Vue.prototype.duration = function (time, type) {
  switch (type) {
    case 'm':
      time = time * 60
      break
  }
  let r = ''
  let m = 60
  let h = 60 * 60
  let d = 60 * 60 * 24
  if (time > d) {
    r += parseInt(time / d) + '天'
    time = time % d
  }
  if (time > h) {
    r += parseInt(time / h) + '小时'
    time = time % h
  }
  if (time > m) {
    r += parseInt(time / m) + '分'
    time = time % m
  }
  if (time) {
    r += time + '秒'
  }
  return r
}
let wsOnMessage = []
let wsOnOpen = []
let wsStatus = []
window.utils = {
  keepAliveStorage (key, value) {
    let keepAlive = localStorage.keepAlive ? JSON.parse(localStorage.keepAlive) : {}
    keepAlive[key] = value
    localStorage.keepAlive = JSON.stringify(keepAlive)
  },
  sameObj: function sameObj(o1, o2) {
    if (o1 === o2) return true
    let keys1 = o1 && Object.keys(o1).sort()
    let keys2 = o2 && Object.keys(o2).sort()
    if (JSON.stringify(keys1) !== JSON.stringify(keys2)) {
      // console.log('不一样的属性: ' + JSON.stringify(keys1), JSON.stringify(keys2))
      return false
    }
    let isSame = true
    let len = keys1.length
    for (let i = 0; i < len; i++) {
      let key = keys1[i]
      let item1 = o1[key]
      let item2 = o2[key]
      if (typeof item1 !== typeof item2) {
        // console.log('不一样的属性: ' + key, item1, item2)
        isSame = false
        break
      }
      if (isSame && typeof item1 === 'object') {
        isSame = sameObj(item1, item2)
        if (isSame) {
          continue
        } else {
          // console.log('不一样的属性: ' + key, item1, item2)
          break
        }
      }
      if (item1 !== item2) {
        isSame = false
        // console.log('不一样的属性: ' + key, item1, item2)
        break
      }
    }
    return isSame
  },
  // 样式操作
  domInnerHeight (dom) {
    let style = window.getComputedStyle(dom, null)
    let boxSizing = window.utils.domBoxSizing(dom)
    let height = parseInt(style.getPropertyValue('height'))
    if (boxSizing === 'border-box') {
      height -= parseInt(style.getPropertyValue('padding-top')) + parseInt(style.getPropertyValue('padding-bottom'))
      height -= parseInt(style.getPropertyValue('border-top-width')) + parseInt(style.getPropertyValue('border-bottom-width'))
    }
    return height
  },
  domHeight(dom) {
    let style = window.getComputedStyle(dom, null)
    let boxSizing = window.utils.domBoxSizing(dom)
    let height = parseInt(style.getPropertyValue('height'))
    if (boxSizing === 'content-box') {
      height += parseInt(style.getPropertyValue('padding-top')) + parseInt(style.getPropertyValue('padding-bottom'))
      height += parseInt(style.getPropertyValue('border-top-width')) + parseInt(style.getPropertyValue('border-bottom-width'))
    }
    return height
  },
  domWidth (dom) {
    let style = window.getComputedStyle(dom, null)
    let boxSizing = window.utils.domBoxSizing(dom)
    let width = parseInt(style.getPropertyValue('width'))
    if (boxSizing === 'content-box') {
      width += parseInt(style.getPropertyValue('padding-left')) + parseInt(style.getPropertyValue('padding-right'))
      width += parseInt(style.getPropertyValue('border-left-width')) + parseInt(style.getPropertyValue('border-right-width'))
    }
    return width
  },
  domBoxSizing (dom) {
    let target = dom
    let style = window.getComputedStyle(dom, null)
    let boxSizing = style.getPropertyValue('box-sizing') || 'content-box'
    while (boxSizing === 'inherit') {
      target = target.parentNode
      let style = window.getComputedStyle(target, null)
      boxSizing = style.getPropertyValue('box-sizing') || 'content-box'
    }
    return boxSizing
  },
  domStyle (dom, styleName) {
    switch (styleName) {
      case 'width':
        return window.utils.domWidth(dom)
      case 'height':
        return window.utils.domHeight(dom)
      case 'innerHeight':
        return window.utils.domInnerHeight(dom)
      default:
        let style = window.getComputedStyle(dom, null)
        return style.getPropertyValue(styleName)
    }
  },
  computedOverTime (type, val) {
    let overtime
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()
    let day = now.getDate()
    let h = 23
    let m = 59
    let s = 59
    switch (type) {
      case 'month':
        overtime = new Date(new Date().setMonth(new Date().getMonth() - val))
        break
      case 'day':
        overtime = new Date(new Date().setDate(new Date().getDate() - val))
        break
      default:
        overtime = new Date(new Date(year, month, day, h, m, s).getTime())
    }
    return overtime
  },
  // 深度拷贝
  deepClone: function deepClone(obj) {
    const rootObj = {} // 记录新的对象
    const cache = [obj] // 引用对象数组
    const cacheNewValues = [rootObj] // 记录对应引用的新值

    const assign = (innerObj) => {
      const newObj = innerObj === obj ? rootObj : {}
      Object.keys(innerObj).forEach(key => {
        const value = innerObj[key]
        const index = cache.indexOf(value)
        // 未缓存
        if (index === -1) {
          const type = Object.prototype.toString.call(value)
          if (typeof type === 'object') {
            newObj[key] = assign(value)
            // 记录引用的对象以及对应引用的新值
            cache.push(value)
            cacheNewValues.push(newObj[key])
          } else {
            newObj[key] = value
          }
        } else {
          // 已缓存，取对应缓存的新值
          newObj[key] = cacheNewValues[index]
        }
      })

      return newObj
    }

    return assign(obj);
  },
  /**
   * 使用方法
   * 1、连接某个 websocket
   */
  websocket: {
    url: undefined,
    instance: undefined,
    parkingId: undefined,
    wsStatus: undefined,
    wsInitialId: undefined,
    wsSessionId: undefined,
    wsBreakLinkNum: 0, // 断开重连次数
    async open (url, parkingId) {
      if (window.utils.websocket.instance) return
      window.utils.websocket.url = url
      window.utils.websocket.parkingId = parkingId
      window.utils.websocket.instance = new WebSocket(url)
      window.utils.websocket.instance.addEventListener('open', window.utils.websocket.WSOpen)
      window.utils.websocket.instance.onmessage = window.utils.websocket.WSMessage
      window.utils.websocket.instance.addEventListener('close', window.utils.websocket.WSClose)
      // window.utils.websocket.instance.addEventListener('error', window.utils.websocket.WSClose)
    },
    WSOpen (e) {
      window.utils.websocket.instance.send(`{
          "eventType":"Subscribe",
          "evts":["RefreshChannel","InParkingPending","OutParkingPending","Area2OtherPending","Ready2Pay","PayFinished","ParkingOrderFinish","ParkingOrderCreated"],
          "sessionId":"${window.localStorage.sessionId}",
          "parkingId": "${window.utils.websocket.parkingId}"
      }`)
      wsOnOpen.forEach(item => {
        item.callback(window.utils.websocket.instance)
      })
    },
    WSMessage (e) {
      if (!e.data) return
      let data = JSON.parse(e.data)
      // if (!data.data) return
      if (data.code === 200) {
        if (!window.utils.websocket.wsInitialId || window.utils.websocket.wsSessionId !== data.data.wsSessionId) {
          window.utils.websocket.wsInitialId = window.utils.websocket.wsSessionId
        }
        window.utils.websocket.wsSessionId = data.wsSessionId
        window.utils.websocket.wsStatus = '已连接'
      } else {
        window.utils.websocket.wsStatus = data.msg
      }
      window.utils.websocket.parkingId
      wsOnMessage.forEach(item => {
        // if (data.command === item.cmd) {
        //   item.callback(data, window.utils.websocket.instance)
        // }
        item.callback(data, window.utils.websocket.instance)
      })
      wsStatus.forEach(item => {
        item.callback({
          wsStatus: window.utils.websocket.wsStatus,
          wsInitialId: window.utils.websocket.wsInitialId,
          wsSessionId: window.utils.websocket.wsSessionId,
          wsBreakLinkNum: window.utils.websocket.wsBreakLinkNum
        }, window.utils.websocket.instance)
      })
    },
    // 断线重连
    WSClose (e) {
      window.utils.websocket.wsStatus = '已断开连接'
      window.utils.websocket.wsBreakLinkNum++
      wsStatus.forEach(item => {
        item.callback({
          wsStatus: window.utils.websocket.wsStatus,
          wsInitialId: window.utils.websocket.wsInitialId,
          wsSessionId: window.utils.websocket.wsSessionId,
          wsBreakLinkNum: window.utils.websocket.wsBreakLinkNum
        }, window.utils.websocket.instance)
      })
      console.log(
        `%c websocket %c 断线了`,
        'background:#35495e;padding:1px;border-radius:3px 0 0 3px;color:#FFF',
        'background:#41b883;padding:1px;border-radius:0 3px 3px 0;color:#FFF'
      )
      if (!window.utils.websocket.instance || window.utils.websocket.instance.notReOpen) return
      window.utils.websocket.instance.close()
      console.log(window.utils.websocket.instance)
      window.utils.websocket.instance = undefined
      setTimeout(() => {
        console.log('试图重连', window.utils.websocket.url)
        window.utils.websocket.open(window.utils.websocket.url, window.utils.websocket.parkingId)
      }, 2000)
    },
    async send (params) {
      if (!window.utils.websocket.instance) return
      window.utils.websocket.instance.send(`{
          "eventType":"Ping"
      }`)
    },
    onMessage (cmd, callback) {
      let hasSame = wsOnMessage.find(item => item.cmd === cmd)
      if (hasSame) return // 不许重复绑定事件监听
      wsOnMessage.push({
        cmd: cmd,
        callback: callback
      })
    },
    onStatus (cmd, callback) {
      let hasSame = wsStatus.find(item => item.cmd === cmd)
      if (hasSame) return // 不许重复绑定事件监听
      wsStatus.push({
        cmd: cmd,
        callback: callback
      })
    },
    offMessage (cmd, callback) {
      if (callback) {
        let that = wsOnMessage.find(item => item.callback === callback && item.cmd === cmd)
        if (!that) return
        let index = wsOnMessage.indexOf(that)
        wsOnMessage.splice(index, 1)
      } else {
        let those = wsOnMessage.filter(item => item.cmd === cmd)
        those.forEach(item => {
          let index = wsOnMessage.indexOf(item)
          wsOnMessage.splice(index, 1)
        })
      }
    },
    offStatus (cmd, callback) {
      if (callback) {
        let that = wsStatus.find(item => item.callback === callback && item.cmd === cmd)
        if (!that) return
        let index = wsStatus.indexOf(that)
        wsStatus.splice(index, 1)
      } else {
        let those = wsStatus.filter(item => item.cmd === cmd)
        those.forEach(item => {
          let index = wsStatus.indexOf(item)
          wsStatus.splice(index, 1)
        })
      }
    },
    onOpen (cmd, callback) {
      let hasSame = wsOnOpen.find(item => item.callback === callback)
      if (hasSame) return // 不许重复绑定事件监听
      wsOnOpen.push({
        cmd: cmd,
        callback: callback
      })
    },
    offOpen (cmd, callback) {
      if (callback) {
        let that = wsOnOpen.find(item => item.callback === callback && item.cmd === cmd)
        if (!that) return
        let index = wsOnOpen.indexOf(that)
        wsOnOpen.splice(index, 1)
      } else {
        let those = wsOnOpen.filter(item => item.cmd === cmd)
        those.forEach(item => {
          let index = wsOnOpen.indexOf(item)
          wsOnOpen.splice(index, 1)
        })
      }
    },
    close () {
      if (!window.utils.websocket.instance) return
      window.utils.websocket.instance.notReOpen = true
      window.utils.websocket.instance.close()
    }
  },
}
window.Date.prototype.format = function (fmt) {
  let o = {
    'M+': this.getMonth() + 1,                      // 月份
    'd+': this.getDate(),                           // 日
    'h+': this.getHours(),                          // 小时
    'm+': this.getMinutes(),                        // 分
    's+': this.getSeconds(),                        // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3),    // 季度
    'S': this.getMilliseconds()                     // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}