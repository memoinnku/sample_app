$( document ).ready(function() {
	$("#micropost_content").keyup(function(){
		$("#max_characters").html(140 - $("#micropost_content").val().length);
	})
});