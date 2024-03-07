import Title from 'widgets/Title/Title';
import cls from './Container.module.scss'
import Products from 'widgets/Products/Products';

const Container = () => {
    return ( <section className={cls.container}>
        
        <Products />
    </section> );
}
 
export default Container;