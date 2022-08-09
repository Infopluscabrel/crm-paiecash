
( function ( $ ) {
    'use strict';



   
    $('#nouveaujoueur').livequery("click", function(){
 console.log("nouveau joeur ") ;
 $('#ajoutfootballeur').modal('show') ;
    })

$('#ajoutfootballeur').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus') ;
})

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus') ; 
})

// gestion des supporteurs 
$('#nouveaujoueur').livequery("click", function(){
 console.log("nouveau joeur ") ;
 $('#ajoutfootballeur').modal('show') ;
    })

} ( jQuery ) )