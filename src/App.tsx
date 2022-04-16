import Layout from './components/Layout';
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Details from './pages/Details';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<Details />} />
      </Routes>
    </Layout>
  );
};

export default App;
