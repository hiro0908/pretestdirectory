"use client";

import { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export default function TurnOrderButton() {
  const [result, setResult] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleStart = () => {
    setResult(Math.random() < 0.5 ? "先攻" : "後攻");
    setOpen(true);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleStart}>
        スタート
      </Button>
      <Snackbar
        key={result + String(open)}
        open={open}
        autoHideDuration={3000}
        onClose={(_, reason) => {
          if (reason !== "clickaway") setOpen(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="warning"
          variant="filled"
          onClose={() => setOpen(false)}
          sx={{ fontSize: "1.5rem", fontWeight: "bold", px: 4, py: 1.5 }}
        >
          あなたは{result}です!
        </Alert>
      </Snackbar>
    </div>
  );
}
