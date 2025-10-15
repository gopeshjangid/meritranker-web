"use client";
import { useDataContext } from "@/lib/context/dataProvider";
import { ChartSpline } from "lucide-react";
const InsightsSection = () => {
  // const { analytics } = useDataContext();

  return (
    <div className="bg-gradient-purple-to-rose  rounded-[10px] p-4">
      <h3 className="text-lg mb-4 font-medium flex items-center">
        <ChartSpline className="mr-2 text-bemingle-pink" /> Insights
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#BF28C31A] p-3 rounded-lg text-center">
          <h4 className="text-xs mb-2">Total Post</h4>
          <p className="text-2xl font-semibold text-bemingle-purple">
            {/* {analytics.totalPosts || 0} */}
          </p>
        </div>
        <div className="bg-[#BF28C31A] p-3 rounded-lg text-center">
          <h4 className="text-xs mb-2">Polls conducted</h4>
          <p className="text-2xl font-semibold text-bemingle-purple">
            {/* {analytics.totalPolls || 0} */}
          </p>
        </div>
        <div className="bg-[#BF28C31A] p-3 rounded-lg text-center">
          <h4 className="text-xs mb-2">Critiques</h4>
          <p className="text-2xl font-semibold text-bemingle-purple">
            {/* {analytics.totalEngagement || 0} */}
          </p>
        </div>
        <div className="bg-[#BF28C31A] p-3 rounded-lg text-center">
          <h4 className="text-xs mb-2">People</h4>
          <p className="text-2xl font-semibold text-bemingle-purple">
            {/* {analytics.totalUsers || 0} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
