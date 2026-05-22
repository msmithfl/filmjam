import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react';

// Strict typing for our Film Jam objects
interface FilmJam {
  id: number;
  title: string;
  theme: string;
  timeRemaining: string;
  submissions: number;
  bgGradient: string;
  tag: string;
}

const ACTIVE_JAMS: FilmJam[] = [
  {
    id: 1,
    title: "The 48-Hour Sci-Fi Jam",
    theme: "Parallel Universes",
    timeRemaining: "1d 14h left",
    submissions: 42,
    bgGradient: "from-purple-900 to-indigo-950",
    tag: "Sci-Fi"
  },
  {
    id: 2,
    title: "Micro-Budget Horror Challenge",
    theme: "One Room, No Dialog",
    timeRemaining: "4d 08h left",
    submissions: 19,
    bgGradient: "from-red-950 to-stone-900",
    tag: "Horror"
  },
  {
    id: 3,
    title: "Documentary Short Jam",
    theme: "Unsung Local Heroes",
    timeRemaining: "12d 22h left",
    submissions: 8,
    bgGradient: "from-teal-900 to-emerald-950",
    tag: "Docu"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-red-500 selection:text-white">
      
      {/* Navigation Bar */}
      <nav className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tighter text-red-500 uppercase">FilmJam</span>
            <span className="bg-neutral-800 text-neutral-400 text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded">Beta</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              Explore Jams
            </button>
            
            {/* Clerk Sign-Out Controls */}
            <Show when="signed-out">
              <div className="flex items-center gap-3">
                <SignInButton>
                  <button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium px-4 py-2 rounded-lg border border-neutral-700 transition-all">
                    Get Started
                  </button>
                </SignUpButton>
              </div>
            </Show>
            
            {/* Clerk Sign-In Controls */}
            <Show when="signed-in">
              <div className="flex items-center gap-4">
                <button className="text-xs bg-red-600/10 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-md font-semibold hover:bg-red-600/20 transition-all">
                  + Host a Jam
                </button>
                <UserButton />
              </div>
            </Show>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1 text-xs font-medium text-red-400 mb-6">
          🎬 No Entry Fees. No Selection Committees. Just Creation.
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
          The open community playground for <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-400">indie filmmakers</span>
        </h1>
        <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
          Join community-hosted film challenges. Upload your short film to YouTube, drop the link, get peer feedback, and vote on community favorites. 100% free to enter.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Main Call to Action Hooks linked to Clerk */}
          <Show when="signed-out">
            <SignUpButton>
              <button className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-600/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-base">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1C6.12 1 1.16 5.94 1.16 12s4.96 11 11.08 11c6.39 0 10.63-4.5 10.63-10.82 0-.73-.08-1.285-.173-1.895H12.24z"/>
                </svg>
                Join via Google Account
              </button>
            </SignUpButton>
          </Show>
          
          <Show when="signed-in">
            <button className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-600/20 transition-all transform hover:-translate-y-0.5 text-base">
              Go to Creator Dashboard
            </button>
          </Show>

          <button className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-medium px-8 py-4 rounded-xl border border-neutral-800 transition-colors">
            Browse Active Jams
          </button>
        </div>
      </header>

      {/* 3-Step Functional Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-y border-neutral-900 bg-neutral-900/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-red-500 shrink-0">1</div>
            <div>
              <h3 className="font-bold text-base mb-1">Upload to YouTube</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">Keep your film unlisted or public. YouTube takes care of video encoding and global hosting infrastructure.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-red-500 shrink-0">2</div>
            <div>
              <h3 className="font-bold text-base mb-1">Submit to a Jam</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">Connect your Google account and submit your video natively to any live community challenge with zero entry fees.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-red-500 shrink-0">3</div>
            <div>
              <h3 className="font-bold text-base mb-1">Vote & Build Community</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">Rate peer films on category sliders. Gain exposure, build your indie network, and gather unfiltered feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Jams Showcase Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-black tracking-tight">Active Community Jams</h2>
            <p className="text-sm text-neutral-400 mt-1">Jump into a challenge, respect constraints, and start shooting.</p>
          </div>
          <button className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors">
            View All Jams →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVE_JAMS.map((jam) => (
            <div 
              key={jam.id} 
              className="bg-neutral-900 border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all flex flex-col group cursor-pointer"
            >
              <div className={`h-36 bg-linear-to-br ${jam.bgGradient} p-4 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute inset-0 bg-neutral-950/20 backdrop-blur-[1px] group-hover:opacity-0 transition-opacity" />
                <span className="self-start relative z-10 bg-neutral-950/60 backdrop-blur-md text-neutral-300 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border border-neutral-800">
                  {jam.tag}
                </span>
                <span className="self-end relative z-10 bg-red-500 text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md animate-pulse">
                  {jam.timeRemaining}
                </span>
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-red-400 transition-colors line-clamp-1">
                    {jam.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1.5 flex items-center gap-1.5">
                    <span className="text-neutral-500 font-medium">Theme:</span> 
                    <span className="text-neutral-300 font-semibold italic">"{jam.theme}"</span>
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-medium text-neutral-400">
                    {jam.submissions} {jam.submissions === 1 ? 'Submission' : 'Submissions'}
                  </span>
                  <button className="text-red-400 hover:text-red-300 font-semibold transition-colors">
                    View Jam →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-900/50 backdrop-blur-md py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-neutral-500">
          &copy; 2024 FilmJam. All rights reserved. Built with ❤️ for indie filmmakers.
        </div>
      </footer>
    </div>
  );
}