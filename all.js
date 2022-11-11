gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to(".loop", {
  xPercent: "-50",
  ease: "none",
  duration: 10,
  repeat: -1,
});


// banner-kids動畫設定
let sm_540 = gsap.matchMedia();
sm_540.add("(min-width: 540px)", () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#banner-kids", // 決定scrolltrigger要以哪一個元素作為觸發基準點
      markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
      start: "top 20%", // 決定動畫開始點的位置
      end: "top 1%", // 決定動畫結束點的位置
      scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
    },
  });

  tl.to("#banner-kids", {
    y: 60,
    ease: "none",
  });
  tl.to(
    "#banner-kids-bg",
    {
      height: "90px",
      ease: "none",
    },
    "<"
  );

  tl.to("#banner-kids", {
    x: 200,
    ease: "none",
  });

  tl.to(
    "#banner-kids-bg",
    {
      y: 10,
      width: "190px",
      ease: "none",
    },
    "<"
  );
});
