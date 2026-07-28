export type Locale = "fa" | "en";

export const siteConfig = {
  name: {
    fa: "امیرحسین فرزانه",
    en: "Amirhossein Farzaneh",
  },
  shortName: {
    fa: "امیر",
    en: "Amir",
  },
  title: {
    fa: "توسعه‌دهنده فول‌استک | Next.js و Node.js",
    en: "Full Stack Developer | Next.js & Node.js",
  },
  email: "amirbebest@gmail.com",
  phone: "09038061480",
  phoneHref: "tel:+989038061480",
  location: {
    fa: "تهران، ایران",
    en: "Tehran, Iran",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/amir-bebest",
    github: "https://github.com/amir-bebest",
  },
  image: "/images/amirhossein.png",
  logo: {
    dark: "/brand/logo-icon-dark.png",
    light: "/brand/logo-icon-light.png",
    hero: "/brand/logo-hero.png",
  },
  video: "/media/intro.mp4",
};

export const ui = {
  fa: {
    nav: {
      about: "درباره من",
      skills: "مهارت‌ها",
      experience: "سوابق",
      projects: "پروژه‌ها",
      contact: "تماس",
    },
    hero: {
      ctaResume: "مشاهده رزومه",
      ctaDownload: "دانلود رزومه",
      ctaContact: "تماس با من",
    },
    about: {
      title: "درباره من",
      body: "من امیرحسین فرزانه هستم؛ دانشجوی کارشناسی مهندسی کامپیوتر و توسعه‌دهنده وب با بیش از ۲٫۵ سال تجربه تخصصی. تا امروز بیش از ۲۰ وب‌سایت وردپرسی را به‌صورت مستقل از تحلیل تا استقرار پیاده‌سازی کرده‌ام و در بیش از ۳۰ پروژه تیمی مشارکت داشته‌ام. تخصص من شامل طراحی قالب و افزونه سفارشی وردپرس، فروشگاه ووکامرس، بهینه‌سازی سرعت، سئوی فنی و امنیت است. هم‌اکنون روی توسعه وب‌اپلیکیشن با Node.js و Next.js تمرکز دارم و مسیر AI Engineering، AI Agents و اتوماسیون هوشمند را دنبال می‌کنم.",
    },
    skills: {
      title: "مهارت‌ها",
      groups: {
        frontend: "فرانت‌اند",
        backend: "بک‌اند",
        cms: "وردپرس و فروشگاه",
        seo: "سئو و پرفورمنس",
        tools: "ابزار و سرور",
        ai: "هوش مصنوعی",
      },
    },
    experience: {
      title: "سوابق کاری",
      present: "تاکنون",
    },
    projects: {
      title: "پروژه‌ها",
      visit: "مشاهده",
    },
    contact: {
      title: "تماس با من",
      subtitle: "برای همکاری یا مشاوره در دسترس هستم.",
      email: "ایمیل",
      phone: "موبایل",
      location: "موقعیت",
      formName: "نام",
      formEmail: "ایمیل",
      formMessage: "پیام",
      formSubmit: "ارسال پیام",
      formHint: "پیام مستقیم به ایمیل من ارسال می‌شود.",
      formSending: "در حال ارسال...",
      formSuccess: "پیام شما با موفقیت ارسال شد.",
      formError: "ارسال ناموفق بود. دوباره تلاش کنید یا مستقیم ایمیل بزنید.",
    },
    footer: {
      rights: "تمامی حقوق محفوظ است.",
    },
    theme: {
      light: "حالت روشن",
      dark: "حالت تاریک",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      ctaResume: "View Resume",
      ctaDownload: "Download Resume",
      ctaContact: "Contact Me",
    },
    about: {
      title: "About Me",
      body: "I'm Amirhossein Farzaneh, a Computer Engineering student and web developer with over 2.5 years of specialized experience. I've independently designed and launched more than 20 WordPress websites end-to-end and contributed to 30+ team projects. I specialize in custom WordPress themes and plugins, WooCommerce, performance optimization, technical SEO, and security. I now build modern web apps with Node.js and Next.js, while expanding into AI Engineering, AI Agents, and intelligent automation.",
    },
    skills: {
      title: "Skills",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        cms: "WordPress & Commerce",
        seo: "SEO & Performance",
        tools: "Tools & Servers",
        ai: "AI",
      },
    },
    experience: {
      title: "Experience",
      present: "Present",
    },
    projects: {
      title: "Projects",
      visit: "Visit",
    },
    contact: {
      title: "Contact",
      subtitle: "Open to collaboration and consulting.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send Message",
      formHint: "Your message will be delivered to my email.",
      formSending: "Sending...",
      formSuccess: "Your message was sent successfully.",
      formError: "Could not send. Please try again or email me directly.",
    },
    footer: {
      rights: "All rights reserved.",
    },
    theme: {
      light: "Light mode",
      dark: "Dark mode",
    },
  },
} as const;

export const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "jQuery", "Ajax", "Next.js"],
  backend: ["PHP", "Node.js"],
  cms: ["WordPress", "WooCommerce", "Elementor Pro", "WPML", "JetEngine"],
  seo: ["Technical SEO", "Yoast SEO", "Rank Math", "Google Search Console", "Performance Optimization"],
  tools: ["Linux", "cPanel", "DirectAdmin", "DNS", "Wordfence", "Git"],
  ai: ["Prompt Engineering", "AI Engineering"],
} as const;

export const experience = [
  {
    company: { fa: "بازی‌سازان", en: "bazisazan" },
    role: { fa: "توسعه‌دهنده وب", en: "Web Developer" },
    stack: "WordPress / Next.js",
    location: { fa: "تهران", en: "Tehran, Iran" },
    start: { fa: "فروردین ۱۴۰۴", en: "Mar 2025" },
    end: null,
    points: {
      fa: [
        "راه‌اندازی نسخه اولیه پلتفرم با وردپرس برای عرضه سریع",
        "طراحی و پیاده‌سازی قالب سفارشی هم‌راستا با هویت برند",
        "بهینه‌سازی پرفورمنس، سئوی فنی و ساختار سایت",
        "مهاجرت کامل به معماری مدرن با Node.js و Next.js",
      ],
      en: [
        "Launched the initial platform with WordPress for a fast go-to-market",
        "Designed and built a fully custom theme aligned with the brand",
        "Improved performance, technical SEO, and site structure",
        "Migrated and rebuilt the product with Node.js and Next.js",
      ],
    },
  },
  {
    company: { fa: "سپنتامکس", en: "sepantamax" },
    role: { fa: "توسعه‌دهنده وردپرس", en: "WordPress Developer" },
    stack: "WordPress / PHP",
    location: { fa: "تهران", en: "Tehran, Iran" },
    start: { fa: "بهمن ۱۴۰۳", en: "Jan 2025" },
    end: { fa: "فروردین ۱۴۰۴", en: "Mar 2025" },
    points: {
      fa: [
        "طراحی و توسعه سایت‌های سفارشی از تحلیل نیاز تا تحویل",
        "توسعه قابلیت‌ها و افزونه‌های PHP متناسب با پروژه",
        "پیاده‌سازی رابط واکنش‌گرا با HTML، CSS و JavaScript",
        "اعمال سئوی فنی و بهینه‌سازی سرعت",
      ],
      en: [
        "Built custom WordPress sites from requirements to delivery",
        "Developed PHP plugins and project-specific features",
        "Implemented responsive UI with HTML, CSS, and JavaScript",
        "Applied technical SEO and speed optimization",
      ],
    },
  },
  {
    company: { fa: "ASC Cargo", en: "ASC Cargo" },
    role: { fa: "پشتیبانی وب و فنی", en: "Web & Technical Support Specialist" },
    stack: "WordPress / SEO",
    location: { fa: "تهران", en: "Tehran, Iran" },
    start: { fa: "مهر ۱۴۰۳", en: "Sep 2024" },
    end: { fa: "بهمن ۱۴۰۳", en: "Jan 2025" },
    points: {
      fa: [
        "پشتیبانی فنی و نگهداری مستمر وب‌سایت",
        "طراحی و به‌روزرسانی صفحات بر اساس نیاز کسب‌وکار",
        "بهینه‌سازی سئوی داخلی و فنی",
        "مدیریت محتوا و طراحی بنر و گرافیک دیجیتال",
      ],
      en: [
        "Provided ongoing technical support and website maintenance",
        "Designed and updated pages based on business needs",
        "Optimized on-page and technical SEO",
        "Managed content and created digital graphic assets",
      ],
    },
  },
  {
    company: { fa: "تیم تبلیغاتی یگانو", en: "Yeegano Advertising Team" },
    role: { fa: "طراح وب", en: "Web Designer" },
    stack: "WordPress / SEO",
    location: { fa: "تهران", en: "Tehran, Iran" },
    start: { fa: "اسفند ۱۴۰۲", en: "Feb 2024" },
    end: { fa: "شهریور ۱۴۰۳", en: "Aug 2024" },
    points: {
      fa: [
        "بهینه‌سازی سرعت، پرفورمنس و سئوی فنی",
        "عیب‌یابی وردپرس و پاک‌سازی کد PHP",
        "طراحی المان‌های بصری و هم‌راستایی با هویت برند",
      ],
      en: [
        "Optimized loading speed, performance, and technical SEO",
        "Debugged WordPress issues and cleaned up PHP code",
        "Created visual assets aligned with brand identity",
      ],
    },
  },
  {
    company: { fa: "بازرگانی تاج", en: "Taj Trading" },
    role: { fa: "توسعه‌دهنده وردپرس", en: "WordPress Developer" },
    stack: "WordPress",
    location: { fa: "تهران", en: "Tehran, Iran" },
    start: { fa: "آذر ۱۴۰۲", en: "Nov 2023" },
    end: { fa: "بهمن ۱۴۰۲", en: "Jan 2024" },
    points: {
      fa: [
        "طراحی، توسعه و مدیریت وب‌سایت شرکتی",
        "پیاده‌سازی UI واکنش‌گرا و ساختار صفحات محصول و خدمات",
        "توسعه قابلیت‌های سفارشی کسب‌وکار و سئوی فنی",
      ],
      en: [
        "Designed, developed, and managed the company website",
        "Built a responsive UI and product/service page structure",
        "Developed custom business features and technical SEO",
      ],
    },
  },
] as const;

export const projects = [
  {
    name: "Sevina Group",
    url: "https://sevinagroup.com",
    stack: ["Next.js", "Node.js", "Accessibility"],
    description: {
      fa: "پلتفرم صوتی دسترس‌پذیر برای نابینایان و کم‌بینایان — سینمای ویژه نابینایان.",
      en: "Accessible audio platform for blind and visually impaired people — cinema for the blind.",
    },
  },
  {
    name: "Bazi Sazan",
    url: "https://bazisazan.com",
    stack: ["Next.js", "Node.js", "E-commerce"],
    description: {
      fa: "فروشگاه فول‌استک تجهیزات تفریحی و وسایل بازی کودکان با تمرکز روی سرعت و UX.",
      en: "Full-stack e-commerce for children's playground and recreational equipment.",
    },
  },
  {
    name: "Partiland",
    url: "https://partiland.com/",
    stack: ["WordPress"],
    description: {
      fa: "وب‌سایت حرفه‌ای با تمرکز روی تجربه کاربری و ساختار تمیز.",
      en: "Professional website focused on UX and clean structure.",
    },
  },
  {
    name: "Speaker Vira",
    url: "https://speakervira.com/",
    stack: ["WordPress"],
    description: {
      fa: "وب‌سایت حرفه‌ای با تمرکز روی تجربه کاربری و ساختار تمیز.",
      en: "Professional website focused on UX and clean structure.",
    },
  },
  {
    name: "Organoth",
    url: "https://organoth.com/",
    stack: ["WordPress"],
    description: {
      fa: "وب‌سایت حرفه‌ای با تمرکز روی تجربه کاربری و ساختار تمیز.",
      en: "Professional website focused on UX and clean structure.",
    },
  },
  {
    name: "Yeegane Site",
    url: "https://yeegane.site/",
    stack: ["WordPress"],
    description: {
      fa: "وب‌سایت حرفه‌ای با تمرکز روی تجربه کاربری و ساختار تمیز.",
      en: "Professional website focused on UX and clean structure.",
    },
  },
  {
    name: "Yeegane",
    url: "https://yeegane.com/",
    stack: ["WordPress"],
    description: {
      fa: "وب‌سایت حرفه‌ای با تمرکز روی تجربه کاربری و ساختار تمیز.",
      en: "Professional website focused on UX and clean structure.",
    },
  },
  {
    name: "Omid Al",
    url: "https://omidal.net/",
    stack: ["WordPress"],
    description: {
      fa: "وب‌سایت حرفه‌ای با تمرکز روی تجربه کاربری و ساختار تمیز.",
      en: "Professional website focused on UX and clean structure.",
    },
  },
  {
    name: "Motor Bargh",
    url: "https://motorbargh.shop/",
    stack: ["WordPress", "WooCommerce"],
    description: {
      fa: "فروشگاه ووکامرس با تمرکز روی سرعت و تجربه خرید.",
      en: "WooCommerce store focused on speed and shopping experience.",
    },
  },
] as const;
