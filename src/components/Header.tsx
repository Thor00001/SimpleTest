
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Switch } from '@/components/ui/switch';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: t('nav.home'), path: '/', description: t('nav.home.desc') },
    { name: t('nav.egen-teto-test'), path: '/egen-teto-test', description: t('nav.egen-teto-test.desc') },
    { name: t('nav.personality-test'), path: '/personality-test', description: t('nav.personality-test.desc') },
    { name: t('nav.compatibility-test'), path: '/compatibility-test', description: t('nav.compatibility-test.desc') },
    { name: t('nav.love-style-test'), path: '/love-style-test', description: t('nav.love-style-test.desc') },
    { name: t('nav.blog'), path: '/blog', description: t('nav.blog.desc') }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-purple-100 sticky top-0 z-50 dark:bg-gray-900/95 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button onClick={() => handleNavigation('/')} className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SimpleTest.kr
            </div>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`text-gray-700 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400 ${
                  location.pathname === item.path ? 'text-purple-600 font-semibold dark:text-purple-400' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('ko')}>
                  한국어
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
              <Moon className="h-4 w-4" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-100 dark:border-gray-700">
            <nav className="space-y-2 mb-4">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-purple-400"
                >
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{item.description}</div>
                </button>
              ))}
            </nav>
            
            {/* Mobile Controls */}
            <div className="flex items-center justify-between px-4 pt-4 border-t border-purple-100 dark:border-gray-700">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Globe className="h-4 w-4 mr-2" />
                    {language === 'ko' ? '한국어' : 'English'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage('ko')}>
                    한국어
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                <Moon className="h-4 w-4" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
