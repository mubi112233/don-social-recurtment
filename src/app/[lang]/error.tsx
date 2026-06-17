"use client";

import { useEffect } from "react";

export default function LangError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[LangError] Server Component crashed:", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
  }, [error]);

  return (
    <div style={{ padding: "2rem", fontFamily: "monospace" }}>
      <h2>Page failed to load</h2>
      {error.digest && (
        <p>
          <strong>Error digest:</strong> <code>{error.digest}</code>
        </p>
      )}
      <p style={{ color: "#666", fontSize: "0.85rem" }}>
        Open your browser console or Vercel Function Logs and search for this digest.
      </p>
      <button onClick={reset} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
        Try again
      </button>
    </div>
  );
}
