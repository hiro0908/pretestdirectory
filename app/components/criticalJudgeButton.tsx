"use client";

import { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export default function CriticalJudgeButton() {
  const [critical, setCritical] = useState(false);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleJudge = () => {
    setCritical(Math.random() < 1 / 6);
    setCount((c) => c + 1);
    setOpen(true);
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleJudge}>
        ジャッジ
      </Button>
      <Snackbar
        key={count}
        open={open}
        autoHideDuration={3000}
        onClose={(_, reason) => {
          if (reason !== "clickaway") setOpen(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={critical ? "error" : "info"}
          variant="filled"
          onClose={() => setOpen(false)}
          sx={{ fontSize: "1.5rem", fontWeight: "bold", px: 4, py: 1.5 }}
        >
          {critical ? "クリティカル!" : "攻撃が当たった!"}
        </Alert>
      </Snackbar>
    </div>
  );
}
