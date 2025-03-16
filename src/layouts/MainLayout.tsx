import Footer from '../components/Footer/Footer';
import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => {
    return (
        <div className={styles.layout}>
            {/* Ваш Header */}
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout; 