// $(document).ready(() => {
//     $("h1").css("color", "red");
// });

$("h1").css("color", "red");
$("h1").addClass("sample-class indent");
$("h1").removeClass("sample-class");
console.log($("h1").hasClass("indent"));

$("button").text("aaa");
$("button").html("<em>bbb</em>");

console.log($("a").attr("href"));
$("a").attr("href", "https://atcoder.jp");

$("h1").click(() => {
    $("h1").css("color", "purple");
});
$("button").click(() => {
    $("h1").css("color", "green");
});

// $("input").keydown((event) => {
//     console.log(event.key);
// });
$(document).keydown((event) => {
    $("h1").text(event.key);
});
$("h1").on("mouseover", () => {
    $("h1").css("background-color", "lightgreen");
});

$("h1").before("<button>New 1</button>");
$("h1").after("<button>New 2</button>");
$("h1").prepend("<button>New 3</button>");
$("h1").append("<button>New 4</button>");

$("h2").remove();

$(".hide-btn").text("Hide");
$(".show-btn").text("Show");
$(".toggle-btn").text("Toggle");
$(".hide-btn").click(() => {
    // $("h3").hide();
    // $("h3").fadeOut();
    // $("h3").slideUp();
    $("h3").slideUp();
});
$(".show-btn").click(() => {
    // $("h3").show();
    // $("h3").fadeIn();
    $("h3").slideDown();
});
$(".toggle-btn").click(() => {
    // $("h3").show();
    // $("h3").fadeToggle();
    $("h3").slideToggle();
});

$(".animate-btn").html("<strong>Animate</strong>");
$(".animate-btn").on("click", () => {
    $("h1").animate({
        opacity: 0.5,
        margin: "20%",
    });
});
