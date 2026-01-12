import '../styles/Layout.scss';

function Layout({
  children,
  className = "",
  id,
  as: Component = "section",
  containerClasses = "",
}) {
  return (
    <Component id={id} className={className}>
      <div className="section-layout">
        <div className={`${id ? id + "__" : ""}container ${containerClasses}`}>
          {children}
        </div>
      </div>
    </Component>
  );
}

export default Layout;

