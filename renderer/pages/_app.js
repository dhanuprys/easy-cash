import { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Toast from '../items/Toast';
import store from '../scripts/store';
import { show, close } from '../scripts/reducers/toastSlice';
import { setApplicationPorts, setApplicationSocket, setVersion, notifyClientSocket } from '../scripts/reducers/appSlice';
import '../styles/globals.css';

function GlobalToast() {
  const toastContent = useSelector((state) => state.toast.content);
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);
  const closeToast = () => {
    dispatch(close());
    setShowToast(false);
  }

  if (toastContent === null) {
    return <></>;
  }

  if (!showToast) {
    setTimeout(() => setShowToast(true), 200);
    return <></>;
  }

  setTimeout(() => {
    closeToast();
  }, 6000);

  return (
    <Toast content={toastContent} closeToast={closeToast} />
  )
}

function PortConnectivity({ pageProps }) {
  const dispatch = useDispatch();
  const connectToWSServer = () => {
    const ws = new WebSocket(`ws://localhost:${pageProps.__application_ports.wsServerPort}`);

    ws.addEventListener('open', () => {
      dispatch(setApplicationSocket(ws));

      // Meminta nomor versi
      ws.send(JSON.stringify({ action: 'current-version' }));
    });

    ws.addEventListener('message', (message) => {
      const parsedMessage = JSON.parse(message.data);
    
      // Jika kode websocket yang diterima berlabel 'version'
      // maka event dispatch umum tidak akan dipanggil
      if (parsedMessage.action === 'version') {
        dispatch(setVersion(parsedMessage.payload));
        return;
      }

      dispatch(notifyClientSocket(parsedMessage));
    });

    ws.addEventListener('error', () => {
      dispatch(setApplicationSocket(null));

      connectToWSServer();
    });

    ws.addEventListener('close', () => {
      dispatch(setApplicationSocket(null));

      connectToWSServer();
    });
  }

  useEffect(() => {
    if (pageProps.__application_ports) {
      dispatch(setApplicationPorts(pageProps.__application_ports));
  
        connectToWSServer();
    }
  })

  return "";
}

function MyApp({ Component, pageProps }) {
  // Ini adalah handler aplikasi custom yang sudah terintegrasi
  // dengan react-redux
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalToast />
      <PortConnectivity pageProps={pageProps} />
    </Provider>
  );
}

export default MyApp;
