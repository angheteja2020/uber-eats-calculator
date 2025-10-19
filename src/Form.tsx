import type { FormProps } from "./types";

export default function Form({
  pago,
  setPago,
  millas,
  setMillas,
  tiempo,
  setTiempo,
  onCalculate,
}: FormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onCalculate();
      }}
      className="flex flex-col gap-4 w-full"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="pago" className="font-medium">
          Pago ($)
        </label>
        <input
          id="pago"
          type="number"
          step="0.01"
          value={pago || ""}
          onChange={(e) => setPago(Number(e.target.value) || 0)}
          className="p-2 border rounded"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="millas" className="font-medium">
          Millas
        </label>
        <input
          id="millas"
          type="number"
          step="0.01"
          value={millas || ""}
          onChange={(e) => setMillas(Number(e.target.value) || 0)}
          className="p-2 border rounded"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="tiempo" className="font-medium">
          Tiempo (minutos)
        </label>
        <input
          id="tiempo"
          type="number"
          step="1"
          value={tiempo || ""}
          onChange={(e) => setTiempo(Number(e.target.value) || 0)}
          className="p-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="p-2 bg-green-600 text-white rounded font-medium hover:bg-green-700 transition"
      >
        Calcular
      </button>
    </form>
  );
}
