export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Ecommerce Project",
  description: "Ecommerce Project built for Coding test using shadcn/ui",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Catalog",
      href: "/catalog",
    },
  ],
  links: {
    github: "https://github.com/ayonshafiul/next-ecomm",
  },
}
