import cls from "./Title.module.scss";
import back from "../../shared/assets/background/back1.jpg";
import pantone from "../../shared/assets/pictures/pantone.jpeg";
import women from '../../shared/assets/pictures/women2.jpg'

const Title = () => {
    const styles = {
        height: "660px",
        backgroundImage: `url(${women})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
    };


    return (
        <section style={styles} className={cls.titleWrapper}>
            <div className={cls.box}>
                {/* <h5 className={cls.title}>
                    Print Trip - современная цифровая типография,
                    специализирующаяся на высококачественной цифровой печати. Мы
                    предоставляем широкий спектр услуг, включая печать брошюр,
                    визиток, листовок и других рекламных материалов. С фокусом
                    на высоком качестве и индивидуальном подходе к каждому
                    клиенту, мы стремимся удовлетворить разнообразные
                    потребности в печати. Наш опыт и профессионализм делают нас
                    надежным партнером в создании качественных печатных
                    продуктов.
                </h5> */}
                {/* <h5 className={cls.title}>
                    На машине Konica Minolta C6100 в нашей типографии мы
                    осуществляем высококачественную цифровую печать с
                    использованием инновационного модуля коррекции цвета IQ-501.
                    Этот модуль позволяет достичь точной цветопередачи,
                    обеспечивая высокий стандарт качества для наших печатных
                    продуктов.
                </h5> */}
                <h1 className={cls.tit}>Типография Print Trip</h1>
            </div>

            <div className={cls.imgWrapper}></div>
        </section>
    );
};

export default Title;
