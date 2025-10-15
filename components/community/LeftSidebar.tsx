import TrendingSection from "./TrendingSection";
//import Hashtags from '../layout-components/Hashtags';

const LeftSidebar = () => {
  return (
    <div className="bg-white dark:bg-[#19051A] p-1  space-y-4">
      <TrendingSection />
      {/* <Hashtags /> */}
    </div>
  );
};

export default LeftSidebar;
