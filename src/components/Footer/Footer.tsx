import styles from './Footer.module.scss';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToProducts = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        if (location.pathname !== '/') {
            // Если мы не на главной странице, сначала переходим на неё
            navigate('/', { state: { scrollToProducts: true } });
        } else {
            // Если мы уже на главной странице, просто прокручиваем к продукции
            const productsSection = document.getElementById('products');
            if (productsSection) {
                const headerOffset = 130; // Высота шапки (80px) + дополнительный отступ (50px)
                const elementPosition = productsSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    {/* Контактная информация */}
                    <div className={styles.footerSection}>
                        <h3>Контакты</h3>
                        <p>Телефон: +7 (915) 398-71-12</p>
                        <p>Email: info@printtrip.ru</p>
                        <p>Адрес: г. Москва, Бумажный проезд, 14с3</p>
                    </div>

                    {/* Навигация */}
                    <div className={styles.footerSection}>
                        <h3>Навигация</h3>
                        <ul>
                            <li><Link to="/">Главная</Link></li>
                            <li><a href="#products" onClick={scrollToProducts}>Продукция</a></li>
                            <li><Link to="/about">О компании</Link></li>
                            <li><Link to="/delivery">Доставка</Link></li>
                        </ul>
                    </div>

                    {/* Услуги */}
                    <div className={styles.footerSection}>
                        <h3>Услуги</h3>
                        <ul>
                            <li><Link to="/services/design">Дизайн</Link></li>
                            <li><Link to="/services/printing">Печать</Link></li>
                            <li><Link to="/services/large-format">Широкоформатная печать</Link></li>
                            <li><Link to="/services/post-printing">Постпечатная обработка</Link></li>
                        </ul>
                    </div>

                    {/* Социальные сети */}
                    <div className={styles.footerSection}>
                        <h3>Мы в соцсетях</h3>
                        <div className={styles.socialLinks}>
                            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">VK</a>
                            <a href="https://t.me" target="_blank" rel="noopener noreferrer">Telegram</a>
                            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                        </div>
                    </div>
                </div>

                {/* Нижняя часть футера */}
                <div className={styles.footerBottom}>
                    <p>&copy; 2025 PrintTrip. Все права защищены.</p>
                    <div className={styles.legalLinks}>
                        <Link to="/privacy">Политика конфиденциальности</Link>
                        <Link to="/terms">Условия использования</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 