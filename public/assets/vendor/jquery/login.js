
const path = "http://localhost:5000"




$('#login').livequery('submit', function(e){
    e.preventDefault();


    var formData = new FormData($('#login')[0]);
	/*$.ajax({
        url: "http://localhost:5000/medecins/login",
        type: 'POST',
        data: formData ,
        dataType: 'application/json; charset=utf-8',
        success: function (response) {
            alert(response)
        },
        failure: function (response) {
            console.log('Erro');
        }
   }); */

   $.post(path+"/medecins/login", formData, function(puerto){
		if(puerto.type == 'success') {
		    //localStorage.u = $('#send-login [name=name]').val();
		    //localStorage.p =  $('#send-login [name=pass]').val();
			
			
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');


	return false;
});



/*
$('#login').livequery('submit', function(){
    console.log($(this).serialize()) ;
	var th =  $(this);
	$.post(path+"/medecins/login", $(this).serialize(), function(puerto){
		if(puerto.type == 'success') {
		    //localStorage.u = $('#send-login [name=name]').val();
		    //localStorage.p =  $('#send-login [name=pass]').val();
			
			
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});

*/

/*
$('#login').livequery('submit', function(){
    $.post({

  url: path+"/medecins/login",
  data:  {
        "email" : 'cabre10@gmail.com' ,
        "password" : '12345678'
    },
  success: success,
  dataType: dataType
});

	return false;

   });
   */