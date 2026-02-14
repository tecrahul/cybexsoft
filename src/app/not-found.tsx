import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <section className="section-padding">
      <div className="mx-auto w-full max-w-none px-4 text-center sm:px-6 lg:px-10">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you requested does not exist or may have moved.
        </p>
        <Link href="/" className="mt-8 inline-block">
          <Button className="rounded-full px-6">Back to Home</Button>
        </Link>
      </div>
    </section>
  );
}
