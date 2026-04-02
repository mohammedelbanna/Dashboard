const StatCards = () => {
  return (
    <>
      <Card
        title="Gross Revenue"
        value="$120,054.24"
        pillText="2.75%"
        trend="up"
        period="since last month"
      />
      <Card
        title="Net Revenue"
        value="$85,000.00"
        pillText="0.50%"
        trend="up"
        period="since last month"
      />
      <Card
        title="Expenses"
        value="$35,054.24"
        pillText="1.50%"
        trend="down"
        period="since last month"
      />
    </>
  );
};

export default StatCards;

const Card = ({
  title,
  value,
  pillText,
  trend,
  period,
}: {
  title?: string;
  value?: string;
  pillText?: string;
  trend?: "up" | "down";
  period?: string;
}) => {
  return (
    <div className="p-4 col-span-4 rounded border-stone-300 border ">
      <div className=" mb-2 items-start gap-2 ">
        <h3 className="text-stone-500 mb-5 text-sm block">{title}</h3>
        <p className="text-3xl mb-5 font-semibold">{value}</p>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          {pillText}
        </span>
        <span className="text-green-500 p-3 rounded-full text-xs font-medium">
          {trend === "up" ? "↑" : "↓"}
        </span>
        <span>{period}</span>
      </div>
    </div>
  );
};
