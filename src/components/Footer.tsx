
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              SimpleTest.kr
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="text-sm text-gray-400">
              {t('footer.copyright')}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footer.tests')}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link 
                  to="/egen-teto-test" 
                  className="hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  {t('nav.egen-teto-test')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/personality-test" 
                  className="hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  {t('nav.personality-test')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/compatibility-test" 
                  className="hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  {t('nav.compatibility-test')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/love-style-test" 
                  className="hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  {t('nav.love-style-test')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footer.information')}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/disclaimer" 
                  className="hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  {t('footer.disclaimer')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            {t('footer.notice')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
