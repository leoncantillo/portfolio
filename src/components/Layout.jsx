import '../styles/Layout.scss';

function Layout({
  children,
  className = "",
  id,
  as: Component = "section",
}) {
  return (
    <Component id={id} className={`section-layout ${className}`}>
      {children}
    </Component>
  );
}

export default Layout;

