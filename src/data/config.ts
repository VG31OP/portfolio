const config = {
  title: "Vraj Shiroya | VG",
  description: {
    long: "Portfolio of Vraj Shiroya (VG) – Vibe Coder and Cybersecurity Student building immersive digital experiences.",
    short: "Portfolio of Vraj Shiroya (VG) – Vibe Coder and Cybersecurity Student building immersive digital experiences.",
  },
  keywords: [
    "Vraj",
    "Vraj Shiroya",
    "VG",
    "vrajshiroya",
    "vrajshiroya.com",
    "Vraj Shiroya portfolio",
    "portfolio",
    "Cybersecurity",
    "Cybersecurity Student",
    "Vibe Coder",
    "Creative Developer",
    "web development",
    "interactive websites",
    "Next.js",
    "React",
    "Tailwind",
  ],
  author: "Vraj Shiroya",
  email: "vraj@shiroya.in",
  site: "https://shiroya.in",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://in.linkedin.com/in/vraj-shiroya-70b927287",
    instagram: "https://www.instagram.com/vraj_shiroya",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/vg31op",
  },
};
export { config };
