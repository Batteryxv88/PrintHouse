import Footer from '../components/Footer/Footer';
import styles from './MainLayout.module.scss';
import { ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
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