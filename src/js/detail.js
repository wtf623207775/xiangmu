class Fdj{
    constructor(){
        this.el=document.querySelector(".show")
        this.mask=document.querySelector('.mask')
        this.big=document.querySelector('.bg-pic')
        this.bigImg=document.querySelector('.big-img')


        this.el.mouseenter=()=>{
            this.mask.style.display='block';
            this.big.style.display='block';

            let bigImgWidth=this.el.offsetWith/this.mask.offsetWith*this.big.offsetWith;
            this.bigImg.style.width=bigImgWidth+"px";
            this.el.onmousemove=(e)=>{
                let left=e.pageX-this.el.offsetLeft;
                let top=e.pageY-this.el.offsetTop;

                let maskLeft=left-this.mask.offsetWidth/2;
                let maskTop=top-this.mask.offsetHeight/2;

                if(maskLeft>=this.el.offsetWith-this.mask.offsetWith){
                    maskLeft=this.el.offsetWith-this.mask.offsetWith;
                }
                if(maskLeft<=0){
                    maskLeft=0
                }
                if(maskTop<=0){
                    maskTop=0
                }
                if(maskTop>=this.el.offsetHeight-this.mask.offsetHeight){
                    maskTop=this.el.offsetHeight-this.mask.offsetHeight
                }
                this.mask.style.left=maskLeft+'px';
                this.mask.style.top=maskTop+'px';


                let bigImgLeft=-maskLeft*this.bigImg.offsetWidth/this.el.offsetWidth;

                let bigImgTop=-maskTop*this.bigImg.offsetWidth/this.el.offsetWidth;

                this.bigImg.style.left=bigImgLeft+'px';

                this.bigImg.style.top=bigImgTop+'px';
            }
        }

        this.el.onmouseleave=()=>{
            this.mask.style.display='none';
            this.big.style.display='none'
        }
    }
}

new Fdj()