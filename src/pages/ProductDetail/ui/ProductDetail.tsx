import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "app/providers/StoreProvider/Store/hooks";
import styles from "./ProductDetail.module.scss";

interface ProductData {
    id: number;
    name: string;
    url: string;
    description: string;
    specifications: {
        title: string;
        value: string;
    }[];
    options: {
        name: string;
        values: string[];
    }[];
    price?: string;
}

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const photos = useAppSelector((state) => state.products.photos);
    const [product, setProduct] = useState<ProductData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

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
        // Имитируем получение дополнительных данных о продукте
        // В реальном приложении здесь будет API-запрос или загрузка из Redux
        const findProduct = photos.find((item) => item.id === Number(id));
        
        if (!findProduct) {
            navigate("/404");
            return;
        }

        // Дополняем данные продукта (в реальном приложении эти данные могут приходить с сервера)
        const productData: ProductData = {
            ...findProduct,
            description: getProductDescription(findProduct.name),
            specifications: getProductSpecifications(findProduct.name),
            options: getProductOptions(findProduct.name),
            price: getProductPrice(findProduct.name)
        };

        setProduct(productData);
        setLoading(false);
    }, [id, photos, navigate]);

    const handleBack = () => {
        navigate(-1);
    };

    // Функция для формирования ссылки WhatsApp с проверками
    const handleConsultClick = () => {
        if (!product?.name) return;

        const phoneNumber = '+79153987112';
        const productInCase = getProductCase(product.name);
        const message = encodeURIComponent(`Добрый день! Мне хотелось бы проконсультироваться по поводу ${productInCase}.`);
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappLink, '_blank');
    };

    // Обработчик для кнопки заказа
    const handleOrderClick = () => {
        if (!product?.name) return;

        const phoneNumber = '+79153987112';
        const productInCase = getProductCase(product.name);
        const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
        const message = encodeURIComponent(`Добрый день! Мне нужно сделать заказ ${productInCase}.`);
        const whatsappLink = `https://wa.me/${cleanPhoneNumber}?text=${message}`;
        window.open(whatsappLink, '_blank');
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
                
                <h1 className={styles.title}>{product?.name}</h1>
                
                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <img 
                            src={product?.url} 
                            alt={product?.name} 
                            className={styles.image}
                        />
                    </div>
                    
                    <div className={styles.info}>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Описание</h2>
                            <p className={styles.description}>{product?.description}</p>
                        </div>
                        
                        {product?.price && (
                            <div className={styles.priceSection}>
                                <span className={styles.priceLabel}>Цена:</span>
                                <span className={styles.price}>{product.price}</span>
                            </div>
                        )}
                        
                        {product?.specifications && product.specifications.length > 0 && (
                            <div className={styles.section}>
                                <h2 className={styles.sectionTitle}>Характеристики</h2>
                                <ul className={styles.specList}>
                                    {product.specifications.map((spec, index) => (
                                        <li key={index} className={styles.specItem}>
                                            <span className={styles.specTitle}>{spec.title}:</span>
                                            <span className={styles.specValue}>{spec.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        
                        {product?.options && product.options.length > 0 && (
                            <div className={styles.section}>
                                <h2 className={styles.sectionTitle}>Варианты исполнения</h2>
                                {product.options.map((option, index) => (
                                    <div key={index} className={styles.optionGroup}>
                                        <h3 className={styles.optionTitle}>{option.name}</h3>
                                        <div className={styles.optionValues}>
                                            {option.values.map((value, valueIndex) => (
                                                <span key={valueIndex} className={styles.optionValue}>
                                                    {value}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        
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
        </div>
    );
};

// Функции для генерации данных о продуктах
// В реальном приложении эти данные будут приходить с сервера
function getProductDescription(productName: string): string {
    const descriptions: {[key: string]: string} = {
        "Визитки": "Профессиональные визитные карточки высокого качества на плотной бумаге с различными вариантами отделки. Наши визитки помогут создать первое впечатление о вашей компании и выделиться среди конкурентов. Доступны в стандартных и нестандартных форматах с возможностью выбора дизайна и оформления.",
        "Буклеты": "Информативные буклеты с качественной печатью для эффективной презентации ваших товаров и услуг. Мы предлагаем различные варианты сложения, плотности бумаги и отделки. Идеально подходят для выставок, презентаций и рекламных кампаний.",
        "Листовки": "Яркие и информативные листовки для эффективного продвижения ваших акций и предложений. Наши листовки печатаются на качественной бумаге с использованием современного оборудования, что гарантирует высокое качество изображения и текста.",
        "Брошюры": "Многостраничные брошюры с качественным переплетом для подробного представления вашей компании и продукции. Доступны различные типы скрепления и оформления, что позволяет создать уникальный информационный продукт под ваши потребности.",
        "Каталоги": "Профессиональные каталоги продукции с высококачественной печатью и прочным переплетом. Наши каталоги помогут вам систематизировать предложения и создать целостный образ вашей компании в глазах клиентов.",
        "Календари": "Корпоративные и рекламные календари различных форматов с индивидуальным дизайном. Отличный способ поддерживать связь с клиентами в течение всего года и ненавязчиво напоминать о вашей компании.",
        "Открытки": "Эксклюзивные поздравительные и корпоративные открытки с возможностью персонализации. Идеальный способ выразить благодарность клиентам или поздравить партнеров с важными датами. Доступны различные форматы и варианты отделки.",
        "Плакаты": "Крупноформатные плакаты высокого разрешения для эффективной наружной и внутренней рекламы. Наши плакаты печатаются на материалах, устойчивых к внешним воздействиям, что обеспечивает их долговечность.",
        "Блокноты": "Корпоративные блокноты с логотипом и фирменным дизайном для деловых встреч и презентаций. Доступны разные форматы, виды скрепления и качество бумаги. Практичный и полезный сувенир для ваших клиентов и сотрудников."
    };
    
    return descriptions[productName] || 
        "Высококачественная полиграфическая продукция, изготовленная с использованием современного оборудования и материалов. Мы гарантируем отличное качество печати и своевременное выполнение заказа.";
}

function getProductSpecifications(productName: string): {title: string, value: string}[] {
    const specificationsByProduct: {[key: string]: {title: string, value: string}[]} = {
        "Визитки": [
            {title: "Формат", value: "90×50 мм / 85×55 мм"},
            {title: "Плотность бумаги", value: "300-350 г/м²"},
            {title: "Печать", value: "Односторонняя/двусторонняя"},
            {title: "Отделка", value: "Матовая, глянцевая, лак, ламинация"},
            {title: "Минимальный тираж", value: "100 шт."}
        ],
        "Буклеты": [
            {title: "Формат", value: "А4/А5/А6 (в развороте)"},
            {title: "Плотность бумаги", value: "130-250 г/м²"},
            {title: "Сложение", value: "Евро, гармошка, зигзаг"},
            {title: "Печать", value: "Полноцветная 4+4"},
            {title: "Минимальный тираж", value: "50 шт."}
        ],
        "Листовки": [
            {title: "Формат", value: "А4/А5/А6"},
            {title: "Плотность бумаги", value: "115-170 г/м²"},
            {title: "Печать", value: "Односторонняя/двусторонняя"},
            {title: "Отделка", value: "Без отделки/лак"},
            {title: "Минимальный тираж", value: "100 шт."}
        ],
        "Брошюры": [
            {title: "Формат", value: "А4/А5"},
            {title: "Количество страниц", value: "от 8 до 64"},
            {title: "Плотность бумаги", value: "115-170 г/м² (блок), 250-300 г/м² (обложка)"},
            {title: "Переплет", value: "Скоба, клей, пружина"},
            {title: "Минимальный тираж", value: "30 шт."}
        ],
        "Каталоги": [
            {title: "Формат", value: "А4/А5"},
            {title: "Количество страниц", value: "от 16 до 100+"},
            {title: "Плотность бумаги", value: "150-170 г/м² (блок), 250-300 г/м² (обложка)"},
            {title: "Переплет", value: "Скоба, клей, пружина, КБС"},
            {title: "Отделка обложки", value: "Ламинация, лак, тиснение"},
            {title: "Минимальный тираж", value: "30 шт."}
        ]
    };
    
    return specificationsByProduct[productName] || [
        {title: "Материал", value: "Качественная бумага/картон"},
        {title: "Печать", value: "Полноцветная"},
        {title: "Качество", value: "Высокое разрешение"},
        {title: "Отделка", value: "По запросу"}
    ];
}

function getProductOptions(productName: string): {name: string, values: string[]}[] {
    const optionsByProduct: {[key: string]: {name: string, values: string[]}[]} = {
        "Визитки": [
            {name: "Тип бумаги", values: ["Мелованная", "Дизайнерская", "Эко"]},
            {name: "Углы", values: ["Прямые", "Скругленные"]},
            {name: "Дополнительные опции", values: ["QR-код", "Тиснение", "Конгрев", "Металлизация"]}
        ],
        "Буклеты": [
            {name: "Тип сложения", values: ["Евробуклет", "Гармошка", "Окно", "Зигзаг"]},
            {name: "Обработка", values: ["Стандартная", "С ламинацией", "С выборочным УФ-лаком"]}
        ],
        "Календари": [
            {name: "Вид календаря", values: ["Настенный", "Настольный", "Карманный", "Квартальный"]},
            {name: "Дополнительно", values: ["С индивидуальными датами", "С блоком для записей"]}
        ]
    };
    
    return optionsByProduct[productName] || [];
}

function getProductPrice(productName: string): string {
    const pricesByProduct: {[key: string]: string} = {
        "Визитки": "от 1 200 ₽ за 100 шт.",
        "Буклеты": "от 4 500 ₽ за 100 шт.",
        "Листовки": "от 2 500 ₽ за 100 шт.",
        "Брошюры": "от 8 000 ₽ за 30 шт.",
        "Каталоги": "от 12 000 ₽ за 30 шт.",
        "Календари": "от 3 000 ₽ за 50 шт.",
        "Открытки": "от 2 000 ₽ за 50 шт.",
        "Плакаты": "от 500 ₽ за шт.",
        "Блокноты": "от 3 500 ₽ за 50 шт."
    };
    
    return pricesByProduct[productName] || "Цена по запросу";
}

export default ProductDetail;