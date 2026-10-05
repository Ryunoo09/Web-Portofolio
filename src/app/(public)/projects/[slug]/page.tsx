type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  return (
    <main>
      <h1>Detail Proyek</h1>
      <p>Slug: {slug}</p>
      <p>TODO: implementasikan halaman ini (generateMetadata, generateStaticParams, JSON-LD).</p>
    </main>
  );
}
