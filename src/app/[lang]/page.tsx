import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

const SUPPORTED_LANGS = ['en', 'ge', 'de'];

export async function generateMetadata(): Promise<Metadata> {
  return {};
}

export default async function HomeLangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLangValue } = await params;
  const rawLang = rawLangValue?.toLowerCase();

  if (!SUPPORTED_LANGS.includes(rawLang)) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      <p style={{ padding: '2rem' }}>Navbar OK</p>
    </div>
  );
}
