var ar = [];
$(document).ready(function(){

   $("#picasso").keypress(function(event){
   	var tx = String.fromCharCode(event.which);
   	if(event.which !== 8){
		ar.push(tx);
   		}else{
   			ar.pop();
   		}
   	console.log(event.which)
   	if(event.which === 8){
   		$("#newton").empty();
   	}
   	if(event.which===32){
   		//if(event.which ===8){ar.clear();}
   		console.log(ar)
   		var string = ar.join('')
   		console.log(string)
		$.ajax({
   		url:'/res/',
   		data:{'tx': string},
   		dataType:'json',
   		success: function(data){
   			$("#newton").append(data.parsed)
   			//alert(data.parsed);
   			ar = [];
   		}
   	});

}
   });
   
});

