export default {
  "GETMchReportTop": {
    "uri": "/mch/report/top",
    "pageId": "327",
    "page_uri": "GET /mch/report/top",
    "title": "代理总汇/查询",
    "type": "GET"
  },
  "POSTMch": {
    "uri": "/mch",
    "pageId": [
      "328",
      "348"
    ],
    "page_uri": "POST /mch",
    "title": "代理总汇/新增",
    "type": "POST"
  },
  "PUTMch": {
    "uri": "/mch/{id}",
    "pageId": [
      "329",
      "349"
    ],
    "page_uri": "PUT /mch/{id}",
    "title": "代理总汇/修改",
    "type": "PUT"
  },
  "POSTAccResetPwdAndSend": {
    "uri": "/acc/{id}/resetPwdAndSend",
    "pageId": [
      [
        "330",
        "350"
      ],
      "356"
    ],
    "page_uri": "POST /acc/{id}/resetPwdAndSend",
    "title": "代理总汇/重置密码",
    "type": "POST"
  },
  "PUTMchOnOff": {
    "uri": "/mch/{mchId}/onOff",
    "pageId": [
      "331",
      "351"
    ],
    "page_uri": "PUT /mch/{mchId}/onOff",
    "title": "代理总汇/暂停或启用",
    "type": "PUT"
  },
  "POSTMchTransfer": {
    "uri": "/mch/{id}/transfer",
    "pageId": [
      [
        "333",
        "352"
      ],
      "358"
    ],
    "page_uri": "POST /mch/{id}/transfer",
    "title": "代理总汇/迁移",
    "type": "POST"
  },
  "GETMchTurnoverReport": {
    "uri": "/mch/turnover/report",
    "pageId": "334",
    "page_uri": "GET /mch/turnover/report",
    "title": "物业流水分析/查询",
    "type": "GET"
  },
  "GETDeviceReport": {
    "uri": "/device/report",
    "pageId": [
      [
        "335",
        "359"
      ],
      "429"
    ],
    "page_uri": "GET  /device/report",
    "title": "设备总汇/查询",
    "type": "GET"
  },
  "GETDeviceLogDownload": {
    "uri": "/device/{id}/logDownload",
    "pageId": [
      [
        "336",
        "360"
      ],
      "430"
    ],
    "page_uri": "GET  /device/{id}/logDownload",
    "title": "设备总汇/下载日志",
    "type": "GET"
  },
  "GETMchPayInfo": {
    "uri": "/mch/payInfo",
    "pageId": "337",
    "page_uri": "GET /mch/payInfo",
    "title": "支付查询",
    "type": "GET"
  },
  "POSTMchPayInfo": {
    "uri": "/mch/payInfo",
    "pageId": "338",
    "page_uri": "POST /mch/payInfo",
    "title": "支付新增",
    "type": "POST"
  },
  "PUTMchPayInfo": {
    "uri": "/mch/{mchId}/payInfo",
    "pageId": "339",
    "page_uri": "PUT /mch/{mchId}/payInfo",
    "title": "支付修改",
    "type": "PUT"
  },
  "GETRole": {
    "uri": "/role",
    "pageId": "340",
    "page_uri": "GET /role",
    "title": "角色模板/查询",
    "type": "GET"
  },
  "POSTRole": {
    "uri": "/role",
    "pageId": "341",
    "page_uri": "POST /role",
    "title": "角色模板/新增",
    "type": "POST"
  },
  "GETRolePermissionEntity": {
    "uri": "/role/{roleId}/permission/entity",
    "pageId": "361",
    "page_uri": "GET /role/{roleId}/permission/entity",
    "title": "角色模板/权限获取",
    "type": "GET"
  },
  "GETRolePermissionUi": {
    "uri": "/role/{roleId}/permission/ui",
    "pageId": "362",
    "page_uri": "GET /role/{roleId}/permission/ui",
    "title": "角色模板/UI页面",
    "type": "GET"
  },
  "PUTRolePermissionUiOnOff": {
    "uri": "/role/permission/ui/{uiId}/onOff",
    "pageId": "477",
    "page_uri": "PUT /role/permission/ui/{uiId}/onOff",
    "title": "角色模板/其他页面enable",
    "type": "PUT"
  },
  "PUTRolePermissionEntity": {
    "uri": "/role/{roleId}/permission/entity",
    "pageId": "478",
    "page_uri": "PUT /role/{roleId}/permission/entity",
    "title": "角色模板/权限分配",
    "type": "PUT"
  },
  "PUTRole": {
    "uri": "/role/{roleId}",
    "pageId": "479",
    "page_uri": "PUT /role/{roleId}",
    "title": "角色模板/修改",
    "type": "PUT"
  },
  "DELETERole": {
    "uri": "/role/{roleId}",
    "pageId": "480",
    "page_uri": "DELETE /role/{roleId}",
    "title": "角色模板/删除",
    "type": "DELETE"
  },
  "GETAdReport": {
    "uri": "/ad/report",
    "pageId": "342",
    "page_uri": "GET /ad/report",
    "title": "广告图片/查询",
    "type": "GET"
  },
  "DELETEAd": {
    "uri": "/ad/{id}",
    "pageId": "343",
    "page_uri": "DELETE /ad/{id}",
    "title": "广告图片/删除",
    "type": "DELETE"
  },
  "POSTParkingFast": {
    "uri": "/parking/fast",
    "pageId": "536",
    "page_uri": "POST /parking/fast",
    "title": "快速创建停车场",
    "type": "POST"
  },
  "GETMchReportHaveDevMonth": {
    "uri": "/mch/report/haveDevMonth",
    "pageId": [
      "344",
      "346"
    ],
    "page_uri": "GET /mch/report/haveDevMonth",
    "title": "主页/月新保有量曲线",
    "type": "GET"
  },
  "GETMchReportNewDevMonth": {
    "uri": "/mch/report/newDevMonth",
    "pageId": "345",
    "page_uri": "GET /mch/report/newDevMonth",
    "title": "主页/月新装曲线",
    "type": "GET"
  },
  "GETMch": {
    "uri": "/mch",
    "pageId": "332",
    "page_uri": "GET /mch",
    "title": "代理总汇/迁移查询（未使用）",
    "type": "GET"
  },
  "GETMchReport": {
    "uri": "/mch/report",
    "pageId": "347",
    "page_uri": "GET /mch/report",
    "title": "我的客户/代理列表/查询",
    "type": "GET"
  },
  "GETParkingReport": {
    "uri": "/parking/report",
    "pageId": "353",
    "page_uri": "GET /parking/report",
    "title": "停车场列表/查询",
    "type": "GET"
  },
  "POSTParking": {
    "uri": "/parking",
    "pageId": "354",
    "page_uri": "POST /parking",
    "title": "停车场列表/新增",
    "type": "POST"
  },
  "PUTParking": {
    "uri": "/parking/{parkingId}",
    "pageId": "355",
    "page_uri": "PUT /parking/{parkingId}",
    "title": "停车场列表/修改",
    "type": "PUT"
  },
  "POSTAccOnOff": {
    "uri": "/acc/{accId}/onOff",
    "pageId": "357",
    "page_uri": "POST /acc/{accId}/onOff",
    "title": "停车场列表/暂停账户",
    "type": "POST"
  },
  "GETParkingGroupByMch": {
    "uri": "/parking/groupByMch",
    "pageId": "367",
    "page_uri": "GET /parking/groupByMch",
    "title": "停车场设置/停车场查询",
    "type": "GET"
  },
  "GETArea": {
    "uri": "/area",
    "pageId": [
      [
        "368",
        "440"
      ],
      "476"
    ],
    "page_uri": "GET /area",
    "title": "停车场设置/区域",
    "type": "GET"
  },
  "GETChannel": {
    "uri": "/channel",
    "pageId": [
      [
        "369",
        "441"
      ],
      "475"
    ],
    "page_uri": "GET /channel",
    "title": "停车场设置/通道 有同名接口",
    "type": "GET"
  },
  "GETDevice": {
    "uri": "/device",
    "pageId": [
      "370",
      "442"
    ],
    "page_uri": "GET /device",
    "title": "停车场设置/设备",
    "type": "GET"
  },
  "POSTArea": {
    "uri": "/area",
    "pageId": [
      "431",
      "443"
    ],
    "page_uri": "POST /area",
    "title": "停车场设置/新增区域 有同名接口",
    "type": "POST"
  },
  "PUTArea": {
    "uri": "/area/{areaId}",
    "pageId": [
      "432",
      "444"
    ],
    "page_uri": "PUT /area/{areaId}",
    "title": "停车场设置/修改区域",
    "type": "PUT"
  },
  "POSTChannel": {
    "uri": "/channel",
    "pageId": [
      "433",
      "445"
    ],
    "page_uri": "POST /channel/",
    "title": "停车场设置/新增车道",
    "type": "POST"
  },
  "PUTChannel": {
    "uri": "/channel/{channelId}",
    "pageId": [
      "434",
      "446"
    ],
    "page_uri": "PUT /channel/{channelId}",
    "title": "停车场设置/修改车道",
    "type": "PUT"
  },
  "DELETEDevice": {
    "uri": "/device/{deviceId}",
    "pageId": [
      "438",
      "450"
    ],
    "page_uri": "DELETE /device/{deviceId}",
    "title": "停车场设置/删除设备",
    "type": "DELETE"
  },
  "PUTDevice": {
    "uri": "/device/{deviceId}",
    "pageId": "481",
    "page_uri": "PUT /device/{deviceId}",
    "title": "停车场设置/修改设备",
    "type": "PUT"
  },
  "GETDeviceTarget": {
    "uri": "/device/target",
    "pageId": "483",
    "page_uri": "GET /device/target",
    "title": "停车场设置/api14（停车场里所有的设备）（未使用的接口）",
    "type": "GET"
  },
  "DELETEArea": {
    "uri": "/area/{areaId}",
    "pageId": "484",
    "page_uri": "DELETE /area/{areaId}",
    "title": "停车场设置/删除区域",
    "type": "DELETE"
  },
  "DELETEChannel": {
    "uri": "/channel/{channelId}",
    "pageId": "485",
    "page_uri": "DELETE /channel/{channelId}",
    "title": "停车场设置/删除车道",
    "type": "DELETE"
  },
  "POSTDeviceEnable": {
    "uri": "/device/{id}/enable",
    "pageId": [
      "495",
      "449"
    ],
    "page_uri": "POST /device/{id}/enable",
    "title": "停车场设置/启用设备",
    "type": "POST"
  },
  "GETEmployee": {
    "uri": "/employee",
    "pageId": [
      "363",
      "425"
    ],
    "page_uri": "GET /employee",
    "title": "设置/员工管理/查询",
    "type": "GET"
  },
  "POSTEmployee": {
    "uri": "/employee",
    "pageId": [
      "364",
      "426"
    ],
    "page_uri": "POST /employee",
    "title": "设置/员工管理/新增",
    "type": "POST"
  },
  "PUTEmployee": {
    "uri": "/employee/{employeeId}",
    "pageId": [
      "365",
      "427"
    ],
    "page_uri": "PUT /employee/{employeeId}",
    "title": "设置/员工管理/修改",
    "type": "PUT"
  },
  "DELETEEmployee": {
    "uri": "/employee/{employeeId}",
    "pageId": [
      "366",
      "428"
    ],
    "page_uri": "DELETE /employee/{employeeId}",
    "title": "设置/员工管理/删除",
    "type": "DELETE"
  },
  "GETPaymentChannelsSmallWxSigning": {
    "uri": "/paymentChannels/{mchId}/smallWxSigning",
    "pageId": "566",
    "page_uri": "GET /paymentChannels/{mchId}/smallWxSigning",
    "title": "设置/支付开通/小微商户待签约",
    "type": "GET"
  },
  "POSTPaymentChannelsSmallWxSubmit": {
    "uri": "/paymentChannels/smallWxSubmit",
    "pageId": "567",
    "page_uri": "POST /paymentChannels/smallWxSubmit",
    "title": "设置/支付开通/小微商户进件提交",
    "type": "POST"
  },
  "GETPaymentChannelsBankAdressCode": {
    "uri": "/paymentChannels/bankAdressCode",
    "pageId": "568",
    "page_uri": "GET /paymentChannels/bankAdressCode",
    "title": "设置/支付开通/开户银行省市编码",
    "type": "GET"
  },
  "GETPaymentChannelsAccountBank": {
    "uri": "/paymentChannels/accountBank",
    "pageId": "569",
    "page_uri": "GET /paymentChannels/accountBank",
    "title": "设置/支付开通/开户银行",
    "type": "GET"
  },
  "GETPaymentChannelsSmallWxStatus": {
    "uri": "/paymentChannels/{mchId}/smallWxStatus",
    "pageId": "570",
    "page_uri": "GET  /paymentChannels/{mchId}/smallWxStatus",
    "title": "设置/支付开通/小微商户状态查询",
    "type": "GET"
  },
  "POSTpaymentChannelsMediaUpload": {
    "uri": "paymentChannels/mediaUpload",
    "pageId": "571",
    "page_uri": "POST paymentChannels/mediaUpload",
    "title": "支付图片材料上传",
    "type": "POST"
  },
  "GETPaymentChannelsSmallWxRevisedEdition": {
    "uri": "/paymentChannels/{mchId}/smallWxRevisedEdition",
    "pageId": "572",
    "page_uri": "GET /paymentChannels/{mchId}/smallWxRevisedEdition",
    "title": "设置/支付开通/小微商户重新编辑",
    "type": "GET"
  },
  "GETPaymentChannelsSmallWxFailReason": {
    "uri": "/paymentChannels/{mchId}/smallWxFailReason",
    "pageId": "573",
    "page_uri": "GET /paymentChannels/{mchId}/smallWxFailReason",
    "title": "设置/支付开通/小微商户失败原因",
    "type": "GET"
  },
  "GETMchParkingStatistics": {
    "uri": "/mch/parking/statistics",
    "pageId": "316",
    "page_uri": "GET /mch/parking/statistics",
    "title": "主页/api1",
    "type": "GET"
  },
  "GETMchReportParkingCountDay": {
    "uri": "/mch/report/parkingCountDay",
    "pageId": "317",
    "page_uri": "GET /mch/report/parkingCountDay",
    "title": "主页/api2",
    "type": "GET"
  },
  "GETMchReportPayDay": {
    "uri": "/mch/report/payDay",
    "pageId": "318",
    "page_uri": "GET /mch/report/payDay",
    "title": "主页/api3",
    "type": "GET"
  },
  "GETMchGuide": {
    "uri": "/mch/guide",
    "pageId": "319",
    "page_uri": "GET /mch/guide",
    "title": "主页/api4",
    "type": "GET"
  },
  "GETChannelInoutList": {
    "uri": "/channel/inoutList",
    "pageId": [
      "320",
      "578"
    ],
    "page_uri": "GET /channel/inoutList",
    "title": "实际情况/出入口列表",
    "type": "GET"
  },
  "POSTChannelOpen": {
    "uri": "/channel/{channelId}/open",
    "pageId": [
      [
        "321",
        "579"
      ],
      "467"
    ],
    "page_uri": "POST /channel/{channelId}/open",
    "title": "实际情况/开闸",
    "type": "POST"
  },
  "POSTChannelClose": {
    "uri": "/channel/{channelId}/close",
    "pageId": [
      [
        "491",
        "580"
      ],
      "468"
    ],
    "page_uri": "POST /channel/{channelId}/close",
    "title": "实际情况/关闸",
    "type": "POST"
  },
  "POSTParkingOrderImport": {
    "uri": "/parkingOrder/import",
    "pageId": "601",
    "page_uri": "POST /parkingOrder/import",
    "title": "导入在场车",
    "type": "POST"
  },
  "PUTParkingOrderFixPlateNumber": {
    "uri": "/parkingOrder/{parkingOrderId}/fixPlateNumber",
    "pageId": [
      "325",
      "583"
    ],
    "page_uri": "PUT /parkingOrder/{parkingOrderId}/fixPlateNumber",
    "title": "实际情况/确认车牌",
    "type": "PUT"
  },
  "GETParkingOrder": {
    "uri": "/parkingOrder/{parkingOrderId}",
    "pageId": [
      "322",
      "463"
    ],
    "page_uri": "GET /parkingOrder/{parkingOrderId}",
    "title": "实际情况/获取订单信息",
    "type": "GET"
  },
  "POSTParkingOrderFinishByCash": {
    "uri": "/parkingOrder/{parkingOrderId}/finishByCash",
    "pageId": [
      [
        "324",
        "584"
      ],
      "465"
    ],
    "page_uri": "POST /parkingOrder/{parkingOrderId}/finishByCash",
    "title": "实际情况/收现金开闸",
    "type": "POST"
  },
  "POSTParkingOrderFinishByForce": {
    "uri": "/parkingOrder/{parkingOrderId}/finishByForce",
    "pageId": [
      [
        "492",
        "585"
      ],
      "466"
    ],
    "page_uri": "POST /parkingOrder/{parkingOrderId}/finishByForce",
    "title": "实际情况/强制结单",
    "type": "POST"
  },
  "GETParkingOrderReport": {
    "uri": "/parkingOrder/report",
    "pageId": [
      [
        [
          "323",
          "326"
        ],
        "377"
      ],
      "592"
    ],
    "page_uri": "GET /parkingOrder/report",
    "title": "实际情况/主列表 有相同接口",
    "type": "GET"
  },
  "GETParkingOrderDetails": {
    "uri": "/parkingOrder/{parkingOrderId}/details",
    "pageId": "372",
    "page_uri": "GET /parkingOrder/{parkingOrderId}/details",
    "title": "停车订单/明细",
    "type": "GET"
  },
  "GETParkingOrderPic": {
    "uri": "/parkingOrder/{parkingOrderId}/pic",
    "pageId": "373",
    "page_uri": "GET /parkingOrder/{parkingOrderId}/pic",
    "title": "停车订单/抓拍证据",
    "type": "GET"
  },
  "GETParkingOrderAreaOrder": {
    "uri": "/parkingOrder/{parkingOrderId}/areaOrder",
    "pageId": "374",
    "page_uri": "GET /parkingOrder/{parkingOrderId}/areaOrder",
    "title": "停车订单/区订单",
    "type": "GET"
  },
  "GETCarGroupByCar": {
    "uri": "/carGroup/byCar",
    "pageId": "375",
    "page_uri": "GET /carGroup/byCar",
    "title": "目标车辆流水/所在车组",
    "type": "GET"
  },
  "GETCarGroupMonthByCar": {
    "uri": "/carGroup/month/byCar",
    "pageId": "376",
    "page_uri": "GET /carGroup/month/byCar",
    "title": "目标车辆流水/月租情况",
    "type": "GET"
  },
  "GETAreaOrderReport": {
    "uri": "/areaOrder/report",
    "pageId": [
      "378",
      "381"
    ],
    "page_uri": "GET /areaOrder/report",
    "title": "目标车辆流水/流水",
    "type": "GET"
  },
  "GETParkingOrderInParking": {
    "uri": "/parkingOrder/inParking",
    "pageId": "379",
    "page_uri": "GET /parkingOrder/inParking",
    "title": "在场车辆/主列表",
    "type": "GET"
  },
  "POSTCarOut": {
    "uri": "/car/{carId}/out",
    "pageId": "380",
    "page_uri": "POST /car/{carId}/out",
    "title": "在场车辆/强制出场",
    "type": "POST"
  },
  "GETAreaOrderReportExp": {
    "uri": "/areaOrder/report/exp",
    "pageId": "382",
    "page_uri": "GET /areaOrder/report/exp",
    "title": "异常放行/主列表（未使用）",
    "type": "GET"
  },
  "GETDeviceSetting": {
    "uri": "/device/{deviceId}/setting",
    "pageId": "447",
    "page_uri": "GET /device/{deviceId}/setting",
    "title": "物业停车场设置/api9（获取设备信息）？",
    "type": "GET"
  },
  "POSTDeviceSetting": {
    "uri": "/device/{id}/setting",
    "pageId": "448",
    "page_uri": "POST /device/{id}/setting",
    "title": "物业/停车场设置/api10（未使用）",
    "type": "POST"
  },
  "POSTDevice": {
    "uri": "/device",
    "pageId": "494",
    "page_uri": "POST /device/",
    "title": "停车场设置/绑定设备到车道 (新增设备)",
    "type": "POST"
  },
  "GETFeeRuleMchPricingPlan": {
    "uri": "/feeRule/mchPricingPlan",
    "pageId": "511",
    "page_uri": "GET /feeRule/mchPricingPlan",
    "title": "停车场设置 区域设置 根据物业MchId获取计费规则",
    "type": "GET"
  },
  "GETDeviceDeviceControlPlan": {
    "uri": "/device/deviceControlPlan",
    "pageId": "526",
    "page_uri": "GET /device/deviceControlPlan",
    "title": "停车场设置 获取设备方案列表",
    "type": "GET"
  },
  "PUTParkingOrderPresence": {
    "uri": "/parkingOrder/{parkingOrderId}/presence",
    "pageId": "575",
    "page_uri": "PUT /parkingOrder/{parkingOrderId}/presence",
    "title": "在场车辆/确认在场",
    "type": "PUT"
  },
  "GETParkingOrderArea": {
    "uri": "/parkingOrder/area",
    "pageId": "576",
    "page_uri": "GET /parkingOrder/area",
    "title": "在场车辆/区域及泊位情况",
    "type": "GET"
  },
  "GETCustomGoRule": {
    "uri": "/customGoRule",
    "pageId": "634",
    "page_uri": "GET /customGoRule",
    "title": "物业/停车场设置/自定义规则查询",
    "type": "GET"
  },
  "POSTCustomGoRule": {
    "uri": "/customGoRule/{parkingId}",
    "pageId": "635",
    "page_uri": "POST /customGoRule/{parkingId}",
    "title": "物业/停车场设置/自定义规则新增",
    "type": "POST"
  },
  "PUTCustomGoRule": {
    "uri": "/customGoRule",
    "pageId": "636",
    "page_uri": "PUT /customGoRule",
    "title": "物业/停车场设置/自定义规则修改",
    "type": "PUT"
  },
  "DELETECustomGoRule": {
    "uri": "/customGoRule/{customId}",
    "pageId": "637",
    "page_uri": "DELETE /customGoRule/{customId}",
    "title": "物业/停车场设置/自定义规则删除",
    "type": "DELETE"
  },
  "WSChannelSelected": {
    "uri": "/channel/selected",
    "pageId": "577",
    "page_uri": "WS /channel/selected",
    "title": "ws：选择出入口",
    "type": "WS"
  },
  "WSNotify": {
    "uri": "/notify",
    "pageId": "582",
    "page_uri": "WS /notify",
    "title": "ws：事件通知",
    "type": "WS"
  },
  "POSTParkingOrderFinishByHand": {
    "uri": "/parkingOrder/{parkingOrderId}/finishByHand",
    "pageId": [
      "586",
      "544"
    ],
    "page_uri": "POST /parkingOrder/{parkingOrderId}/finishByHand",
    "title": "支付失败开闸",
    "type": "POST"
  },
  "POSTChannelConfirmIn": {
    "uri": "/channel/{channelId}/confirm/in",
    "pageId": "587",
    "page_uri": "POST /channel/{channelId}/confirm/in",
    "title": "确认入场（谢绝+放行）",
    "type": "POST"
  },
  "POSTRecognitionByUrl": {
    "uri": "/recognition/byUrl",
    "pageId": "588",
    "page_uri": "POST /recognition/byUrl",
    "title": "【搁置】车牌识别",
    "type": "POST"
  },
  "POSTChannelConfirmOut": {
    "uri": "/channel/{channelId}/confirm/out",
    "pageId": "589",
    "page_uri": "POST /channel/{channelId}/confirm/out",
    "title": "确认出场",
    "type": "POST"
  },
  "POSTWaitConfirmMinFee": {
    "uri": "/waitConfirm/{waitConfirmId}/minFee",
    "pageId": "590",
    "page_uri": "POST /waitConfirm/{waitConfirmId}/minFee",
    "title": "【搁置】最低资费结算",
    "type": "POST"
  },
  "POSTChannelConfirmMatch": {
    "uri": "/channel/{channelId}/confirm/match",
    "pageId": "591",
    "page_uri": "POST /channel/{channelId}/confirm/match",
    "title": "确认匹配",
    "type": "POST"
  },
  "GETChannelOrder": {
    "uri": "/channel/{channelId}/order",
    "pageId": "593",
    "page_uri": "GET /channel/{channelId}/order",
    "title": "最近的订单",
    "type": "GET"
  },
  "GETParkingOrderInParkingSimilar": {
    "uri": "/parkingOrder/inParking/similar",
    "pageId": "599",
    "page_uri": "GET /parkingOrder/inParking/similar",
    "title": "近似在场车辆列表",
    "type": "GET"
  },
  "GETStoreReport": {
    "uri": "/store/report",
    "pageId": "404",
    "page_uri": "GET /store/report",
    "title": "用券授权/商家列表",
    "type": "GET"
  },
  "POSTStore": {
    "uri": "/store",
    "pageId": "405",
    "page_uri": "POST /store/",
    "title": "用券授权/批量添加商家",
    "type": "POST"
  },
  "GETStoreCoupon": {
    "uri": "/store/{merId}/coupon",
    "pageId": "406",
    "page_uri": "GET /store/{merId}/coupon",
    "title": "用券授权/停车券列表",
    "type": "GET"
  },
  "POSTStoreEnable": {
    "uri": "/store/{couponTypeItemId}/enable",
    "pageId": "407",
    "page_uri": "POST /store/{couponTypeItemId}/enable",
    "title": "用券授权/启用/禁用停车券",
    "type": "POST"
  },
  "PUTStore": {
    "uri": "/store/{merId}",
    "pageId": "408",
    "page_uri": "PUT /store/{merId}",
    "title": "用券授权/修改商家信息",
    "type": "PUT"
  },
  "POSTStoreMerIdsCoupon": {
    "uri": "/store/merIds/coupon",
    "pageId": "409",
    "page_uri": "POST /store/merIds/coupon",
    "title": "用券授权/新增（商家发券）",
    "type": "POST"
  },
  "GETCouponType": {
    "uri": "/coupon/type",
    "pageId": "410",
    "page_uri": "GET /coupon/type",
    "title": "停车券类型/查询",
    "type": "GET"
  },
  "POSTCouponType": {
    "uri": "/coupon/type",
    "pageId": "413",
    "page_uri": "POST /coupon/type",
    "title": "停车券类型/新增",
    "type": "POST"
  },
  "PUTCouponType": {
    "uri": "/coupon/type/{couponTypeId}",
    "pageId": "414",
    "page_uri": "PUT /coupon/type/{couponTypeId}",
    "title": "停车券类型/修改",
    "type": "PUT"
  },
  "DELETECouponType": {
    "uri": "/coupon/type{couponTypeId}",
    "pageId": "502",
    "page_uri": "DELETE /coupon/type{couponTypeId}",
    "title": "停车券类型/删除",
    "type": "DELETE"
  },
  "POSTStoreResetPwdAndSend": {
    "uri": "/store/{acc}/resetPwdAndSend",
    "pageId": "557",
    "page_uri": "POST /store/{acc}/resetPwdAndSend",
    "title": "用券授权/重置商家密码并发送短信",
    "type": "POST"
  },
  "POSTCouponEnable": {
    "uri": "/coupon/{couponTypeId}/enable",
    "pageId": "558",
    "page_uri": "POST /coupon/{couponTypeId}/enable",
    "title": "停车券类型/启用/禁用停车券",
    "type": "POST"
  },
  "POSTCarGroupFreeImport": {
    "uri": "/carGroup/free/import",
    "pageId": "600",
    "page_uri": "POST /carGroup/free/import",
    "title": "导入免费车",
    "type": "POST"
  },
  "GETCarGroupBooking": {
    "uri": "/carGroup/booking",
    "pageId": "390",
    "page_uri": "GET /carGroup/booking/",
    "title": "挂单车列表/左侧列表",
    "type": "GET"
  },
  "POSTCarGroupBooking": {
    "uri": "/carGroup/booking",
    "pageId": "391",
    "page_uri": "POST /carGroup/booking",
    "title": "挂单车列表/添加挂单车组",
    "type": "POST"
  },
  "GETCarGroupBookingDetails": {
    "uri": "/carGroup/booking/{carGroupId}/details",
    "pageId": "392",
    "page_uri": "GET /carGroup/booking/{carGroupId}/details",
    "title": "挂单车列表/车组具体信息",
    "type": "GET"
  },
  "PUTCarGroupBooking": {
    "uri": "/carGroup/booking/{id}",
    "pageId": "393",
    "page_uri": "PUT /carGroup/booking/{id}",
    "title": "挂单车列表/修改挂单车信息",
    "type": "PUT"
  },
  "GETCarGroupFree": {
    "uri": "/carGroup/free",
    "pageId": "398",
    "page_uri": "GET /carGroup/free",
    "title": "免费车列表/免费车组",
    "type": "GET"
  },
  "POSTCarGroupFree": {
    "uri": "/carGroup/free",
    "pageId": "399",
    "page_uri": "POST /carGroup/free",
    "title": "免费车列表/添加免费车组",
    "type": "POST"
  },
  "POSTCarGroupFreeCar": {
    "uri": "/carGroup/free/{id}/car",
    "pageId": "401",
    "page_uri": "POST /carGroup/free/{id}/car",
    "title": "免费车列表/添加免费车",
    "type": "POST"
  },
  "PUTCarGroupFree": {
    "uri": "/carGroup/free/{carGroupId}",
    "pageId": "402",
    "page_uri": "PUT /carGroup/free/{carGroupId}",
    "title": "免费车列表/修改免费车",
    "type": "PUT"
  },
  "DELETECarGroupBooking": {
    "uri": "/carGroup/booking/{carGroupId}",
    "pageId": "524",
    "page_uri": "DELETE /carGroup/booking/{carGroupId}",
    "title": "挂单车列表/左侧列表删除",
    "type": "DELETE"
  },
  "GETCarGroupCar": {
    "uri": "/carGroup/{carGroupId}/car",
    "pageId": "387",
    "page_uri": "GET /carGroup/{carGroupId}/car",
    "title": "车组列表/组内车列表",
    "type": "GET"
  },
  "POSTCarGroupCar": {
    "uri": "/carGroup/{carGroupId}/car",
    "pageId": "388",
    "page_uri": "POST /carGroup/{carGroupId}/car",
    "title": "车组列表/添加组内车",
    "type": "POST"
  },
  "GETCarGroupChangeCheck": {
    "uri": "/carGroup/changeCheck",
    "pageId": "542",
    "page_uri": "GET /carGroup/changeCheck",
    "title": "车组列表/检测车辆",
    "type": "GET"
  },
  "POSTCarGroupTypeCar1": {
    "uri": "/carGroupType/car1",
    "pageId": "543",
    "page_uri": "POST /carGroupType/car1",
    "title": "车组列表/加入车组享用车辆 接口作废（）",
    "type": "POST"
  },
  "PUTCarGroupCar": {
    "uri": "/carGroup/{carGroupId}/car",
    "pageId": "389",
    "page_uri": "PUT /carGroup/{carGroupId}/car",
    "title": "车组列表/修改单个组内车",
    "type": "PUT"
  },
  "DELETECarGroupCar": {
    "uri": "/carGroup/{carGroupId}/car",
    "pageId": "397",
    "page_uri": "DELETE /carGroup/{carGroupId}/car",
    "title": "车组列表/删除组内车",
    "type": "DELETE"
  },
  "GETCarGroupMonthRent": {
    "uri": "/carGroup/monthRent",
    "pageId": [
      "383",
      "384"
    ],
    "page_uri": "GET /carGroup/monthRent",
    "title": "月租车列表/左侧列表",
    "type": "GET"
  },
  "POSTCarGroupMonthRent": {
    "uri": "/carGroup/monthRent",
    "pageId": "385",
    "page_uri": "POST /carGroup/monthRent",
    "title": "月租车列表/添加",
    "type": "POST"
  },
  "POSTCarGroupImport": {
    "uri": "/carGroup/import",
    "pageId": "594",
    "page_uri": "POST /carGroup/import",
    "title": "导入月租车",
    "type": "POST"
  },
  "POSTCarGroupMonthRentRenewal": {
    "uri": "/carGroup/monthRent/{carGroupId}/renewal",
    "pageId": "386",
    "page_uri": "POST /carGroup/monthRent/{carGroupId}/renewal",
    "title": "月租车列表/修改续租",
    "type": "POST"
  },
  "PUTCarGroupMonthRent": {
    "uri": "/carGroup/monthRent/{carGroupId}",
    "pageId": "496",
    "page_uri": "PUT /carGroup/monthRent/{carGroupId}",
    "title": "月租车列表/修改基础信息",
    "type": "PUT"
  },
  "GETCarGroupMonthRentDetails": {
    "uri": "/carGroup/monthRent/{carGroupId}/details",
    "pageId": "503",
    "page_uri": "GET /carGroup/monthRent/{carGroupId}/details",
    "title": "月租车列表/左侧列表详情",
    "type": "GET"
  },
  "DELETECarGroupMonthRent": {
    "uri": "/carGroup/monthRent/{carGroupId}",
    "pageId": "504",
    "page_uri": "DELETE /carGroup/monthRent/{carGroupId}",
    "title": "月租车列表/左侧列表删除",
    "type": "DELETE"
  },
  "GETCarGroupBookingReport": {
    "uri": "/carGroup/booking/report",
    "pageId": "415",
    "page_uri": "GET /carGroup/booking/report",
    "title": "挂单车报表/车组列表",
    "type": "GET"
  },
  "GETCarGroupBookingStatistics": {
    "uri": "/carGroup/booking/statistics",
    "pageId": "416",
    "page_uri": "GET /carGroup/booking/statistics",
    "title": "挂单车报表/统计信息",
    "type": "GET"
  },
  "GETCarGroupBookingDetail": {
    "uri": "/carGroup/booking/detail",
    "pageId": "417",
    "page_uri": "GET /carGroup/booking/detail",
    "title": "物业/挂单车报表/明细",
    "type": "GET"
  },
  "GETCouponReport": {
    "uri": "/coupon/report",
    "pageId": "418",
    "page_uri": "GET /coupon/report",
    "title": "优惠券报表/商家列表",
    "type": "GET"
  },
  "GETCouponStatistics": {
    "uri": "/coupon/{storeId}/statistics",
    "pageId": "419",
    "page_uri": "GET /coupon/{storeId}/statistics",
    "title": "优惠券报表/统计信息",
    "type": "GET"
  },
  "GETCouponDetail": {
    "uri": "/coupon/{storeId}/detail",
    "pageId": "420",
    "page_uri": "GET /coupon/{storeId}/detail",
    "title": "优惠券报表/明细",
    "type": "GET"
  },
  "GETMoneyStatisticsDay": {
    "uri": "/money/statistics/day",
    "pageId": "421",
    "page_uri": "GET /money/statistics/day",
    "title": "日报/统计信息",
    "type": "GET"
  },
  "GETMoneyReportDay": {
    "uri": "/money/report/day",
    "pageId": "422",
    "page_uri": "GET /money/report/day",
    "title": "日报/列表",
    "type": "GET"
  },
  "GETMoneyStatisticsMonth": {
    "uri": "/money/statistics/month",
    "pageId": "423",
    "page_uri": "GET /money/statistics/month",
    "title": "月报/统计信息",
    "type": "GET"
  },
  "GETMoneyReportMonth": {
    "uri": "/money/report/month",
    "pageId": "424",
    "page_uri": "GET /money/report/month",
    "title": "月报/列表",
    "type": "GET"
  },
  "GETMoneyDetailList": {
    "uri": "/money/detail/list",
    "pageId": "629",
    "page_uri": "GET /money/detail/list",
    "title": "账目明细/列表",
    "type": "GET"
  },
  "GETMoneyStatisticsRealtime": {
    "uri": "/money/statistics/realtime",
    "pageId": "630",
    "page_uri": "GET /money/statistics/realtime",
    "title": "账目明细/统计信息",
    "type": "GET"
  },
  "GETVoice": {
    "uri": "/voice",
    "pageId": "497",
    "page_uri": "GET /voice",
    "title": "屏幕声音方案/api1 (查询)",
    "type": "GET"
  },
  "GETVoiceDetails": {
    "uri": "/voice/{voiceId}/details",
    "pageId": "498",
    "page_uri": "GET /voice/{voiceId}/details",
    "title": "屏幕声音方案/api2 (方案详情)",
    "type": "GET"
  },
  "POSTVoice": {
    "uri": "/voice",
    "pageId": "499",
    "page_uri": "POST /voice",
    "title": "屏幕声音方案/api3(新增方案)",
    "type": "POST"
  },
  "PUTVoice": {
    "uri": "/voice/{controlPlanId}",
    "pageId": "500",
    "page_uri": "PUT /voice/{controlPlanId}",
    "title": "屏幕声音方案/api4(修改方案)",
    "type": "PUT"
  },
  "DELETEVoice": {
    "uri": "/voice/{controlPlanId}",
    "pageId": "501",
    "page_uri": "DELETE /voice/{controlPlanId}",
    "title": "屏幕声音方案/api5 (删除)",
    "type": "DELETE"
  },
  "GETFeeRuleList": {
    "uri": "/feeRule/{mchId}/list",
    "pageId": "527",
    "page_uri": "GET /feeRule/{mchId}/list",
    "title": "计费方案/api1 (方案列表)",
    "type": "GET"
  },
  "POSTFeeRule": {
    "uri": "/feeRule",
    "pageId": "528",
    "page_uri": "POST /feeRule",
    "title": "计费方案/api2 (新增子项)",
    "type": "POST"
  },
  "GETFeeRuleDetails": {
    "uri": "/feeRule/{planId}/details",
    "pageId": "529",
    "page_uri": "GET /feeRule/{planId}/details",
    "title": "计费方案/api3 (方案详情)",
    "type": "GET"
  },
  "PUTFeeRuleDetails": {
    "uri": "/feeRule/{planId}/details",
    "pageId": "530",
    "page_uri": "PUT /feeRule/{planId}/details",
    "title": "计费方案/api4 (修改详情)",
    "type": "PUT"
  },
  "PUTFeeRulePlanName": {
    "uri": "/feeRule/{mchPlanId}/planName",
    "pageId": "531",
    "page_uri": "PUT /feeRule/{mchPlanId}/planName",
    "title": "计费方案/api5 (修改名称)",
    "type": "PUT"
  },
  "DELETEFeeRule": {
    "uri": "/feeRule/{planId}",
    "pageId": "532",
    "page_uri": "DELETE /feeRule/{planId}/",
    "title": "计费方案/api6 (删除方案)",
    "type": "DELETE"
  },
  "GETAreaAllAndIgnore": {
    "uri": "/area/allAndIgnore",
    "pageId": "537",
    "page_uri": "GET /area/allAndIgnore",
    "title": "停车场设置/车道/获取所有区并剔除指定id",
    "type": "GET"
  },
  "GETMchLog": {
    "uri": "/mch/log",
    "pageId": "640",
    "page_uri": "GET  /mch/log",
    "title": "操作日志-查询",
    "type": "GET"
  },
  "GETMchOtherLog": {
    "uri": "/mch/OtherLog",
    "pageId": "641",
    "page_uri": "GET  /mch/OtherLog",
    "title": "其他操作日志-查询",
    "type": "GET"
  },
  "GETSysInfoDict": {
    "uri": "/sysInfo/dict",
    "pageId": "469",
    "page_uri": "GET /sysInfo/dict",
    "title": "枚举",
    "type": "GET"
  },
  "GETParking": {
    "uri": "/parking",
    "pageId": "371",
    "page_uri": "GET /parking/",
    "title": "停车场列表",
    "type": "GET"
  },
  "GETEmployeeList": {
    "uri": "/employee/list",
    "pageId": "486",
    "page_uri": "GET /employee/list",
    "title": "用户名搜索",
    "type": "GET"
  },
  "GETMchList": {
    "uri": "/mch/list",
    "pageId": "487",
    "page_uri": "GET /mch/list",
    "title": "物业名搜索",
    "type": "GET"
  },
  "GETAccList": {
    "uri": "/acc/list",
    "pageId": "488",
    "page_uri": "GET /acc/list",
    "title": "账号搜索",
    "type": "GET"
  },
  "GETRoleByMch": {
    "uri": "/role/byMch",
    "pageId": "538",
    "page_uri": "GET /role/byMch",
    "title": "获取当前角色列表",
    "type": "GET"
  },
  "GETMchListSonProxy": {
    "uri": "/mch/list/sonProxy",
    "pageId": "620",
    "page_uri": "GET /mch/list/sonProxy",
    "title": "获得旗下经销",
    "type": "GET"
  },
  "GETMchListSonEndUsr": {
    "uri": "/mch/list/sonEndUsr",
    "pageId": "621",
    "page_uri": "GET /mch/list/sonEndUsr",
    "title": "获得旗下物业",
    "type": "GET"
  },
  "POSTAccLogIn": {
    "uri": "/acc/logIn",
    "pageId": "507",
    "page_uri": "POST /acc/logIn",
    "title": "登录",
    "type": "POST"
  },
  "POSTAccLogOut": {
    "uri": "/acc/logOut",
    "pageId": "508",
    "page_uri": "POST /acc/logOut",
    "title": "登出",
    "type": "POST"
  },
  "GETParkingAdminTel": {
    "uri": "/parking/{parkingId}/admin/tel",
    "pageId": "453",
    "page_uri": "GET /parking/{parkingId}/admin/tel",
    "title": "通用/保安电话",
    "type": "GET"
  },
  "GETParkingFeeRule": {
    "uri": "/parking/{parkingId}/feeRule",
    "pageId": "460",
    "page_uri": "GET /parking/{parkingId}/feeRule",
    "title": "通用/车场收费说明",
    "type": "GET"
  },
  "GETWxSignIn": {
    "uri": "/wx/signIn",
    "pageId": "506",
    "page_uri": "GET /wx/signIn",
    "title": "通用/微信登录",
    "type": "GET"
  },
  "POSTChannelIn": {
    "uri": "/channel/{channelId}/in",
    "pageId": "452",
    "page_uri": "POST /channel/{channelId}/in",
    "title": "入门页/开闸入场",
    "type": "POST"
  },
  "POSTCarBind": {
    "uri": "/car/bind",
    "pageId": "454",
    "page_uri": "POST /car/bind",
    "title": "绑定页/绑定车辆",
    "type": "POST"
  },
  "GETCarMyCar": {
    "uri": "/car/myCar",
    "pageId": "455",
    "page_uri": "GET /car/myCar",
    "title": "绑定页/我的车辆",
    "type": "GET"
  },
  "POSTCarUnbind": {
    "uri": "/car/unbind",
    "pageId": "509",
    "page_uri": "POST /car/unbind",
    "title": "绑定页/解绑车辆",
    "type": "POST"
  },
  "GETParkingOrderMyOrders": {
    "uri": "/parkingOrder/myOrders",
    "pageId": "456",
    "page_uri": "GET /parkingOrder/myOrders",
    "title": "订单页/我的订单",
    "type": "GET"
  },
  "POSTParkingOrderPayWx": {
    "uri": "/parkingOrder/{parkingOrderId}/payWx",
    "pageId": "457",
    "page_uri": "POST /parkingOrder/{parkingOrderId}/payWx",
    "title": "支付页/微信支付",
    "type": "POST"
  },
  "GETParkingOrderPayInfo": {
    "uri": "/parkingOrder/payInfo",
    "pageId": [
      "458",
      "462"
    ],
    "page_uri": "GET /parkingOrder/payInfo",
    "title": "支付页/订单信息",
    "type": "GET"
  },
  "POSTParkingOrderPayAli": {
    "uri": "/parkingOrder/{parkingOrderId}/payAli",
    "pageId": "505",
    "page_uri": "POST /parkingOrder/{parkingOrderId}/payAli",
    "title": "支付页/支付宝支付",
    "type": "POST"
  },
  "POSTParkingOrderPayPp": {
    "uri": "/parkingOrder/{parkingOrderId}/payPp",
    "pageId": "559",
    "page_uri": "POST /parkingOrder/{parkingOrderId}/payPp",
    "title": "支付页/PP支付",
    "type": "POST"
  },
  "GETCouponListAndSelected": {
    "uri": "/coupon/listAndSelected",
    "pageId": "459",
    "page_uri": "GET /coupon/listAndSelected",
    "title": "优惠券页/优惠券列表",
    "type": "GET"
  },
  "GETChannelGetChannelOrder": {
    "uri": "/channel/{parkingId}/getChannelOrder",
    "pageId": "614",
    "page_uri": "GET /channel/{parkingId}/getChannelOrder",
    "title": "现场管理-待处理列表",
    "type": "GET"
  },
  "GETParkingOrderSimple": {
    "uri": "/parkingOrder/{parkingOrderId}/simple",
    "pageId": "451",
    "page_uri": "GET /parkingOrder/{parkingOrderId}/simple",
    "title": "物业保安/api1",
    "type": "GET"
  },
  "POSTCarInParking": {
    "uri": "/car/{carId}/inParking",
    "pageId": "464",
    "page_uri": "POST /car/{carId}/inParking",
    "title": "物业保安/api4",
    "type": "POST"
  },
  "GETMoneyReportTodayDetail": {
    "uri": "/money/report/todayDetail",
    "pageId": "581",
    "page_uri": "GET /money/report/todayDetail",
    "title": "日报/列表/今日收益",
    "type": "GET"
  },
  "GETCouponList": {
    "uri": "/coupon/list",
    "pageId": "545",
    "page_uri": "GET /coupon/list",
    "title": "优惠券列表(L)",
    "type": "GET"
  },
  "GETStoreInfo": {
    "uri": "/store/info",
    "pageId": "546",
    "page_uri": "GET /store/info",
    "title": "商家信息",
    "type": "GET"
  },
  "GETCouponUsed": {
    "uri": "/coupon/used",
    "pageId": "547",
    "page_uri": "GET /coupon/used",
    "title": "已使用的优惠券(T)",
    "type": "GET"
  },
  "GETCouponSent": {
    "uri": "/coupon/sent",
    "pageId": "549",
    "page_uri": "GET /coupon/sent",
    "title": "已发放的优惠券(T)",
    "type": "GET"
  },
  "POSTCouponIssued": {
    "uri": "/coupon/issued",
    "pageId": "550",
    "page_uri": "POST /coupon/issued",
    "title": "发券(L)",
    "type": "POST"
  },
  "POSTCouponIssuedPackage": {
    "uri": "/coupon/issuedPackage",
    "pageId": "551",
    "page_uri": "POST /coupon/issuedPackage",
    "title": "发券包(L)",
    "type": "POST"
  },
  "POSTCouponGetCouponByPackage": {
    "uri": "/coupon/{packageId}/getCouponByPackage",
    "pageId": "552",
    "page_uri": "POST /coupon/{packageId}/getCouponByPackage",
    "title": "从券包领券",
    "type": "POST"
  },
  "GETSubAcc": {
    "uri": "/subAcc",
    "pageId": "553",
    "page_uri": "GET /subAcc",
    "title": "我的子账户/列表",
    "type": "GET"
  },
  "PUTSubAcc": {
    "uri": "/subAcc/{subAccId}",
    "pageId": "554",
    "page_uri": "PUT /subAcc/{subAccId}",
    "title": "我的子账户/修改",
    "type": "PUT"
  },
  "POSTSubAcc": {
    "uri": "/subAcc",
    "pageId": "555",
    "page_uri": "POST /subAcc",
    "title": "我的子账户/新增",
    "type": "POST"
  },
  "DELETESubAcc": {
    "uri": "/subAcc/{subAccId}",
    "pageId": "556",
    "page_uri": "DELETE /subAcc/{subAccId}",
    "title": "我的子账户/删除",
    "type": "DELETE"
  },
  "GETTestGetAllMch": {
    "uri": "/test/getAllMch",
    "pageId": "595",
    "page_uri": "GET /test/getAllMch",
    "title": "测试/获取经销商下所有物业",
    "type": "GET"
  },
  "GETTestGetParkingByMch": {
    "uri": "/test/getParkingByMch",
    "pageId": "596",
    "page_uri": "GET /test/getParkingByMch",
    "title": "测试/获取物业下所有停车场",
    "type": "GET"
  },
  "GETTestGetChannelIdByParkingId": {
    "uri": "/test/getChannelIdByParkingId",
    "pageId": "597",
    "page_uri": "GET /test/getChannelIdByParkingId",
    "title": "测试/获取停车场下所有车道",
    "type": "GET"
  },
  "GETTestCameraCatch": {
    "uri": "/test/cameraCatch",
    "pageId": "598",
    "page_uri": "GET /test/cameraCatch",
    "title": "测试/获取跑单",
    "type": "GET"
  }
}