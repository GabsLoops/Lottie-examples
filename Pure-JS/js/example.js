var animationConteiner = document.getElementById('animationConteiner');
var animationOptions = {
  wrapper: animationConteiner,
  animType: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://raw.githubusercontent.com/GabsLoops/Lottie-examples/master/Pure-JS/animations/example-1.json'
}
animation = lottie.loadAnimation(animationOptions);
animation.setSubframe(false);
