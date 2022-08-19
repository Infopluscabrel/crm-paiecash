const path = "http://localhost:5000"

$('#UserLogin').livequery('submit', function(e){
    e.preventDefault();
    let formData.appendchild

    var formData = new FormData($('#userLogin')[0]);
	$.ajax({
        url: "http://localhost:5000/login",
        type: 'POST',
        data: formData ,
        dataType: 'application/json; charset=utf-8',
        success: function (response) {
            alert(response)
        },
        failure: function (response) {
            console.log('Error');
        }
   }); 
   $.post(path+"/login", formData, function(puerto){
    if(puerto.type == 'success') {
        localStorage.u = $('#send-login [name=username]').val();
        localStorage.p =  $('#send-login [name=password]').val();
        
        
    } else {
        $.puerto_confirm( lang.error, puerto.msg, "red");
    }
}, 'json');


return false;
});

// fonction pour enregister un revendeur
$('saveRevendeur').submit(function(){
    var vendeur = document.getElementById("");
    var vendeur = document.getElementById("");
    var vendeur = document.getElementById("");
    var vendeur = document.getElementById("");
    var vendeur = document.getElementById("");
    var formData = new FormData(this);
    formData.append('id', sessionID);

    $.ajax({
        url: "yoururl.php",
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data){
            alert(data);
        }
    });
});