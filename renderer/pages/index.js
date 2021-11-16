import BaseLayout from '../components/base/BaseLayout';

export async function getServerSideProps() {
  const fs = require('fs/promises');
  const electronIsDev = require('electron-is-dev');
  const { join: pathJoin } = require('path');
  let ports = {};
  let portsPath = pathJoin(__dirname, '../../../../../../ports.json');
  if (electronIsDev) {
    portsPath = pathJoin(__dirname, '../ports.json');
  }

  try {
    ports = JSON.parse((await fs.readFile(portsPath)).toString());
  } catch (e) {
    console.log('Client error');
    throw e;
  }

  return {
    props: {
      __application_ports: ports
    }
  }
}

export default function Home() {
  return <BaseLayout />;
}
