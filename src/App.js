import Background from "./components/Background";
import Calculator from "./components/Calculator";
import EvaluationProvider from "./contexts/Evaluation";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Background />
        <div className="App">
          <EvaluationProvider>
            <Calculator />
          </EvaluationProvider>
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
