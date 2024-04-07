import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Country from "./pages/Country";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/country/:code" element={<Country />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
