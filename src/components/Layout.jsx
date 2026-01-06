import '../styles/Layout.scss';

function Layout({
  children,
  className = "",
  id,
  as: Component = "section",
}) {
  return (
    <Component id={id}>
      <div className={`section-layout ${className}`}>
        {children}
      </div>
    </Component>
  );
}

export default Layout;

