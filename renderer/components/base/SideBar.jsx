import { faBoxes, faCashRegister, faFileMedicalAlt, faHistory, faMoneyBill, faMoneyCheck, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeComponent } from '../../scripts/reducers/mainAppSlice';
import styles from './BaseLayout.module.css';

function NavSelect({ icon, label, target }) {
    const dispatch = useDispatch();
    const currentActiveComponent = useSelector((state) => state.mainApp.component);
    const checkIfValid = () => {
        // Jika komponen utama yang akan di-update sama dengan komponen
        // utama yang sudah di tampilkan sebelumnya, maka event pada react-redux
        // tidak akan di panggil
        if (currentActiveComponent === target) {
            return;
        }

        dispatch(changeComponent(target))
    }

    return (
        <div className={styles.sidenavSelect} onClick={checkIfValid}>
            <FontAwesomeIcon style={{ marginRight: '1rem' }} icon={icon} /> {label}
        </div>
    )
}

export default function SideBar() {
    return (
        <div className={styles.sideContainer}>
            <h2>Navigasi</h2>
            <div>
                <NavSelect icon={faCashRegister} label="Mode Kasir" target="cashier_confirmation" />
                <NavSelect icon={faBoxes} label="Stok Barang" target="stocks" />
                <NavSelect icon={faHistory} label="Histori Transaksi" target="history" />
                <NavSelect icon={faFileMedicalAlt} label="Laporan" target="reports" />
                <NavSelect icon={faSync} label="Info" target="app_info" />
            </div>
        </div>
    )
}