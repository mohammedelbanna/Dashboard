import { Routes, Route } from "react-router-dom"
import TopBar from "./TopBar"
import Grid from "./Grid"

const Home = () => (
  <div className="">
    <TopBar/>
    <Grid/>
  </div>
)

const Team = () => (
  <div className="space-y-4">
    <h1 className="text-3xl font-semibold">Team</h1>
    <p className="max-w-2xl text-stone-600">
      This section shows your team overview, member roles, and collaboration status.
    </p>
    <div className="rounded-3xl border border-stone-200 bg-stone-50 p-4">
      <h2 className="text-lg font-semibold">Team members</h2>
      <ul className="mt-3 space-y-2 text-sm text-stone-700">
        <li>• Sarah Ahmed — Product Lead</li>
        <li>• Omar Tarek — Engineering</li>
        <li>• Lina Youssef — Design</li>
      </ul>
    </div>
  </div>
)

const Invoices = () => (
  <div className="space-y-4">
    <h1 className="text-3xl font-semibold">Invoices</h1>
    <p className="max-w-2xl text-stone-600">
      Review recent invoices, payment status, and upcoming billing cycles in this panel.
    </p>
    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-50">
      <div className="grid gap-3 p-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-sm text-stone-500">Unpaid</p>
          <p className="mt-2 text-2xl font-semibold text-stone-900">3</p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-sm text-stone-500">Paid this month</p>
          <p className="mt-2 text-2xl font-semibold text-stone-900">12</p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-sm text-stone-500">Next due</p>
          <p className="mt-2 text-2xl font-semibold text-stone-900">15 Apr</p>
        </div>
      </div>
    </div>
  </div>
)

const Integration = () => (
  <div className="space-y-4">
    <h1 className="text-3xl font-semibold">Integration</h1>
    <p className="max-w-2xl text-stone-600">
      Here you can monitor connected services, upcoming syncs, and API health status.
    </p>
    <div className="rounded-3xl border border-stone-200 bg-stone-50 p-4">
      <h2 className="text-lg font-semibold">Connected services</h2>
      <ul className="mt-3 space-y-2 text-sm text-stone-700">
        <li>• Slack — Active</li>
        <li>• Stripe — Connected</li>
        <li>• Google Analytics — Sync scheduled</li>
      </ul>
    </div>
  </div>
)

const Pricing = () => (
  <div className="space-y-4">
    <h1 className="text-3xl font-semibold">Pricing</h1>
    <p className="max-w-2xl text-stone-600">
      Compare plans, billing options, and upgrade recommendations from this page.
    </p>
    <div className="grid gap-4 sm:grid-cols-3">
      {[
        { title: "Starter", price: "Free", description: "Basic features for small teams." },
        { title: "Growth", price: "$29/mo", description: "Advanced tools for growing businesses." },
        { title: "Enterprise", price: "Contact", description: "Custom solution for large organizations." },
      ].map((plan) => (
        <div key={plan.title} className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">{plan.title}</h2>
          <p className="mt-3 text-3xl font-bold text-stone-900">{plan.price}</p>
          <p className="mt-3 text-sm text-stone-600">{plan.description}</p>
        </div>
      ))}
    </div>
  </div>
)

const NotFound = () => (
  <div className="space-y-3">
    <h1 className="text-3xl font-semibold">Page not found</h1>
    <p className="text-stone-600">The requested page does not exist. Use the sidebar or quick actions to navigate.</p>
  </div>
)

export default function Dashboard() {
  return (
    <div className="flex-1 p-6 bg-white h-full overflow-auto rounded-3xl shadow-sm">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
