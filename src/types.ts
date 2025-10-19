export interface CalculatorState {
  pago: number;
  millas: number;
  tiempo: number;
  error: string | null;
  result: {
    dolaresPorMilla: number;
    puntaje: number;
    recomendacion: string;
  } | null;
}

export interface FormProps {
  pago: number;
  setPago: React.Dispatch<React.SetStateAction<number>>;
  millas: number;
  setMillas: React.Dispatch<React.SetStateAction<number>>;
  tiempo: number;
  setTiempo: React.Dispatch<React.SetStateAction<number>>;
  onCalculate: () => void;
}

export interface ResultProps {
  result: {
    dolaresPorMilla: number;
    puntaje: number;
    recomendacion: string;
  } | null;
}
