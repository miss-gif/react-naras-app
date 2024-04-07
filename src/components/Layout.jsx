import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <header className={style.header}>
        <h1>NARAS</h1>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
};

export default Layout;
