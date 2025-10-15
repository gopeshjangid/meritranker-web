"use client";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import PostTypeChip from "../community/PostTypeChip";
import DateParser from "../DateParser";

const { projectId, dataset } = client.config();

const urlFor = (source: any) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

interface BlogCardProps extends Partial<SanityDocument> {
  imgId?: number;
}

export default function BlogCard(props: BlogCardProps) {
  const { title, excerpt, image, slug, _createdAt, category } = props;

  const postImageUrl =
    (image && urlFor(image)?.width(600).height(400).url()) ||
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

  return (
    <Link href={`/blog/${slug?.current || ""}`} className="inline h-full">
      <div className="group relative h-full rounded-xl border border-transparent hover:border hover:border-cyan-500/50 overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.20)] hover:shadow-[0_2px_15px_rgba(6,182,212,0.3)] transition-shadow duration-300 ease-in-out p-[2px]">
        <div className="bg-card dark:bg-card rounded-lg h-full overflow-hidden relative">
          {/* IMAGE */}
          <div className="relative overflow-hidden aspect-video">
            <Image
              src={postImageUrl || ""}
              alt={title || "Blog Post"}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
          </div>

          {/* CONTENT */}
          <div className="p-4 z-20 relative space-y-2">
            <div className="flex items-center justify-between text-sm whitespace-nowrap overflow-hidden">
              <span className="text-foreground/80 dark:text-foreground/80">
                <DateParser timestamp={_createdAt ?? ""} />
              </span>
              {category[0]?.title && (
                <span
                  title={category[0]?.title}
                  className="ml-2 px-3 py-[2px] rounded-full border border-primary text-primary text-xs font-medium truncate max-w-[50%] text-right"
                >
                  {category[0]?.title}
                </span>
              )}
            </div>

            <h2 className="text-lg font-bold text-foreground/80 line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h2>
            <p className="text-slate-400 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
              {excerpt}
            </p>
            <div className="pt-2">
              <span className="inline-block text-sm font-semibold text-primary group-hover:underline transition-all">
                Read more →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
