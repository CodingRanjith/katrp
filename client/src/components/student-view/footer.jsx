
import { useEffect } from "react";

// Inject Sora and Poppins fonts for this component
const footerFontStyle = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Sora:wght@700&display=swap');\n.footer-sora { font-family: 'Sora', sans-serif; }\n.footer-poppins { font-family: 'Poppins', sans-serif; }`;
function useFooterFont() {
  useEffect(() => {
    if (!document.getElementById('footer-font-style')) {
      const style = document.createElement('style');
      style.id = 'footer-font-style';
      style.innerHTML = footerFontStyle;
      document.head.appendChild(style);
    }
  }, []);
}

const Footer = () => {
  useFooterFont();
  return (
    <footer className="bg-[#181818] text-[#fff] pt-12 pb-0 mt-12 border-t border-[#d3c9ed] footer-poppins">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top multi-column links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="font-bold mb-3 text-[#181818] footer-sora">Certifications by Skill</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Cybersecurity Certification</a></li>
              <li><a href="#" className="hover:underline">Project Management Certification</a></li>
              <li><a href="#" className="hover:underline">Cloud Certification</a></li>
              <li><a href="#" className="hover:underline">Data Analytics Certification</a></li>
              <li><a href="#" className="hover:underline">HR Management Certification</a></li>
              <li><a href="#" className="hover:underline">See all Certifications</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#181818] footer-sora">Data Science</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Data Science</a></li>
              <li><a href="#" className="hover:underline">Python</a></li>
              <li><a href="#" className="hover:underline">Machine Learning</a></li>
              <li><a href="#" className="hover:underline">ChatGPT</a></li>
              <li><a href="#" className="hover:underline">Deep Learning</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#181818] footer-sora">Communication</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Communication Skills</a></li>
              <li><a href="#" className="hover:underline">Presentation Skills</a></li>
              <li><a href="#" className="hover:underline">Public Speaking</a></li>
              <li><a href="#" className="hover:underline">Writing</a></li>
              <li><a href="#" className="hover:underline">PowerPoint</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#181818] footer-sora">Business Analytics & Intelligence</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Microsoft Excel</a></li>
              <li><a href="#" className="hover:underline">SQL</a></li>
              <li><a href="#" className="hover:underline">Microsoft Power BI</a></li>
              <li><a href="#" className="hover:underline">Data Analysis</a></li>
              <li><a href="#" className="hover:underline">Business Analysis</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom grouped links */}
  <div className="border-t border-[#d3c9ed] pt-8 pb-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-bold mb-2 text-[#181818] footer-sora">About</h4>
            <ul className="space-y-1">
                <li><a href="#" className="hover:text-[#8b72cc]">About us</a></li>
                <li><a href="#" className="hover:text-[#8b72cc]">Careers</a></li>
                <li><a href="#" className="hover:text-[#8b72cc]">Contact us</a></li>
                <li><a href="#" className="hover:text-[#8b72cc]">Blog</a></li>
                <li><a href="#" className="hover:text-[#8b72cc]">Investors</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-[#181818] footer-sora">Discover Kattraan</h4>
            <ul className="space-y-1">
                <li><a href="#" className="hover:text-[#8b72cc]">Get the app</a></li>
                <li><a href="#" className="hover:text-[#8b72cc]">Teach on Kattraan</a></li>
                <li><a href="#" className="hover:text-[#8b72cc]">Plans and Pricing</a></li>
                <li><a href="#" className="hover:text-[#8b72cc]">Affiliate</a></li>
                <li><a href="#" className="hover:text-[#8b72cc]">Help and Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-[#181818] footer-sora">Kattraan for Business</h4>
            <ul className="space-y-1">
                <li><a href="#" className="hover:text-[#8b72cc]">Kattraan Business</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-[#181818] footer-sora">Legal & Accessibility</h4>
            <ul className="space-y-1">
                <li><a href="#" className="hover:text-[#8b72cc]">Accessibility statement</a></li>
                <li><a href="#" className="hover:text-[#8b72cc]">Privacy policy</a></li>
                <li><a href="#" className="hover:text-[#8b72cc]">Sitemap</a></li>
                <li><a href="#" className="hover:text-[#8b72cc]">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#d3c9ed] mt-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-[#d3c9ed]">
            <div className="flex items-center mb-2 md:mb-0">
              <span className="font-bold text-lg text-[#fff] footer-sora">Kattraan</span>
              <span className="ml-2">© {new Date().getFullYear()} Kattraan, Inc.</span>
          </div>
          <div className="flex items-center space-x-2 mt-2 md:mt-0">
            <span>Cookie settings</span>
            <span className="hidden md:inline-block">|</span>
            <span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /></svg>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
