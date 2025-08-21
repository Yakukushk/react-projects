import AuthInputs from "./components/Auth/AuthInputs";
import Header from "./components/Header/Header";


export default function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <main>
        <AuthInputs />
      </main>
    </div>
  );
}
