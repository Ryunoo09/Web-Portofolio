"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <main>
      <h1>Terjadi kesalahan</h1>
      <button type="button" onClick={reset}>
        Coba lagi
      </button>
    </main>
  );
}
