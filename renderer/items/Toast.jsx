import FullScreen from './FullScreen';
import styles from './Toast.module.css';

export default function Toast({ content, closeToast }) {
    return (
        <FullScreen>
            <div className={styles.container}>
                <div className={styles.main}>
                    {content} <span onClick={closeToast}>X</span>
                </div>
            </div>
        </FullScreen>
    )
}