$(function(){
	var aLi = $("#nav").find("li");
	aLi.each( (index,value)=>{
		$( value ).on("mouseenter",function(){
			aLi.removeClass("active");
			$( this  ).addClass("#nav active");
		});
		$( value ).on("click",function(){
			
				switch(index){
				case 0:
						scroll(500);
				break;
				case 1:
						scroll(1100);
				break;
				case 2:
						scroll(2200);
				break;
				case 3:
						scroll(2700);
				break;
			}
		});
		
	} );
	function scroll( oHeight){
		$("html,body").animate({
			scrollTop:oHeight
		},1000);
	}
})