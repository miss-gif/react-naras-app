import style from "./Layout.module.css";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const nav = useNavigate();

  const onClickHeader = () => {
    nav("/");
  };

  return (
    <div className="Layout">
      <header onClick={onClickHeader} className={style.header}>
        <h1>NARAS</h1>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
};

export default Layout;
