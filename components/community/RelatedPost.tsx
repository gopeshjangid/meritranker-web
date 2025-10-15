"use client";

import {
  Eye,
  Heart,
  MessageCircleHeartIcon,
  Newspaper,
  Share2,
  Star,
} from "lucide-react";

const RelatedPost = () => {
  return (
    <div className="bg-gradient-rose-to-purple  rounded-[10px] p-4">
      <h3 className="text-lg mb-4 font-medium flex items-center">
        <Newspaper className="mr-2 text-bemingle-pink" /> Related Posts
      </h3>
      <ul className="space-y-3">
        <li className="flex items-center">
          <Heart className="mr-2 text-bemingle-purple" />
          How to make meaningful connections 💖
        </li>
        <li className="flex items-center">
          <MessageCircleHeartIcon className="mr-2 text-bemingle-purple" />
          Tips for starting engaging conversations 💬
        </li>
        <li className="flex items-center">
          <Share2 className="mr-2 text-bemingle-purple" />
          The power of sharing your story 📢
        </li>
        <li className="flex items-center">
          <Star className="mr-2 text-bemingle-purple" />
          Must-know tips to improve your profile ⭐️
        </li>
        <li className="flex items-center">
          <Eye className="mr-2 text-bemingle-purple" />
          What people notice first on your profile 👀
        </li>
        <li className="flex items-center">
          <Heart className="mr-2 text-bemingle-purple" />
          How to be authentic and stand out ❤️
        </li>
      </ul>
    </div>
  );
};

export default RelatedPost;
