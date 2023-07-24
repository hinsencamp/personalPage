const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Fabian Hinsenkamp",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Senior Full Stack Engineer",
    bio: "I am a engineer, course creator and indie hacker.",
    // email: "fabian@hinsencamp.com",
    linkedin: "fabianhinsenkamp",
    github: "hinsencamp",
    cal: "hinsencamp/15min",
    twitter: "hinsencamp",
    instagram: "",
  },
  projects: [
    {
      name: `SaaS: courseCrafts.ai`,
      href: "https://coursecrafts.ai/",
    },
    {
      name: `Course: System Design Bootcamp`,
      href: "https://www.udemy.com/course/the-bigtech-system-design-interview-bootcamp/?referralCode=F15061BAF146EFB9F926",
    },
  ],
  // blog setting (required)
  blog: {
    title: "hinsencamp",
    description: "welcome to hinsencamp!",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "hinsencamp/personalPage",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
