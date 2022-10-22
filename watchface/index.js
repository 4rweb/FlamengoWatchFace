const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')

WatchFace({
  build() {
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      src: 'bg.png',
      show_level: hmUI.show_level.ONLY_NORMAL
    })
    hmUI.createWidget(hmUI.widget.TIME_POINTER, {
      hour_centerX: 200,
      hour_centerY: 225,
      hour_posX: 40,
      hour_posY: 225,
      hour_path: 'HHH.png',
      minute_centerX: 200,
      minute_centerY: 225,
      minute_posX: 40,
      minute_posY: 225,
      minute_path: 'MMM.png',
      second_centerX: 200,
      second_centerY: 225,
      second_posX: 40,
      second_posY: 225,
      second_path: 'SSS.png',
      enable: !1
    })
    hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: 110,
      y: 72,
      type: hmUI.data_type.HEART,
      font_array: [
        '0.png',
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png'
      ],
      align_h: hmUI.align.LEFT,
      h_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
      invalid_image: 'n.png',
      padding: !1,
      isCharacter: !1
    })
    hmUI.createWidget(hmUI.widget.IMG_TIME, {
      hour_zero: 1,
      hour_startX: 78,
      hour_startY: 110,
      hour_array: [
        '0.png',
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png'
      ],
      hour_space: 0,
      hour_align: hmUI.align.RIGHT,
      minute_zero: 1,
      minute_startX: 130,
      minute_startY: 110,
      minute_array: [
        '0.png',
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png'
      ],
      minute_space: 0,
      minute_align: hmUI.align.LEFT,
      minute_follow: 0,
      am_x: 149,
      am_y: 134,
      am_en_path: 'am.png',
      pm_x: 0,
      pm_y: 0,
      pm_en_path: 'pm.png',
      enable: !1,
      show_level: hmUI.show_level.ONLY_NORMAL
    })
    hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: 83,
      y: 153,
      type: hmUI.data_type.WEATHER_CURRENT,
      font_array: [
        '0.png',
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png'
      ],
      align_h: hmUI.align.LEFT,
      h_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
      unit_sc: 'grau.png',
      unit_tc: 'grau.png',
      unit_en: 'grau.png',
      negative_image: 'negative.png',
      invalid_image: 'n.png',
      padding: !1,
      isCharacter: !1
    })
    hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
      x: 132,
      y: 152,
      image_array: [
        'weather/0.png',
        'weather/1.png',
        'weather/2.png',
        'weather/3.png',
        'weather/4.png',
        'weather/5.png',
        'weather/6.png',
        'weather/7.png',
        'weather/8.png',
        'weather/9.png',
        'weather/10.png',
        'weather/11.png',
        'weather/12.png',
        'weather/13.png',
        'weather/14.png',
        'weather/15.png',
        'weather/16.png',
        'weather/17.png',
        'weather/18.png',
        'weather/19.png',
        'weather/20.png',
        'weather/21.png',
        'weather/22.png',
        'weather/23.png',
        'weather/24.png',
        'weather/25.png',
        'weather/26.png',
        'weather/27.png',
        'weather/28.png'
      ],
      image_length: 29,
      type: hmUI.data_type.WEATHER_CURRENT,
      show_level: hmUI.show_level.ONLY_NORMAL
    })
    hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: 75,
      y: 197,
      type: hmUI.data_type.STEP,
      font_array: [
        '0.png',
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png'
      ],
      align_h: hmUI.align.CENTER_H,
      h_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
      invalid_image: 'n.png',
      padding: !1,
      isCharacter: !1
    })
    hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: 85,
      y: 251,
      type: hmUI.data_type.CAL,
      font_array: [
        '0.png',
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png'
      ],
      align_h: hmUI.align.CENTER_H,
      h_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
      invalid_image: 'n.png',
      padding: !1,
      isCharacter: !1
    })
    hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
      x: 80,
      y: 299,
      image_array: ['b0.png', 'b1.png', 'b2.png', 'b3.png', 'b4.png'],
      image_length: 5,
      type: hmUI.data_type.BATTERY,
      show_level: hmUI.show_level.ONLY_NORMAL
    })
    hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: 109,
      y: 305,
      type: hmUI.data_type.BATTERY,
      font_array: [
        '0.png',
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png'
      ],
      align_h: hmUI.align.RIGHT,
      h_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
      padding: !1,
      isCharacter: !1
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 390,
      h: 450,
      src: 'bgAways.png',
      show_level: hmUI.show_level.ONLY_AOD
    })
    hmUI.createWidget(hmUI.widget.TIME_POINTER, {
      hour_centerX: 200,
      hour_centerY: 225,
      hour_posX: 40,
      hour_posY: 225,
      hour_path: 'HHH.png',
      hour_cover_x: 0,
      hour_cover_y: 0,
      minute_centerX: 200,
      minute_centerY: 225,
      minute_posX: 40,
      minute_posY: 225,
      minute_path: 'MMM.png',
      minute_cover_x: 0,
      minute_cover_y: 0,
      enable: !1,
      show_level: hmUI.show_level.ONLY_AOD
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
  }
})
