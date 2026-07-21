import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import '../styles/NotFound_404.scss';

export default function NotFound_404() {
  return (
    <Layout as="section" className="not-found-404">
      <h2>404 Página no encontrada</h2>
      <p>La página que buscas no existe o fue movida.</p>
      <br />
      <Link to="/" className="button">
        Volver a la página principal
      </Link>
    </Layout>
  );
}