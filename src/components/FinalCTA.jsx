const FinalCTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center glass-card p-10 rounded-3xl">
        <h2 className="text-3xl font-extrabold mb-4">Start Building Better Vision Habits Today.</h2>
        <p className="text-slate-300 mb-6">Join the waitlist or download the app to begin short, effective daily eye exercises.</p>

        <div className="flex justify-center gap-4">
          <a href="#" className="bg-gradient-to-r from-[#00f0d6] to-[#7ee0ff] px-6 py-3 rounded-2xl font-semibold text-black">Download App</a>
          <a href="#" className="px-6 py-3 border border-white/10 rounded-2xl text-slate-200">Join Waitlist</a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
