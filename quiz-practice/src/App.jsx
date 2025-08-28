import Header from "./components/Header";
import Quiz from "./components/Quiz";
import ContextProvider from "./provider/context.provider";

function App() {
  return (
    <ContextProvider>
      <Header />
      <main>
        <Quiz />
      </main>
    </ContextProvider>
  );
}

export default App;
