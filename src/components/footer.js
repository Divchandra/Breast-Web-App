import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-pink-700 text-white py-10 px-6 rounded-t-2xl text-center">
      <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-8 text-2xl">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-300" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="hover:text-pink-300" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="hover:text-pink-300" />
        </a>
      </div>

      {/* Team Photos with circular cropping */}
      <div className="flex justify-center gap-12 mt-8 flex-wrap">
        <div className="flex flex-col items-center">
          {/* Apply the circle-image class to the div */}
          <div className="circle-image" style={{ backgroundImage: "url('/images/photo1.jpg')" }}></div>
          <p className="mt-3 font-semibold text-lg">Divyangana Chandra</p>
        </div>

        <div className="flex flex-col items-center">
          {/* Apply the circle-image class to the div */}
          <div className="circle-image" style={{ backgroundImage: "url('/images/photo2.jpg')" }}></div>
          <p className="mt-3 font-semibold text-lg">Vandna S</p>
        </div>
      </div>

      <p className="mt-8 text-sm">© 2025 Breast Cancer Detection Team. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
