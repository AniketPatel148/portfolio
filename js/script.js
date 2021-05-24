$(document).ready(function () {
	$(window).scroll(function () {
		if (this.scrollY > 20) {
			$(".navbar").addClass("sticky");
		} else {
			$(".navbar").removeClass("sticky");
		}
	});

	$(".navbar__burger").click(function () {
		$(".navbar__menu").toggleClass("open");
		$(".navbar__burger i").toggleClass("open");
		$("body").toggleClass("open");
	});
});

//Movement Animation to happen
const card = document.querySelector(".top__card");
// const container = document.querySelector(".container");
//Items
const image1 = document.querySelector(".top_image1");
const image2 = document.querySelector(".top_image2");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
card.addEventListener("mousemove", (e) => {
	var pageX = e.pageX;
	var pageY = e.pageY;
	var itemContainer = $(".top__card");
	var itemX = itemContainer.offset().left;
	var itemY = itemContainer.offset().top;
	var itemW = itemContainer.width();
	var itemH = itemContainer.height();
	var percentX = ((pageX - itemX) / itemW) * 20;
	var percentY = ((pageY - itemY) / itemH) * 20;
	var minY = 20,
		maxY = -20,
		diffY = minY - maxY;
	var rotateY = minY - (percentX / 20) * diffY;
	rotateY = rotateY < maxY ? maxY : rotateY;
	rotateY = rotateY > minY ? minY : rotateY;
	var minX = -4,
		maxX = 4,
		diffX = minX - maxX;
	var rotateX = minX - (percentY / 20) * diffX;
	rotateX = rotateX < minX ? minX : rotateX;
	rotateX = rotateX > maxX ? maxX : rotateX;

	card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});

$(".mousemove-bg-radial").on("mousemove", function (e) {
	var itemContainer = $(this);
	var pageX = e.pageX;
	var pageY = e.pageY;
	var itemX = itemContainer.offset().left;
	var itemY = itemContainer.offset().top;
	var itemW = itemContainer.width();
	var itemH = itemContainer.height();

	var bgCol = "#3a1070";
	var bgCenterCol = "#3a4f80";

	var percentX = ((pageX - itemX) / itemW) * 100;
	var percentY = ((pageY - itemY) / itemH) * 100;

	var bg =
		"radial-gradient(circle at " +
		percentX +
		"% " +
		percentY +
		"%, " +
		bgCenterCol +
		", " +
		bgCol +
		")";
	itemContainer.css("background", bg);
});

card.addEventListener("mouseenter", (e) => {
	console.log("mouseenter");
	card.style.transition = "none";
	image2.style.transform = "translateZ(200px) rotateY(35deg) rotateX(25deg)";
	image1.style.transform = "translateZ(150px) rotateY(35deg) rotateX(25deg)";
});
//Animate Out
card.addEventListener("mouseleave", (e) => {
	card.style.transition = "transform 0.5s ease";
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	card.style.background = "#3a3c70";
	image2.style.transform = "translateZ(0px) rotateY(35deg) rotateX(25deg)";
	image1.style.transform = "translateZ(0px) rotateY(35deg) rotateX(25deg)";
});
