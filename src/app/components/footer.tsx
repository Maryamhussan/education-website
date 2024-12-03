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
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Newsroom
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#4D2C5E] font-semibold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Testing Automation
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  AWS Development Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Mobile App Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#4D2C5E] font-semibold text-lg mb-6">
              Platforms
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Hubspot
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Marketo Integration Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Marketing Glossary
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  UIPath
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#4D2C5E] font-semibold text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#4D2C5E] text-[#606060] text-[15px] transition-all"
                >
                  Learn more
                </a>
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