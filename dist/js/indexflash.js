"use strict";var timeData={startTime:15796116e5,continueTime:14400},times=document.getElementById("time"),activeDesc=document.getElementById("active-desc"),hour=document.getElementById("hour"),minute=document.getElementById("minute"),second=document.getElementById("second"),T=null;function getTime(){var e={},i=new Date,t=new Date(timeData.startTime);if(e.times=(10<=t.getHours()?t.getHours():"0"+t.getHours())+":"+(10<=t.getMinutes()?t.getMinutes():"0"+t.getMinutes())+"场",i.getTime()<t.getTime()){e.msg="距离活动开始还有";var m=(t.getTime()-i.getTime())/1e3;e.hour=Math.floor(m/3600),e.minute=Math.floor(m%3600/60),e.second=Math.floor(m%3600%60)}else if(i.getTime()<t.getTime()+1e3*timeData.continueTime){e.msg="距离活动结束还有";m=(t.getTime()+1e3*timeData.continueTime-i.getTime())/1e3;e.hour=Math.floor(m/3600),e.minute=Math.floor(m%3600/60),e.second=Math.floor(m%3600%60)}else e.msg="活动已经结束",e.hour=e.minute=e.second=0;return e}function formatTime(e){e.hour<10&&(e.hour="0"+e.hour),e.minute<10&&(e.minute="0"+e.minute),e.second<10&&(e.second="0"+e.second)}function renderByTime(){var e=getTime();formatTime(e),"活动已经结束"==e.msg&&clearInterval(T),hour.innerHTML!=e.hour&&(hour.innerHTML=e.hour),minute.innerHTML!=e.minute&&(minute.innerHTML=e.minute),second.innerHTML!=e.second&&(second.innerHTML=e.second),times.innerHTML!=e.times&&(times.innerHTML=e.times),activeDesc.innerHTML!=e.msg&&(activeDesc.innerHTML=e.msg)}T=setInterval(renderByTime,1/60);var data=[{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/afa05c7ebaa9280b31473429274b9d6d.png",title:"米家LED吸顶灯 白色",desc:"用光线，还原理想生活",disCount:"349元",prcie:"399元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1552376822.09637089.jpg",title:"小米路由器4A千兆版",desc:"双核全千兆AC1200路由器",disCount:"169元",prcie:"129元"},{imgURL:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/933233908ecbf3359440a20e3ac6b3f3.jpg",title:"小白智能摄像机",desc:"小白智能摄像机 电池版 白色",disCount:"399元",prcie:"329元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1573198113.13787281.jpg",title:"玺佳机械表·T系列 太空TR90 黑色",desc:"颠覆创新—腕间悬浮时光",disCount:"599元",prcie:"499元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1552372948.24196473.jpg",title:"小米移动电源3 10000mAh USB-C双向快充版 银色",desc:"双向18W快充 / 输入输出双接口 / 可上飞机，安全贴心",disCount:"129元",prcie:"99元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/3949e67c-406a-9ab9-5116-7fef8d9b565c.jpg",title:"小米降噪耳机Type-C版 黑色",desc:"随时随地，安静聆听好声音",disCount:"299元",prcie:"149元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1571725011.51156250.jpg",title:"米家电磁炉A1 黑色",desc:"9挡火力调节，2小时智能保温",disCount:"149元",prcie:"129元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569320171.49398978.jpg",title:"米家电暖器 温控版 白色",desc:"2200W 强劲功率，对流速热，居浴两用",disCount:"299元",prcie:"269元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560238127.40319869.png",title:"小米手环4 NFC版 黑色",desc:"大屏彩显，可刷公交、门禁\t",disCount:"229元",prcie:"209元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1566204458.98572409.jpg",title:"米家运动鞋3 深黑色 42",desc:"灵敏迅捷，动态缓震",disCount:"199元",prcie:"169元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1571223747.46563922.jpg",title:"米家扫拖机器人1C 白色",desc:"能扫能拖，地面清洁交给我",disCount:"1699元",prcie:"1999元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1567752264.62688686.jpg",title:"立式空调A（3匹/变频/超一级能效）",desc:"超一级能效巨省电，自清洁",disCount:"5599元",prcie:"5999元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1570862996.74362387.png?thumb=1&w=200&h=200",title:"Fun Home保温泡茶杯（茶水分离） 白色 520ml",desc:"茶水分离，长效保温",disCount:"65元",prcie:"99元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1570670535.6211177.jpg?thumb=1&w=200&h=200",title:"米家风冷对开门冰箱 483L 银色",desc:"风冷双变频，无霜不结冰",disCount:"1199元",prcie:"2499元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1573714512.40746513.jpg?thumb=1&w=200&h=200",title:"米家扫拖一体机器人 白色",desc:"扫得干净，拖得彻底",disCount:"1699元",prcie:"1999元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572868360.8284015.jpg?thumb=1&w=200&h=200",title:"立式空调A（3匹/变频/超一级能效）",desc:"超一级能效巨省电，自清洁",disCount:"5599元",prcie:"5999元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1570862996.74362387.png?thumb=1&w=200&h=200",title:"Fun Home保温泡茶杯（茶水分离） 白色 520ml",desc:"茶水分离，长效保温",disCount:"65元",prcie:"99元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1570670535.6211177.jpg?thumb=1&w=200&h=200",title:"米家风冷对开门冰箱 483L 银色",desc:"风冷双变频，无霜不结冰",disCount:"1199元",prcie:"2499元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1573714512.40746513.jpg?thumb=1&w=200&h=200",title:"米家扫拖一体机器人 白色",desc:"扫得干净，拖得彻底",disCount:"1699元",prcie:"1999元"},{imgURL:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572868360.8284015.jpg?thumb=1&w=200&h=200",title:"立式空调A（3匹/变频/超一级能效）",desc:"超一级能效巨省电，自清洁",disCount:"5599元",prcie:"5999元"}],list=document.getElementById("list"),leftBtn=document.getElementById("left-btn"),rightBtn=document.getElementById("right-btn");function renderToTemplate(e,i){e.innerHTML='<img   src="'+i.imgURL+'" /><div class="title">  '+i.title+'</div><div class="desc">'+i.desc+'</div><div class="price">  <span class="price-off">'+i.prcie+"</span>  <del>"+i.disCount+"</del></div>"}function goodsRender(){for(var e=data.length,i=0;i<e;i++){var t=data[i],m=document.createElement("li");m.className="item-"+(i+1),renderToTemplate(m,t),list.appendChild(m)}}goodsRender();var index=0,totalPage=data.length/4;leftBtn.onclick=function(){0!=index&&(0==--index&&(leftBtn.className="not"),list.style.transform="translateX(-"+248*index*4+"px)")},rightBtn.onclick=function(){totalPage-1<=index||(index++,"not"==leftBtn.className&&(leftBtn.className="allow"),list.style.transform="translateX(-"+248*index*4+"px)")};