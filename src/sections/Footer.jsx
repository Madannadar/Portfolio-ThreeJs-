const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      {/* Terms & Privacy Links */}
      <div className="text-white-500 flex gap-2">
        <a href="/terms" className="hover:underline">
          Terms & Conditions
        </a>
        <p>|</p>
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-3">
        <a
          href="https://github.com/madannadar"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>

        <a
          href="https://x.com/MadanAK05?t=4EgzwIQf8iBaAnFeqMPTYQ&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>

        <a
          href="https://www.instagram.com/madan_0509_?igsh=dmpmczZjMjc2c3F5"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-white-500">© 2024 Madan Nadar. All rights reserved.</p>
    </section>
  );
};

export default Footer;
