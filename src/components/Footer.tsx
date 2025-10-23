import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <Link href="https://www.linkedin.com/in/shivkantkumar/" target="_blank" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl hover:text-blue-500 transition-colors duration-300" />
        </Link>
        <Link href="https://github.com/shivkantkumar098" target="_blank" aria-label="GitHub">
          <FaGithub className="text-2xl hover:text-gray-400 transition-colors duration-300" />
        </Link>
        <Link href="mailto:kumar.shivkant87@gmail.com" aria-label="Email">
          <FaEnvelope className="text-2xl hover:text-red-500 transition-colors duration-300" />
        </Link>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
      <p className="text-xs mt-1">
        Built with ❤️ using Next.js and Tailwind CSS.
      </p>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
}
