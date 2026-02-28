// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide-loader");
  }, 1000);
});


// NAVBAR SHADOW ON SCROLL
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
});

// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

const runCounter = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const update = () => {
      const increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(update, 20);
      } else {
        counter.innerText = target + (target === 90 ? "%" : "+");
      }
    };

    update();
  });
};

// RUN ON LOAD
window.addEventListener("load", runCounter);

// SCROLL ANIMATION (OPTIMIZED)
const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

// ELEMENTLARNI TANLASH
document.querySelectorAll(".hidden-left, .hidden-right").forEach(el => {
  observer1.observe(el);
});

// COURSES ANIMATION
const courseObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".hidden-up").forEach(el => {
  courseObserver.observe(el);
});

// OBSERVER (scroll animation)
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

// ELEMENTLAR
document.querySelectorAll(".hidden-up").forEach(el => {
  observer2.observe(el);
});


// COUNTER (faqat bir marta ishlaydi)
let counterStarted = false;

const counterObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !counterStarted) {
    counterStarted = true;

    document.querySelectorAll(".counter").forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;

      const update = () => {
        const increment = target / 100;

        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          setTimeout(update, 20);
        } else {
          counter.innerText = target + (target === 90 ? "%" : "+");
        }
      };

      update();
    });

  }
}, { threshold: 0.5 });

// STAT SECTION OBSERVE
const stats = document.querySelectorAll(".stat-card");

if (stats.length > 0) {
  stats.forEach(el => counterObserver.observe(el));
}



// TESTIMONIAL ANIMATION
const testimonialObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".testimonial-card").forEach(card => {
  testimonialObserver.observe(card);
});

const TOKEN = "8585070944:AAHN5VlIt1kIiqIEzxoKNBCwBICaZnRAREg";
const CHAT_ID = "746201772";

// document.getElementById("form").addEventListener("submit", function(e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value;SS
//   const phone = document.getElementById("phone").value;
//   const course = document.getElementById("course").value;

//   const message = `
// 🟢 Yangi o‘quvchi!

// 👤 Ism: ${name}
// 📞 Telefon: ${phone}
// 📚 Kurs: ${course}
// `;

//   fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       chat_id: CHAT_ID,
//       text: message
//     })
//   })
//   .then(() => {
//     alert("Yuborildi ✅");
//     document.getElementById("form").reset();
//   })
//   .catch(() => {
//     alert("Xatolik ❌");
//   });

// });

document.addEventListener("DOMContentLoaded", () => {

  // 🔥 ZOOM EFFECT (MULTIPLE ELEMENTS)
  const zoomElements = document.querySelectorAll(".zoom-target");

  const zoomObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("zoom-active");
      }
    });
  }, { threshold: 0.2 });

  zoomElements.forEach(el => zoomObserver.observe(el));


  // 🔥 HIGHLIGHT EFFECT
  document.querySelectorAll('a[href="#contact"]').forEach(btn => {
    btn.addEventListener("click", () => {

      const section = document.getElementById("contact");
      if (!section) return;

      setTimeout(() => {
        section.classList.add("highlight");

        setTimeout(() => {
          section.classList.remove("highlight");
        }, 1000);

      }, 500);

    });
  });

});

document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");

let isOpen = false;

function openMenu(){
  menu.style.right = "0";
  overlay.classList.remove("hidden");
  btn.classList.add("open");
  document.body.style.overflow = "hidden";
  isOpen = true;
}

function closeMenu(){
  menu.style.right = "-100%";
  overlay.classList.add("hidden");
  btn.classList.remove("open");
  document.body.style.overflow = "auto";
  isOpen = false;
}

// 1. BURGER CLICK
btn.addEventListener("click", () => {
  isOpen ? closeMenu() : openMenu();
});

// 2. OVERLAY CLICK
overlay.addEventListener("click", closeMenu);

// 3. X BUTTON CLICK
closeBtn.addEventListener("click", closeMenu);

// 4. LINK CLICK
document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", closeMenu);
});



const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const resultsSwiper = new Swiper(".resultsSwiper", {
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: ".resultsSwiper .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// const counters = document.querySelectorAll('.counter');

// counters.forEach(counter => {
//   let target = +counter.getAttribute('data-target');
//   let count = 0;

//   let update = () => {
//     let increment = target / 100;

//     if (count < target) {
//       count += increment;
//       counter.innerText = Math.ceil(count);
//       setTimeout(update, 20);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   update();
// });

const testimonialSwiper = new Swiper(".testimonialSwiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".testimonialSwiper .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});