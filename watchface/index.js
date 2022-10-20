const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')

WatchFace({
  build() {
      hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 0,
        src: "bg.png",
        show_level: hmUI.show_level.ONLY_NORMAL
      })
      hmUI.createWidget(hmUI.widget.TIME_POINTER, {
        hour_centerX: 200,
        hour_centerY: 225,
        hour_posX: 40,
        hour_posY: 225,
        hour_path: "HHH.png",
        minute_centerX: 200,
        minute_centerY: 225,
        minute_posX: 40,
        minute_posY: 225,
        minute_path: "MMM.png",
        second_centerX: 200,
        second_centerY: 225,
        second_posX: 40,
        second_posY: 225,
        second_path: "SSS.png",
        enable: !1,
    })
    // img.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
    //   img.setProperty(hmUI.prop.MORE, {
    //     y: 0
    //   })
    // })
  },
  onInit() {
    logger.log('page onInit invoked')
  },
  onDestroy() {
    logger.log('page onDestroy invoked')
  },
})