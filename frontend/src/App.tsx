import { Routes, Route } from "react-router-dom";

import { HomePage } from "@pages/Home";
import { CalculatorPage } from "@pages/Calculator";
import { Footer } from "@components/ui/Footer";

function App() {
  return (
    <>
      <hr />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/calculadora" element={<CalculatorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
