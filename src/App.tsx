import { Header } from "@components/ui/Header.tsx";
import { Footer } from "@components/ui/Footer.tsx";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {/* Your main content goes here */}
          <p>the main content will be positioned here</p>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
