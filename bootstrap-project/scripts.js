var barA = new ProgressBar.Circle(circleA, {
	color: "#aaa",
	// This has to be the same size as the maximum width to
	// prevent clipping
	strokeWidth: 4,
	trailWidth: 1,
	easing: "easeInOut",
	duration: 1400,
	text: {
		autoStyleContainer: false,
	},
	from: { color: "#aaa", width: 1 },
	to: { color: "#333", width: 4 },
	// Set default step function for all animate calls
	step: function (state, circle) {
		circle.path.setAttribute("stroke", state.color);
		circle.path.setAttribute("stroke-width", state.width);

		var value = Math.round(circle.value() * 100);

		circle.setText(value);
	},
});

$(window).scroll(function (e) {
    if ($(this).scrollTop() > 500) {
        barA.animate(1.0);
    }
});

// Paralax

$("#data-area").parallax({
	imageSrc: "img/cidadeparallax.png",
});
$("#apply-content").parallax({
    imageSrc: "img/pattern.png",
});
