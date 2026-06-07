"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { fetchBlog } from "@/lib/api";
import { normalizeLanguage } from "@/lib/api";
import BlogPostClient from "./BlogPostClient";

interface BlogPost {
  blogId: string | number;
  id?: number;
  slug?: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

function findPost(posts: BlogPost[], slug: string): BlogPost | null {
  // 1. Match by blogId string
  const byBlogId = posts.find((p) => String(p.blogId) === slug);
  if (byBlogId) return byBlogId;

  // 2. Match by slug field
  const bySlug = posts.find((p) => p.slug === slug);
  if (bySlug) return bySlug;

  // 3. Fallback: slugified title
  const slugify = (t: string) =>
    t.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
  return posts.find((p) => slugify(p.title) === slug) ?? null;
}

export default function BlogPostFetcher({ slug, lang }: { slug: string; lang: string }) {
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog(lang).then((data) => {
      if (!data?.blogs?.length) { router.replace("/not-found"); return; }
      const found = findPost(data.blogs as BlogPost[], slug);
      if (!found) { router.replace("/not-found"); return; }
      setPost(found);
      setLoading(false);
    }).catch(() => { router.replace("/not-found"); });
  }, [slug, lang]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return <BlogPostClient post={post!} lang={lang} />;
}
