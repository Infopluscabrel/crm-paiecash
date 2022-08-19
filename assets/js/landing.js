$.puerto_confirm = function( tit, aler, col) {
  "use strict";
	$.confirm({
			icon: ( col == 'green' ? 'far fa-laugh-wink' : 'far fa-surprise'),
			theme: 'modern',
			closeIcon: true,
			animation: 'scale',
			type: col,
			title: tit,
			content: aler,
			buttons: false
	});
}   

$('#next-1').livequery('click', function(){
    $('#div-parent').hide('slow');
    $('#div-grand-parent').show('slow');
    $('#next-1').hide('slow');
    $('#prev').show('slow');
    $('#makefamily').show('slow');
    $('#card-img-father').removeClass('border-b-2 border-[#2ecc71] rounded-b-md');
    $('#card-img-Gfather').addClass('border-b-2 border-[#2ecc71] rounded-b-md');
});

$('#prev').livequery('click', function(){
    $('#div-grand-parent').hide('slow');
    $('#div-parent').show('slow');
    $('#makefamily').hide('slow');
    $('#prev').hide('slow');
    $('#next-1').show('slow');
    $('#card-img-Gfather').removeClass('border-b-2 border-[#2ecc71] rounded-b-md');
    $('#card-img-father').addClass('border-b-2 border-[#2ecc71] rounded-b-md');
});

$('#makefamily').livequery('click', function(){
    var gf_fn = $('#form-makefamily [name=gf_fn]').val();
    var gf_ln = $('#form-makefamily [name=gf_ln]').val();
    var gf_birth = $('#form-makefamily [name=gf_birth]').val();
    
    var gm_fn = $('#form-makefamily [name=gm_fn]').val();
    var gm_ln = $('#form-makefamily [name=gm_ln]').val();
    var gm_birth = $('#form-makefamily [name=gm_birth]').val();
    
    var f_fn = $('#form-makefamily [name=f_fn]').val();
    var f_ln = $('#form-makefamily [name=f_ln]').val();
    var f_birth = $('#form-makefamily [name=f_birth]').val();
    
    var m_fn = $('#form-makefamily [name=m_fn]').val();
    var m_ln = $('#form-makefamily [name=m_ln]').val();
    var m_birth = $('#form-makefamily [name=m_birth]').val();
    
    var grandfather = {firstname: gf_fn, lastname: gf_ln, birthdate:gf_birth, type:1, gender:2, death:1, parent:localStorage.familyid, nid:localStorage.familyid, author: localStorage.userid };
    $.post(path+"/ajax.php?pg=send-newmember", grandfather, function(puerto){
        if(puerto.type == 'success') {
            $.get(path+"/ajax.php?pg=get-last-member", function(res){
                    localStorage.parentid =  res;
            });
            setTimeout(function(){
                var grandmother = {firstname: gm_fn, lastname: gm_ln, birthdate:gm_birth, type:2, gender:1, death:1, parent:localStorage.parentid, author: localStorage.userid };
                $.post(path+"/ajax.php?pg=send-newmember", grandmother, function(puerto){
                    $.get(path+"/ajax.php?pg=get-last-member", function(res){
                            localStorage.motherid =  res;
                    });
                    setTimeout(function(){
                        var father = {firstname: f_fn, lastname: f_ln, birthdate:f_birth, type:1, gender:2, death:1, parent:localStorage.parentid, mother:localStorage.motherid, author: localStorage.userid };
                        $.post(path+"/ajax.php?pg=send-newmember", father, function(puerto){
                            $.get(path+"/ajax.php?pg=get-last-member", function(res){
                                    localStorage.parentid =  res;
                            });
                            setTimeout(function(){
                                var mother = {firstname: m_fn, lastname: m_ln, birthdate:m_birth, type:2, gender:1, death:1, parent:localStorage.parentid, author: localStorage.userid };
                                $.post(path+"/ajax.php?pg=send-newmember", mother, function(puerto){
                                    $.get(path+"/ajax.php?pg=get-last-member", function(res){
                                            localStorage.motherid =  res;
                                    });
                                    setTimeout(function(){
                                        var you = {firstname: localStorage.firstname, lastname: localStorage.lastname, birthdate:localStorage.birthdate, type:1, gender:2, death:1, parent:localStorage.parentid, mother:localStorage.motherid, author: localStorage.userid };
                                        $.post(path+"/ajax.php?pg=send-newmember", you, function(puerto){
                                            $.post(path+"/ajax.php?pg=login-send", {name: localStorage.email, pass: localStorage.pass} , function(puerto){
                                        		if(puerto.type == 'success') {
                                        			$(location).attr('href', path )
                                        			
                                        		} else {
                                        			$.puerto_confirm( lang.error, puerto.msg, "red");
                                        		}
                                        	}, 'json');
                                        });
                                    }, 1000);
                                });
                            }, 1000);
                        });
                    }, 1000);
                });
            }, 1000);
		}
	}, 'json');
	

    
    
	return false;
});

$('.makeTree').livequery('submit', function(){
    
    var name = $(this).find( "[name=familyname]" ).val();
    var pass = $(this).find( "[name=pass]" ).val();
    var email = $(this).find( "[name=email]" ).val();
    var familyname = $(this).find( "[name=familyname]" ).val();
    var firstname = $(this).find( "[name=f_name]" ).val();
    var lastname = $(this).find( "[name=l_name]" ).val();
    var birthday = $(this).find( "[name=birthdate]" ).val();

        var family = {name: name, type: 'family'}
        var user = {name: email, email: email, pass: pass }
        
        $.post(path+"/ajax.php?pg=user-verif", user, function(puerto){
		if(puerto.type == 'success') {
			$.post(path+"/ajax.php?pg=family-verif", family, function(puerto){
    		        if(puerto.type == 'success') {
                            $.post(path+"/ajax.php?pg=user-send", user, function(puerto){
                                console.log()
                    		if(puerto.type == 'success') {
                    		    $.get(path+"/ajax.php?pg=get-last-user", function(res){
                        			localStorage.userid = res;
                        		});
                        		setTimeout(function(){
                        		family = {name: name, type: 'family', author: localStorage.userid}
                    		    $.post(path+"/ajax.php?pg=family-details", family, function(puerto){
                    		        if(puerto.type == 'success') {
                    		            $.get(path+"/ajax.php?pg=get-last-family", function(res){
                                    			localStorage.familyid = res;
                                		});
                                		localStorage.email = email;
                        				localStorage.firstname = firstname;
                        				localStorage.pass = pass;
                        				localStorage.familyname = familyname;
                        				localStorage.birthdate = birthday;
                        				localStorage.lastname = lastname;
                    				    $('#div-landing').hide('slow');
                                        $('#div-make-family').show('slow');
                            		} else {
                            			$.puerto_confirm( lang.error, puerto.msg, "red");
                            		}
                            	}, 'json');
                        		}, 1000);
                			
                    		} else {
                    			$.puerto_confirm( lang.error, puerto.msg, "red");
                    		}
                    	}, 'json');
            		} else {
            			$.puerto_confirm( lang.error, puerto.msg, "red");
            		}
            	}, 'json');
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	    }, 'json');
        
	return false;
});
        $(document).ready(function() {
    var owl = $('.owl-carousel');
    $(".owl-carousel").owlCarousel({
        loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    },
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        margin: 15,
      nav: true,
    //   navText: ["<div class='nav-button owl-prev'><svg xmlns='http://www.w3.org/2000/svg' class='h-10 w-10 text-white' viewBox='0 0 20 20' fill='currentColor'><path fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z' clip-rule='evenodd' /></svg></div>", "<div class='nav-button owl-next'><svg xmlns='http://www.w3.org/2000/svg' class='h-10 w-10 text-white' viewBox='0 0 20 20' fill='currentColor'><path fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z' clip-rule='evenodd' /></svg></div>"],
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
});
