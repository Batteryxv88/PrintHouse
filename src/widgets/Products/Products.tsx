// // import { useAppSelector } from "app/providers/StoreProvider/Store/hooks";
// // import cls from "./Products.module.scss";
// // import back from "../../shared/assets/background/back1.jpg";

// // const Products = () => {
// //     const photos = useAppSelector((state) => state.products.photos);

// //     return (
// //         <section className={cls.products}>
// //             <div className={cls.titleWrapper}>
// //                 <h3 className={cls.title}>Наша продукция</h3>
// //             </div>
// //             <section className={cls.productsBox}>
// //                 {photos.map((item, index) => (
// //                     <div key={index} className={cls.productWrapper}>
// //                         <div className={cls.imageContainer}>
// //                             <img
// //                                 className={cls.img}
// //                                 src={item.url}
// //                                 alt={item.name}
// //                             />
// //                         </div>
// //                         <span className={cls.span}>{item.name}</span>
// //                     </div>
// //                 ))}
// //             </section>
// //         </section>
// //     );
// // };

// // export default Products;

// import { useAppSelector } from "app/providers/StoreProvider/Store/hooks";
// import { useState, useEffect } from "react";
// import cls from "./Products.module.scss";

// const Products = () => {
//     const photos = useAppSelector((state) => state.products.photos);
//     const [activeItems, setActiveItems] = useState<Set<number>>(new Set());
//     const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

//     // Обновляем флаг isMobile при изменении размера окна
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 768);
//         };

//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const handleTouch = (index: number) => {
//         if (!isMobile) return; // Применяем эффект только на мобильных

//         const newActiveItems = new Set(activeItems);
//         newActiveItems.add(index);
//         setActiveItems(newActiveItems);

//         setTimeout(() => {
//             newActiveItems.delete(index);
//             setActiveItems(new Set(newActiveItems));
//         }, 300);
//     };

//     return (
//         <section className={cls.products}>
//             <div className={cls.titleWrapper}>
//                 <h3 className={cls.title}>Наша продукция</h3>
//             </div>
//             <section className={cls.productsBox}>
//                 {photos.map((item, index) => (
//                     <div
//                         key={index}
//                         className={`${cls.productWrapper} ${
//                             isMobile && activeItems.has(index) ? cls.active : ""
//                         }`}
//                         onTouchStart={() => handleTouch(index)}
//                     >
//                         <div className={cls.imageContainer}>
//                             <img className={cls.img} src={item.url} alt={item.name} />
//                         </div>
//                         <span className={cls.span}>{item.name}</span>
//                     </div>
//                 ))}
//             </section>
//         </section>
//     );
// };

// export default Products;


import { useAppSelector } from "app/providers/StoreProvider/Store/hooks";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cls from "./Products.module.scss";

const Products = () => {

    const photos = useAppSelector((state) => state.products.photos); // исправьте на правильный путь
    const [activeItems, setActiveItems] = useState(new Set());
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navigate = useNavigate();

    // Обновляем флаг isMobile при изменении размера окна
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleTouch = (index: number) => {
        if (!isMobile) return; // Применяем эффект только на мобильных

        const newActiveItems = new Set(activeItems);
        newActiveItems.add(index);
        setActiveItems(newActiveItems);

        setTimeout(() => {
            newActiveItems.delete(index);
            setActiveItems(new Set(newActiveItems));
            
            // Переходим на страницу продукта после анимации
            navigate(`/product/${photos[index].id}`);
        }, 300);
    };

    const handleProductClick = (id: number) => {
        // На десктопе переходим сразу без задержки
        if (!isMobile) {
            navigate(`/product/${id}`);
        }
    };

    return (
        <section className={cls.products}>
            <div className={cls.titleWrapper}>
                <h3 className={cls.title}>Наша продукция</h3>
            </div>
            <section className={cls.productsBox}>
                {photos.map((item, index) => (
                    <div
                        key={index}
                        className={`${cls.productWrapper} ${
                            isMobile && activeItems.has(index) ? cls.active : ""
                        }`}
                        onTouchStart={() => handleTouch(index)}
                        onClick={() => handleProductClick(item.id)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Просмотреть ${item.name}`}
                    >
                        <div className={cls.imageContainer}>
                            <img className={cls.img} src={item.url} alt={item.name} />
                        </div>
                        <span className={cls.span}>{item.name}</span>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default Products;