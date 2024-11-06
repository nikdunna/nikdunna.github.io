import React, { useState } from "react";
import "../index.css";
import { Tooltip } from "@mui/material";

export default function Footer() {
  return (
    <div className="flex w-96 h-24 accent-bg m-4 rounded-md items-center justify-center text-slate-600">
      &copy; Nikhil Dunna 2024
    </div>
  );
}
