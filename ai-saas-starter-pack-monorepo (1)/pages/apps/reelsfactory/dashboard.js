
import { useState } from "react";
export default function ReelsfactoryDashboard() {
  const [prompt, setPrompt] = useState("");
  const [out, setOut] = useState("");
  const [busy, setBusy] = useState(false);
  const run = async () => {
    setBusy(true);
    const r = await fetch("/api/generate", {"method":"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ prompt })});
    const data = await r.json();
    setOut(data.text || data.error || "No output");
    setBusy(false);
  };
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container py-16">
        <h1 className="text-3xl font-bold">AI Reels Factory — Dashboard</h1>
        <p className="text-gray-400 mt-2">Try the demo generator (no API key required).</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 card">
            <label className="block text-sm text-gray-300 mb-2">Prompt</label>
            <textarea className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700" rows={6} placeholder="Describe what you want..." onChange={(e)=>setPrompt(e.target.value)}></textarea>
            <button className="btn mt-3" onClick={run} disabled={busy}>{busy ? "Generating..." : "Generate (Demo)"}</button>
            <label className="block text-sm text-gray-300 mt-6 mb-2">Output</label>
            <pre className="bg-black/40 p-4 rounded-xl overflow-auto text-sm">{out}</pre>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Quick Stats</h3>
            <p className="text-gray-400 mt-2">Requests today: 12</p>
            <p className="text-gray-400">Avg tokens: 450</p>
            <p className="text-gray-400">Spend: $0 (demo)</p>
          </div>
        </div>
      </div>
    </main>
  )
}
