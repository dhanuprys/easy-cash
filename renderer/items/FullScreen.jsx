import styles from './FullScreen.module.css';

export default function FullScreen({ children, className = '', centerPlace, ...props }) {
    return (
        <div className={`${styles.container} ${centerPlace ? styles.center : ''} ${className}`}>
            {children}
        </div>
    )
}