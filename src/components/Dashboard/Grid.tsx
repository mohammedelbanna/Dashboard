import { FiEye } from "react-icons/fi";
import ActivityGraph from "./ActivityGraph";
import RadarCharts from "./RadarCharts";
import StatCards from "./StatCards";
import RecentTransaction from "./RecentTransaction";

const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12 auto-1fr">
      <StatCards />
      <ActivityGraph />
      <div className="col-span-4 overflow-hidden rounded border border-stone-300 h-full">
        <h3 className="p-4 flex items-center gap-1.5 font-medium">
          <FiEye /> Users
        </h3>
        <RadarCharts />
      </div>
      <div  className="col-span-12 p-4 rounded border border-stone-300">
        <RecentTransaction />
      </div>
    </div>
  );
};

export default Grid;
