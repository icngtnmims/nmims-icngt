import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left - Logo */}
        <div className="flex flex-col items-start">
          <img
            src="/logo/nmims-logo.webp"
            alt="NMIMS Logo"
            className="w-32 h-auto mb-4 border-8 border-white rounded-sm"
          />
          <p className="max-w-xs text-sm">
            SVKM's NMIMS Deemed to be University
            <br />
            Shirpur Campus
            <br />
            <br />
            Mukesh Patel Technology Park,
            <br />
            Village: Babulde, Bank of Tapi River,
            <br />
            National Highway No: 3,
            <br />
            Shirpur Dist, Savalade,
            <br />
            Maharashtra 425405
          </p>
        </div>

        {/* Center - Social */}
        <div className="flex flex-col items-start md:items-center md:justify-center">
          <h6 className="footer-title mb-4">SOCIAL</h6>
          <div className="flex gap-4">
            {/* Instagram */}
            <a href="https://www.instagram.com/nmimsshirpurcampus" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/@mpstme_shirpur" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/people/NMIMS-Shirpur-Campus/61582931917377/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Right - Location */}
        <div className="flex flex-col items-start">
          <h6 className="footer-title mb-4">LOCATION</h6>
          <div className="w-full max-w-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.6625389668134!2d74.84184457547632!3d21.284821580429377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf2ee920604553%3A0x17fd878d62441fe6!2sSVKM&#39;s%20NMIMS%20University%20MPTP%20Shirpur%20Campus!5e0!3m2!1sen!2sin!4v1763555176068!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
