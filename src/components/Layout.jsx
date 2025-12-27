import '../styles/Layout.scss';

function Layout({ children }) {
  return (
    <div className="page-container">
      {children}
    </div>
  );
}

export default Layout;
