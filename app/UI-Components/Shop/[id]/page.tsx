"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function BlogDetailsContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return <div>{id}</div>;
}

export default function BlogDetails() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogDetailsContent />
    </Suspense>
  );
}