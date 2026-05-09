const SiteFooter = () => {
  return (
    <footer className="py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-300">
        <div>
          <div className="font-bold text-white text-lg">NainTaara™</div>
          <div className="text-sm mt-2">Fitness App for your eyes — gamified vision wellness for modern screen life.</div>
        </div>

        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="text-sm space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="text-sm space-y-1">
            <li>Privacy Policy</li>
            <li>Medical Disclaimer</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
