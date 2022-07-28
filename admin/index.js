
const signupButton = document.getElementById('signup-button'),
loginButton = document.getElementById('login-button'),
userForms = document.getElementById('user_options-forms')


signupButton.addEventListener('click', () => {
userForms.classList.remove('bounceRight')
userForms.classList.add('bounceLeft')
}, false)


loginButton.addEventListener('click', () => {
userForms.classList.remove('bounceLeft')
userForms.classList.add('bounceRight')
}, false)

$(document).foundation();
var stickyElem = new Foundation.Sticky($(".top-bar"), {
  marginTop: 0
});

$(".top-bar").on("sticky.zf.stuckto:top", function () {
  $(".sticky-container").fadeIn();
});
$(".top-bar").on("sticky.zf.unstuckfrom:top", function () {
  $(".sticky-container").fadeOut();
});
