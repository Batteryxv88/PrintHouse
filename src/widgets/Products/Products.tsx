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
import { RootState } from "app/providers/StoreProvider/Store";
import cls from "./Products.module.scss";

interface Photo {
    id: number;
    name: string;
    url: string;
}

const Products = () => {
    const navigate = useNavigate();
    const photos = useAppSelector((state: RootState) => state.products.photos);
    const [activeItems, setActiveItems] = useState<Set<number>>(new Set());
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleItemClick = (id: number) => {
        setActiveItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const handleItemHover = (id: number) => {
        if (!isMobile) {
            setActiveItems(prev => {
                const newSet = new Set(prev);
                if (newSet.has(id)) {
                    newSet.delete(id);
                } else {
                    newSet.add(id);
                }
                return newSet;
            });
        }
    };

    const handleProductClick = (id: number) => {
        if (!isMobile) {
            navigate(`/product/${id}`);
        }
    };

    return (
        <section className={cls.products}>
            <div className={cls.titleWrapper} id="products">
                <h3 className={cls.title}>Наша продукция</h3>
            </div>
            <section className={cls.productsBox}>
                {photos.map((item: Photo, index: number) => (
                    <div
                        key={index}
                        className={`${cls.productWrapper} ${
                            isMobile && activeItems.has(index) ? cls.active : ""
                        }`}
                        onTouchStart={() => handleItemClick(index)}
                        onMouseEnter={() => handleItemHover(index)}
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