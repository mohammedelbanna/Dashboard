

const Plan = () => {
  return (
    <div className="bg-stone-200 mt-4 rounded p-4 text-sm">
        <h3 className="font-medium mb-2">Your Plan</h3> 
        <p className="text-stone-600">You are currently on the <span className="font-semibold text-stone-900">Pro Plan</span>. Your next billing date is <span className="font-semibold text-stone-900">15 Apr 2024</span>.</p>
        <button className="mt-4 w-full bg-violet-500 text-white py-2 rounded hover:bg-violet-600 transition-colors">Upgrade Plan</button>
    </div>
  )
}

export default Plan