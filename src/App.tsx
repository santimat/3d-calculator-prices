import { Routes, Route } from "react-router-dom";
import { Home } from "@pages/Home.tsx";
import { Calculator } from "@components/ui/Calculator.tsx";
import { Header } from "@components/ui/Header.tsx";
import { Footer } from "@components/ui/Footer.tsx";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<Calculator />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
