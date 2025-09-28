import { Search, User, ShoppingCart, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/context/auth-context";
import { courseCategories } from "@/config";

// Inject custom fonts and theme colors for the header
const headerFontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Alata:wght@400&display=swap');
  .header-inter { font-family: 'Inter', sans-serif; }
  .header-alata { font-family: 'Alata', sans-serif; }
  .gradient-purple { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
`;

function useHeaderFont() {
  useEffect(() => {
    if (!document.getElementById('header-font-style')) {
      const style = document.createElement('style');
      style.id = 'header-font-style';
      style.innerHTML = headerFontStyle;
      document.head.appendChild(style);
    }
  }, []);
}

function getRandomBgColor(seed) {
  const colors = [
    "bg-white/20",
    "bg-white/25",  
    "bg-white/30",
    "bg-purple-200/30",
    "bg-blue-200/30",
    "bg-pink-200/30",
    "bg-indigo-200/30",
    "bg-violet-200/30",
  ];
  return colors[seed.charCodeAt(0) % colors.length];
}

function StudentViewCommonHeader() {
  useHeaderFont();
  const navigate = useNavigate();
  const { auth, resetCredentials } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const userName = auth.user?.userName || "User";
  const userEmail = auth.user?.userEmail || "email@example.com";
  const userInitial = userName.charAt(0).toUpperCase();
  const bgColor = getRandomBgColor(userInitial);

  const handleLogout = () => {
    resetCredentials();
    sessionStorage.clear();
    navigate("/auth");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setSearchQuery("");
  };

  const handleNavigateToCoursesPage = (categoryId) => {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      category: [categoryId],
    };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate("/courses");
  };

  return (
    <header 
      className="w-full sticky top-0 z-50 header-inter" 
      style={{ 
        backgroundColor: '#F7F6F9', 
        height: '71px'
      }}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 h-full">
        {/* Left Side - Logo and Explore */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link
            to="/home"
            className="flex items-center space-x-2 text-gray-800 font-bold text-xl tracking-tight"
          >
            <div className="relative w-6 h-6">
              <div 
                className="absolute inset-0 bg-black rounded-sm"
              />
              <div 
                className="absolute top-1 left-1 w-4 h-4 bg-white rounded-sm"
              />
            </div>
            <span className="header-alata text-2xl" style={{ color: '#000000', border: '0.4px solid #000000', padding: '2px 8px' }}>
              kattraan
            </span>
          </Link>
          
          {/* Explore Button */}
          <div className="relative">
            <Button
              variant="ghost"
              className="font-medium text-white px-4 py-2 rounded-full header-inter"
              style={{
                background: 'linear-gradient(90deg, #453E75 57.81%, #B8A9D9 100%)',
                fontSize: '16px',
                fontWeight: '500'
              }}
              onClick={() =>
                setDropdownOpen(
                  dropdownOpen === "explore" ? null : "explore"
                )
              }
            >
              Explore
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  dropdownOpen === "explore" ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a.75.75 0 01-.53-.22l-4-4a.75.75 0 111.06-1.06L10 10.19l3.47-3.47a.75.75 0 111.06 1.06l-4 4A.75.75 0 0110 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
            {dropdownOpen === "explore" && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg p-4 z-50 border border-gray-100">
                <div className="grid grid-cols-1 gap-2">
                  {courseCategories.map((category) => (
                    <button
                      key={category.id}
                      className="text-left text-sm text-gray-700 hover:text-purple-600 transition header-inter p-2 rounded-md hover:bg-gray-50"
                      onClick={() => {
                        handleNavigateToCoursesPage(category.id);
                        setDropdownOpen(null);
                      }}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link 
            to="/home" 
            className="text-black font-medium header-inter relative"
            style={{ fontSize: '16px', fontWeight: '400' }}
          >
            Home
            <div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-12 h-0.5 rounded-full"
              style={{ backgroundColor: '#453E75' }}
            />
          </Link>
          <Link 
            to="/courses" 
            className="text-black hover:text-gray-600 font-medium header-inter"
            style={{ fontSize: '16px', fontWeight: '400' }}
          >
            Courses
          </Link>
          <Link 
            to="/my-learning" 
            className="text-black hover:text-gray-600 font-medium header-inter"
            style={{ fontSize: '16px', fontWeight: '400' }}
          >
            My Learnings
          </Link>
          <Link 
            to="/help" 
            className="text-black hover:text-gray-600 font-medium header-inter"
            style={{ fontSize: '16px', fontWeight: '400' }}
          >
            Help & Support
          </Link>
        </nav>

        {/* Right Side - Auth Buttons */}
        {!auth.authenticate ? (
          <div className="flex items-center space-x-3">
            <Button
              onClick={() => navigate("/auth")}
              className="font-medium text-white px-6 py-2 rounded-full transition-all header-inter"
              style={{
                backgroundColor: '#7B6BA8',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/auth")}
              className="font-medium text-white px-6 py-2 rounded-full transition-all header-inter"
              style={{
                backgroundColor: '#453E75',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Sign up
            </Button>
          </div>
        ) : (
          <div className="relative">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold cursor-pointer shadow-lg ring-2 ring-gray-200 ${bgColor} header-alata transition-all hover:scale-105`}
              onClick={() =>
                setDropdownOpen(
                  dropdownOpen === "user" ? null : "user"
                )
              }
            >
              {userInitial}
            </div>
            {dropdownOpen === "user" && (
              <ul className="absolute right-0 mt-3 w-64 bg-white shadow-xl rounded-xl p-4 space-y-3 z-50 text-sm border border-gray-100">
                <li className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${bgColor}`}>
                    {userInitial}
                  </div>
                  <div>
                    <div className="font-semibold header-alata text-gray-800">{userName}</div>
                    <div className="text-gray-500 truncate header-inter text-xs">{userEmail}</div>
                  </div>
                </li>
                <li>
                  <Button
                    className="w-full header-inter font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 rounded-lg py-2"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </Button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default StudentViewCommonHeader;
