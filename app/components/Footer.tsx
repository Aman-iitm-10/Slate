import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Slate. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-blue-500 dark:text-blue-300 hover:underline">
            Privacy Policy
          </a>
          {' | '}
          <a href="/terms-of-service" className="text-blue-500 dark:text-blue-300 hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;