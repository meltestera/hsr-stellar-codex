import { useState, useEffect } from "react";

const HiddenScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrolled / totalHeight) * 100;

      setIsVisible(scrolled > 500 && scrollPercentage < 95);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="xl::right-12 fixed bottom-5 right-5 z-10 md:left-1/2 md:w-full md:-translate-x-1/2 md:text-center lg:bottom-10 lg:left-auto lg:right-10 lg:w-auto lg:-translate-x-0">
      {isVisible && (
        <button
          onClick={scrollToTop}
          type="button"
          className="rounded bg-skin-tone-darker px-5 py-2 text-skin-tone-light shadow shadow-black transition active:scale-90 active:bg-skin-tone-dark lg:hover:text-skin-tone"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-big-up lg:h-7 lg:w-7 xl:h-8 xl:w-8"
          >
            <path d="M9 18v-6H5l7-7 7 7h-4v6H9z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default HiddenScrollToTopBtn;
