let tl = gsap.timeline()
tl.from(".text h2", {
  y:-100,
  opacity:0,
  scale:0,
  duration:1,
  delay:0.5,
  stagger:0.2,
});
tl.from(".text p",{
  y:100,
  scale:0,
  duration:1,
  delay:0.5,
});
