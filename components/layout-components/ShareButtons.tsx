"use client";
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

interface ShareButtonsProps {
  slug?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ slug }) => {
  const shareUrl = "#"; // URL to share
  const title = "Share now"; // Share title
  return (
    <div className="flex gap-4 w-full share-buttons">
      {/* Facebook */}
      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon size={36} round className="bg-[#D9215E] rounded-3xl" />
      </FacebookShareButton>

      {/* Twitter */}
      {/* <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={36} round className="bg-[#D9215E] rounded-3xl" />
      </TwitterShareButton> */}

      {/* LinkedIn */}
      <LinkedinShareButton url={shareUrl} title={title}>
        <LinkedinIcon size={36} round className="bg-[#D9215E] rounded-3xl" />
      </LinkedinShareButton>

      {/* WhatsApp */}
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={36} round className="bg-[#D9215E] rounded-3xl" />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;
