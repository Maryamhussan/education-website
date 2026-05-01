import Link from "next/link";
import Image from "next/image";

/**
 * Footer Section Data
 * Centrally managing footer links for easy updates.
 */
const FOOTER_LINKS = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact Us", href: "/contact" },
  ],
  services: [
    { name: "Online Classes", href: "/services" },
    { name: "Mentorship", href: "/services" },
    { name: "Career Counseling", href: "/services" },
    { name: "Certification", href: "/services" },
  ],
  contact: [
    { icon: "📍", text: "123 Education Way, London, UK" },
    { icon: "📞", text: "+44 20 1234 5678" },
    { icon: "📧", text: "info@elearn.com" },
  ]
};

/**
 * FooterLinkColumn Component
 * Reusable component for rendering footer link columns.
 */
function FooterLinkColumn({ title, links }: { title: string, links: { name: string, href: string }[] }) {
  return (
    <div>
      <h4 className="text-[#4D2C5E] font-bold text-lg mb-6">{title}</h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href} 
              className="text-gray-600 hover:text-[#FF7426] transition-colors duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Footer Component
 * Main site footer with navigation, services, and contact information.
 */
export default function Footer() {
  return (
    <footer className="bg-[#FDF8EE] pt-16 pb-8 border-t border-gray-100">
      <div className="container-custom">
        {/* TOP SECTION: Grid of 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: Brand/About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image src="/booklogo.png" alt="Education Logo" width={144} height={40} className="w-36" />
            </Link>
            <p className="text-gray-500 leading-relaxed mb-6">
              Empowering learners worldwide with accessible, high-quality education and career-transforming skills. Join our community today.
            </p>
          </div>

          {/* COLUMN 2: Quick Links */}
          <FooterLinkColumn title="Quick Links" links={FOOTER_LINKS.quickLinks} />

          {/* COLUMN 3: Our Services */}
          <FooterLinkColumn title="Our Services" links={FOOTER_LINKS.services} />

          {/* COLUMN 4: Contact Information */}
          <div>
            <h4 className="text-[#4D2C5E] font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.contact.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-gray-600 group cursor-default">
                  <span className="text-[#FF7426] transition-transform group-hover:scale-110">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright and Legal */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Elearn. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#4D2C5E] transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-[#4D2C5E] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
