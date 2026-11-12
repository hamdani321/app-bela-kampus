import { Info, CheckCircle, AlertTriangle, AlertCircle, X } from "lucide-react";

import { ReactNode, useState } from "react";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertProps {
  type?: AlertType;
  title: string;
  children: ReactNode;
  dismissible?: boolean;
}

const variants = {
  success: {
    container: "bg-green-50 border-green-200 text-green-800",
    icon: "text-green-600",
    Icon: CheckCircle,
  },
  error: {
    container: "bg-red-50 border-red-200 text-red-800",
    icon: "text-red-600",
    Icon: AlertCircle,
  },
  warning: {
    container: "bg-amber-50 border-amber-200 text-amber-800",
    icon: "text-amber-600",
    Icon: AlertTriangle,
  },
  info: {
    container: "bg-blue-50 border-blue-200 text-blue-800",
    icon: "text-blue-600",
    Icon: Info,
  },
};

export default function Alert({
  type = "info",
  title,
  children,
  dismissible = true,
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  const variant = variants[type];
  const Icon = variant.Icon;

  if (!visible) return null;

  return (
    <div
      role="alert"
      className={`flex items-start gap-3 rounded-xl border p-4 ${variant.container}`}
    >
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${variant.icon}`} />

      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold">{title}</h4>

        <div className="mt-1 text-sm opacity-90">{children}</div>
      </div>

      {dismissible && (
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="rounded-md p-1 opacity-60 transition hover:bg-black/5 hover:opacity-100"
          aria-label="Tutup alert"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
