		/* ------------------------------------------------------------------------ */
		/* Background Slider
		/* ------------------------------------------------------------------------ */

		// $('body').vegas({
		// 	overlay: 'img/overlay.png',
		//     slides: [
		//         { src: 'img/1.png' },
		//         { src: 'img/88.jpg?v=20200408',
		//         delay: 13000	
		//          },
		//          { src: 'img/2.jpg' },
		//     ],
		//     transition: 'flash',
		//     delay: 10000
		// });

		$('body').vegas({
			 slides: [
       {   src: '/img/2.jpg',
           video: {
               src: [
                   'src/Rustsubao.mp4',
               ],
               loop: false,
               mute: true,
                
           }, 
           delay: 11111
       },
       {   src: '/img/3.jpg',
           video: {
               src: [
                   'src/farming.mp4',
               ],
               loop: true,
               mute: true,
           }, 
           delay: 999999999
       },
   ]

		});



		/* ------------------------------------------------------------------------ */
		/* Count Down Timer
		/* ------------------------------------------------------------------------ */
		$('.countdown-container').countDown({
			targetDate: {
				'day': 		5,
				'month': 	6,
				'year': 	2020,
				'hour': 	2,
				'min': 		0,
				'sec': 		0
			},
			omitWeeks: true
		});

		/* ------------------------------------------------------------------------ */
		/* PageLoader
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
