$(document).ready(init);
function init() {



    $(function () {
	NProgress.start();
		$(window).bind("load", function() {

NProgress.done();
		});
/*
     if ($.cookie('modal_shown_freetraffic1') == null) {
        $.cookie('modal_shown_freetraffic1', 'yes', { expires: 7, path: '/' });

 var rand =  Math.floor((Math.random() * 11) + 1);
 var url = '<a href="http://fileniko.com/ads/202095" target="_blank"><img src="http://fileniko.com/wp-content/themes/FileNikoV2/splash/img/' +  rand + '.jpg" alt="دانلود ترافیک نامحدود" /></a>';
  // var url = '<a><img src="https://fileniko.com/wp-content/themes/FileNikoV2/splash/img/t26nl0b6.jpg" alt="دانلود ترافیک نامحدود" /></a>';
  $( ".remodal-close" ).after( url );
  $('[data-remodal-id=modal2]').remodal().open();
    } 
*/
		/*if (window.location.hostname == 'www.fileniko.com' || window.location.hostname == 'fileniko.com'){
		  $('.downloadBox a').each(function() {
			  $(this).attr("href", function(index, old) {
					return old.replace("fileniko.ir", "fileniko.com");
			  });
		  });
			$('img').each(function() {
			  $(this).attr("src", function(index, old) {
					return old.replace("fileniko.ir", "fileniko.com");
			  });
		  });
			
			$('img').each(function() {
			  $(this).attr("srcset", function(index, old) {
					return old.replace("fileniko.ir", "fileniko.com");
			  });
		  });
        }*/

		/*
		$( "#convertToVas" ).click(function() {
		  $( "#convertToPub" ).fadeToggle();
		  $( "#convertToVas" ).fadeToggle();
		  $('.downloadBox a').each(function() {
			  $(this).attr("href", function(index, old) {
					return old.replace("dl", "vas");
			  });
		  });
		  $( ".convertToVasHint" ).fadeIn( 500 ).delay( 4000 ).fadeOut( 100 );

		});
		$( "#convertToPub" ).click(function() {
		  $( "#convertToPub" ).fadeToggle();
		  $( "#convertToVas" ).fadeToggle();
		  $('.downloadBox a').each(function() {
			  $(this).attr("href", function(index, old) {
					return old.replace("vas", "dl");
			  });
		  });
		});
*/
		/* Count Down */
	//	var time = new Date();
	//time = new Date(2015, 7, 16,16,00);
// 	$('#counter-default').countdown({until: time , format: 'yowDHMS'});
	/*	$("#help").toggle(
		  function(){
		  	$("div.helpBox").slideDown();
		  },
		  function(){
		  $("div.helpBox").slideUp();
		});

		$(".help").click(function(){
		  $(".helpBox").slideDown();
		});
		*/

		
        $('#rssBox').cycle({
            fx: 'fade',
            timeout: 16000,
            speed:500,
            fit: 1,     // force slides to fit container
            height:'auto',
            pager: '.rssTab',
            pagerAnchorBuilder: function (idx, slide) {
                return '<li><a href="#">'+ slide.getAttribute("title") + '</a></li>';
            },
            pause:		   1,	  // true to enable "pause on hover"
            pauseOnPagerHover:1
        });


// $("#rss-tec").rss("http://zoomit.ir/feed", {
// 					limit: 10,
// 					entryTemplate: '<li><a href="{url}" target="_blank">{title}</a><br/>{shortBodyPlain}</li>',
// 					success: function(){
// 						$("#rss-tec .loading").fadeOut();
// 						$("#rss-tec ul").delay(500).fadeIn();
// 					},
// 				});

// 				$("#rss-feed").rss("http://www.farsnews.com/rss/economy", {
// 					limit: 10,
// 					entryTemplate: '<li><a href="{url}" target="_blank">{title}</a><br/>{shortBodyPlain}</li>',
// 					success: function(){
// 						$("#rss-feed .loading").fadeOut();
// 						$("#rss-feed ul").delay(500).fadeIn();
// 					},
// 				});

// 				$("#rss-spr").rss("http://www.varzesh3.com/rss/all", {
// 					limit: 10,
// 					entryTemplate: '<li><a href="{url}" target="_blank">{title}</a><br/>{shortBodyPlain}</li>',
// 					success: function(){
// 						$("#rss-spr .loading").fadeOut();
// 						$("#rss-spr ul").delay(500).fadeIn();
// 					},
// 				});




        var $search_arrow= $('.searchBox .searchArrow');
        $('.searchBox .submit').bind('mouseenter', function () { $search_arrow.addClass('hover');}).bind('mouseleave', function (){$search_arrow.removeClass('hover');});
        $('.quickLinks li').each(function () {
            var $this = $(this);
            $this.bind('mouseenter', function () { $this.addClass('hover');}).bind('mouseleave', function (){$this.removeClass('hover');});
        });
        var $oe_menu = $('#oe_menu');
        var $oe_menu_items = $oe_menu.children('li');
        var flag = false;
        $oe_menu_items.each(function () {
            var $this = $(this);
            $this.find('a:first').click(function () {
              if(!flag ){
                  if( $this.hasClass("hovered")){
                      flag = false;
                      $this.mouseleave();
              }else{
                  flag = true;
                  $this.mouseenter();
              }
              }
              return false;
            });
            $this.bind('mouseenter', function () {
                $this.find('.sub1').addClass("hover");
                if (flag) {
                    $oe_menu.children('li.hovered').removeClass('hovered');
                    $this.addClass('slided selected hovered');
                    $this.children('div').css('z-index', '9999').stop(true, true).animate({ opacity: "show", width: "toggle" }, 200, function () {
                        //   $this.children('div').css('z-index', '9999').stop(true, true).slideDown(200, function () {
                        $oe_menu_items.not('.slided').children('div').hide();
                        $this.removeClass('slided');
                    });
                    flag = false;
                }

            }).bind('mouseleave', function () {
                $this.find('.sub1').removeClass("hover");
                if (!$this.hasClass('hovered')) { $this.removeClass('hovered'); }
                else $this.removeClass('selected').children('div').css('z-index', '6');
            });
        });
        $oe_menu.bind('mouseenter', function () {
            var $this = $(this);
              $this.addClass('hovered');
        }).bind('mouseleave', function () {
            var $this = $(this);
            $this.removeClass('hovered');
                $oe_menu_items.children('div').hide();
            $oe_menu_items.removeClass('hovered');
        });
        /* $('#slideshow').before('<ul id="nav">').cycle({
            fx: 'fade',
            timeout: 8000,
            pager: '#nav',
            pagerAnchorBuilder: function (idx, slide) {
                return '<li><a href="#">'+ slide.getAttribute("content") + '</a></li>';
            }
        });
		 */

		 $('#slideshow')
		.before('<div id="nav">')
		.cycle({

			fx:     'fade',
			speed:  'slow',
			timeout: 7000,
			pager:  '#nav' ,
			pause:   1
		});
		$('.byuser > .comment-body > .vcard').prepend('<img  class="adminAvatar"  width="40" src="//fileniko.com/wp-content/themes/FileNikoV2/images/copyright_fileniko.png" />');

		var offset = 700;
		var duration = 500;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.crunchify-top').fadeIn(duration);
			} else {
				jQuery('.crunchify-top').fadeOut(duration);
			}
		});

		$('.crunchify-top').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html, body').animate({
				  scrollTop: target.offset().top
				}, 1000);
				return false;
			  }
			}
		});


		$('#saveToEmailBtn').click(function() {
			$('.savePostMsg').html("");

			var pid = $('#saveToEmailpostID').val();
			var email = $('#saveToEmailInput').val();
			 $('#saveToEmailBtn').prop( "disabled", true );
			$.post( "/mail/sendPost.php", { postId : pid , email : email}, function( data ) {
				$('#saveToEmailBtn').delay(2000).prop( "disabled", false );
			if(data.status==1){
				$('.savePostMsg').html("<font color='green'>این پست به ایمیل شما با موفقیت ارسال شد !</font>").fadeIn();
				$('.savePostMsg').fadeIn();

			}
			else{
				$('.savePostMsg').html("<font color='red'>ارسال این پست به ایمیل شما با خطا مواجه شد !</font>").fadeIn();

			}
		}, "json");

		});



    });

}


function requestUpdateForPost(name,link_id){
		var desc = $('#description').val();
		if(desc==''){
			$('#description').attr('placeholder','توضیحات الزامی است');
			$('#description').css('border-color','red');
			$('#description').css('color','red');
			return;
		}
		$.post( "https://vas.tce.ir/register/admin/extra/start_fn_updateRequest.php", { name : name , link_id : link_id , description : desc }, function( data ) {
			if(data.status==1){
				$('#sendRequestUpdateButton').fadeOut();
				$('#contentRequest').fadeOut();
				$('#updateRequestSubmitMsg').html('<div>با تشکر ، درخواست شما با موفقیت ثبت شد.</div>').fadeIn();

			}
			else{
				$('#updateRequestSubmitMsg').html('<div style="color: red;">'+ data.msg +'</div>').fadeIn();

			}
		}, "json");

}
