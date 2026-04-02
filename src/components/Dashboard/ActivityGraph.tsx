import { FiUser } from "react-icons/fi"
import Graph from "./Graph"


const ActivityGraph = () => {
  return (
    <div className="col-span-8 overflow-hidden rounded border border-stone-300">
        <div className="p-4">
            <h3 className="flex items-center gap-1.5 font-medium">
                <FiUser/> Activity
            </h3>
            <div className="mt-4 w-full">
              <Graph />
            </div>
        </div>
       
    </div>
  )
}

export default ActivityGraph