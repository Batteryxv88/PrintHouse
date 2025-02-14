// import { useAppSelector } from "app/providers/StoreProvider/Store/hooks";
// import cls from "./Products.module.scss";
// import back from "../../shared/assets/background/back1.jpg";

// const Products = () => {
//     const photos = useAppSelector((state) => state.products.photos);

//     // const styles = {
//     //     marginTop: '50px',
//     //     display: 'grid',
//     //     gridTemplateColumns: '1fr 1fr 1fr 1fr',
//     //     rowGap: '30px',
//     //     alignItems: 'center',
//     //     color: 'var(--textColorDarkBlue)',
//     //     backgroundImage: `url(${back})`,
//     //     backgroundRepeat: 'no-repeat',
//     //     backgroundSize: 'cover',
//     //     backgroundPosition: 'center'

//     // };

//     return (
//         <section className={cls.products}>
//             <div className={cls.titleWrapper}>
//                 <h3 className={cls.title}>Наша продукция</h3>
//             </div>
//             <section className={cls.productsBox}>
//                 {photos.map((item) => (
//                     <div className={cls.productWrapper}>
//                         <img
//                             className={cls.img}
//                             src={item.url}
//                             alt={item.name}
//                         ></img>
//                         <span className={cls.span}>{item.name}</span>
//                     </div>
//                 ))}
//             </section>
//         </section>
//     );
// };

// export default Products;

//Вариант 2 неплохой


// import { useAppSelector } from "app/providers/StoreProvider/Store/hooks";
// import cls from "./Products.module.scss";
// import back from "../../shared/assets/background/back1.jpg";

// const Products = () => {
//     const photos = useAppSelector((state) => state.products.photos);

//     return (
//         <section className={cls.products}>
//             <div className={cls.titleWrapper}>
//                 <h3 className={cls.title}>Наша продукция</h3>
//             </div>
//             <section className={cls.productsBox}>
//                 {photos.map((item, index) => (
//                     <div key={index} className={cls.productWrapper}>
//                         <img
//                             className={cls.img}
//                             src={item.url}
//                             alt={item.name}
//                         />
//                         <span className={cls.span}>{item.name}</span>
//                     </div>
//                 ))}
//             </section>
//         </section>
//     );
// };

// export default Products;

//Вариант 3

// import { useAppSelector } from "app/providers/StoreProvider/Store/hooks";
// import cls from "./Products.module.scss";
// import back from "../../shared/assets/background/back1.jpg";

// const Products = () => {
//     const photos = useAppSelector((state) => state.products.photos);

//     return (
//         <section className={cls.products}>
//             <div className={cls.titleWrapper}>
//                 <h3 className={cls.title}>Наша продукция</h3>
//             </div>
//             <section className={cls.productsBox}>
//                 {photos.map((item, index) => (
//                     <div key={index} className={cls.productWrapper}>
//                         <div className={cls.imageContainer}>
//                             <img
//                                 className={cls.img}
//                                 src={item.url}
//                                 alt={item.name}
//                             />
//                         </div>
//                         <span className={cls.span}>{item.name}</span>
//                     </div>
//                 ))}
//             </section>
//         </section>
//     );
// };

// export default Products;

//44444444  

// import { useAppSelector } from "app/providers/StoreProvider/Store/hooks";
// import cls from "./Products.module.scss";
// import back from "../../shared/assets/background/back1.jpg";

// const Products = () => {
//     const photos = useAppSelector((state) => state.products.photos);

//     return (
//         <section className={cls.products}>
//             <div className={cls.titleWrapper}>
//                 <h3 className={cls.title}>Наша продукция</h3>
//             </div>
//             <section className={cls.productsBox}>
//                 {photos.map((item, index) => (
//                     <div key={index} className={cls.productWrapper}>
//                         <div className={cls.imageContainer}>
//                             <img
//                                 className={cls.img}
//                                 src={item.url}
//                                 alt={item.name}
//                             />
//                         </div>
//                         <span className={cls.span}>{item.name}</span>
//                     </div>
//                 ))}
//             </section>
//         </section>
//     );
// };

// export default Products;


///555  хороший вариант

// import { useAppSelector } from "app/providers/StoreProvider/Store/hooks";
// import cls from "./Products.module.scss";
// import back from "../../shared/assets/background/back1.jpg";

// const Products = () => {
//     const photos = useAppSelector((state) => state.products.photos);

//     return (
//         <section className={cls.products}>
//             <div className={cls.titleWrapper}>
//                 <h3 className={cls.title}>Наша продукция</h3>
//             </div>
//             <section className={cls.productsBox}>
//                 {photos.map((item, index) => (
//                     <div key={index} className={cls.productWrapper}>
//                         <div className={cls.imageContainer}>
//                             <img
//                                 className={cls.img}
//                                 src={item.url}
//                                 alt={item.name}
//                             />
//                         </div>
//                         <span className={cls.span}>{item.name}</span>
//                     </div>
//                 ))}
//             </section>
//         </section>
//     );
// };

// export default Products;


///66666666666   

import { useAppSelector } from "app/providers/StoreProvider/Store/hooks";
import cls from "./Products.module.scss";
import back from "../../shared/assets/background/back1.jpg";

const Products = () => {
    const photos = useAppSelector((state) => state.products.photos);

    return (
        <section className={cls.products}>
            <div className={cls.titleWrapper}>
                <h3 className={cls.title}>Наша продукция</h3>
            </div>
            <section className={cls.productsBox}>
                {photos.map((item, index) => (
                    <div key={index} className={cls.productWrapper}>
                        <div className={cls.imageContainer}>
                            <img
                                className={cls.img}
                                src={item.url}
                                alt={item.name}
                            />
                        </div>
                        <span className={cls.span}>{item.name}</span>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default Products;