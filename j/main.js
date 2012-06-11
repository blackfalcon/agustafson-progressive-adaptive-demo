/*------------------------------------------------------------------------------
Function:			 FunctionHandler()
Author:				 Aaron Gustafson (aaron at easy-designs dot net)
Creation Date:	2009-04-02
Version:				0.2
Homepage:			 http://github.com/easy-designs/FunctionHandler.js
License:				MIT License (see homepage)
Note:					 If you change or improve on this script, please let us know by
								emailing the author (above) with a link to your demo page.
------------------------------------------------------------------------------*/
(function($){var FunctionHandler={version:"0.2"},pages={};function initialize(){var body_id=$("body").attr("id");if(body_id!=false&&typeof(pages[body_id])!="undefined"){run(pages[body_id])}if(typeof(pages["*"])!="undefined"){run(pages["*"])}}$(document).ready(initialize);FunctionHandler.register=function(id,callback){if((typeof(id)!="string"&&!(id instanceof Array))||typeof(callback)!="function"){return false}if(typeof(id)=="string"&&id.indexOf(", ")!=-1){id=id.split(", ")}if(id instanceof Array){for(var i=id.length-1;i>=0;i--){add(id[i],callback)}}else{add(id,callback)}return true};function add(id,callback){if(typeof(pages[id])=="undefined"){pages[id]=[]}pages[id].push(callback)}function run(arr){if(!(arr instanceof Array)){return}for(var i=arr.length-1;i>=0;i--){arr[i]()}}window.FunctionHandler=FunctionHandler})(jQuery);

/*
 * anchor-include pattern for already-functional links that work as a client-side include
 * Copyright 2011, Scott Jehl, scottjehl.com
 * Dual licensed under the MIT
 * Idea from Scott Gonzalez
 * to use, place attributes on an already-functional anchor pointing to content
 * that should either replace, or insert before or after that anchor
 * after the page has loaded
 * Replace:	<a href="..." data-replace="articles/latest/fragment">Latest Articles</a>
 * Before:	<a href="..." data-before="articles/latest/fragment">Latest Articles</a>
 * After:	<a href="..." data-after="articles/latest/fragment">Latest Articles</a>
 * On domready, you can use it like this: 
	 $("[data-append],[data-replace],[data-after],[data-before]").ajaxInclude();
 */
(function(a){if(a.fn.jquery.replace(/\./g,"")<143){throw new Error("jQuery 1.4.3 or higher is required");return}a.fn.ajaxInclude=function(){return this.each(function(){var d=a(this),f=d.data("target"),e=f&&a(f)||d,b=["append","replace","before","after"],h=b.length,g,c;while(h--){g=b[h];if(d.is("[data-"+g+"]")){c=d.data(g);break}}if(g=="replace"){g+="With"}if(c&&g){a.get(c,function(i){d.trigger("ajaxInclude",[e,i]);e[g](i)})}})}})(jQuery);

(function($, WIN){
	
	FunctionHandler.register(
		'*',
		function()
		{
			// for iOS (remove the toolbar)
			if ( WIN.location.hash == '' )
			{
	  			WIN.scrollTo(0, 1);
			}

			// Google Analytics
			// window._gaq = window._gaq || [];
			// window._gaq.push(['_setAccount', '']);
			// window._gaq.push(['_trackPageview']);
			// var
			// ga			= document.createElement('script'),
			// s			= document.getElementsByTagName('script')[0];
			// ga.async	= true;
			// ga.src		= ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			// s.parentNode.insertBefore(ga, s);
		});
	
	FunctionHandler.register(
		'thanks',
		function(){
			var $athletics	= $('#athletics'),
				$figure		= null,
				breakpoint	= 46.1;
			function goFigure()
			{
				if ( $(window).width() >= ( 16 * breakpoint ) )
				{
					if ( ! $figure )
					{
						$figure = $('<figure/>')
									.append(
										$('<img/>')
											.attr({
												src:	$athletics.data('img'),
												alt:	$athletics.find('h3').text()
											 })
									 );
					}
					$athletics.append( $figure );
				}
				else if ( $figure &&
						  $athletics.contains( $figure ) )
				{
					$figure.remove();
				}
			}
			goFigure();
			$(window).resize(goFigure)
		});

})(jQuery,window);