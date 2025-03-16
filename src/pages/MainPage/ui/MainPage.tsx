import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Title from "widgets/Title/Title";
import cls from "./MainPage.module.scss";
import Products from "widgets/Products/Products";
import Container from "shared/ui/Container/Container";
import Description from "widgets/Description/Description";

const MainPage = () => {
    const location = useLocation();

    useEffect(() => {
        // Проверяем, есть ли флаг для прокрутки к продукции
        if (location.state && (location.state as any).scrollToProducts) {
            // Небольшая задержка, чтобы дать время для рендеринга компонента
            setTimeout(() => {
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
            }, 100);
        }
    }, [location]);

    return (
        <div className={cls.MainPage}>
            <Title />
            <Description />
            <Container />
        </div>
    );
};

export default MainPage;
