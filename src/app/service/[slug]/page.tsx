import { permanentRedirect } from "next/navigation";

import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export default async function ServiceAliasDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  permanentRedirect(`/services/${slug}`);
}
