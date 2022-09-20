const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

TweenMax.from('.logo', 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.staggerFrom('.item__menu', 1, {
  opacity: 0,
  x: -20,
  ease: Power3.easeInOut
}, 0.08)

TweenMax.staggerFrom('.title', 1, {
  opacity: 0,
  y: -70,
  ease: Power3.easeInOut
}, 0.08)
TweenMax.staggerFrom('.more', 2, {
  opacity: 0,
  x: 270,
  ease: Power3.easeInOut
}, 1.8)
TweenMax.staggerFrom('.desc', 2, {
  opacity: 0,
  x: -270,
  ease: Power3.easeInOut
}, 1.8)

TweenMax.staggerFrom('.account', 1, {
  opacity: 0,
  x: -20,
  ease: Power3.easeInOut
}, 1)


TweenMax.from('.juice', 1, {
  delay: 1,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
})

TweenMax.staggerFrom('.layer:nth-child(1) img ', 2, {
  delay: 1,
  y: -600,
  x: 50,
  ease: Expo.easeInOut,
})
TweenMax.from(' .layer:nth-child(2) img', 2, {
  delay: 1.5,
  opacity: 0,
  y: -100,
  x: -500,
  ease: Expo.easeInOut,
})
TweenMax.from('.layer:nth-child(3) img', 2, {
  delay: .7,
  opacity: 0,
  y: 800,
  x:400,
  ease: Expo.easeInOut,
})
TweenMax.from(' .layer:nth-child(4) img', 2, {
  delay: .4,
  opacity: 0,
  y: 50,
  x:-700,
  ease: Expo.easeInOut,
})
TweenMax.from('.layer:nth-child(5) img', 2, {
  delay: 1.5,
  opacity: 0,
  y: 268,
  ease: Expo.easeInOut,
})