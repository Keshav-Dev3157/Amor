import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="relative min-h-screen maroon-gradient overflow-hidden">
      {/* Hero Sparkle */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-pink-soul pointer-events-none" />

      <Timeline />

      <footer className="py-10 text-center text-gray-400 text-sm font-medium">
        Made with ❤️ for you.
      </footer>
    </div>
  );
}
