import '../styles/globals.css';
import Layout from '../components/Layout';
import {Fomulario} from '../components/Formulario/Formulario';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Fomulario/>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
