import { FC } from 'react';
import styles from './ContactModal.module.scss';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
}

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose, productName }) => {
    if (!isOpen) return null;

    const handleWhatsAppClick = () => {
        const phoneNumber = '+79153987112';
        const message = encodeURIComponent(`Добрый день! Мне хотелось бы проконсультироваться по поводу ${productName}.`);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    const handleTelegramClick = () => {
        const phoneNumber = '79153987112';
        const message = encodeURIComponent(`Добрый день! Мне хотелось бы проконсультироваться по поводу ${productName}.`);
        window.open(`https://t.me/+${phoneNumber}?text=${message}`, '_blank');
    };

    const handleEmailClick = () => {
        const email = 'info@printtrip.ru';
        const subject = encodeURIComponent(`Консультация по ${productName}`);
        const body = encodeURIComponent(`Добрый день! Мне хотелось бы проконсультироваться по поводу ${productName}.`);
        window.open(`mailto:${email}?subject=${subject}&body=${body}`);
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>✕</button>
                <h2 className={styles.modalTitle}>Выберите способ связи</h2>
                <div className={styles.contactButtons}>
                    <button className={styles.contactButton} onClick={handleWhatsAppClick}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                        </svg>
                        WhatsApp
                    </button>
                    <button className={styles.contactButton} onClick={handleTelegramClick}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.47-.81-.26-1.45-.4-1.4-.85.03-.22.46-.45 1.3-.68 5.09-2.21 8.49-3.67 10.19-4.39.49-.21 1.74-.77 2.47-.31.21.13.36.38.41.67.05.29.05.67.03.96z"/>
                        </svg>
                        Telegram
                    </button>
                    <button className={styles.contactButton} onClick={handleEmailClick}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        Email
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactModal; 