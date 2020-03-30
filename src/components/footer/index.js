import React, { memo } from "react";

const Footer = () => {
  return (
    <footer className="py-4">
      <p className="mb-0 text-center">
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by <a href="https://thexdev.netlify.com">M. Akbar Nugroho</a>
      </p>
    </footer>
  );
};

export default memo(Footer);
