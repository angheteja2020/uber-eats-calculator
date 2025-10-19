import type { ResultProps } from "./types";

export default function Result({ result }: ResultProps) {
  if (!result) return null;

  return (
    <div className="p-4 border rounded bg-white">
      <div className="flex flex-col gap-4 text-center">
        <div>
          <p className="text-sm text-gray-600">Dólares por Milla</p>
          <p className="text-2xl font-bold">
            ${result.dolaresPorMilla.toFixed(2)}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Puntaje</p>
          <p className="text-2xl font-bold">{result.puntaje.toFixed(1)}/40</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Recomendación</p>
          <p className="text-lg font-bold">{result.recomendacion}</p>
        </div>
      </div>
    </div>
  );
}
