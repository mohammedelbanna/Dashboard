import { FiDollarSign } from "react-icons/fi";

const RecentTransaction = () => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiDollarSign /> Recent Transactions
        </h3>
        <button className="text-blue-500 hover:text-blue-700">View All</button>
      </div>
      <table className="w-full table-auto">
        <TableHead />
        <tbody>
          <tr className="text-sm">
            <td className="p-1.5">#12345</td>
            <td className="p-1.5">SKU-001</td>
            <td className="p-1.5">2024-06-01</td>
            <td className="p-1.5">$100.00</td>
          </tr>
          <tr className="text-sm">
            <td className="p-1.5">#12346</td>
            <td className="p-1.5">SKU-002</td>
            <td className="p-1.5">2024-06-02</td>
            <td className="p-1.5">$150.00</td>
          </tr>
          <tr className="text-sm">
            <td className="p-1.5">#12347</td>
            <td className="p-1.5">SKU-003</td>
            <td className="p-1.5">2024-06-03</td>
            <td className="p-1.5">$200.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransaction;

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1.5">Customer ID</th>
        <th className="text-start p-1.5">SKU</th>
        <th className="text-start p-1.5">Date</th>
        <th className="text-start p-1.5">Price</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};
