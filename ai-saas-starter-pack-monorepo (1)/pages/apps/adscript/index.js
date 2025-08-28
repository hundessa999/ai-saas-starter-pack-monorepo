
import Image from "next/image";
import Link from "next/link";
export default function AdscriptHome() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container py-16">
        <div className="flex items-center gap-4">
          <Image src="/logos/adscript.png" alt="AI Ad Script Generator" width={48} height={48} />
          <h1 className="text-3xl font-bold">AI Ad Script Generator</h1>
        </div>
        <p className="mt-2 text-gray-400">Instant multi-channel ad copy</p>
        <div className="mt-6">
          <Image src="/screenshots/adscript.png" alt="AI Ad Script Generator Dashboard" width={1200} height={720} className="rounded-xl" />
        </div>
        <div className="mt-6 flex gap-3">
          <Link href="/"><span className="btn">Back</span></Link>
          <Link href="/apps/adscript/dashboard"><span className="btn">Open Dashboard</span></Link>
        </div>
      </div>
    </main>
  )
}
