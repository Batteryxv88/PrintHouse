import { useAppSelector } from "app/providers/StoreProvider/Store/hooks";
import cls from "./Products.module.scss";
import back from "../../shared/assets/background/back1.jpg";

const Products = () => {
    const photos = useAppSelector((state) => state.products.photos);

    // const styles = {
    //     marginTop: '50px',
    //     display: 'grid',
    //     gridTemplateColumns: '1fr 1fr 1fr 1fr',
    //     rowGap: '30px',
    //     alignItems: 'center',
    //     color: 'var(--textColorDarkBlue)',
    //     backgroundImage: `url(${back})`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center'

    // };

    return (
        <section className={cls.products}>
            <div className={cls.titleWrapper}>
                <h3 className={cls.title}>Наша продукция</h3>
            </div>
            <section className={cls.productsBox}>
                {photos.map((item) => (
                    <div className={cls.productWrapper}>
                        <img
                            className={cls.img}
                            src={item.url}
                            alt={item.name}
                        ></img>
                        <span className={cls.span}>{item.name}</span>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default Products;
