"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

const GATrackEvent = ({ title, data }: { title: string; data: Object }) => {
  useEffect(() => {
    sendGAEvent("event", title ?? "User visited the page", data);
  }, [title, data]);
  return null;
};

export default GATrackEvent;
