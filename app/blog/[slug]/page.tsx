import { client } from "@/sanity/client";
import { POST_QUERY } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { Metadata } from "next";
import Image from "next/image";

import PostTypeChip from "@/components/community/PostTypeChip";
import GATrackEvent from "@/components/GATrack";
import BackButton from "@/components/layout-components/BackButton";
import BlogList from "@/components/layout-components/BlogList";
import BlogSidebar from "@/components/layout-components/BlogSidebar";
import ShareButtons from "@/components/layout-components/ShareButtons";
import { PortableTextReactComponents } from "@portabletext/react";

const builder = imageUrlBuilder(client);

interface ImageBlockProps {
  value: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
    caption?: string;
  };
}

const ImageBlock: React.FC<ImageBlockProps> = ({ value }) => {
  const imageUrl = urlFor(value.asset).width(800).height(500).url() || "";
  const altText = value.alt || "Inline Blog Image";

  return (
    <figure className="my-8">
      <Image
        src={imageUrl}
        alt={altText}
        width={800}
        height={500}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-md w-full object-cover"
      />
      {value.caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
};

const components: Partial<PortableTextReactComponents> = {
  types: {
    // Map `_type: 'image'` blocks to our custom component
    image: ImageBlock,
  },
  block: {
    // Customize block styles like headings, paragraphs, etc.
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold my-6 dark:text-cyan-300 text-cyan-300">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold my-4 dark:text-cyan-300 text-cyan-300">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold my-3 dark:text-gray-800 text-gray-800">
        {children}
      </h3>
    ),
    normal: ({ children }) => <p className="my-2 leading-7">{children}</p>,
  },
  marks: {
    // For inline marks like links
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="underline text-cyan-200 hover:text-cyan-400 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};

export const revalidate = 60; // revalidate every 60 seconds

const urlFor = (source: any) => builder.image(source);

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await client.fetch(POST_QUERY, { slug: params.slug });

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post does not exist.",
    };
  }

  const postImageUrl = post.image
    ? urlFor(post.image).width(1200).height(600).url()
    : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

  return {
    title: post.title,
    description: post.excerpt || "Read more about this topic.",
    openGraph: {
      title: post.title,
      description: post.excerpt || "Read more about this topic.",
      url: `https://coupal.in/blog/${params.slug}`,
      type: "article",
      images: [
        {
          url: postImageUrl,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || "Read more about this topic.",
      images: [postImageUrl],
      creator: "@coupalofficial", // If this is your correct handle
    },
    metadataBase: new URL("https://coupal.in"),
    alternates: {
      canonical: `https://coupal.in/blog/${params.slug}`,
    },
    keywords: post.tags?.join(", ") || "blog, post, article",
    authors: [{ name: "Your Name", url: "https://coupal.in/about-us" }],
    creator: "Coupal",
    publisher: "Coupal Team",
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Fetch post data from Sanity
  const post = await client.fetch(
    POST_QUERY,
    { slug: params.slug },
    {
      next: { revalidate: 60 },
    }
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  // Main post image
  const postImageUrl = post.image
    ? urlFor(post.image).width(1200).height(600).url()
    : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

  return (
    <section className="py-[90px]">
      <div className="container grid gap-6 md:gap-[20px] grid-cols-12">
        {/* Sidebar */}
        <aside className="lg:col-span-3 col-span-12 order-2 lg:order-1 mb-8 lg:mb-0">
          <BlogSidebar />
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 col-span-12 order-1 lg:order-2">
          <div className="bg-slate-800/40 dark:bg-slate-800/40 p-6 rounded-[10px] shadow-[0_2px_15px_rgba(6,182,212,0.2)] dark:shadow-[0_2px_15px_rgba(6,182,212,0.2)] dark:text-white">
            <BackButton />

            <article className="prose max-w-none mt-4">
              {/* Featured Image */}
              {postImageUrl && (
                <div className="w-full rounded-md overflow-hidden aspect-[1/0.4] mb-4">
                  <Image
                    src={postImageUrl}
                    alt={post.title}
                    width={1200}
                    height={600}
                    className="rounded-xl w-full h-full object-cover"
                    priority
                  />
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl font-bold mb-2 dark:text-cyan-400 text-cyan-400">
                {post.title}
              </h1>

              {/* Publication and Category */}
              <div className="flex flex-wrap items-center justify-between text-sm md:text-base gap-2">
                <div>
                  <span className="font-semibold">Published:</span>{" "}
                  {new Date(post._createdAt).toLocaleDateString()}
                </div>
                {post.category && post.category.length > 0 && (
                  <div>
                    {/* <PostTypeChip text={post.category[0].title} /> */}
                    <span
                      title={post.category[0].title}
                      className="sm:ml-2 px-3 py-[2px] rounded-full border border-cyan-400 text-cyan-400 text-xs font-medium truncate max-w-[50%] text-right"
                    >
                      {post.category[0].title}
                    </span>
                  </div>
                )}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-2 space-x-2">
                  <span className="font-semibold">Tags:</span>
                  {post.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="text-cyan-400 text-sm md:text-base"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Body Content (PortableText) */}
              {post.body && (
                <PortableText
                  value={post.body}
                  components={components} // Our custom rendering config
                />
              )}

              {/* Share Buttons */}
              <div className="flex items-center gap-2 justify-end mt-6">
                <p className="font-medium m-0">Share:</p>
                <ShareButtons />
              </div>
            </article>
          </div>

          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <BlogList initialPosts={post.relatedPosts} isBlogDetails />
            </section>
          )}
        </div>
      </div>

      {/* Tracking Event (Optional) */}
      <GATrackEvent
        data={{ blogTitle: post.title }}
        title="User Visited Post Details"
      />
    </section>
  );
}
