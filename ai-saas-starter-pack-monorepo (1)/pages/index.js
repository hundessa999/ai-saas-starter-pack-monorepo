
import Image from "next/image";
import Link from "next/link";

const apps = [
  { slug: "sociaboost", name: "SociaBoost AI", desc: "AI-powered social media growth automation", logo: "/logos/sociaboost.png", screenshot: "/screenshots/sociaboost.png" },
  { slug: "storeboost", name: "StoreBoost AI", desc: "AI conversion optimization for eCommerce", logo: "/logos/storeboost.png", screenshot: "/screenshots/storeboost.png" },
  { slug: "autoprompt", name: "AutoPrompt AI", desc: "Automated prompt workflows & templates", logo: "/logos/autoprompt.png", screenshot: "/screenshots/autoprompt.png" },
  { slug: "adscript", name: "AI Ad Script Generator", desc: "Instant multi-channel ad copy", logo: "/logos/adscript.png", screenshot: "/screenshots/adscript.png" },
  { slug: "nicheblog", name: "NicheBlog AI", desc: "Automated niche content engine", logo: "/logos/nicheblog.png", screenshot: "/screenshots/nicheblog.png" },
  { slug: "reelsfactory", name: "AI Reels Factory", desc: "AI short-form video generator", logo: "/logos/reelsfactory.png", screenshot: "/screenshots/reelsfactory.png" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900">
      <div className="container py-16">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">AI SaaS Starter Pack</h1>
          <a href="https://vercel.com/new" target="_blank" className="btn">Deploy to Vercel</a>
        </header>
        <section className="mt-10 text-gray-300 max-w-3xl">
          <h2 className="text-5xl font-extrabold leading-tight">6 Ready-to-Flip AI Apps</h2>
          <p className="mt-4 text-lg">Each app includes a landing page, dark dashboard, and demo API. Plug your key later.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {apps.map((app) => (
            <div key={app.slug} className="card hover:scale-105 transition">
              <div className="flex items-center gap-3 mb-4">
                <Image src={app.logo} alt={app.name} width={40} height={40} />
                <div>
                  <div className="text-xl font-semibold">{app.name}</div>
                  <div className="text-sm text-gray-400">{app.desc}</div>
                </div>
              </div>
              <Image src={app.screenshot} alt={app.name} width={1200} height={720} className="rounded-lg" />
              <Link href={`/apps/${app.slug}`} className="btn w-full mt-4 text-center">Open App</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
