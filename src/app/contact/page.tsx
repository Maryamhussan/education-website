export default function Contact() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#4D2C5E] py-24 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container-custom grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-[#050C26] mb-8">Get In Touch</h2>
            <p className="text-lg text-gray-500 mb-10">
              Fill out the form and our team will get back to you within 24 hours. We&apos;re looking forward to hearing from you!
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-[#FDFBEE] flex items-center justify-center text-2xl shadow-sm">📍</div>
                <div>
                  <h4 className="font-bold text-[#050C26]">Our Location</h4>
                  <p className="text-gray-500">123 Education Way, London, UK</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-[#FDFBEE] flex items-center justify-center text-2xl shadow-sm">📞</div>
                <div>
                  <h4 className="font-bold text-[#050C26]">Phone Number</h4>
                  <p className="text-gray-500">+44 20 1234 5678</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-[#FDFBEE] flex items-center justify-center text-2xl shadow-sm">📧</div>
                <div>
                  <h4 className="font-bold text-[#050C26]">Email Address</h4>
                  <p className="text-gray-500">info@elearn.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#FDFBEE] p-10 rounded-3xl shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#050C26] mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#FF7426] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#050C26] mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#FF7426] transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#050C26] mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#FF7426] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#050C26] mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#FF7426] transition-all">
                  <option>General Inquiry</option>
                  <option>Course Information</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#050C26] mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#FF7426] transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#FF7426] text-white font-bold rounded-xl hover:bg-[#e6631f] transition-all shadow-lg active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
           [ Google Map Embed Placeholder ]
        </div>
      </section>
    </main>
  );
}
