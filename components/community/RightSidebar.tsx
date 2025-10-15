import InsightsSection from "./InsightsSection";
import LatestSection from "./LatestSection";

const RightSidebar = () => {
  return (
    <div className="bg-white dark:bg-[#19051A] p-1 space-y-4">
      <InsightsSection />
      <LatestSection />
    </div>
  );
};

export default RightSidebar;
