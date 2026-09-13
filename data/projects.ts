export type Project = {
  number: string;
  name: string;
  type: string;
  location: string;
  year: string;
  image: string;
  alt: string;
  className: string;
  position?: string;
};

export const projects: Project[] = [
  {
    number: "01", name: "House in Ubud", type: "Residential", location: "Bali, Indonesia", year: "2026",
    image: "https://images.unsplash.com/photo-1766937754720-4d30de201fd1?auto=format&fit=crop&fm=jpg&q=88&w=2400",
    alt: "Modern tropical residence set among lush foliage", className: "project project-featured",
  },
  {
    number: "02", name: "Sora Residence", type: "Residential", location: "Jakarta, Indonesia", year: "2026",
    image: "https://images.unsplash.com/photo-1774516534097-76eb46de7229?auto=format&fit=crop&fm=jpg&q=88&w=1800",
    alt: "Minimal concrete interior with warm timber flooring and soft daylight", className: "project project-tall",
  },
  {
    number: "03", name: "Aruna Retreat", type: "Hospitality", location: "Lombok, Indonesia", year: "2025",
    image: "https://images.unsplash.com/photo-1759372945658-1e9f56e751bd?auto=format&fit=crop&fm=jpg&q=88&w=1800",
    alt: "Tropical villa and reflecting pool at dusk", className: "project project-wide", position: "center 58%",
  },
];
