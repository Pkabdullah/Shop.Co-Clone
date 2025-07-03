import React from 'react';

const Footer = () => {
  const companyLinks = [
    { name: 'About', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Works', href: '#' },
    { name: 'Career', href: '#' },
  ];

  const helpLinks = [
    { name: 'Customer Support', href: '#' },
    { name: 'Delivery Details', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ];

  const faqLinks = [
    { name: 'Account', href: '#' },
    { name: 'Manage Deliveries', href: '#' },
    { name: 'Orders', href: '#' },
    { name: 'Payments', href: '#' },
  ];

  const resourceLinks = [
    { name: 'Free eBooks', href: '#' },
    { name: 'Development Tutorial', href: '#' },
    { name: 'How to - Blog', href: '#' },
    { name: 'Youtube Playlist', href: '#' },
  ];

  const socialLinks = [
    { icon: "/icons/xTwitter.svg", href: '#', label: 'Twitter' },
    { icon: "/icons/facebook.svg", href: '#', label: 'Facebook' },
    { icon: "/icons/instagram.svg", href: '#', label: 'Instagram' },
    { icon: "/icons/github.svg", href: '#', label: 'Github' },
  ];

  return (
    <footer className="pt-16 pb-8 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">SHOP.CO</h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="flex justify-center items-center w-8 h-8 text-gray-600 bg-white rounded-full border border-gray-200 transition-all hover:text-gray-900 hover:border-gray-300 hover:shadow-sm"
                >
                  <img src={social.icon} alt='social icons' />
                </a>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-4 text-sm font-medium tracking-wider text-gray-900 uppercase">COMPANY</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h3 className="mb-4 text-sm font-medium tracking-wider text-gray-900 uppercase">HELP</h3>
            <ul className="space-y-3">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="mb-4 text-sm font-medium tracking-wider text-gray-900 uppercase">FAQ</h3>
            <ul className="space-y-3">
              {faqLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="mb-4 text-sm font-medium tracking-wider text-gray-900 uppercase">RESOURCES</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 mt-12 border-t border-gray-200">
          <div className="flex flex-col justify-between items-center space-y-4 sm:flex-row sm:space-y-0">
            <div className="text-sm text-center text-gray-600 sm:text-left">
              <span>Shop.co © Made by </span>
              <span className="font-medium text-gray-900">Mohammad Oftadeh</span>
              <span>. Designed by </span>
              <span className="font-medium text-gray-900">Hamza Naeem</span>
               <span>. Clone by </span>
              <span className="font-medium text-gray-900">Muhammad Abdullah</span>
            </div>
            <div className="flex items-center space-x-8">
              <img src='/icons/Visa.svg' alt='visa' />
              <img src='/icons/mastercard.svg' alt='mastercard' />
              <img src='/icons/paypal.svg' alt='paypal' />
              <img src='/icons/applePay.svg' alt='apple pay' />
              <img src='/icons/googlePay.svg' alt='google pay' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
