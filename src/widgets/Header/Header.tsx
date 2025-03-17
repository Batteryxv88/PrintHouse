import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cls from './Header.module.scss';
import Logo from '../../shared/pictures/logo-08.svg';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${cls.header} ${scrollY >= 50 ? cls.headerShadow : ''}`}>
      <div className={cls.headerBox}>
        <Link to="/" className={cls.logoWrapper}>
          <Logo className={cls.logo} />
          <h1>Print Trip</h1>
        </Link>

        <ul className={`${cls.box} ${isMenuOpen ? cls.menuOpen : ''}`}>
          <li className={`${cls.li} ${cls.mobileVisible}`}>+7 (495) 008-00-78</li>
          <li className={`${cls.li} ${cls.mobileVisible}`}>print-trip@yandex.ru</li>
          <li className={cls.li}>Оплата и доставка</li>
          <li className={cls.li}><Link to="/contacts">Контакты</Link></li>
        </ul>

        <div 
          className={`${cls.burgerMenu} ${isMenuOpen ? cls.menuOpen : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={cls.burgerLine}></span>
          <span className={cls.burgerLine}></span>
          <span className={cls.burgerLine}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;