import { Header } from "./components/ui/Header";
import { PrintList } from "./components/ui/PrintList";
import { Searcher } from "./components/ui/Searcher";

function App() {
  return (
    <>
      <Header />
      <hr />
      <main className="my-8 max-w-[85%] mx-auto flex flex-col gap-8">
        <Searcher />
        <PrintList />
      </main>
    </>
  );
}

export default App;
