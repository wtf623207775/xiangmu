
/*******密码********/
upwd.onblur=function(){
	if(this.validity.valueMissing){
		this.nextElementSibling.innerHTML='密码不能为空';
		this.nextElementSibling.className='help-block bg-danger';
	}else if(this.validity.tooShort){
		this.nextElementSibling.innerHTML='密码不能少于6位';
		this.nextElementSibling.className='help-block bg-danger';
	}else {
		 this.nextElementSibling.innerHTML='密码输入正确';
		 this.nextElementSibling.className='help-block bg-success';
	}

}



//---

var uname =document.getElementById('uname');
uname.onblur=function(){
	 var val=uname.value;
	if(val===""){
		this.nextElementSibling.innerHTML="用户名不能为空"
		 this.nextElementSibling.className='help-block bg-danger';
	}else if(val.length<3||val.length>9){
		 this.nextElementSibling.innerHTML="用户名大于3位小于6位";
		 this.nextElementSibling.className='help-block bg-danger';
	}else{
		 this.nextElementSibling.innerHTML="用户名输入正确";
		 this.nextElementSibling.className='help-block bg-success';
	}
}
//对邮箱进行验证
$('#email').blur(function(){
	 if(this.validity.typeMismatch){
			this.nextElementSibling.innerHTML='邮箱格式不正确';
			this.nextElementSibling.className='help-block bg-danger';
			this.setCustomValidity('请输入xx@xx.cn/com');
	 }else{
			this.nextElementSibling.innerHTML='邮箱格式正确';
			this.nextElementSibling.className='help-block bg-success';
			this.setCustomValidity('');
	 }
})































