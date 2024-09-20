"use client";

import { ChevronLeft } from "lucide-react";
import React from "react";

export default function BackButton() {
  function handleGoBack() {
    window.history.back();
  }

  return (
    <button className="flex items-center text-gray-500 text-sm -ms-2 transition-colors hover:text-gray-700" onClick={handleGoBack}>
      <ChevronLeft /> Kembali
    </button>
  );
}
