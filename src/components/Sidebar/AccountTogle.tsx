import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AccountTogle = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center ">
        <img
          src="https://api.dicebear.com/9.x/notionists/svg?backgroundType=gradientLinear,solid"
          alt="avatar"
          className="size-8 rounded shrink-0 bg-violet-500"
        />
        <div className="text-start">
          <p className="text-sm font-medium">John Doe</p>
          <p className="text-xs text-stone-500">john.doe@example.com</p>
        </div>
        <div className="absolute right-2 top-1/2  text-xs">
          <FiChevronDown />
        </div>
        <div className="absolute right-2 to-1/2  text-xs">
          <FiChevronUp />
        </div>
      </button>
    </div>
  );
};

export default AccountTogle;
