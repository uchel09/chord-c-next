import { useTransposeContext } from "@/Context/TransposeContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, RefreshCcwDot } from "lucide-react";

export function TransposeControl() {
  const { semitones, reset, decrement, increment } = useTransposeContext();
  const isUnison = semitones === 0;

  return (
    <div className="flex space-y-2 flex-col items-center absolute bg-white right-3 top-[100px]">
      <span className="text-gray-500 text-sm">Transpose</span>

      <button onClick={reset} disabled={isUnison} type="button">
        <RefreshCcwDot />
      </button>
      <button onClick={decrement} type="button">
        <Minus/>
      </button>
      <div className="text-md w-6 text-center">{semitones}</div>
      <button onClick={increment} type="button">
        <Plus/>
      </button>
    </div>
  );
}
