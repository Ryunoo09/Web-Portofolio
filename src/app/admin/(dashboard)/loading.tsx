export default function AdminLoading() {
  return (
    <div className="space-y-6" aria-busy="true">
      <div className="space-y-2">
        <div className="bg-muted h-8 w-48 animate-pulse rounded-md" />
        <div className="bg-muted h-4 w-64 max-w-full animate-pulse rounded-md" />
      </div>
      <div className="bg-muted h-64 animate-pulse rounded-xl" />
      <span className="sr-only">Memuat halaman admin…</span>
    </div>
  );
}
