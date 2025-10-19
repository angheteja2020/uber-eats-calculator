import { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import type { CalculatorState } from "./types";
import "./index.css";

export default function App() {
  const [state, setState] = useState<CalculatorState>({
    pago: 0,
    millas: 0,
    tiempo: 0,
    error: null,
    result: null,
  });

  const calculate = () => {
    if (state.pago <= 0 || state.millas <= 0 || state.tiempo <= 0) {
      setState({
        ...state,
        error: "Todos los valores deben ser mayores a 0",
        result: null,
      });
      return;
    }

    const dolaresPorMilla = state.pago / state.millas;
    const puntaje = Math.min(dolaresPorMilla * 10 + (30 - state.tiempo), 40);

    let recomendacion: string;
    if (puntaje > 25) {
      recomendacion = "¡Acepta! ✅";
    } else if (puntaje > 15) {
      recomendacion = "Considera 🤔";
    } else {
      recomendacion = "Rechaza ❌";
    }

    setState({
      ...state,
      error: null,
      result: {
        dolaresPorMilla,
        puntaje,
        recomendacion,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Calculadora Uber Eats
        </h1>

        {state.error && (
          <div className="p-4 mb-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {state.error}
          </div>
        )}

        <Form
          pago={state.pago}
          setPago={(value: React.SetStateAction<number>) =>
            setState((prev) => ({
              ...prev,
              pago: typeof value === "function" ? value(prev.pago) : value,
            }))
          }
          millas={state.millas}
          setMillas={(value: React.SetStateAction<number>) =>
            setState((prev) => ({
              ...prev,
              millas: typeof value === "function" ? value(prev.millas) : value,
            }))
          }
          tiempo={state.tiempo}
          setTiempo={(value: React.SetStateAction<number>) =>
            setState((prev) => ({
              ...prev,
              tiempo: typeof value === "function" ? value(prev.tiempo) : value,
            }))
          }
          onCalculate={calculate}
        />

        {state.result && (
          <div className="mt-6">
            <Result result={state.result} />
          </div>
        )}
      </div>
    </div>
  );
}
