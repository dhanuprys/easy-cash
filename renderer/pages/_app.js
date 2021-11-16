import { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Toast from '../items/Toast';
import store from '../scripts/store';
import { show, close } from '../scripts/reducers/toastSlice';
import { setApplicationPorts, setApplicationSocket, notifyClientSocket } from '../scripts/reducers/appSlice';
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
    });

    ws.addEventListener('message', (message) => {
      dispatch(notifyClientSocket(JSON.parse(message.data)));
    });

    ws.addEventListener('error', () => {
      dispatch(setApplicationSocket(null));
    });

    ws.addEventListener('close', () => {
      dispatch(setApplicationSocket(null));
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
