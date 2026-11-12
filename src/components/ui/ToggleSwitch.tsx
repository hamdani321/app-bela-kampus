import { useState } from "react";

interface ToggleSwitchProps {
  OnSwitch: (isOn: boolean) => void;
}

export default function ToggleSwitch({ OnSwitch }: ToggleSwitchProps) {
  const [isOn, setIsOn] = useState(false);

  const handleSwitch = () => {
    const newState = !isOn;
    setIsOn(newState);
    OnSwitch(newState);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={isOn}
        onClick={handleSwitch}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-300 ${
          isOn ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-300 ${
            isOn ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}
