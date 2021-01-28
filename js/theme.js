		/* ------------------------------------------------------------------------ */
		/* 背景循环
		/* ------------------------------------------------------------------------ */

		// $('body').vegas({
		// 	overlay: 'img/overlay.png',
		//     slides: [
		//         { src: 'img/1.jpg' },
		//         { src: 'img/2.jpg' },
		//         { src: 'img/3.jpg' },
		//         { src: 'img/4.jpg' },
		//     ],
		//     transition: 'flash',
		//     delay: 10000
		// });

		$('body').vegas({
			overlay: 'img/overlay.png',
			 slides: [
       {   src: '/img/1.png',
           video: {
               src: [
                   'http://server.blga.cc:81/blga/Rustsubao.mp4',
               ],
               loop: false,
               mute: true,
                
           }, 
           delay: 11111
       },
       {   src: '/img/2.jpg',
           video: {
               src: [
                   'http://server.blga.cc:81/blga/xmas_sled.mp4',
               ],
               loop: true,
               mute: true,
           }, 
           delay: 999999999
       },
   ]

		});


		/* ------------------------------------------------------------------------ */
		/* 倒计时
		/* ------------------------------------------------------------------------ */
		$('.countdown-container').countDown({
			targetDate: {
				'day': 		5,
				'month': 	2,
				'year': 	2021,
				'hour': 	3,
				'min': 		0,
				'sec': 		0
			},
			omitWeeks: true
		});


		/* ------------------------------------------------------------------------ */
		/* 音乐
		/* ------------------------------------------------------------------------ 
		$("#jquery_jplayer_1").jPlayer({
        ready: function() {
          $(this).jPlayer("setMedia", {
            mp3: "http://playrust.xyz/src/boat-shop-music-loop.mp3"
          }).jPlayer("play");
          var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          var kickoff = function () {
            $("#jquery_jplayer_1").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
          };
          document.documentElement.addEventListener(click, kickoff, true);
        },
        swfPath: "/js",
        loop: true,
        });*/


		/* ------------------------------------------------------------------------ */
		/* 页面加载
		/* ------------------------------------------------------------------------ */
        // Wait for window load
		$(window).load(function() {
		    // Animate loader off screen
		    $(".page-loader").fadeOut("slow");
		});


		/* ------------------------------------------------------------------------ */
		/* Wow
		/* ------------------------------------------------------------------------ */
		new WOW().init();



