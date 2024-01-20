import "./App.css";
import NormalForm from "./components/NormalForm";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto my-0 px-4">
        <h1 className="text-4xl text-center">Reusable Components</h1>
        <div className="mt-4">
          <NormalForm />
        </div>
      </div>
    </>
  );
}

export default App;
