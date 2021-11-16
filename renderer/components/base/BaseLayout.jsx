import { useSelector } from 'react-redux';
import TransactionDay from './TransactionDay';
import FullScreen from '../../items/FullScreen';
import SideBar from './SideBar';
import CashierConfirmation from '../main/CashierConfirmation';
import ApplicationInfo from '../main/ApplicationInfo';
import styles from './BaseLayout.module.css';
import { useEffect } from 'react';

function Stocks() {
    return "Stock";
}

function TransactionHistory() {
    return "History";
}

function DefaultMainPage() {
    // const message = useSelector((state) => state.app.wsMessage);
    // useEffect(() => {
    //     alert(JSON.stringify(message));
    // })
    return "ME";
}

export default function BaseLayout() {
    const selectedPage = useSelector((state) => state.mainApp.component);
    let ActivePage = DefaultMainPage;

    // Memastikan komponen utama yang dipilih ada dalam salah satu
    // pilihan komponen
    switch (selectedPage) {
        case 'cashier_confirmation':
            ActivePage = CashierConfirmation;
            break;
        case 'stocks': 
            ActivePage = Stocks;
            break;
        case 'history':
            ActivePage = TransactionHistory;
            break;
        case 'app_info':
            ActivePage = ApplicationInfo;
            break;
    }    

    return (
        <FullScreen className={styles.baseLayout}>
            <SideBar />
            <div className={styles.mainContainer}>
                <TransactionDay />
                <div className={styles.navigationDisplay}>
                    <ActivePage />
                </div>
            </div>
        </FullScreen>
    );
}