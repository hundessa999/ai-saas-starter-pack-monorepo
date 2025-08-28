
import Image from "next/image";
import Link from "next/link";
export default function NicheblogHome() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container py-16">
        <div className="flex items-center gap-4">
          <Image src="/logos/nicheblog.png" alt="NicheBlog AI" width={48} height={48} />
          <h1 className="text-3xl font-bold">NicheBlog AI</h1>
        </div>
        <p className="mt-2 text-gray-400">Automated niche content engine</p>
        <div className="mt-6">
          <Image src="/screenshots/nicheblog.png" alt="NicheBlog AI Dashboard" width={1200} height={720} className="rounded-xl" />
        </div>
        <div className="mt-6 flex gap-3">
          <Link href="/"><span className="btn">Back</span></Link>
          <Link href="/apps/nicheblog/dashboard"><span className="btn">Open Dashboard</span></Link>
        </div>
      </div>
    </main>
  )
}
