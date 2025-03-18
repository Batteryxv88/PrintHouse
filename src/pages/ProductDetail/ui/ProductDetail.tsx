import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "app/providers/StoreProvider/Store/hooks";
import { RootState } from "app/providers/StoreProvider/Store";
import styles from "./ProductDetail.module.scss";
import ContactModal from "components/ContactModal/ContactModal";
import OrderModal from "components/OrderModal/OrderModal";

interface ProductData {
    id: number;
    name: string;
    description: string;
    material: string;
    print: string;
    finishing: string;
    minOrderQuantity: string;
}

interface Photo {
    id: number;
    name: string;
    url: string;
}

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const photos = useAppSelector((state: RootState) => state.products.photos);
    const products = useAppSelector((state: RootState) => state.productData.polygraphyProducts);
    const [product, setProduct] = useState<(ProductData & { url: string }) | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    // Добавляем типизацию для объекта склонений
    const productCases: { [key: string]: string } = {
        'Визитки': 'визиток',
        'Буклеты': 'буклетов',
        'Листовки': 'листовок',
        'Дипломы': 'дипломов',
        'Грамоты': 'грамот',
        'Плакаты': 'плакатов',
        'Наклейки': 'наклеек',
        'Календари': 'календарей',
        'Бланки': 'бланков',
        'Конверты': 'конвертов',
        'Папки': 'папок',
        'Открытки': 'открыток',
        'Приглашения': 'приглашений',
        'Брошюры': 'брошюр',
        'Каталоги': 'каталогов',
        'Меню': 'меню',
        'Бейджи': 'бейджей',
    };

    // Функция для получения правильного склонения с проверкой на undefined
    const getProductCase = (productName: string | undefined): string => {
        if (!productName) return '';
        
        const normalizedName = productName.charAt(0).toUpperCase() + productName.slice(1).toLowerCase();
        return productCases[normalizedName] || productName.toLowerCase();
    };

    useEffect(() => {
        console.log('Component mounted');
        console.log('Current ID:', id);
        console.log('Photos from store:', photos);
        console.log('Products from store:', products);

        if (!photos || !products) {
            console.log('Data not loaded yet');
            return;
        }

        const findPhoto = photos.find((item: Photo) => item.id === Number(id));
        const findProduct = products.find((item: ProductData) => item.id === Number(id));
        
        console.log('Found Photo:', findPhoto);
        console.log('Found Product:', findProduct);
        
        if (!findPhoto || !findProduct) {
            console.log('Photo or Product not found');
            navigate("/404");
            return;
        }

        const productData = {
            ...findProduct,
            url: findPhoto.url
        };

        console.log('Final Product Data:', productData);
        setProduct(productData);
        setLoading(false);
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [id, photos, products, navigate]);

    const handleBack = () => {
        if (location.pathname !== '/') {
            navigate('/', { 
                state: { scrollToProducts: true } 
            });
        } else {
            const productsSection = document.getElementById('products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleConsultClick = () => {
        if (!product?.name) return;
        setIsConsultModalOpen(true);
    };

    const handleOrderClick = () => {
        if (!product?.name) return;
        setIsOrderModalOpen(true);
    };

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loader}></div>
                <p>Загрузка информации о продукте...</p>
            </div>
        );
    }

    return (
        <div className={styles.productDetail}>
            <div className={styles.container}>
                <button 
                    onClick={handleBack}
                    className={styles.backButton}
                    aria-label="Вернуться назад"
                >
                    ← Назад к продукции
                </button>
                
                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <img 
                            src={product?.url} 
                            alt={product?.name} 
                            className={styles.image}
                        />
                    </div>
                    
                    <div className={styles.info}>
                        <h1 className={styles.title}>{product?.name}</h1>
                        
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Описание</h2>
                            <p className={styles.description}>{product?.description}</p>
                        </div>
                        
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Характеристики</h2>
                            <ul className={styles.specList}>
                                <li className={styles.specItem}>
                                    <span className={styles.specTitle}>Материал:</span>
                                    <span className={styles.specValue}>{product?.material}</span>
                                </li>
                                <li className={styles.specItem}>
                                    <span className={styles.specTitle}>Печать:</span>
                                    <span className={styles.specValue}>{product?.print}</span>
                                </li>
                                <li className={styles.specItem}>
                                    <span className={styles.specTitle}>Отделка:</span>
                                    <span className={styles.specValue}>{product?.finishing}</span>
                                </li>
                                <li className={styles.specItem}>
                                    <span className={styles.specTitle}>Минимальный тираж:</span>
                                    <span className={styles.specValue}>{product?.minOrderQuantity}</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className={styles.ctaSection}>
                            <button 
                                className={styles.orderButton}
                                onClick={handleOrderClick}
                            >
                                Заказать
                            </button>
                            <button 
                                className={styles.consultButton}
                                onClick={handleConsultClick}
                                type="button"
                            >
                                Заказать консультацию
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {product && (
                <>
                    <ContactModal 
                        isOpen={isConsultModalOpen}
                        onClose={() => setIsConsultModalOpen(false)}
                        productName={getProductCase(product.name)}
                    />
                    <OrderModal 
                        isOpen={isOrderModalOpen}
                        onClose={() => setIsOrderModalOpen(false)}
                        productName={getProductCase(product.name)}
                    />
                </>
            )}
        </div>
    );
};

export default ProductDetail;