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
