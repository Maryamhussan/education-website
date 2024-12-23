import Link from "next/link";

export default function Footer() {
    return (
      <footer className="font-sans tracking-wide bg-[#FDF8EE] py-10 px-10 absolute top-[4923px] w-[100%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-[#4D2C5E] font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-5">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Newsroom
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#4D2C5E] font-semibold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-5">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Testing Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  AWS Development Services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Mobile App Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#4D2C5E] font-semibold text-lg mb-6">
              Platforms
            </h4>
            <ul className="space-y-5">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Hubspot
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Marketo Integration Services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Marketing Glossary
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  UIPath
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#4D2C5E] font-semibold text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-5">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Learn more
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t text-center border-[#6b5f5f] pt-8 mt-8">
          <p className="text-[#606060] text-[15px]">
            © Bookstore. All rights reserved.
          </p>
        </div>
      </footer>
    );
};