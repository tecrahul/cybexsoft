import { permanentRedirect } from "next/navigation";

export default async function ServiceAliasDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  permanentRedirect(`/services/${slug}`);
}
