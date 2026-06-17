"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error("[GlobalError] App crashed:", {
    message: error.message,
    digest: error.digest,
    stack: error.stack,
  });

  return (
    <html>
      <body>
        <div style={{ padding: "2rem", fontFamily: "monospace" }}>
          <h2>Something went wrong</h2>
          {error.digest && (
            <p>
              <strong>Digest:</strong> {error.digest}
            </p>
          )}
          <p style={{ color: "#666", fontSize: "0.85rem" }}>
            Check Vercel Function Logs for the full error stack.
          </p>
          <button onClick={reset} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
