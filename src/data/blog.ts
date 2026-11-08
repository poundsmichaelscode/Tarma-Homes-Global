/** Editorial images are licensed Unsplash photographs, not Tamar Homes property listings.
 * Sources and credits are recorded on each post; see docs/BLOG_IMAGE_SOURCES.md.
 */
const BLOG_IMAGES = {
  titleDocuments: "https://images.unsplash.com/photo-1759429255330-51145b170dad?auto=format&fit=crop&w=1600&q=85",
  offPlan: "https://images.unsplash.com/photo-1771980590242-1e6e027f5e8d?auto=format&fit=crop&w=1600&q=85",
  inspection: "https://images.unsplash.com/photo-1776482128012-a47f853abd57?auto=format&fit=crop&w=1600&q=85",
  lekkiMarket: "https://images.unsplash.com/photo-1744907895363-d351aa6019ef?auto=format&fit=crop&w=1600&q=85",
  tropicalDesign: "https://images.unsplash.com/photo-1768162485784-05a8fa170a27?auto=format&fit=crop&w=1600&q=85",
  welcome: "https://images.unsplash.com/photo-1760067537639-0fb475c87657?auto=format&fit=crop&w=1600&q=85",
} as const;

export const BLOG_CATEGORIES = ["Real Estate Insights", "Buying Guides", "Investment", "Market Trends", "Architecture", "Company Updates"] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type Block = { h: string } | { p: string } | { ul: string[] };

export interface Post {
  slug: string;
  title: string;
  category: BlogCategory;
  date: string;
  readMins: number;
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageSource: string;
  excerpt: string;
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: "understanding-property-title-documents-in-nigeria",
    title: "Understanding Property Title Documents in Nigeria",
    category: "Buying Guides", date: "2026-10-20", readMins: 6, image: BLOG_IMAGES.titleDocuments,
    imageAlt: "Illustrative property paperwork, keys and model houses", imageCredit: "Jakub Żerdzicki / Unsplash", imageSource: "https://unsplash.com/photos/folder-with-house-drawings-and-keys-miniature-houses-sCV3336RlIw",
    excerpt: "C of O, Governor's Consent, Deed of Assignment, Excision — what each document means before you pay.",
    body: [
      { p: "Title documents establish who has the legal right to a property. Understanding them is one of the most important steps before any payment." },
      { h: "Common documents" },
      { ul: [
        "Certificate of Occupancy (C of O): issued by a state government, granting a right of occupancy over land.",
        "Governor's Consent: required when land with an existing C of O changes hands.",
        "Deed of Assignment: the agreement transferring interest from seller to buyer.",
        "Survey plan: shows the boundaries and coordinates of the land.",
        "Excision and Gazette: indicate that land has been released from government acquisition to a community.",
      ] },
      { h: "Verify independently" },
      { p: "Always engage a qualified property lawyer to conduct searches at the relevant land registry before committing funds. This article is general information, not legal advice." },
    ],
  },
  {
    slug: "off-plan-vs-completed-homes",
    title: "Off-Plan vs Completed Homes: Which Fits You?",
    category: "Investment", date: "2026-10-05", readMins: 5, image: BLOG_IMAGES.offPlan,
    imageAlt: "Illustrative unfinished residential development under construction", imageCredit: "Zane Bolen / Unsplash", imageSource: "https://unsplash.com/photos/construction-site-with-scaffolding-and-building-materials-5oIUnZ1nPZs",
    excerpt: "Weighing payment plans and entry price against delivery risk and immediate use.",
    body: [
      { p: "Off-plan purchases let buyers commit to a property before construction completes, often with staged payments." },
      { h: "Points to consider" },
      { ul: [
        "Developer track record and approvals for the project.",
        "Clear delivery timelines and what happens if they slip.",
        "Whether payments are tied to construction milestones.",
        "Completed homes allow inspection of the actual finishes before purchase.",
      ] },
      { p: "Your choice depends on your timeline, risk appetite and whether you need to move in soon." },
    ],
  },
  {
    slug: "questions-to-ask-at-a-property-inspection",
    title: "10 Questions to Ask at a Property Inspection",
    category: "Buying Guides", date: "2026-09-18", readMins: 4, image: BLOG_IMAGES.inspection,
    imageAlt: "Illustrative bright modern living room for a prospective home inspection", imageCredit: "Franco Debartolo / Unsplash", imageSource: "https://unsplash.com/photos/a-bright-modern-living-room-with-a-sofa-and-armchair-S5VtKjf4tcM",
    excerpt: "A practical checklist to take with you when viewing a home.",
    body: [
      { p: "An inspection is your chance to see beyond the photos. Go prepared." },
      { ul: [
        "What title document does the property have?",
        "Are there outstanding service charges or levies?",
        "What is the source of water and power backup?",
        "Has the area experienced flooding?",
        "What is included in the sale (fittings, appliances)?",
        "Is the access road public or estate-managed?",
        "Are there any disputes or encumbrances on the property?",
        "What is the estate's security arrangement?",
        "Who are the neighbours and what is nearby?",
        "What are the next steps and timelines if you proceed?",
      ] },
    ],
  },
  {
    slug: "what-drives-property-demand-along-the-lekki-corridor",
    title: "What Drives Property Demand Along the Lekki Corridor",
    category: "Market Trends", date: "2026-09-02", readMins: 5, image: BLOG_IMAGES.lekkiMarket,
    imageAlt: "Aerial photograph of the Lekki–Ikoyi Link Bridge and surrounding Lagos development", imageCredit: "Tunde Buremo / Unsplash", imageSource: "https://unsplash.com/photos/an-aerial-view-of-a-busy-city-n8DxalbQBic",
    excerpt: "Infrastructure, access and new developments shaping buyer interest in Lagos' eastern axis.",
    body: [
      { p: "The Lekki–Epe corridor has attracted significant residential and commercial development over the past decade." },
      { h: "Factors buyers watch" },
      { ul: ["Road and transport infrastructure projects", "Proximity to employment hubs", "Estate planning and drainage", "Availability of verified titles"] },
      { p: "Market conditions change. Buyers should seek current, location-specific advice before deciding." },
    ],
  },
  {
    slug: "designing-homes-for-the-nigerian-climate",
    title: "Designing Homes for the Nigerian Climate",
    category: "Architecture", date: "2026-08-14", readMins: 4, image: BLOG_IMAGES.tropicalDesign,
    imageAlt: "Illustrative tropical building exterior with shading and palm trees", imageCredit: "Juan Pablo / Unsplash", imageSource: "https://unsplash.com/photos/modern-building-entrance-with-tropical-palm-trees-qqLROuTm5D4",
    excerpt: "Cross-ventilation, shading and materials that keep homes cooler and more efficient.",
    body: [
      { p: "Good tropical design reduces reliance on cooling and improves comfort year-round." },
      { ul: ["Deep overhangs and balconies to shade glazing", "Cross-ventilation through aligned openings", "Light-coloured, reflective roofing", "Raised ground floors in flood-prone areas"] },
    ],
  },
  {
    slug: "welcome-to-the-tarmar-homes-blog",
    title: "Welcome to the TAMAR HOMES Blog",
    category: "Company Updates", date: "2026-08-01", readMins: 2, image: BLOG_IMAGES.welcome,
    imageAlt: "Illustrative modern living room with plants and warm natural light", imageCredit: "Alef Morais / Unsplash", imageSource: "https://unsplash.com/photos/spacious-modern-living-room-with-large-windows-and-furniture-LtlBlCal4Fw",
    excerpt: "Where we'll share buying guides, market insights and updates on new listings.",
    body: [
      { p: "This blog is where we'll share practical guides for buyers, perspectives on the property market and updates on new listings." },
      { p: "Have a topic you'd like us to cover? Reach out through our contact page." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const formatDate = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
