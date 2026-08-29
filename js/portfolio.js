/* ════════════════════════════════════
   VIDEO DATA
════════════════════════════════════ */
const videos = [

  // STOCK VELS
  { cat: "stock-vels", client: "Stock Vels", title: "Brand Reel", ytId: "Wv9kXs4qp8o", url: "https://youtube.com/shorts/Wv9kXs4qp8o?feature=share", short: true },

  // LAWYER
  { cat: "lawyer", client: "Lawyer", title: "Lawyer Video I", ytId: "BSe5UqDIH3g", url: "https://youtu.be/BSe5UqDIH3g", short: false },
  { cat: "lawyer", client: "Lawyer", title: "Lawyer Video II", ytId: "KNceqqbsjts", url: "https://youtube.com/shorts/KNceqqbsjts?feature=share", short: true },
  { cat: "lawyer", client: "Lawyer", title: "Lawyer Video III", ytId: "Esraf77rggU", url: "https://youtube.com/shorts/Esraf77rggU?feature=share", short: true },
  { cat: "lawyer", client: "Lawyer", title: "Lawyer Video IV", ytId: "FRmTYW2cLcM", url: "https://youtube.com/shorts/FRmTYW2cLcM?feature=share", short: true },

  // AI VIDEO
  { cat: "ai-video", client: "AI Video", title: "AI Video I", ytId: "CkNNEWSHAzo", url: "https://youtube.com/shorts/CkNNEWSHAzo?feature=share", short: true },
  { cat: "ai-video", client: "AI Video", title: "AI Video II", ytId: "PBxtVTRUoZc", url: "https://youtube.com/shorts/PBxtVTRUoZc?feature=share", short: true },
  { cat: "ai-video", client: "AI Video", title: "AI Video III", ytId: "XcTLlnLfew8", url: "https://youtube.com/shorts/XcTLlnLfew8?feature=share", short: true },

  // SCHOOL
  { cat: "school", client: "School", title: "School Video I", ytId: "whgfquYqjSk", url: "https://youtube.com/shorts/whgfquYqjSk?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video II", ytId: "60qcOV_5reI", url: "https://youtube.com/shorts/60qcOV_5reI?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video III", ytId: "4a_gbhpqn8E", url: "https://youtube.com/shorts/4a_gbhpqn8E?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video IV", ytId: "IclYxLLTp7E", url: "https://youtube.com/shorts/IclYxLLTp7E?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video V", ytId: "YuxtWgHDZH8", url: "https://youtube.com/shorts/YuxtWgHDZH8?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video VI", ytId: "HEyIxGOkrqI", url: "https://youtube.com/shorts/HEyIxGOkrqI?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video VII", ytId: "WHfeei14jZM", url: "https://youtube.com/shorts/WHfeei14jZM?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video VIII", ytId: "WwmPbHMuHtk", url: "https://youtube.com/shorts/WwmPbHMuHtk?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video IX", ytId: "HG8khpHScsA", url: "https://youtube.com/shorts/HG8khpHScsA?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video X", ytId: "gA8mtClxR9o", url: "https://youtube.com/shorts/gA8mtClxR9o?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video XI", ytId: "e-R7BgErA_4", url: "https://youtube.com/shorts/e-R7BgErA_4?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video XII", ytId: "0W0S32kwv38", url: "https://youtube.com/shorts/0W0S32kwv38?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video XIII", ytId: "ism3lG02fYw", url: "https://youtube.com/shorts/ism3lG02fYw?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video XIV", ytId: "WyL6QuzBgYs", url: "https://youtube.com/shorts/WyL6QuzBgYs?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video XV", ytId: "Iu3AEDPmzNo", url: "https://youtube.com/shorts/Iu3AEDPmzNo?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video XVI", ytId: "bP5ZKNCSvtA", url: "https://youtube.com/shorts/bP5ZKNCSvtA?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video XVII", ytId: "Pw8YZJo6010", url: "https://youtube.com/shorts/Pw8YZJo6010?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video XVIII", ytId: "fUhCOax2ec8", url: "https://youtube.com/shorts/fUhCOax2ec8?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video XIX", ytId: "NUwn8laD9rA", url: "https://youtube.com/shorts/NUwn8laD9rA?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video XX", ytId: "fgbjzSARHbo", url: "https://youtube.com/shorts/fgbjzSARHbo?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video XXI", ytId: "nX6yZZgG4G0", url: "https://youtube.com/shorts/nX6yZZgG4G0?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video XXII", ytId: "AVYwbJmV20o", url: "https://youtube.com/shorts/AVYwbJmV20o?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video XXIII", ytId: "sdKhna5zZ6A", url: "https://youtu.be/sdKhna5zZ6A", short: false },
  { cat: "school", client: "School", title: "School Video XXIV", ytId: "zjRvJKKdCWQ", url: "https://youtube.com/shorts/zjRvJKKdCWQ?feature=share", short: true },
  { cat: "school", client: "School", title: "School Video XXV", ytId: "UXhYxq6w7pk", url: "https://youtu.be/UXhYxq6w7pk", short: false },

  // MEERA SCANS
  { cat: "meera-scans", client: "Meera Scans", title: "Clinic Promo I", ytId: "RFyxbq0ocRo", url: "https://youtube.com/shorts/RFyxbq0ocRo?feature=share", short: true },
  { cat: "meera-scans", client: "Meera Scans", title: "Clinic Promo II", ytId: "dFLYSSHMf98", url: "https://youtube.com/shorts/dFLYSSHMf98?feature=share", short: true },
  { cat: "meera-scans", client: "Meera Scans", title: "Clinic Promo III", ytId: "UIlt_u8d-MQ", url: "https://youtube.com/shorts/UIlt_u8d-MQ?feature=share", short: true },
  { cat: "meera-scans", client: "Meera Scans", title: "Clinic Promo IV", ytId: "fycWBtBhKh8", url: "https://youtube.com/shorts/fycWBtBhKh8?feature=share", short: true },
  { cat: "meera-scans", client: "Meera Scans", title: "Clinic Promo V", ytId: "R767WYmLm5Y", url: "https://youtube.com/shorts/R767WYmLm5Y?feature=share", short: true },

  { cat: "meera-scans", client: "Meera Scans", title: "Clinic Promo VI", ytId: "tLOkfxsQqQs", url: "https://youtube.com/shorts/tLOkfxsQqQs?feature=share", short: true },
  { cat: "meera-scans", client: "Meera Scans", title: "Clinic Promo VII", ytId: "wJ7wiyUKP9M", url: "https://youtube.com/shorts/wJ7wiyUKP9M?feature=share", short: true },
  { cat: "meera-scans", client: "Meera Scans", title: "Clinic Promo VIII", ytId: "9gGyJEK9bWo", url: "https://youtube.com/shorts/9gGyJEK9bWo?feature=share", short: true },

  // PRANA ARC
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel I", ytId: "NBu_fCDRoQU", url: "https://youtube.com/shorts/NBu_fCDRoQU?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel II", ytId: "TR0BdB7GW1A", url: "https://youtube.com/shorts/TR0BdB7GW1A?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel III", ytId: "KvwHld5ZbjU", url: "https://youtube.com/shorts/KvwHld5ZbjU?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel IV", ytId: "N9fJG8r2RLg", url: "https://youtube.com/shorts/N9fJG8r2RLg?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel V", ytId: "pPoD2U3LQPk", url: "https://youtube.com/shorts/pPoD2U3LQPk?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel VI", ytId: "ZYCABSI-lew", url: "https://youtube.com/shorts/ZYCABSI-lew?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel VII", ytId: "oo19Uc0chRA", url: "https://youtube.com/shorts/oo19Uc0chRA?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel VIII", ytId: "zpIUbmmVJ58", url: "https://youtube.com/shorts/zpIUbmmVJ58?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel IX", ytId: "OfqyYshFd18", url: "https://youtube.com/shorts/OfqyYshFd18?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel X", ytId: "uKK6NqC-kns", url: "https://youtube.com/shorts/uKK6NqC-kns?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel XI", ytId: "a05iCgNV3Qs", url: "https://youtube.com/shorts/a05iCgNV3Qs?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel XII", ytId: "MZdOxb4SvtM", url: "https://youtube.com/shorts/MZdOxb4SvtM?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel XIII", ytId: "wjR2KVgMiIE", url: "https://youtube.com/shorts/wjR2KVgMiIE?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel XIV", ytId: "-dMk25LPgyA", url: "https://youtube.com/shorts/-dMk25LPgyA?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel XV", ytId: "Wz707CxyQK4", url: "https://youtube.com/shorts/Wz707CxyQK4?feature=share", short: true },
  { cat: "prana-arc", client: "Prana Arc", title: "Product Reel XVI", ytId: "gvOEDwm9NGU", url: "https://youtube.com/shorts/gvOEDwm9NGU?feature=share", short: true },

  // GANI HOSPITAL
  { cat: "gani-hospital", client: "Gani Hospital", title: "Hospital Video I", ytId: "SZ9HWNpvuq0", url: "https://youtube.com/shorts/SZ9HWNpvuq0?feature=share", short: true },
  { cat: "gani-hospital", client: "Gani Hospital", title: "Hospital Video II", ytId: "MHD2EU1r7w8", url: "https://youtube.com/shorts/MHD2EU1r7w8?feature=share", short: true },
  { cat: "gani-hospital", client: "Gani Hospital", title: "Hospital Video III", ytId: "XvRrNELWndM", url: "https://youtube.com/shorts/XvRrNELWndM?feature=share", short: true },
  { cat: "gani-hospital", client: "Gani Hospital", title: "Hospital Video IV", ytId: "7nfN8zqvEBM", url: "https://youtube.com/shorts/7nfN8zqvEBM?feature=share", short: true },
  { cat: "gani-hospital", client: "Gani Hospital", title: "Hospital Video V", ytId: "305gBARN32Q", url: "https://youtube.com/shorts/305gBARN32Q?feature=share", short: true },
  { cat: "gani-hospital", client: "Gani Hospital", title: "Hospital Video VI", ytId: "ROdwa-q1tos", url: "https://youtube.com/shorts/ROdwa-q1tos?feature=share", short: true },
  { cat: "gani-hospital", client: "Gani Hospital", title: "Hospital Video VII", ytId: "BKGqozHISCg", url: "https://youtube.com/shorts/BKGqozHISCg?feature=share", short: true },
  { cat: "gani-hospital", client: "Gani Hospital", title: "Hospital Video VIII", ytId: "pRcQ4ZKstfI", url: "https://youtube.com/shorts/pRcQ4ZKstfI?feature=share", short: true },
  { cat: "gani-hospital", client: "Gani Hospital", title: "Hospital Video IX", ytId: "fMIifc4qrdw", url: "https://youtube.com/shorts/fMIifc4qrdw?feature=share", short: true },
  { cat: "gani-hospital", client: "Gani Hospital", title: "Hospital Video X", ytId: "w6esovIzRrY", url: "https://youtube.com/shorts/w6esovIzRrY?feature=share", short: true },
  { cat: "gani-hospital", client: "Gani Hospital", title: "Hospital Video XI", ytId: "yCimdTGo48Y", url: "https://youtube.com/shorts/yCimdTGo48Y?feature=share", short: true },
  { cat: "gani-hospital", client: "Gani Hospital", title: "Hospital Video XII", ytId: "gLK6i58Vq-s", url: "https://youtube.com/shorts/gLK6i58Vq-s?feature=share", short: true },

  // VINAYAGAM HOSPITAL
  { cat: "vinayagam-hospital", client: "Vinayagam Hospital", title: "Hospital Brand Film I", ytId: "rsuX6nOZNSQ", url: "https://youtube.com/shorts/rsuX6nOZNSQ?feature=share", short: true },
  { cat: "vinayagam-hospital", client: "Vinayagam Hospital", title: "Hospital Brand Film II", ytId: "qgEz_HL23MM", url: "https://youtube.com/shorts/qgEz_HL23MM?feature=share", short: true },
  { cat: "vinayagam-hospital", client: "Vinayagam Hospital", title: "Hospital Brand Film III", ytId: "5VgnibLCqQI", url: "https://youtube.com/shorts/5VgnibLCqQI?feature=share", short: true },
  { cat: "vinayagam-hospital", client: "Vinayagam Hospital", title: "Hospital Brand Film IV", ytId: "MoF7ZgGhLjQ", url: "https://youtu.be/MoF7ZgGhLjQ", short: true },

  { cat: "vinayagam-hospital", client: "Vinayagam Hospital", title: "Hospital Brand Film V", ytId: "ZMpGrUU5PKI ", url: "https://youtube.com/shorts/ZMpGrUU5PKI?feature=share", short: true },
  { cat: "vinayagam-hospital", client: "Vinayagam Hospital", title: "Hospital Brand Film VI", ytId: "SW_-uNhbe-4", url: "https://youtube.com/shorts/SW_-uNhbe-4?feature=share", short: true },
  { cat: "vinayagam-hospital", client: "Vinayagam Hospital", title: "Hospital Brand Film VII", ytId: "XPHfWtgv2pw", url: "https://youtube.com/shorts/XPHfWtgv2pw?feature=share", short: true },
  { cat: "vinayagam-hospital", client: "Vinayagam Hospital", title: "Hospital Brand Film VIII", ytId: "4O3ZxUwIRj0", url: "https://youtube.com/shorts/4O3ZxUwIRj0?feature=share", short: true },

  // GATEWAY ACADEMY
  { cat: "education", client: "GATEWAY ACADEMY", title: "GATEWAY ACADEMY", ytId: "xlsuWSpjU84", url: "https://youtube.com/shorts/xlsuWSpjU84?feature=share", short: true },

  // IMPRESSION BY SAI SHWETHA
  { cat: "impression-by-sai-shwetha", client: "Impression By Sai Shwetha", title: "Video I", ytId: "Rcb6a--7LT4", url: "https://youtube.com/shorts/Rcb6a--7LT4?feature=share", short: true },
  { cat: "impression-by-sai-shwetha", client: "Impression By Sai Shwetha", title: "Video II", ytId: "XjCk2xsVKFg", url: "https://youtube.com/shorts/XjCk2xsVKFg?feature=share", short: true },
  { cat: "impression-by-sai-shwetha", client: "Impression By Sai Shwetha", title: "Video III", ytId: "_H9Lxlyg_Yw", url: "https://youtube.com/shorts/_H9Lxlyg_Yw?feature=share", short: true },
  { cat: "impression-by-sai-shwetha", client: "Impression By Sai Shwetha", title: "Video IV", ytId: "SWImPcIqGzc", url: "https://youtube.com/shorts/SWImPcIqGzc?feature=share", short: true },
  { cat: "impression-by-sai-shwetha", client: "Impression By Sai Shwetha", title: "Video V", ytId: "1dx7vZvA-0A", url: "https://youtube.com/shorts/1dx7vZvA-0A?feature=share", short: true },
  { cat: "impression-by-sai-shwetha", client: "Impression By Sai Shwetha", title: "Video VI", ytId: "HbO2cadH-yc", url: "https://youtube.com/shorts/HbO2cadH-yc?feature=share", short: true },
  { cat: "impression-by-sai-shwetha", client: "Impression By Sai Shwetha", title: "Video VII", ytId: "oH9sUjt2neI", url: "https://youtube.com/shorts/oH9sUjt2neI?feature=share", short: true },
  { cat: "impression-by-sai-shwetha", client: "Impression By Sai Shwetha", title: "Video VIII", ytId: "vXUroC40zGE", url: "https://youtube.com/shorts/vXUroC40zGE?feature=share", short: true },

  // MIAMI AESTHETHICS
  { cat: "miami-aesthetics", client: "Miami Aesthetics", title: "Video I", ytId: "QLwxRThWXZA", url: "https://youtube.com/shorts/QLwxRThWXZA?feature=share", short: true },
  { cat: "miami-aesthetics", client: "Miami Aesthetics", title: "Video II", ytId: "NqkmwaSNcrU", url: "https://youtube.com/shorts/NqkmwaSNcrU?feature=share", short: true },
  { cat: "miami-aesthetics", client: "Miami Aesthetics", title: "Video III", ytId: "ncuod8200t8", url: "https://youtube.com/shorts/ncuod8200t8?feature=share", short: true },
  { cat: "miami-aesthetics", client: "Miami Aesthetics", title: "Video IV", ytId: "8aCW6SQFYNM", url: "https://youtube.com/shorts/8aCW6SQFYNM?feature=share", short: true },


  // VIDHU ACADEMY
  { cat: "vidhu-academy", client: "Vidhu Academy", title: "Video I", ytId: "Lt4vEHdavy8", url: "https://youtube.com/shorts/Lt4vEHdavy8?feature=share", short: true },
  { cat: "vidhu-academy", client: "Vidhu Academy", title: "Video II", ytId: "mZJkhTp1r1Q", url: "https://youtube.com/shorts/mZJkhTp1r1Q?feature=share", short: true },
  { cat: "vidhu-academy", client: "Vidhu Academy", title: "Video III", ytId: "R0mdb33PcYQ", url: "https://youtube.com/shorts/R0mdb33PcYQ?feature=share", short: true },
  { cat: "vidhu-academy", client: "Vidhu Academy", title: "Video IV", ytId: "NGWRYpuHHcM", url: "https://youtube.com/shorts/NGWRYpuHHcM?feature=share", short: true },


  // ARIVU HOMEO
  { cat: "arivu-homeo", client: "Arivu Homeo", title: "Video I", ytId: "q0U8Rdqyjrg", url: "https://youtube.com/shorts/q0U8Rdqyjrg?feature=share", short: true },
  { cat: "arivu-homeo", client: "Arivu Homeo", title: "Video II", ytId: "GB96-4hI6Iw", url: "https://youtube.com/shorts/GB96-4hI6Iw?feature=share", short: true },
  { cat: "arivu-homeo", client: "Arivu Homeo", title: "Video III", ytId: "RwTLoCiWRo4", url: "https://youtube.com/shorts/RwTLoCiWRo4?feature=share", short: true },
  { cat: "arivu-homeo", client: "Arivu Homeo", title: "Video IV", ytId: "eShPLCCZCG0", url: "https://youtube.com/shorts/eShPLCCZCG0?feature=share", short: true },

  // GOLDEN RIFLE CLUB
{ cat: "golden-rifle-club", client: "Golden Rifle Club", title: "Video I", ytId: "CRrIcCtIrB8", url: "https://youtube.com/shorts/CRrIcCtIrB8?feature=share", short: true },
  { cat: "golden-rifle-club", client: "Golden Rifle Club", title: "Video II", ytId: "fpVe5HpK5io", url: "https://youtube.com/shorts/fpVe5HpK5io?feature=share", short: true },
  { cat: "golden-rifle-club", client: "Golden Rifle Club", title: "Video III", ytId: "kpuNLcwZ6Mo", url: "https://youtube.com/shorts/kpuNLcwZ6Mo?feature=share", short: true },
  { cat: "golden-rifle-club", client: "Golden Rifle Club", title: "Video IV", ytId: "DKtt0gF6LQU", url: "https://youtube.com/shorts/DKtt0gF6LQU?feature=share", short: true },

  // YOGALAKSHME PROMOTERS
{ cat: "yogalakshme-promoters", client: "Yogalakshme Promoters", title: "Video I", ytId: "gjXVIPXHHds", url: "https://youtube.com/shorts/gjXVIPXHHds?feature=share", short: true },
  { cat: "yogalakshme-promoters", client: "Yogalakshme Promoters", title: "Video II", ytId: "Jje_76l9mK0", url: "https://youtube.com/shorts/Jje_76l9mK0?feature=share", short: true },
  { cat: "yogalakshme-promoters", client: "Yogalakshme Promoters", title: "Video III", ytId: "yc92y440DQI", url: "https://youtube.com/shorts/yc92y440DQI?feature=share", short: true },
  // { cat: "yogalakshme-promoters", client: "Yogalakshme Promoters", title: "Video IV", ytId: "DKtt0gF6LQU", url: "https://youtube.com/shorts/DKtt0gF6LQU?feature=share", short: true },
  
];


  

/* ════════════════════════════════════
   CONFIG
════════════════════════════════════ */
var BATCH_SIZE = 4;     // videos per batch
var SETTLE_TIME = 900;   // ms — small fixed wait after the iframe fires
// "load" before treating it as ready. autoplay=1
// already starts the video the instant the
// iframe loads; this is just enough buffer for
// the picture to actually paint a frame.

/* ════════════════════════════════════
   HELPERS
   Plain hand-built iframe with autoplay=1 — this is what actually plays
   fast. (A previous attempt routed playback through the YouTube
   IFrame JS API / YT.Player, which has its own slow init handshake and
   was the real source of the 1-2 minute delay — removed entirely.)
════════════════════════════════════ */
function embedUrl(ytId) {
  return (
    "https://www.youtube.com/embed/" + ytId +
    "?autoplay=1&mute=1&loop=1&playlist=" + ytId +
    "&playsinline=1&controls=0&rel=0&modestbranding=1"
  );
}

function catLabel(cat) {
  var map = {
    "lawyer": "Lawyer",
    "school": "School",
    "stock-vels": "Stock Vels",
    "prana-arc": "Prana Arc",
    "meera-scans": "Meera Scans",
    "gani-hospital": "Gani Hospital",
    "vinayagam-hospital": "Vinayagam Hospital",
    "education": "Gateway Academy",
    "impression-by-sai-shwetha": "Impression",
    "ai-video": "AI Video",
  };
  return map[cat] || cat;
}

/* ════════════════════════════════════
   STYLES
════════════════════════════════════ */
(function injectStyles() {
  if (document.getElementById("phd-pf-styles")) return;
  var s = document.createElement("style");
  s.id = "phd-pf-styles";
  s.textContent = `

    /* ── Mobile filter scroll ── */
    @media (max-width:768px) {
      #filterTabs {
        display: flex !important; flex-wrap: nowrap !important;
        overflow-x: auto !important; -webkit-overflow-scrolling: touch;
        justify-content: flex-start !important; gap: 8px !important;
        padding: 12px 16px 16px !important; margin-bottom: 24px !important;
        scrollbar-width: none;
      }
      #filterTabs::-webkit-scrollbar { display: none; }
      #filterTabs .filter-tab { flex-shrink: 0 !important; white-space: nowrap !important; }
    }

    /* ── Card appear ── */
    .short-card { animation: phdFadeUp 0.35s ease both; }
    @keyframes phdFadeUp {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ── Page-level bottom loader ── */
    #pf-loader {
      display: none;
      width: 100%; padding: 40px 0 20px;
      text-align: center; grid-column: 1 / -1;
    }
    #pf-loader.active { display: block; }

    .pf-dots { display: inline-flex; align-items: center; gap: 8px; }
    .pf-dots span {
      width: 10px; height: 10px; border-radius: 50%;
      background: #ff4800; display: inline-block;
      animation: dotBounce 1.2s ease-in-out infinite;
    }
    .pf-dots span:nth-child(2) { animation-delay: 0.2s; }
    .pf-dots span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes dotBounce {
      0%,80%,100% { transform: translateY(0);    opacity: 0.4; }
      40%          { transform: translateY(-10px); opacity: 1; }
    }
    .pf-loader-text {
      display: block; margin-top: 12px;
      font-size: 13px; font-weight: 600;
      letter-spacing: 1px; text-transform: uppercase;
      color: #ff4800; opacity: 0.8;
    }

  `;
  document.head.appendChild(s);
})();

/* ════════════════════════════════════
   PAGE-LEVEL LOADER
════════════════════════════════════ */
var loaderEl = (function () {
  var el = document.createElement("div");
  el.id = "pf-loader";
  el.innerHTML =
    '<div class="pf-dots"><span></span><span></span><span></span></div>' +
    '<span class="pf-loader-text">Loading videos…</span>';
  return el;
})();

function showLoader() {
  var grid = document.getElementById("shortsGrid");
  if (loaderEl.parentNode !== grid.parentNode || loaderEl.previousSibling !== grid) {
    grid.after(loaderEl);
  }
  loaderEl.classList.add("active");
}
function hideLoader() {
  loaderEl.classList.remove("active");
}

/* ════════════════════════════════════
   OFFSCREEN PRELOAD HOST
   Iframes are built here so YouTube
   can start loading while invisible.
   Card moves to the visible grid only
   after its video is autoplaying.
════════════════════════════════════ */
var offscreen = (function () {
  var el = document.createElement("div");
  el.style.cssText =
    "position:fixed;top:-9999px;left:-9999px;" +
    "width:220px;height:391px;" +
    "pointer-events:none;visibility:hidden;";
  document.body.appendChild(el);
  return el;
})();

/* ════════════════════════════════════
   STATE
════════════════════════════════════ */
var videoQueue = [];   // remaining video objects
var renderToken = 0;    // bumped on every renderGrid() call to invalidate
// in-flight batches from a previous filter selection

/* ════════════════════════════════════
   BUILD CARD
════════════════════════════════════ */
function buildCard(v) {
  var card = document.createElement("div");
  card.className = "short-card";

  var iframe = document.createElement("iframe");
  iframe.src = embedUrl(v.ytId);
  iframe.setAttribute("allow", "autoplay; encrypted-media");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("title", v.title);
  iframe.style.cssText =
    "position:absolute;inset:0;width:100%;height:100%;border:none;display:block;";

  var wrap = document.createElement("div");
  wrap.className = "video-wrap";
  wrap.style.cssText = "position:absolute;inset:0;pointer-events:none;";
  wrap.appendChild(iframe);

  card.innerHTML =
    '<div class="cat-badge">' + catLabel(v.cat) + '</div>' +
    '<a class="open-btn" href="' + v.url + '" target="_blank" rel="noopener">' +
    '<svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>' +
    'Watch on YouTube' +
    '</a>' +
    '<div class="card-label">' +
    '<div class="client-name">' + v.client + '</div>' +
    '<div class="video-title">' + v.title + '</div>' +
    '</div>' +
    '<div class="click-open"></div>';

  card.insertBefore(wrap, card.firstChild);

  card.querySelector(".click-open").addEventListener("click", function () {
    window.open(v.url, "_blank", "noopener,noreferrer");
  });

  return { card: card, iframe: iframe };
}

/* ════════════════════════════════════
   LOAD ONE BATCH
   Builds up to BATCH_SIZE iframes offscreen with autoplay=1 (the iframe
   itself drives playback — no JS player API involved). As soon as each
   iframe fires its native "load" event, we wait a short fixed
   SETTLE_TIME so the first frame has actually painted, then count it
   ready. Once every video in the batch is ready, the whole batch moves
   into the visible grid together, and the next batch starts loading
   immediately after — strictly one batch at a time, no overlap, no
   scroll gating.
════════════════════════════════════ */
function loadBatch(myToken) {
  if (myToken !== renderToken) return; // a newer filter selection superseded this run

  var batch = videoQueue.splice(0, BATCH_SIZE);
  if (batch.length === 0) {
    hideLoader();
    return;
  }

  showLoader();

  var readyCards = [];   // cards that have finished, in order
  var readyCount = 0;

  function onBatchComplete() {
    if (myToken !== renderToken) return; // filter changed while this batch was loading

    readyCards.forEach(function (card) {
      if (card.parentNode) card.parentNode.removeChild(card);
      document.getElementById("shortsGrid").appendChild(card);
    });

    if (videoQueue.length > 0) {
      loadBatch(myToken); // next batch starts only now — strictly sequential
    } else {
      hideLoader();
    }
  }

  batch.forEach(function (v, idx) {
    var built = buildCard(v);
    var card = built.card;
    var iframe = built.iframe;

    readyCards[idx] = card;
    offscreen.appendChild(card);

    function markReady() {
      readyCount++;
      if (readyCount === batch.length) {
        onBatchComplete();
      }
    }

    iframe.addEventListener("load", function () {
      setTimeout(markReady, SETTLE_TIME);
    }, { once: true });
  });
}

/* ════════════════════════════════════
   RENDER GRID
════════════════════════════════════ */
function renderGrid(cat) {
  renderToken++;
  var myToken = renderToken;

  videoQueue = [];
  offscreen.innerHTML = "";
  hideLoader();

  var grid = document.getElementById("shortsGrid");
  var filtered = (cat === "all"
    ? videos.slice()
    : videos.filter(function (v) { return v.cat === cat; })
  ).reverse();

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state"><p>No videos in this category yet.</p></div>';
    return;
  }

  videoQueue = filtered.slice();
  loadBatch(myToken);
}

/* ════════════════════════════════════
   FILTER TABS
════════════════════════════════════ */
document.getElementById("filterTabs").addEventListener("click", function (e) {
  var btn = e.target.closest(".filter-tab");
  if (!btn) return;
  document.querySelectorAll(".filter-tab").forEach(function (t) { t.classList.remove("active"); });
  btn.classList.add("active");
  btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  renderGrid(btn.getAttribute("data-cat"));
});

/* ════════════════════════════════════
   INITIAL RENDER
════════════════════════════════════ */
renderGrid("all");