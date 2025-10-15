import { cn } from "@/lib/utils";

interface DateParserProps {
  timestamp: string;
  className?: string;
}

const DateParser = ({ timestamp, className }: DateParserProps) => {
  const getTimeAgo = () => {
    // const date = new Date(timestamp);
    const date = new Date(
      new Date(timestamp).toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    );
    const timestampMs = date.getTime();
    const now = Date.now();
    const diffSeconds = Math.floor((now - timestampMs) / 1000);

    // Define time units in seconds
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;

    // Parsing logic
    if (diffSeconds < 10) {
      return "just now";
    } else if (diffSeconds < minute) {
      return `${diffSeconds} seconds ago`;
    } else if (diffSeconds < 2 * minute) {
      return "1 minute ago";
    } else if (diffSeconds < hour) {
      const minutes = Math.floor(diffSeconds / minute);
      return `${minutes} minutes ago`;
    } else if (diffSeconds < 2 * hour) {
      return "1 hour ago";
    } else if (diffSeconds < day) {
      const hours = Math.floor(diffSeconds / hour);
      return `${hours} hours ago`;
    } else if (diffSeconds < 2 * day) {
      return "1 day ago";
    } else if (diffSeconds < week) {
      const days = Math.floor(diffSeconds / day);
      return `${days} days ago`;
    } else if (diffSeconds < 2 * week) {
      return "1 week ago";
    } else if (diffSeconds < month) {
      const weeks = Math.floor(diffSeconds / week);
      return `${weeks} weeks ago`;
    } else if (diffSeconds < 2 * month) {
      return "1 month ago";
    } else if (diffSeconds < year) {
      const months = Math.floor(diffSeconds / month);
      return `${months} months ago`;
    } else if (diffSeconds < 2 * year) {
      return "1 year ago";
    } else {
      const years = Math.floor(diffSeconds / year);
      return `${years} years ago`;
    }
  };

  return (
    <span className={cn("text-xs text-gray-500 dark:text-gray-400", className)}>
      {getTimeAgo()}
    </span>
  );
};

export default DateParser;
