import React, { useState } from "react";
import { CONTACT } from "../constants";
import { FiCopy, FiCheck } from "react-icons/fi"; // Copy & check icons

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // reset after 2 seconds
    });
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Contact</h1>

      <div className="text-center tracking-tight flex items-center justify-center gap-2">
        <span className="text-lg">{CONTACT.email}</span>
        <button
          onClick={handleCopy}
          className="text-cyan-400 hover:text-cyan-300 transition"
          title="Copy to clipboard"
        >
          {copied ? (
            <FiCheck className="text-xl" />
          ) : (
            <FiCopy className="text-xl" />
          )}
        </button>
      </div>
      {/* Flag message */}
      {copied && (
        <div className="flex justify-center">
          <br></br>
          <span className="text-sm text-green-400 animate-fadeIn">
            📬 Email copied to clipboard!
          </span>
        </div>
      )}
    </div>
  );
};

export default Contact;
