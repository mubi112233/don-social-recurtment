import type { Metadata } from "next";
import { publicLocalePathSegment, hreflangAlternates, absoluteUrl } from "@/lib/site-url";
import { Navbar } from "@/components/Navbar";
import BlogPostClient from "./BlogPostClient";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const seg = publicLocalePathSegment(lang);
  const canonical = absoluteUrl(`/${seg}/blog/${slug}`);
  const { languages } = hreflangAlternates(`blog/${slug}`);
  return { alternates: { canonical, languages } };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "de" || rawLang === "ge" ? "ge" : "en";
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BlogPostClient lang={lang} />
    </div>
  );
}
