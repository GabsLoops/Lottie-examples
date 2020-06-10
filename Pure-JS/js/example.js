//Use a external json data to load animation
var animationConteiner1 = document.getElementById('animationConteiner1');
var animationOptionsExternal = {
  wrapper: animationConteiner1,
  animType: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://raw.githubusercontent.com/GabsLoops/Lottie-examples/master/Pure-JS/animations/example-1.json'
}
animationExternal = lottie.loadAnimation(animationOptionsExternal);
animationExternal.setSubframe(false);


//Use a local .json file to load animation
var DataAnimation = JSON.parse(JSONDataAnimation);
var animationConteiner2 = document.getElementById('animationConteiner2');
var animationOptionsLoadedFile = {
  wrapper: animationConteiner2,
  animType: 'svg',
  loop: true,
  autoplay: true,
  animationData: DataAnimation
}
animationLoadedFile = lottie.loadAnimation(animationOptionsLoadedFile);
animationLoadedFile.setSubframe(false);

