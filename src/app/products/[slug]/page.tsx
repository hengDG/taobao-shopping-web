type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Product: {slug}</h1>
      <p className="mt-2 text-muted-foreground">
        Product detail page placeholder.
      </p>
    </main>
  );
}
