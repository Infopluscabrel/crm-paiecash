
var user = localStorage.getItem('user');
var value = JSON.parse(user).LOGIN;
$('#userconnect').html(`${value}`);
                      
                      