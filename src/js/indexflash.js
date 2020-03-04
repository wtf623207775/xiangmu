
var timeData = {
  startTime: 1579611600000, // 活动开始时间
  continueTime: 14400 // 活动持续时长 4
};

var times = document.getElementById("time");
var activeDesc = document.getElementById("active-desc");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var T = null;

function getTime() {
  var result = {
    // times 场次时间 10:00场
    /**
     * hour,minute,second, 距离活动开始/结束的时间差
     * msg: 距离活动开始还有，距离活动结束还有，活动已经结束
     */
  };
  var now = new Date();
  var date = new Date(timeData.startTime);
  // 吧 0 =》 00，1 => 01
  result.times =
    (date.getHours() >= 10 ? date.getHours() : "0" + date.getHours()) +
    ":" +
    (date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes()) +
    "场";
  if (now.getTime() < date.getTime()) {
    // 当前时间比活动开始时间小，活动没开始
    result.msg = "距离活动开始还有";
    var chargeTime = (date.getTime() - now.getTime()) / 1000; // ms
    //  14401s => 14400/3600
    //  14401%3600/60
    //  14401%3600%60
    result.hour = Math.floor(chargeTime / 3600);
    result.minute = Math.floor((chargeTime % 3600) / 60);
    result.second = Math.floor((chargeTime % 3600) % 60);
  } else {
    if (now.getTime() < date.getTime() + timeData.continueTime * 1000) {
      result.msg = "距离活动结束还有";
      var chargeTime =
        (date.getTime() + timeData.continueTime * 1000 - now.getTime()) / 1000; // ms
      result.hour = Math.floor(chargeTime / 3600);
      result.minute = Math.floor((chargeTime % 3600) / 60);
      result.second = Math.floor((chargeTime % 3600) % 60);
    } else {
      result.msg = "活动已经结束";
      result.hour = result.minute = result.second = 0;
    }
  }
  return result;
}

function formatTime(t) {
  if (t.hour < 10) {
    t.hour = "0" + t.hour;
  }
  if (t.minute < 10) {
    t.minute = "0" + t.minute;
  }
  if (t.second < 10) {
    t.second = "0" + t.second;
  }
}

// getTime();

function renderByTime() {
  var timer = getTime();
  formatTime(timer);
  if (timer.msg == "活动已经结束") {
    clearInterval(T);
  }
  if (hour.innerHTML != timer.hour) {
    hour.innerHTML = timer.hour;
  }
  if (minute.innerHTML != timer.minute) {
    minute.innerHTML = timer.minute;
  }
  if (second.innerHTML != timer.second) {
    second.innerHTML = timer.second;
  }

  if (times.innerHTML != timer.times) {
    times.innerHTML = timer.times;
  }
  if (activeDesc.innerHTML != timer.msg) {
    activeDesc.innerHTML = timer.msg;
  }
}
T = setInterval(renderByTime, 1 / 60);

// 轮播逻辑
var data = [
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/afa05c7ebaa9280b31473429274b9d6d.png",
    title: "米家LED吸顶灯 白色",
    desc: "用光线，还原理想生活",
    disCount: "349元",
    prcie: "399元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1552376822.09637089.jpg",
    title: "小米路由器4A千兆版",
    desc: "双核全千兆AC1200路由器",
    disCount: "169元",
    prcie: "129元"
  },
  {
    imgURL:
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/933233908ecbf3359440a20e3ac6b3f3.jpg",
    title: "小白智能摄像机",
    desc: "小白智能摄像机 电池版 白色",
    disCount: "399元",
    prcie: "329元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1573198113.13787281.jpg",
    title: "玺佳机械表·T系列 太空TR90 黑色",
    desc: "颠覆创新—腕间悬浮时光",
    disCount: "599元",
    prcie: "499元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1552372948.24196473.jpg",
    title: "小米移动电源3 10000mAh USB-C双向快充版 银色",
    desc: "双向18W快充 / 输入输出双接口 / 可上飞机，安全贴心",
    disCount: "129元",
    prcie: "99元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/3949e67c-406a-9ab9-5116-7fef8d9b565c.jpg",
    title: "小米降噪耳机Type-C版 黑色",
    desc: "随时随地，安静聆听好声音",
    disCount: "299元",
    prcie: "149元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1571725011.51156250.jpg",
    title: "米家电磁炉A1 黑色",
    desc: "9挡火力调节，2小时智能保温",
    disCount: "149元",
    prcie: "129元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569320171.49398978.jpg",
    title: "米家电暖器 温控版 白色",
    desc: "2200W 强劲功率，对流速热，居浴两用",
    disCount: "299元",
    prcie: "269元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560238127.40319869.png",
    title: "小米手环4 NFC版 黑色",
    desc: "大屏彩显，可刷公交、门禁	",
    disCount: "229元",
    prcie: "209元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1566204458.98572409.jpg",
    title: "米家运动鞋3 深黑色 42",
    desc: "灵敏迅捷，动态缓震",
    disCount: "199元",
    prcie: "169元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1571223747.46563922.jpg",
    title: "米家扫拖机器人1C 白色",
    desc: "能扫能拖，地面清洁交给我",
    disCount: "1699元",
    prcie: "1999元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1567752264.62688686.jpg",
    title: "立式空调A（3匹/变频/超一级能效）",
    desc: "超一级能效巨省电，自清洁",
    disCount: "5599元",
    prcie: "5999元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1570862996.74362387.png?thumb=1&w=200&h=200",
    title: "Fun Home保温泡茶杯（茶水分离） 白色 520ml",
    desc: "茶水分离，长效保温",
    disCount: "65元",
    prcie: "99元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1570670535.6211177.jpg?thumb=1&w=200&h=200",
    title: "米家风冷对开门冰箱 483L 银色",
    desc: "风冷双变频，无霜不结冰",
    disCount: "1199元",
    prcie: "2499元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1573714512.40746513.jpg?thumb=1&w=200&h=200",
    title: "米家扫拖一体机器人 白色",
    desc: "扫得干净，拖得彻底",
    disCount: "1699元",
    prcie: "1999元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572868360.8284015.jpg?thumb=1&w=200&h=200",
    title: "立式空调A（3匹/变频/超一级能效）",
    desc: "超一级能效巨省电，自清洁",
    disCount: "5599元",
    prcie: "5999元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1570862996.74362387.png?thumb=1&w=200&h=200",
    title: "Fun Home保温泡茶杯（茶水分离） 白色 520ml",
    desc: "茶水分离，长效保温",
    disCount: "65元",
    prcie: "99元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1570670535.6211177.jpg?thumb=1&w=200&h=200",
    title: "米家风冷对开门冰箱 483L 银色",
    desc: "风冷双变频，无霜不结冰",
    disCount: "1199元",
    prcie: "2499元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1573714512.40746513.jpg?thumb=1&w=200&h=200",
    title: "米家扫拖一体机器人 白色",
    desc: "扫得干净，拖得彻底",
    disCount: "1699元",
    prcie: "1999元"
  },
  {
    imgURL:
      "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572868360.8284015.jpg?thumb=1&w=200&h=200",
    title: "立式空调A（3匹/变频/超一级能效）",
    desc: "超一级能效巨省电，自清洁",
    disCount: "5599元",
    prcie: "5999元"
  }
];

var list = document.getElementById("list");
var leftBtn = document.getElementById("left-btn");
var rightBtn = document.getElementById("right-btn");

function renderToTemplate(tag,item) {
//   for(var i=0;i<data.length;i++){
//     // var li = document.createElement("li");
//     var goods=data[i]
//     var str=` <li><img
//     src="${goods.imgURL}  />
//   <div class="title">
//     ${goods.title}
//   </div>
//   <div class="desc">
//     ${goods.desc}
//   </div>
//   <div class="price">
//     <span class="price-off">${goods.disCount}</span>
//     <del>${goods.prcie}</del>
//   </div>
// </li> `
//     list.appendChild(str)
//   }
//   renderToTemplate()
  tag.innerHTML =
    '<img \
  src="' +
    item.imgURL +
    '" \
/>\
<div class="title">\
  ' +
    item.title +
    '\
</div>\
<div class="desc">\
' +
    item.desc +
    '\
</div>\
<div class="price">\
  <span class="price-off">' +
    item.prcie +
    '</span>\
  <del>' +
    item.disCount +
    '</del>\
</div>';
}

function goodsRender() {
  var len = data.length;
  for (var i = 0; i < len; i++) {
    var item = data[i];
    var li = document.createElement("li");
    li.className = "item-" + (i + 1);
    //  填充li
    renderToTemplate(li, item);
    
    list.appendChild(li);
  }
  
}

goodsRender();

// 绑定事件
var index = 0;
var totalPage = data.length / 4;

leftBtn.onclick = function () {
  if (index == 0) {
    return;
  }
  index--;
  if (index == 0) {
    leftBtn.className = "not";
  }
  list.style.transform = "translateX(-" + index * 248 * 4 + "px)";
};

rightBtn.onclick = function () {
  if (index >= totalPage - 1) {
    return;
  }
  index++;
  if (leftBtn.className == "not") {
    leftBtn.className = "allow";
  }
  list.style.transform = "translateX(-" + index * 248 * 4 + "px)";
};
