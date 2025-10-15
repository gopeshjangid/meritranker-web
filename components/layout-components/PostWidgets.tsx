"use client";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

const { projectId, dataset } = client.config();

const urlFor = (source: any) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const PostWidgetsSkeletonLoader = () => {
  return (
    <ul className="space-y-4">
      {[1, 2, 3].map((item) => (
        <li key={item} className="flex gap-3 mb-2">
          <div className="w-[20%] aspect-[1/0.6] rounded-sm bg-bg-slate-800/40 dark:bg-slate-800/40"></div>
          <div className="w-[60%] space-y-2">
            <div className="h-4 bg-slate-800/40 dark:bg-slate-800/40 rounded"></div>
            <div className="h-3 bg-slate-800/40 dark:bg-slate-800/40 rounded w-5/6"></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const PostWidgets = (props: PostWidgetsProps) => {
  const { data, widgetsTitle, loading, error } = props;

  return (
    <div className="bg-slate-800/40 rounded-[10px] p-4 shadow-[0_2px_15px_rgba(6,182,212,0.2)] mb-8">
      <h3 className="text-lg mb-4 font-medium text-cyan-400">
        {widgetsTitle}
      </h3>

      {loading ? (
        <PostWidgetsSkeletonLoader />
      ) : error ? (
        <p className="text-red-500 text-sm">{error}</p>
      ) : (
        <ul>
          {data?.map((item: any) => {
            const postImageUrl = item.image
              ? urlFor(item.image)?.width(400).height(300).url()
              : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
            return (
              <Link
                key={item._id}
                href={`/blog/${item?.slug.current || ""}`}
                className="inline"
              >
                <li className="flex gap-3 cursor-pointer mb-2">
                  <div className="w-[20%] rounded-sm aspect-[1/0.6] overflow-hidden">
                    <Image
                      height={200}
                      width={200}
                      className="w-full h-full object-cover"
                      src={postImageUrl || ""}
                      alt={item.slug.current}
                    />
                  </div>
                  <div className="w-[60%]">
                    <p className="dark:text-slate-300 text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 text-base line-clamp-2">
                      {item?.title}
                    </p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

type PostWidgetsProps = {
  data?: any;
  widgetsTitle?: string;
  loading?: boolean;
  error?: string | null;
};

export default PostWidgets;
