import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { ipcRenderer } from 'electron';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { show } from '../../scripts/reducers/toastSlice';
import styles from './ApplicationInfo.module.css';

export default function ApplicationInfo() {
    const dispatch = useDispatch();
    const wsMessage = useSelector((state) => state.app.wsMessage);
    const ws = useSelector((state) => state.app.ws);
    const [ isUpdateEvent, setUpdate ] = useState(false);
    const checkForUpdates = () => {
        if (!ws) {
            console.log('ws');
            return;
        }
        
        ws.send(JSON.stringify({ action: 'check-update' }));
    };
    const downloadUpdate = () => {
        if (!ws) {
            console.log('ws');
            return;
        }
        
        ws.send(JSON.stringify({ action: 'download-update' }));
    }
    const installUpdate = () => {
        if (!ws) {
            console.log('ws');
            return;
        }
        
        ws.send(JSON.stringify({ action: 'install-update' }));
    }

    useEffect(() => {
        if (!wsMessage) {
            return;
        }

        switch (wsMessage.action) {
            case 'update-available':
                setUpdate('available');
                break;
            case 'update-downloaded':
                setUpdate('downloaded');
                break;
        }
    });
    return (
        <div className="mainAppFullSize">
            <div className={styles.updateContainer}>
                <div className={styles.updateInfo}>
                    <div className={styles.updateIcon}>
                        <FontAwesomeIcon icon={faSync} />
                    </div>
                    <div className={styles.updateTitle}>
                        <h2 style={{ margin: 0, padding: 0 }}>Update</h2>
                        <div className={styles.updateProgress}>
                            <div className={styles.updateProgressUI}>&nbsp;</div>
                        </div>
                        <span style={{ fontSize: '13px', color: 'grey' }}>Terakhir dicek: kemarin</span>
                    </div>
                </div>
                <div className={styles.updateAction}>
                    <button className={styles.updateButton} onClick={checkForUpdates}>Cek Update</button>
                </div>
            </div>
            { isUpdateEvent ? <div className={styles.updateReady}>
                <h3>Update tersedia { isUpdateEvent === 'available' ? <button onClick={downloadUpdate}>update sekarang</button> : isUpdateEvent === 'downloaded' ? <button onClick={installUpdate}>install sekarang</button> : null }</h3>
            </div> : null }
        </div>
    );
}