import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import cls from './Header.module.scss';
import Logo from '../../shared/pictures/logo-08.svg';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/', { 
        state: { scrollToTop: true } 
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`${cls.header} ${scrollY >= 50 ? cls.headerShadow : ''}`} role="banner">
      <div className={cls.headerBox}>
        <a 
          href="/" 
          onClick={handleLogoClick} 
          className={cls.logoWrapper}
          aria-label="Print Trip - главная страница"
        >
          <Logo className={cls.logo} aria-hidden="true" />
          <h1>Print Trip</h1>
        </a>

        <nav className={`${cls.box} ${isMenuOpen ? cls.menuOpen : ''}`} aria-label="Основная навигация">
          <ul>
            <li className={`${cls.li} ${cls.mobileVisible}`}>
              <a href="tel:+74950080078" aria-label="Позвонить нам">
                <svg className={cls.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                </svg>
                <span>+7 (495) 008-00-78</span>
              </a>
            </li>
            <li className={`${cls.li} ${cls.mobileVisible}`}>
              <a href="mailto:print-trip@yandex.ru" aria-label="Написать нам">
                <svg className={cls.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.9 21.1,4 20,4ZM20,8L12,13L4,8V6L12,11L20,6V8Z"/>
                </svg>
                <span>print-trip@yandex.ru</span>
              </a>
            </li>
            <li className={cls.li}>
              <Link to="/delivery" aria-label="Информация об оплате и доставке">
                <svg className={cls.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20ZM16.59,7.58L10,14.17L7.41,11.59L6,13L10,17L18,9L16.59,7.58Z"/>
                </svg>
                <span>Оплата и доставка</span>
              </Link>
            </li>
            <li className={cls.li}>
              <Link to="/contacts" aria-label="Наши контакты">
                <svg className={cls.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12,2C8.13,2 5,5.13 5,9C5,13.17 9.42,18.92 11.24,21.11C11.64,21.59 12.37,21.59 12.77,21.11C14.58,18.92 19,13.17 19,9C19,5.13 15.87,2 12,2ZM12,11.5C10.62,11.5 9.5,10.38 9.5,9C9.5,7.62 10.62,6.5 12,6.5C13.38,6.5 14.5,7.62 14.5,9C14.5,10.38 13.38,11.5 12,11.5Z"/>
                </svg>
                <span>Контакты</span>
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          className={`${cls.burgerMenu} ${isMenuOpen ? cls.menuOpen : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <span className={cls.burgerLine}></span>
          <span className={cls.burgerLine}></span>
          <span className={cls.burgerLine}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;