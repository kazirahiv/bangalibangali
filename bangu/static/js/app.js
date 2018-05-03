var ar = [];
$(document).ready(function(){

   $("#picasso").keypress(function(event){
   	var string = $("#picasso").val();
   	console.log(event.which)
   		console.log(ar)
		$.ajax({
   		url:'/res/',
   		data:{'tx': string},
   		dataType:'json',
   		success: function(data){
   			$("#newton").empty();
   			$("#newton").append(data.parsed);
   		}
   	});
   });
   
});





