var lis=document.querySelectorAll(".tab-list-li")
var uls=document.querySelectorAll(".jd-ul")
  for(let i=0;i<lis.length;i++){
      lis[i].onmouseenter=function(){
          for(let j=0;j<uls.length;j++){
              uls[j].style.display="none"
          }
          uls[i].style.display="block"
      }
  }