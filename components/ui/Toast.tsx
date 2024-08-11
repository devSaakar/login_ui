// components/Toast.tsx
import { useToast } from "@/customHooks/useToast";
import React from "react";

const Toast = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`p-4 rounded shadow-lg text-white 
            ${toast.type === "success" ? "bg-green-500" : ""} 
            ${toast.type === "error" ? "bg-red-500" : ""} 
            ${toast.type === "warning" ? "bg-orange-500" : ""} 
            ${toast.type === "info" ? "bg-blue-500" : ""}`}
          onClick={() => removeToast(toast.id)}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default Toast;
