/* ════════════════════════════════════
 VIDEO DATA
════════════════════════════════════ */

const videos = [
  // VINAYAGAM HOSPITAL
  {
    cat: "vinayagam-hospital",
    client: "Vinayagam Hospital",
    title: "Hospital Brand Film",
    ytId: "rsuX6nOZNSQ",
    url: "https://youtube.com/shorts/rsuX6nOZNSQ?feature=share",
    short: true,
  },

  // AI VIDEO
  {
    cat: "ai-video",
    client: "AI Video",
    title: "AI Video I",
    ytId: "CkNNEWSHAzo",
    url: "https://youtube.com/shorts/CkNNEWSHAzo?feature=share",
    short: true,
  },
  {
    cat: "ai-video",
    client: "AI Video",
    title: "AI Video II",
    ytId: "PBxtVTRUoZc",
    url: "https://youtube.com/shorts/PBxtVTRUoZc?feature=share",
    short: true,
  },
  {
    cat: "ai-video",
    client: "AI Video",
    title: "AI Video III",
    ytId: "XcTLlnLfew8",
    url: "https://youtube.com/shorts/XcTLlnLfew8?feature=share",
    short: true,
  },

  // GANI HOSPITAL
  {
    cat: "gani-hospital",
    client: "Gani Hospital",
    title: "Hospital Video I",
    ytId: "SZ9HWNpvuq0",
    url: "https://youtube.com/shorts/SZ9HWNpvuq0?feature=share",
    short: true,
  },
  {
    cat: "gani-hospital",
    client: "Gani Hospital",
    title: "Hospital Video II",
    ytId: "MHD2EU1r7w8",
    url: "https://youtube.com/shorts/MHD2EU1r7w8?feature=share",
    short: true,
  },
  {
    cat: "gani-hospital",
    client: "Gani Hospital",
    title: "Hospital Video III",
    ytId: "XvRrNELWndM",
    url: "https://youtube.com/shorts/XvRrNELWndM?feature=share",
    short: true,
  },
  {
    cat: "gani-hospital",
    client: "Gani Hospital",
    title: "Hospital Video IV",
    ytId: "7nfN8zqvEBM",
    url: "https://youtube.com/shorts/7nfN8zqvEBM?feature=share",
    short: true,
  },
  {
    cat: "gani-hospital",
    client: "Gani Hospital",
    title: "Hospital Video V",
    ytId: "305gBARN32Q",
    url: "https://youtube.com/shorts/305gBARN32Q?feature=share",
    short: true,
  },

  // MEERA SCANS
  {
    cat: "meera-scans",
    client: "Meera Scans",
    title: "Clinic Promo I",
    ytId: "RFyxbq0ocRo",
    url: "https://youtube.com/shorts/RFyxbq0ocRo?feature=share",
    short: true,
  },
  {
    cat: "meera-scans",
    client: "Meera Scans",
    title: "Clinic Promo II",
    ytId: "dFLYSSHMf98",
    url: "https://youtube.com/shorts/dFLYSSHMf98?feature=share",
    short: true,
  },
  {
    cat: "meera-scans",
    client: "Meera Scans",
    title: "Clinic Promo III",
    ytId: "UIlt_u8d-MQ",
    url: "https://youtube.com/shorts/UIlt_u8d-MQ?feature=share",
    short: true,
  },
  {
    cat: "meera-scans",
    client: "Meera Scans",
    title: "Clinic Promo IV",
    ytId: "fycWBtBhKh8",
    url: "https://youtube.com/shorts/fycWBtBhKh8?feature=share",
    short: true,
  },

  // PRANA ARC
  {
    cat: "prana-arc",
    client: "Prana Arc",
    title: "Product Reel I",
    ytId: "NBu_fCDRoQU",
    url: "https://youtube.com/shorts/NBu_fCDRoQU?feature=share",
    short: true,
  },
  {
    cat: "prana-arc",
    client: "Prana Arc",
    title: "Product Reel II",
    ytId: "TR0BdB7GW1A",
    url: "https://youtube.com/shorts/TR0BdB7GW1A?feature=share",
    short: true,
  },
  {
    cat: "prana-arc",
    client: "Prana Arc",
    title: "Product Reel III",
    ytId: "KvwHld5ZbjU",
    url: "https://youtube.com/shorts/KvwHld5ZbjU?feature=share",
    short: true,
  },
  {
    cat: "prana-arc",
    client: "Prana Arc",
    title: "Product Reel IV",
    ytId: "N9fJG8r2RLg",
    url: "https://youtube.com/shorts/N9fJG8r2RLg?feature=share",
    short: true,
  },
  {
    cat: "prana-arc",
    client: "Prana Arc",
    title: "Product Reel V",
    ytId: "pPoD2U3LQPk",
    url: "https://youtube.com/shorts/pPoD2U3LQPk?feature=share",
    short: true,
  },
  {
    cat: "prana-arc",
    client: "Prana Arc",
    title: "Product Reel VI",
    ytId: "ZYCABSI-lew",
    url: "https://youtube.com/shorts/ZYCABSI-lew?feature=share",
    short: true,
  },
  {
    cat: "prana-arc",
    client: "Prana Arc",
    title: "Product Reel VII",
    ytId: "oo19Uc0chRA",
    url: "https://youtube.com/shorts/oo19Uc0chRA?feature=share",
    short: true,
  },
  {
    cat: "prana-arc",
    client: "Prana Arc",
    title: "Product Reel VIII",
    ytId: "zpIUbmmVJ58",
    url: "https://youtube.com/shorts/zpIUbmmVJ58?feature=share",
    short: true,
  },
  {
    cat: "prana-arc",
    client: "Prana Arc",
    title: "Product Reel IX",
    ytId: "OfqyYshFd18",
    url: "https://youtube.com/shorts/OfqyYshFd18?feature=share",
    short: true,
  },
  {
    cat: "prana-arc",
    client: "Prana Arc",
    title: "Product Reel X",
    ytId: "uKK6NqC-kns",
    url: "https://youtube.com/shorts/uKK6NqC-kns?feature=share",
    short: true,
  },
  {
    cat: "prana-arc",
    client: "Prana Arc",
    title: "Product Reel XI",
    ytId: "a05iCgNV3Qs",
    url: "https://youtube.com/shorts/a05iCgNV3Qs?feature=share",
    short: true,
  },
  {
    cat: "prana-arc",
    client: "Prana Arc",
    title: "Product Reel XII",
    ytId: "MZdOxb4SvtM",
    url: "https://youtube.com/shorts/MZdOxb4SvtM?feature=share",
    short: true,
  },
  {
    cat: "prana-arc",
    client: "Prana Arc",
    title: "Product Reel XIII",
    ytId: "wjR2KVgMiIE",
    url: "https://youtube.com/shorts/wjR2KVgMiIE?feature=share",
    short: true,
  },

  // STOCK VELS
  {
    cat: "stock-vels",
    client: "Stock Vels",
    title: "Brand Reel",
    ytId: "Wv9kXs4qp8o",
    url: "https://youtube.com/shorts/Wv9kXs4qp8o?feature=share",
    short: true,
  },

  // SCHOOL
  {
    cat: "school",
    client: "School",
    title: "School Video I",
    ytId: "whgfquYqjSk",
    url: "https://youtube.com/shorts/whgfquYqjSk?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video II",
    ytId: "60qcOV_5reI",
    url: "https://youtube.com/shorts/60qcOV_5reI?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video III",
    ytId: "4a_gbhpqn8E",
    url: "https://youtube.com/shorts/4a_gbhpqn8E?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video IV",
    ytId: "IclYxLLTp7E",
    url: "https://youtube.com/shorts/IclYxLLTp7E?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video V",
    ytId: "YuxtWgHDZH8",
    url: "https://youtube.com/shorts/YuxtWgHDZH8?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video VI",
    ytId: "HEyIxGOkrqI",
    url: "https://youtube.com/shorts/HEyIxGOkrqI?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video VII",
    ytId: "WHfeei14jZM",
    url: "https://youtube.com/shorts/WHfeei14jZM?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video VIII",
    ytId: "WwmPbHMuHtk",
    url: "https://youtube.com/shorts/WwmPbHMuHtk?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video IX",
    ytId: "HG8khpHScsA",
    url: "https://youtube.com/shorts/HG8khpHScsA?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video X",
    ytId: "gA8mtClxR9o",
    url: "https://youtube.com/shorts/gA8mtClxR9o?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video XI",
    ytId: "e-R7BgErA_4",
    url: "https://youtube.com/shorts/e-R7BgErA_4?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video XII",
    ytId: "0W0S32kwv38",
    url: "https://youtube.com/shorts/0W0S32kwv38?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video XIII",
    ytId: "ism3lG02fYw",
    url: "https://youtube.com/shorts/ism3lG02fYw?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video XIV",
    ytId: "WyL6QuzBgYs",
    url: "https://youtube.com/shorts/WyL6QuzBgYs?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video XV",
    ytId: "Iu3AEDPmzNo",
    url: "https://youtube.com/shorts/Iu3AEDPmzNo?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video XVI",
    ytId: "bP5ZKNCSvtA",
    url: "https://youtube.com/shorts/bP5ZKNCSvtA?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video XVII",
    ytId: "Pw8YZJo6010",
    url: "https://youtube.com/shorts/Pw8YZJo6010?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video XVIII",
    ytId: "fUhCOax2ec8",
    url: "https://youtube.com/shorts/fUhCOax2ec8?feature=share",
    short: true,
  },

  // LAWYER
  {
    cat: "lawyer",
    client: "Lawyer",
    title: "Coming Soon",
    ytId: "",
    url: "#",
    short: true,
  },
  // SCHOOL
  {
    cat: "school",
    client: "School",
    title: "School Video XIX",
    ytId: "nX6yZZgG4G0",
    url: "https://youtube.com/shorts/nX6yZZgG4G0?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video XX",
    ytId: "AVYwbJmV20o",
    url: "https://youtube.com/shorts/AVYwbJmV20o?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video XXI",
    ytId: "sdKhna5zZ6A",
    url: "https://youtu.be/sdKhna5zZ6A",
    short: false,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video XXII",
    ytId: "zjRvJKKdCWQ",
    url: "https://youtube.com/shorts/zjRvJKKdCWQ?feature=share",
    short: true,
  },
  {
    cat: "school",
    client: "School",
    title: "School Video XXIII",
    ytId: "UXhYxq6w7pk",
    url: "https://youtu.be/UXhYxq6w7pk",
    short: false,
  },

  // LAWYER
  {
    cat: 'lawyer',
    client: 'Lawyer',
    title: 'Lawyer Video I',
    ytId: 'BSe5UqDIH3g',
    url: 'https://youtu.be/BSe5UqDIH3g',
    short: false
  },
  {
    cat: 'lawyer',
    client: 'Lawyer',
    title: 'Lawyer Video II',
    ytId: 'KNceqqbsjts',
    url: 'https://youtube.com/shorts/KNceqqbsjts?feature=share',
    short: true
  },
  {
    cat: 'lawyer',
    client: 'Lawyer',
    title: 'Lawyer Video III',
    ytId: 'Esraf77rggU',
    url: 'https://youtube.com/shorts/Esraf77rggU?feature=share',
    short: true
  },
  {
    cat: 'lawyer',
    client: 'Lawyer',
    title: 'Lawyer Video IV',
    ytId: 'FRmTYW2cLcM',
    url: 'https://youtube.com/shorts/FRmTYW2cLcM?feature=share',
    short: true
  },
];
/* ════════════════════════════════════
 HELPERS
════════════════════════════════════ */

function embedUrl(v) {
  return (
    "https://www.youtube.com/embed/" +
    v.ytId +
    "?autoplay=1&mute=1&loop=1&playlist=" +
    v.ytId +
    "&playsinline=1&controls=0&rel=0&modestbranding=1"
  );
}

function catLabel(cat) {
  var map = {
    law: "Law",
    school: "School",
    "stock-vels": "Stock Vels",
    "prana-arc": "Prana Arc",
    "meera-scans": "Meera Scans",
    "gani-hospitals": "Gani Hospitals",
  };
  return map[cat] || cat;
}

/* ════════════════════════════════════
 RENDER GRID
════════════════════════════════════ */
function renderGrid(cat) {
  var grid = document.getElementById("shortsGrid");
  var filtered =
    cat === "all"
      ? videos
      : videos.filter(function (v) {
        return v.cat === cat;
      });

  if (filtered.length === 0) {
    grid.innerHTML =
      '<div class="empty-state"><p>No videos in this category yet.</p></div>';
    return;
  }

  grid.innerHTML = filtered
    .map(function (v, i) {
      return [
        '<div class="short-card" style="animation-delay:' +
        i * 0.06 +
        's">',
        '<div class="video-wrap">',
        '<iframe src="' + embedUrl(v) + '"',
        ' allow="autoplay; encrypted-media" allowfullscreen',
        ' loading="lazy" title="' + v.title + '">',
        "</iframe>",
        "</div>",
        '<div class="cat-badge">' + catLabel(v.cat) + "</div>",
        '<a class="open-btn" href="' +
        v.url +
        '" target="_blank" rel="noopener">',
        '<svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>',
        "Watch on YouTube",
        "</a>",
        '<div class="card-label">',
        '<div class="client-name">' + v.client + "</div>",
        '<div class="video-title">' + v.title + "</div>",
        "</div>",
        '<div class="click-open" onclick="window.open(\'' +
        v.url +
        "','_blank','noopener,noreferrer')\"></div>",
        "</div>",
      ].join("");
    })
    .join("");
}

/* ════════════════════════════════════
 FILTER TAB CLICKS
════════════════════════════════════ */
document
  .getElementById("filterTabs")
  .addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-tab");
    if (!btn) return;
    document.querySelectorAll(".filter-tab").forEach(function (t) {
      t.classList.remove("active");
    });
    btn.classList.add("active");
    renderGrid(btn.getAttribute("data-cat"));
  });

/* Initial render */
renderGrid("all");
