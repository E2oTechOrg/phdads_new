/* ════════════════════════════════════
   VIDEO DATA
════════════════════════════════════ */
const videos = [

  // STOCK VELS
  { cat:"stock-vels", client:"Stock Vels", title:"Brand Reel", ytId:"Wv9kXs4qp8o", url:"https://youtube.com/shorts/Wv9kXs4qp8o?feature=share", short:true },

  // LAWYER
  { cat:"lawyer", client:"Lawyer", title:"Lawyer Video I",   ytId:"BSe5UqDIH3g", url:"https://youtu.be/BSe5UqDIH3g", short:false },
  { cat:"lawyer", client:"Lawyer", title:"Lawyer Video II",  ytId:"KNceqqbsjts", url:"https://youtube.com/shorts/KNceqqbsjts?feature=share", short:true },
  { cat:"lawyer", client:"Lawyer", title:"Lawyer Video III", ytId:"Esraf77rggU", url:"https://youtube.com/shorts/Esraf77rggU?feature=share", short:true },
  { cat:"lawyer", client:"Lawyer", title:"Lawyer Video IV",  ytId:"FRmTYW2cLcM", url:"https://youtube.com/shorts/FRmTYW2cLcM?feature=share", short:true },

  // AI VIDEO
  { cat:"ai-video", client:"AI Video", title:"AI Video I",   ytId:"CkNNEWSHAzo", url:"https://youtube.com/shorts/CkNNEWSHAzo?feature=share", short:true },
  { cat:"ai-video", client:"AI Video", title:"AI Video II",  ytId:"PBxtVTRUoZc", url:"https://youtube.com/shorts/PBxtVTRUoZc?feature=share", short:true },
  { cat:"ai-video", client:"AI Video", title:"AI Video III", ytId:"XcTLlnLfew8", url:"https://youtube.com/shorts/XcTLlnLfew8?feature=share", short:true },

  // SCHOOL
  { cat:"school", client:"School", title:"School Video I",      ytId:"whgfquYqjSk", url:"https://youtube.com/shorts/whgfquYqjSk?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video II",     ytId:"60qcOV_5reI", url:"https://youtube.com/shorts/60qcOV_5reI?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video III",    ytId:"4a_gbhpqn8E", url:"https://youtube.com/shorts/4a_gbhpqn8E?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video IV",     ytId:"IclYxLLTp7E", url:"https://youtube.com/shorts/IclYxLLTp7E?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video V",      ytId:"YuxtWgHDZH8", url:"https://youtube.com/shorts/YuxtWgHDZH8?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video VI",     ytId:"HEyIxGOkrqI", url:"https://youtube.com/shorts/HEyIxGOkrqI?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video VII",    ytId:"WHfeei14jZM", url:"https://youtube.com/shorts/WHfeei14jZM?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video VIII",   ytId:"WwmPbHMuHtk", url:"https://youtube.com/shorts/WwmPbHMuHtk?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video IX",     ytId:"HG8khpHScsA", url:"https://youtube.com/shorts/HG8khpHScsA?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video X",      ytId:"gA8mtClxR9o", url:"https://youtube.com/shorts/gA8mtClxR9o?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video XI",     ytId:"e-R7BgErA_4", url:"https://youtube.com/shorts/e-R7BgErA_4?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video XII",    ytId:"0W0S32kwv38", url:"https://youtube.com/shorts/0W0S32kwv38?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video XIII",   ytId:"ism3lG02fYw", url:"https://youtube.com/shorts/ism3lG02fYw?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video XIV",    ytId:"WyL6QuzBgYs", url:"https://youtube.com/shorts/WyL6QuzBgYs?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video XV",     ytId:"Iu3AEDPmzNo", url:"https://youtube.com/shorts/Iu3AEDPmzNo?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video XVI",    ytId:"bP5ZKNCSvtA", url:"https://youtube.com/shorts/bP5ZKNCSvtA?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video XVII",   ytId:"Pw8YZJo6010", url:"https://youtube.com/shorts/Pw8YZJo6010?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video XVIII",  ytId:"fUhCOax2ec8", url:"https://youtube.com/shorts/fUhCOax2ec8?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video XIX",    ytId:"NUwn8laD9rA", url:"https://youtube.com/shorts/NUwn8laD9rA?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video XX",     ytId:"fgbjzSARHbo", url:"https://youtube.com/shorts/fgbjzSARHbo?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video XXI",    ytId:"nX6yZZgG4G0", url:"https://youtube.com/shorts/nX6yZZgG4G0?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video XXII",   ytId:"AVYwbJmV20o", url:"https://youtube.com/shorts/AVYwbJmV20o?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video XXIII",  ytId:"sdKhna5zZ6A", url:"https://youtu.be/sdKhna5zZ6A", short:false },
  { cat:"school", client:"School", title:"School Video XXIV",   ytId:"zjRvJKKdCWQ", url:"https://youtube.com/shorts/zjRvJKKdCWQ?feature=share", short:true },
  { cat:"school", client:"School", title:"School Video XXV",    ytId:"UXhYxq6w7pk", url:"https://youtu.be/UXhYxq6w7pk", short:false },

  // MEERA SCANS
  { cat:"meera-scans", client:"Meera Scans", title:"Clinic Promo I",   ytId:"RFyxbq0ocRo", url:"https://youtube.com/shorts/RFyxbq0ocRo?feature=share", short:true },
  { cat:"meera-scans", client:"Meera Scans", title:"Clinic Promo II",  ytId:"dFLYSSHMf98", url:"https://youtube.com/shorts/dFLYSSHMf98?feature=share", short:true },
  { cat:"meera-scans", client:"Meera Scans", title:"Clinic Promo III", ytId:"UIlt_u8d-MQ", url:"https://youtube.com/shorts/UIlt_u8d-MQ?feature=share", short:true },
  { cat:"meera-scans", client:"Meera Scans", title:"Clinic Promo IV",  ytId:"fycWBtBhKh8", url:"https://youtube.com/shorts/fycWBtBhKh8?feature=share", short:true },
  { cat:"meera-scans", client:"Meera Scans", title:"Clinic Promo V",   ytId:"R767WYmLm5Y", url:"https://youtube.com/shorts/R767WYmLm5Y?feature=share", short:true },

  // PRANA ARC
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel I",    ytId:"NBu_fCDRoQU", url:"https://youtube.com/shorts/NBu_fCDRoQU?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel II",   ytId:"TR0BdB7GW1A", url:"https://youtube.com/shorts/TR0BdB7GW1A?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel III",  ytId:"KvwHld5ZbjU", url:"https://youtube.com/shorts/KvwHld5ZbjU?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel IV",   ytId:"N9fJG8r2RLg", url:"https://youtube.com/shorts/N9fJG8r2RLg?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel V",    ytId:"pPoD2U3LQPk", url:"https://youtube.com/shorts/pPoD2U3LQPk?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel VI",   ytId:"ZYCABSI-lew", url:"https://youtube.com/shorts/ZYCABSI-lew?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel VII",  ytId:"oo19Uc0chRA", url:"https://youtube.com/shorts/oo19Uc0chRA?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel VIII", ytId:"zpIUbmmVJ58", url:"https://youtube.com/shorts/zpIUbmmVJ58?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel IX",   ytId:"OfqyYshFd18", url:"https://youtube.com/shorts/OfqyYshFd18?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel X",    ytId:"uKK6NqC-kns", url:"https://youtube.com/shorts/uKK6NqC-kns?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel XI",   ytId:"a05iCgNV3Qs", url:"https://youtube.com/shorts/a05iCgNV3Qs?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel XII",  ytId:"MZdOxb4SvtM", url:"https://youtube.com/shorts/MZdOxb4SvtM?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel XIII", ytId:"wjR2KVgMiIE", url:"https://youtube.com/shorts/wjR2KVgMiIE?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel XIV",  ytId:"-dMk25LPgyA", url:"https://youtube.com/shorts/-dMk25LPgyA?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel XV",   ytId:"Wz707CxyQK4", url:"https://youtube.com/shorts/Wz707CxyQK4?feature=share", short:true },
  { cat:"prana-arc", client:"Prana Arc", title:"Product Reel XVI",  ytId:"gvOEDwm9NGU", url:"https://youtube.com/shorts/gvOEDwm9NGU?feature=share", short:true },

  // GANI HOSPITAL
  { cat:"gani-hospital", client:"Gani Hospital", title:"Hospital Video I",    ytId:"SZ9HWNpvuq0", url:"https://youtube.com/shorts/SZ9HWNpvuq0?feature=share", short:true },
  { cat:"gani-hospital", client:"Gani Hospital", title:"Hospital Video II",   ytId:"MHD2EU1r7w8", url:"https://youtube.com/shorts/MHD2EU1r7w8?feature=share", short:true },
  { cat:"gani-hospital", client:"Gani Hospital", title:"Hospital Video III",  ytId:"XvRrNELWndM", url:"https://youtube.com/shorts/XvRrNELWndM?feature=share", short:true },
  { cat:"gani-hospital", client:"Gani Hospital", title:"Hospital Video IV",   ytId:"7nfN8zqvEBM", url:"https://youtube.com/shorts/7nfN8zqvEBM?feature=share", short:true },
  { cat:"gani-hospital", client:"Gani Hospital", title:"Hospital Video V",    ytId:"305gBARN32Q", url:"https://youtube.com/shorts/305gBARN32Q?feature=share", short:true },
  { cat:"gani-hospital", client:"Gani Hospital", title:"Hospital Video VI",   ytId:"ROdwa-q1tos", url:"https://youtube.com/shorts/ROdwa-q1tos?feature=share", short:true },
  { cat:"gani-hospital", client:"Gani Hospital", title:"Hospital Video VII",  ytId:"BKGqozHISCg", url:"https://youtube.com/shorts/BKGqozHISCg?feature=share", short:true },
  { cat:"gani-hospital", client:"Gani Hospital", title:"Hospital Video VIII", ytId:"pRcQ4ZKstfI", url:"https://youtube.com/shorts/pRcQ4ZKstfI?feature=share", short:true },
  { cat:"gani-hospital", client:"Gani Hospital", title:"Hospital Video IX",   ytId:"fMIifc4qrdw", url:"https://youtube.com/shorts/fMIifc4qrdw?feature=share", short:true },
  { cat:"gani-hospital", client:"Gani Hospital", title:"Hospital Video X",    ytId:"w6esovIzRrY", url:"https://youtube.com/shorts/w6esovIzRrY?feature=share", short:true },
  { cat:"gani-hospital", client:"Gani Hospital", title:"Hospital Video XI",   ytId:"yCimdTGo48Y", url:"https://youtube.com/shorts/yCimdTGo48Y?feature=share", short:true },
  { cat:"gani-hospital", client:"Gani Hospital", title:"Hospital Video XII",  ytId:"gLK6i58Vq-s", url:"https://youtube.com/shorts/gLK6i58Vq-s?feature=share", short:true },

  // VINAYAGAM HOSPITAL
  { cat:"vinayagam-hospital", client:"Vinayagam Hospital", title:"Hospital Brand Film I",   ytId:"rsuX6nOZNSQ", url:"https://youtube.com/shorts/rsuX6nOZNSQ?feature=share", short:true },
  { cat:"vinayagam-hospital", client:"Vinayagam Hospital", title:"Hospital Brand Film II",  ytId:"qgEz_HL23MM", url:"https://youtube.com/shorts/qgEz_HL23MM?feature=share", short:true },
  { cat:"vinayagam-hospital", client:"Vinayagam Hospital", title:"Hospital Brand Film III", ytId:"5VgnibLCqQI", url:"https://youtube.com/shorts/5VgnibLCqQI?feature=share", short:true },
  { cat:"vinayagam-hospital", client:"Vinayagam Hospital", title:"Hospital Brand Film IV",  ytId:"MoF7ZgGhLjQ", url:"https://youtu.be/MoF7ZgGhLjQ", short:true },

  // GATEWAY ACADEMY
  { cat:"education", client:"GATEWAY ACADEMY", title:"GATEWAY ACADEMY", ytId:"xlsuWSpjU84", url:"https://youtube.com/shorts/xlsuWSpjU84?feature=share", short:true },

  // IMPRESSION BY SAI SHWETHA
  { cat:"impression-by-sai-shwetha", client:"Impression By Sai Shwetha", title:"Video I",   ytId:"Rcb6a--7LT4", url:"https://youtube.com/shorts/Rcb6a--7LT4?feature=share", short:true },
  { cat:"impression-by-sai-shwetha", client:"Impression By Sai Shwetha", title:"Video II",  ytId:"XjCk2xsVKFg", url:"https://youtube.com/shorts/XjCk2xsVKFg?feature=share", short:true },
  { cat:"impression-by-sai-shwetha", client:"Impression By Sai Shwetha", title:"Video III", ytId:"_H9Lxlyg_Yw", url:"https://youtube.com/shorts/_H9Lxlyg_Yw?feature=share", short:true },
  { cat:"impression-by-sai-shwetha", client:"Impression By Sai Shwetha", title:"Video IV",  ytId:"SWImPcIqGzc", url:"https://youtube.com/shorts/SWImPcIqGzc?feature=share", short:true },
];

/* ════════════════════════════════════
   HELPERS
════════════════════════════════════ */

/** Build the YouTube autoplay embed URL */
function embedUrl(v) {
  return (
    "https://www.youtube.com/embed/" + v.ytId +
    "?autoplay=1&mute=1&loop=1&playlist=" + v.ytId +
    "&playsinline=1&controls=0&rel=0&modestbranding=1&enablejsapi=0"
  );
}

/** Human-readable category label */
function catLabel(cat) {
  var map = {
    "lawyer":                    "Lawyer",
    "school":                    "School",
    "stock-vels":                "Stock Vels",
    "prana-arc":                 "Prana Arc",
    "meera-scans":               "Meera Scans",
    "gani-hospital":             "Gani Hospital",
    "vinayagam-hospital":        "Vinayagam Hospital",
    "education":                 "Gateway Academy",
    "impression-by-sai-shwetha":"Impression",
    "ai-video":                  "AI Video",
  };
  return map[cat] || cat;
}

/* ════════════════════════════════════
   LAZY-LOAD via IntersectionObserver
   Cards show a YouTube thumbnail first.
   The real autoplay iframe is injected
   only when the card enters the viewport
   (with a 100 px look-ahead margin).
════════════════════════════════════ */
var lazyObserver = null;

function initLazyObserver() {
  if (!("IntersectionObserver" in window)) {
    /* Fallback for very old browsers: activate everything immediately */
    document.querySelectorAll(".video-wrap[data-ytid]").forEach(activateIframe);
    return;
  }

  lazyObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        activateIframe(entry.target);
        lazyObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: "100px 0px" });

  document.querySelectorAll(".video-wrap[data-ytid]").forEach(function(el) {
    lazyObserver.observe(el);
  });
}

function activateIframe(wrap) {
  if (wrap.querySelector("iframe")) return; /* guard: already activated */

  /* Remove thumbnail overlay */
  var thumb = wrap.querySelector(".yt-thumb");
  if (thumb) thumb.remove();

  var iframe = document.createElement("iframe");
  iframe.src = wrap.dataset.src;
  iframe.setAttribute("allow", "autoplay; encrypted-media");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("title", wrap.dataset.title || "");
  iframe.style.cssText = "width:100%;height:100%;border:none;display:block;";
  wrap.appendChild(iframe);
}

/* ════════════════════════════════════
   RENDER GRID
════════════════════════════════════ */
function renderGrid(cat) {
  /* Disconnect observer before rebuilding DOM */
  if (lazyObserver) {
    lazyObserver.disconnect();
    lazyObserver = null;
  }

  var grid = document.getElementById("shortsGrid");
  var filtered = (cat === "all"
    ? [...videos]
    : videos.filter(function(v) { return v.cat === cat; })
  ).reverse();

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state"><p>No videos in this category yet.</p></div>';
    return;
  }

  /* Build card HTML — iframe NOT injected yet (lazy) */
  grid.innerHTML = filtered.map(function(v, i) {
    var src      = embedUrl(v);
    /* hqdefault = 480x360 thumbnail, fast to load */
    var thumbUrl = "https://i.ytimg.com/vi/" + v.ytId + "/hqdefault.jpg";
    var delay    = Math.min(i * 0.05, 0.6).toFixed(2);

    return [
      '<div class="short-card" style="animation-delay:' + delay + 's">',

        /* Lazy wrapper — stores embed src in data attribute */
        '<div class="video-wrap"',
          ' data-ytid="' + v.ytId + '"',
          ' data-src="'  + src     + '"',
          ' data-title="' + v.title.replace(/"/g, '&quot;') + '"',
        '>',
          /* Thumbnail shown until IntersectionObserver fires */
          '<div class="yt-thumb" style="',
            'position:absolute;inset:0;',
            'background:url(\'' + thumbUrl + '\') center/cover no-repeat;',
          '"></div>',
        '</div>',

        '<div class="cat-badge">' + catLabel(v.cat) + '</div>',

        '<a class="open-btn" href="' + v.url + '" target="_blank" rel="noopener">',
          '<svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>',
          'Watch on YouTube',
        '</a>',

        '<div class="card-label">',
          '<div class="client-name">' + v.client + '</div>',
          '<div class="video-title">'  + v.title  + '</div>',
        '</div>',

        /* Full-card click opens YouTube */
        '<div class="click-open" onclick="window.open(\'' + v.url + '\',\'_blank\',\'noopener,noreferrer\')"></div>',

      '</div>',
    ].join("");
  }).join("");

  /* Attach lazy observer to freshly rendered wraps */
  initLazyObserver();
}

/* ════════════════════════════════════
   FILTER TAB CLICKS
════════════════════════════════════ */
document.getElementById("filterTabs").addEventListener("click", function(e) {
  var btn = e.target.closest(".filter-tab");
  if (!btn) return;

  document.querySelectorAll(".filter-tab").forEach(function(t) {
    t.classList.remove("active");
  });
  btn.classList.add("active");

  /* Scroll active tab into view (key for mobile horizontal scroll) */
  btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

  renderGrid(btn.getAttribute("data-cat"));
});

/* ════════════════════════════════════
   MOBILE FILTER TABS — horizontal scroll
   Styles injected at runtime so no extra
   CSS file edit is required.
════════════════════════════════════ */
(function injectMobileTabStyles() {
  var style = document.createElement("style");
  style.textContent = [
    "@media (max-width: 768px) {",
    "  #filterTabs {",
    "    display: flex !important;",
    "    flex-wrap: nowrap !important;",
    "    overflow-x: auto !important;",
    "    -webkit-overflow-scrolling: touch;",
    "    justify-content: flex-start !important;",
    "    gap: 8px !important;",
    "    padding: 12px 16px 16px !important;",
    "    margin-bottom: 24px !important;",
    "    scrollbar-width: none;",
    "  }",
    "  #filterTabs::-webkit-scrollbar { display: none; }",
    "  #filterTabs .filter-tab {",
    "    flex-shrink: 0 !important;",
    "    white-space: nowrap !important;",
    "  }",
    "}",
  ].join("\n");
  document.head.appendChild(style);
})();

/* ════════════════════════════════════
   INITIAL RENDER
════════════════════════════════════ */
renderGrid("all");