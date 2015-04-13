$('body').append(
	'<div id="link-pages" style="position: fixed; z-index:1001; bottom: 0; right: 0; background: #fff; border: solid 1px #ccc; width: 250px;"> \
		<a href="javascript:void(0);" style="float: right; background: #ccc; width:100px; height: 40px; line-height: 40px; text-align: center; color:#000;" onclick="$(this).parent().hide()">Close X</a> \
		<ol style="clear:both"> \
			<li><a href="index.html">Home</a></li> \
			<li><a href="form.html">Form</a></li> \
			<li><a href="thank-you.html">Thank you</a></li> \
			<li><a href="show.html">Show landscape</a></li> \
		</ol> \
	</div>'
);
