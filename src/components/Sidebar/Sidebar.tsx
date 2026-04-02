import AccountTogle from "./AccountTogle"
import Plan from "./Plan"
import RouteSelect from "./RouteSelect"
import Search from "./Search"


const Sidebar = () => {
  return (
    <div>
        <div className="overflow-y-auto sticky top-4 h-[calc(85vh-32px-48px)]">
            <AccountTogle />
            <Search />
            <RouteSelect/>
        </div>

        <Plan/>
    </div>
  )
}

export default Sidebar