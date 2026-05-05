import { Routes, Route } from "react-router-dom";
import { HomePage } from "@pages/Home.tsx";
import { CalculatorPage } from "@pages/Calculator.tsx";
import { Footer } from "@components/ui/Footer.tsx";
function App() {
  return (
    <>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculadora" element={<CalculatorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
