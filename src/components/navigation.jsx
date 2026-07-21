import React from "react";
import { useLanguage } from "../context/language";

const Navigation = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-switch">
      <button onClick={toggleLanguage}>
        {language === "en" ? "🇰🇭 ខ្មែរ" : "🇺🇸 English"}
      </button>
    </div>
  );
};

export default Navigation;
