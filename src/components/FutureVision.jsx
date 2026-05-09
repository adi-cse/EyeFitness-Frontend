const FutureVision = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-extrabold mb-4">The Future of Digital Eye Wellness</h3>
        <p className="text-slate-300 max-w-3xl mx-auto mb-8">AI eye tracking, personalized therapy, posture detection and camera-based analysis — powered by smart recommendations and school partnerships.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl">
            <div className="font-semibold mb-2">AI Eye Tracking</div>
            <div className="text-sm text-slate-300">Real-time gaze analytics for adaptive exercises.</div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="font-semibold mb-2">Personalized Therapy</div>
            <div className="text-sm text-slate-300">Tailored daily plans based on performance and behavior.</div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="font-semibold mb-2">School Partnerships</div>
            <div className="text-sm text-slate-300">Bring preventive programs to classrooms at scale.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
