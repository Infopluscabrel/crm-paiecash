const path = "http://localhost:5000";

//fonction de connexion de l'utilisateur
$('#userLogin').livequery('submit',   function(e){ e.preventDefault() ; 
  var codeLogin = $('#yourUsername').val();
  var mot_de_passe = $('#yourPassword').val() ;
  
  var data = {
    login: codeLogin,
    password: mot_de_passe
  };
  
  console.log(data);

  $.post("http://localhost:5000/user/login/distributeur", data, function(puerto){
    if (puerto.status==200){
      alert("connexion réussie");
      window.location.href="accueil.html";}
    else {
      alert("Vous voulez accéder a un compte qui n'existe pas ");
    }  
   console.log(puerto.data[0]) ;
   isLoggedIn(puerto.data[0]);
    
  }, 'json');
  
  return false;
});

function isLoggedIn (user) {
    localStorage.setItem('user', JSON. stringify(user));
    console.log(user) ;
      
  }

  function loggedUser() {
    // ...
   // const { token, user } = puerto.body
    var user =localStorage.getItem('user');
    console.log(JSON.parse(user)) ;
if(!user) {
    return 0 ;
}
    return user;
  }