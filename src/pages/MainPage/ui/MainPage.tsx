import Title from "widgets/Title/Title";
import cls from "./MainPage.module.scss";
import Products from "widgets/Products/Products";
import Container from "shared/ui/Container/Container";
import Description from "widgets/Description/Description";

const MainPage = () => {

    return (
        <div className={cls.MainPage}>
            <Title />
            <Description />
            <Container />
        </div>
    );
};

export default MainPage;
