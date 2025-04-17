"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll"; // ✅ Import react-scroll
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { menuItems } from "@/data/datas";

const MenuBar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] md:w-[700px] bg-[#353131]/80 backdrop-blur-lg flex items-center justify-between shadow-xl md:p-4 p-2 rounded-full border border-[#ea9fa8]">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          to={item.href.replace("#", "")} // ✅ Remove #
          smooth={true} // ✅ Enables smooth scrolling
          duration={500} // ✅ Controls scroll speed
          spy={true} // ✅ Highlights active section
          offset={-70} // ✅ Adjusts scroll position (header height)
          className={cn(
            "relative text-[#ea9fa8] hover:text-[#fd025f] transition-all md:px-4 px-1 py-2 text-sm md:text-base cursor-pointer",
            activeSection === item.href.replace("#", "") &&
              "text-[#fd025f] font-semibold"
          )}
        >
          {item.label}
          {activeSection === item.href.replace("#", "") && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-4 h-[3px] bg-[#fd025f] rounded-full transition-all duration-300" />
          )}
        </Link>
      ))}
      <a
        href="https://forms.gle/wyuzM5KJoAxVGxut9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className=" cursor-pointer hidden md:flex bg-gradient-to-r from-[#fd025f] to-[#a6223a] text-white mx-12 py-4 rounded-full hover:from-[#a6223a] hover:to-[#fd025f] border-2 border-[#ea9fa8] hover:border-[#a6223a] transition-all hover:scale-105">
          Claim This Offer
        </Button>
      </a>
    </nav>
  );
};

export default MenuBar;
