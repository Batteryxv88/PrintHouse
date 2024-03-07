import cls from "./Header.module.scss";
import Logo from "../../shared/pictures/logo.svg";
import { useState, useEffect } from "react";

const Header = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        // Обновляем состояние scrollY при скролле
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        // Добавляем обработчик события при монтировании компонента
        window.addEventListener("scroll", handleScroll);

        // Удаляем обработчик события при размонтировании компонента
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={scrollY >= 50 ? cls.header + ' ' + cls.headerShadow : cls.header}>
            <div className={cls.headerBox}>
                <div className={cls.logoWrapper}>
                    <Logo className={cls.logo} />
                    <h1>Print Trip</h1>
                </div>
                <ul className={cls.box}>
                    <li className={cls.li}>8 (495) 008-00-78</li>
                    <li className={cls.li}>print-trip@yandex.ru</li>
                    <li className={cls.li}>Оплата и доставка</li>
                    <li className={cls.li}>Контакты</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
