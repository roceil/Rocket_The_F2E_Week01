$(() => {
  console.log($("#navbarBtn"));
  const tabAry = document.querySelectorAll("#tab-button");
  const signUpTimeing = document.querySelector("#signUpTimeing");

  $("#navbarBtn").on("click", () => {
    $("#navbarExtends").slideToggle("hidden");
    $("#navbarCover").toggleClass("hidden");
  });

  $("#navbarCover").on("click", () => {
    $("#navbarExtends").slideToggle("hidden");
    $("#navbarCover").toggleClass("hidden");
  });

  $(tabAry[0]).hover(() => {
    $(tabAry[0]).addClass("bg-white");
    $(tabAry[1]).removeClass("bg-white");
    if (
      signUpTimeing.getAttribute("src") ===
      "./dist/img/THE F2E 4TH/WEEK 1/大螢幕 ( 桌機 )/6-l-b.png"
    ) {
      $(signUpTimeing).fadeOut(150, () => {
        $(signUpTimeing).attr(
          "src",
          "./dist/img/THE F2E 4TH/WEEK 1/大螢幕 ( 桌機 )/6-l-a.png"
        );
        $(signUpTimeing).fadeIn(150);
      });
    }
  });
  // tabAry[1]的radius
  $(tabAry[1]).hover(() => {
    $(tabAry[1]).addClass("bg-white");
    $(tabAry[0]).removeClass("bg-white");

    if (
      signUpTimeing.getAttribute("src") ===
      "./dist/img/THE F2E 4TH/WEEK 1/大螢幕 ( 桌機 )/6-l-a.png"
    ) {
      $(signUpTimeing).fadeOut(150, () => {
        $(signUpTimeing).attr(
          "src",
          "./dist/img/THE F2E 4TH/WEEK 1/大螢幕 ( 桌機 )/6-l-b.png"
        );
        $(signUpTimeing).fadeIn(150);
      });
    }
  });
});

gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to(".loop", {
  xPercent: "-50",
  ease: "none",
  duration: 10,
  repeat: -1,
});

window.addEventListener("resize",function(e){
window.location.reload()
})

// 判斷螢幕斷點，選取動畫
const window_size = window.innerWidth;

// 根據斷點，刪除不需要的動畫效果
ScrollTrigger.matchMedia({
  "(min-width: 1320px)": function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#banner-kids", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: "top 20%", // 決定動畫開始點的位置
        end: "top 1%", // 決定動畫結束點的位置
        scrub: true, // 重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      },
    });
    tl.to("#banner-kids", {
      y: 160,
      ease: "none",
    });
    tl.to(
      "#banner-kids-bg",
      {
        height: "100px",
        ease: "none",
      },
      "<"
    );
    tl.to("#banner-kids", {
      x: 60,
      ease: "none",
    });
    tl.to(
      "#banner-kids-bg",
      {
        width: "260px",
        ease: "none",
      },
      "<"
    );
  },
  "(min-width: 1024px)": function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#banner-kids", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: "top 20%", // 決定動畫開始點的位置
        end: "top 1%", // 決定動畫結束點的位置
        scrub: true, // 重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      },
    });
    tl.to("#banner-kids", {
      y: 120,
      ease: "none",
    });
    tl.to(
      "#banner-kids-bg",
      {
        height: "80px",
        ease: "none",
      },
      "<"
    );
    tl.to("#banner-kids", {
      x: 60,
      ease: "none",
    });
    tl.to(
      "#banner-kids-bg",
      {
        width: "140px",
        ease: "none",
      },
      "<"
    );
    if (window_size >= 1320) {
      console.log("抓1024");
      tl.kill();
    }
  },
  "(min-width: 768px)": function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#banner-kids", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: "top 20%", // 決定動畫開始點的位置
        end: "top 1%", // 決定動畫結束點的位置
        scrub: true, // 重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      },
    });
    tl.to("#banner-kids", {
      y: 120,
      ease: "none",
    });
    tl.to(
      "#banner-kids-bg",
      {
        height: "110px",
        ease: "none",
      },
      "<"
    );
    tl.to("#banner-kids", {
      x: 270,
      ease: "none",
    });
    tl.to(
      "#banner-kids-bg",
      {
        width: "255px",
        ease: "none",
      },
      "<"
    );
    if (window_size >= 1024) {
      tl.kill();
    }
    // tl.kill();
    // console.log("抓768");
  },
  "(min-width: 540px)": function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#banner-kids", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: "top 20%", // 決定動畫開始點的位置
        end: "top 1%", // 決定動畫結束點的位置
        scrub: true, // 重要！開啟scrub來決定動畫播放是否依賴視窗滾動
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
    if (window_size >= 768) {
      tl.kill();
    }
  },
});

// 你是否也遇到以下問題-打字
const problem_sec = document.querySelector("#problem-sec");
ScrollTrigger.create({
  trigger: problem_sec,
  start: "-20%",
  onEnter: () => {
    gsap.to("#problem-typing1", {
      text: "你是否也遇到以下問題？",
      duration: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: "#problem-typing1",
        triggerAcrions: "play pause resume reset",
      },
    });

    gsap.to("#problem-typing2", {
      text: "滿足不了同事的許願？",
      duration: 1.5,
      delay: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "#problem-typing2",
        triggerAcrions: "play pause resume reset",
      },
    });

    gsap.to("#problem-typing3", {
      text: "動畫技能樹太雜無從下手？",
      duration: 1.5,
      delay: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: "#problem-typing3",
        triggerAcrions: "play pause resume reset",
      },
    });
  },
});

if (window_size >= 540) {
  const scroll = gsap.timeline({
    scrollTrigger: {
      start: "top top",
      end: "+=500",
      trigger: "#kids-pic", // 決定scrolltrigger要以哪一個元素作為觸發基準點
      markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
      scrub: true, // 重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      pin: true,
    },
  });
  ScrollTrigger.matchMedia({
    "(min-width: 540px)": function () {
      scroll.from("#yellow_kids", {
        x: -400,
        duration: 1,
      });
      scroll.from(
        "#blue_kids",
        {
          x: 400,
          duration: 1,
        },
        "<"
      );
      scroll.to("#kids-h3", {
        fontSize: "23px",
        duration: 1,
      });
    },
    "(min-width: 768px)": function () {
      scroll.to("#kids-h3", {
        fontSize: "36px",
        duration: 1,
      });
    },
    "(min-width: 1024px)": function () {
      scroll.to("#kids-h3", {
        fontSize: "45px",
        duration: 1,
      });
    },
    "(min-width: 1320px)": function () {
      scroll.to("#kids-h3", {
        fontSize: "50px",
        duration: 1,
      });
    },
  });
}
// 與工程師攜手合作-小精靈動畫


// const kids_sm_540 = gsap.matchMedia();
// kids_sm_540.add("all", () => {
//   scroll.from("#yellow_kids", {
//     x: -300,
//     duration: 1,
//   });
//   scroll.from(
//     "#blue_kids",
//     {
//       x: 300,
//       duration: 1,
//     },
//     "<"
//   );
//   scroll.to("#kids-h3", {
//     fontSize: "23px",
//     duration: 1,
//   });
// });

// const kids_md_768 = gsap.matchMedia();
// kids_md_768.add("(min-width:768px)", () => {
//   scroll.from("#yellow_kids", {
//     x: -300,
//     duration: 1,
//   });
//   scroll.from(
//     "#blue_kids",
//     {
//       x: 300,
//       duration: 1,
//     },
//     "<"
//   );
//   scroll.to("#kids-h3", {
//     fontSize: "32px",
//     duration: 1,
//   });
// });

// 你要修練的鬼東西動畫
const circle_tl = gsap.timeline({
  scrollTrigger: {
    start: "-300px",
    end: "-50px",
    trigger: "#circle-shit", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    scrub: true, // 重要！開啟scrub來決定動畫播放是否依賴視窗滾動
    // pin:true,
  },
});
circle_tl.from("#circle-inner", {
  y: "400px",
});

// 卡片翻轉動畫
gsap.utils.toArray(".cardCont").forEach((card) => {
  gsap.set(card, {
    transformStyle: "preserve-3d",
    transformPerspective: 1000,
  });
  const q = gsap.utils.selector(card);
  const front = q(".cardFront");
  const back = q(".cardBack");

  gsap.set(back, { rotationY: -180 });

  const tl = gsap
    .timeline({ paused: true })
    .to(front, { duration: 1, rotationY: 180 })
    .to(back, { duration: 1, rotationY: 0 }, 0)
    .to(card, { z: 50 }, 0)
    .to(card, { z: 0 }, 0.5);
  card.addEventListener("mouseenter", () => {
    tl.play();
  });
  card.addEventListener("mouseleave", () => {
    tl.reverse();
  });
});
