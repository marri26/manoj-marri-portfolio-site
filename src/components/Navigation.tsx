
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  // Sections with blue backgrounds
  const blueSections = ['about', 'skills', 'projects', 'testimonials', 'contact'];
  const isCurrentSectionBlue = blueSections.includes(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const textColorClass = isCurrentSectionBlue ? 'text-white' : 'text-gray-700';
  const hoverColorClass = isCurrentSectionBlue ? 'hover:text-blue-200' : 'hover:text-blue-600';
  const activeColorClass = isCurrentSectionBlue ? 'text-blue-200 bg-white/20' : 'text-blue-600 bg-blue-500/20';

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-blue-500/20 backdrop-blur-md border border-blue-200/30 rounded-2xl shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo with Profile Image */}
          <div 
            className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 transition-all duration-300 shadow-lg overflow-hidden hover:scale-105"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src="/lovable-uploads/9b4a4d91-e0b7-4c54-84d5-460cfe64d009.png"
              alt="Manoj Kumar Marri"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Desktop Navigation - Responsive grid */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${hoverColorClass} ${
                  activeSection === item.id 
                    ? `${activeColorClass} font-semibold` 
                    : `${textColorClass} hover:bg-blue-500/10`
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Tablet Navigation - Compact */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            {navItems.slice(0, 6).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs font-medium transition-all duration-300 px-2 py-1 rounded-lg ${hoverColorClass} ${
                  activeSection === item.id 
                    ? `${activeColorClass} font-semibold` 
                    : `${textColorClass} hover:bg-blue-500/10`
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              className={`text-xs font-medium px-2 py-1 transition-all duration-300 ${textColorClass} ${hoverColorClass}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              More
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 hover:bg-blue-500/20 rounded-lg transition-colors ${textColorClass}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isOpen && (
          <div className="md:hidden lg:hidden py-4 border-t border-blue-200/30 animate-fade-in">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${hoverColorClass} ${
                    activeSection === item.id 
                      ? `${activeColorClass} font-semibold` 
                      : `${textColorClass} hover:bg-blue-500/10`
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
