// import cls from "./Title.module.scss";
// import back from "../../shared/assets/background/back1.jpg";
// import pantone from "../../shared/assets/pictures/pantone.jpeg";
// import women from '../../shared/assets/pictures/women2.jpg'

// const Title = () => {
//     const styles = {
//         height: "660px",
//         backgroundImage: `url(${women})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "top",
//     };


//     return (
//         <section style={styles} className={cls.titleWrapper}>
//             <div className={cls.box}>
//                 <h1 className={cls.tit}>Типография Print Trip</h1>
//             </div>

//             <div className={cls.imgWrapper}></div>
//         </section>
//     );
// };

// export default Title;

import cls from "./Title.module.scss";
import women from '../../shared/assets/pictures/women2.jpg';

const Title = () => {
    const styles = {
        backgroundImage: `url(${women})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <section style={styles} className={cls.titleWrapper}>
            <div className={cls.box}>
                <h1 className={cls.tit}>Типография Print Trip</h1>
            </div>
            <div className={cls.imgWrapper}>
                {/* Если нужно добавить изображение */}
                {/* <img src={someImage} alt="Description" className={cls.img} /> */}
            </div>
        </section>
    );
};

export default Title;
