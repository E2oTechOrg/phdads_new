const POSTS = [
  {
  img: "img/blog/high-impact-digital-ads-social-trends-rapid-production.webp",
  alt: "Creating High-Impact Digital Ads at the Speed of Social Trends",
  href: "high-impact-digital-ads-social-trends-rapid-production.html",
  title: "Creating High-Impact Digital Ads at the Speed of Social Trends",
  date: "May 2026"
},
  {
  img: "img/blog/short-form-video-seo-google-social-search.webp",
  alt: "Short-Form Video SEO for Google and Social Search",
  href: "short-form-video-seo-google-social-search.html",
  title: "Beyond the Feed: How to Optimize Your Short-Form Video for Google and Social Search",
  date: "May 2026"
},
  {
  img: "img/blog/360-degree-product-photography-shopify-ecommerce.webp",
  alt: "360-Degree Product Photography for Shopify and E-commerce Brands",
  href: "360-degree-product-photography-shopify-ecommerce.html",
  title: "360-Degree Product Photography: Reducing Returns and Boosting Trust for Shopify Brands",
  date: "May 2026"
},
  {
  img: "img/blog/founder-led-content-strategy-indian-startups-2026.webp",
  alt: "Founder-Led Content Strategy for Indian Startups 2026",
  href: "founder-led-content-strategy-indian-startups-2026.html",
  title: "Why Founder-Led Content is the Highest ROI Strategy for Indian Startups in 2026",
  date: "May 2026"
},
  {
  img: "img/blog/trending-wedding-poses-engagement-photographer-session.webp",
  alt: "Trending Wedding Poses from Top Wedding Photographers - Engagement Session Guide",
  href: "trending-wedding-poses-engagement-photographer-session.html",
  title: "Trending Poses from Top Wedding Photographers: Making the Most of Your Engagement Photographers Session",
  date: "May 2026"
},
  {
  img: "img/blog/combined-videographer-photographer-package-marriage-photography.webp",
  alt: "Combined Videographer and Photographer Package for Marriage Photography",
  href: "combined-videographer-photographer-package-marriage-photography.html",
  title: "Why You Need a Combined Videographer and Photographer Package for the Best Marriage Photography Experience",
  date: "May 2026"
},
  {
  img: "img/blog/best-wedding-photographers-near-me-affordable-packages.webp",
  alt: "Best Wedding Photographers Near Me - Affordable Packages in Madurai",
  href: "best-wedding-photographers-near-me-affordable-packages.html",
  title: "How to Find the Best Wedding Photographers Near Me with an Affordable Photographer and Videographer Package",
  date: "May 2026"
},
  {
  img: "img/blog/ecommerce-product-catalog-photography-checklist.webp",
  alt: "E-commerce Product Catalog Photography Checklist",
  href: "ecommerce-product-catalog-photography-checklist.html",
  title: "The Ultimate E-commerce Checklist: Driving Traffic with Professional Product Catalog Shoots",
  date: "May 2026"
},
  {
    img: "img/blog/professional-video-shoots-social-media-engagement.webp",
    alt: "Behind the Lens - Professional Video Shoots",
    href: "professional-video-shoots-social-media-engagement.html",
    title:
      "Behind the Lens: How Professional Video Shoots Can 10X Your Social Media Engagement",
    date: "May 2026",
  },
  {
    img: "img/blog/candid-vs-traditional-wedding-photography.webp",
    alt: "Candid Wedding Photography vs Traditional Shoots",
    href: "candid-vs-traditional-wedding-photography.html",
    title:
      "Candid Wedding Photography vs. Traditional Shoots: Which Style Is Right for You?",
    date: "May 2026",
  },
  {
    img: "img/blog/personal-branding-tips-2026.webp",
    alt: "5 Essential Personal Branding Tips in 2026",
    href: "personal-branding-tips-2026.html",
    title: "5 Essential Personal Branding Tips in 2026",
    date: "May 2026",
  },
  {
    img: "img/blog/local-ecommerce-product-photography-tamil-nadu.webp",
    alt: "Local E-commerce Product Photography Tamil Nadu",
    href: "local-ecommerce-product-photography-tamil-nadu.html",
    title:
      "Local E-commerce Product Photography in Tamil Nadu: How Professional Product Shoots Help Online Brands Grow Faster",
    date: "Feb 2026",
  },
  {
    img: "img/blog/social-media-content-creation-strategy.webp",
    alt: "Social Media Content Creation Strategy",
    href: "social-media-content-creation-strategy.html",
    title:
      "Social Media Content Creation Strategy: Building Brand Consistency and Long-Term Digital Growth",
    date: "Feb 2026",
  },
  {
    img: "img/blog/digital-advertising-creatives.webp",
    alt: "Digital Advertising Creatives",
    href: "digital-advertising-creatives.html",
    title:
      "Digital Advertising Creatives: How Professional Photography &amp; Videography Improve ROI and Reduce Ad Costs",
    date: "Feb 2026",
  },
  {
    img: "img/blog/professional-videography-for-brands.webp",
    alt: "Professional Videography for Brands",
    href: "professional-videography-for-brands.html",
    title:
      "Professional Videography for Brands: How Video Content Builds Trust, Engagement, and Market Authority",
    date: "Feb 2026",
  },
  {
    img: "img/blog/product-photography-for-ecommerce.webp",
    alt: "Product Photography for E-commerce",
    href: "product-photography-for-ecommerce.html",
    title:
      "Product Photography for E-commerce: A Complete Guide to Conversions, Trust, and Business Growth",
    date: "Feb 2026",
  },
  {
    img: "img/blog/professional-photography-videography-for-brands.webp",
    alt: "Professional Photography & Videography for Brands",
    href: "professional-photography-videography-for-brands.html",
    title:
      "Professional Photography &amp; Videography for Brands: A Complete Business &amp; Marketing Guide",
    date: "Feb 2026",
  },
  {
    img: "img/blog/professional-brand-photography-for-indian-startups.webp",
    alt: "Professional Brand Photography for Indian Startups",
    href: "professional-brand-photography-for-indian-startups.html",
    title:
      "Why Professional Brand Photography is the Secret to 5X More Sales for Indian Startups",
    date: "May 2026",
  },
  {
  img: "img/blog/digital-ad-video-production-lower-cac.webp",
  alt: "Digital Ad Video Production Lower CAC",
  href: "digital-ad-video-production-lower-cac.html",
  title: "Mastering Digital Ads: How Video Production Can Lower Your Customer Acquisition Cost (CAC)",
  date: "May 2026"
},
];

(function renderRecentPosts() {
  const container = document.getElementById("recent-posts-widget");
  if (!container) return;

  const currentPage = window.location.pathname.split("/").pop() || "";
  const visible = POSTS.slice(0, 6);

  const html = visible
    .map(function (post) {
      const isActive = post.href === currentPage;
      return (
        '<div class="media post_item' +
        (isActive ? " active-post" : "") +
        '">' +
        '<img src="' +
        post.img +
        '" alt="' +
        post.alt +
        '" width="80" height="80" loading="lazy" />' +
        '<div class="media-body">' +
        '<a href="' +
        post.href +
        '">' +
        "<h3>" +
        post.title +
        "</h3>" +
        "<p>" +
        post.date +
        "</p>" +
        "</a>" +
        "</div>" +
        "</div>"
      );
    })
    .join("\n");

  container.innerHTML =
    '<h3 class="widget_title">Recent Posts</h3>' + "\n" + html;
})();
