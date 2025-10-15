import React from "react";

interface PostTypeChipProps {
  text: string | null | undefined;
}

const PostTypeChip: React.FC<PostTypeChipProps> = ({ text }) => {
  return (
    <span className="gradient-border px-2 rounded-full text-xs ml-2">
      {text}
    </span>
  );
};

export default PostTypeChip;
