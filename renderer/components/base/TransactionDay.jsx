import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from './BaseLayout.module.css';

export default function TransactionDay() {
    return (
        <div className={styles.transactionHistoryContainer}>
            <div className={styles.transactionOut}>
                <FontAwesomeIcon icon={faArrowUp} /> <span>Rp. 300.000,00</span>
            </div>
            <div className={styles.transactionIn}>
                <FontAwesomeIcon icon={faArrowDown} /> <span>Rp. 29.000,00</span>
            </div>
        </div>
    );
}