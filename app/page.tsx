export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          SEO for Shopify
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Grade Shopify product SEO{" "}
          <span className="text-[#58a6ff]">instantly</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Scan every product page for missing alt text, weak titles, and thin descriptions.
          Get a prioritized fix list and push improvements back to your store in one click.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Grading — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for the first scan. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Alt text audit", "Title length check", "Meta description score", "Duplicate content", "One-click fixes", "Bulk export"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$15</p>
          <p className="text-[#6e7681] text-sm mb-6">per month · unlimited products</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Full SEO audit for all products",
              "Alt text & title suggestions",
              "One-click push to Shopify",
              "Weekly re-scan & alerts",
              "CSV export of all issues",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the Shopify integration work?",
              a: "You connect your store via the Shopify Admin API using a private app token. We read your product data, analyze it, and can write improvements back — all without touching your theme."
            },
            {
              q: "Will the fixes affect my live store immediately?",
              a: "One-click fixes update your product metadata (titles, descriptions, alt text) via the API. Changes go live instantly, but you can preview every suggestion before applying."
            },
            {
              q: "Is this useful if I already use an SEO app?",
              a: "Yes. Most SEO apps focus on pages and blogs. This tool is built specifically for product catalogs — especially stores with 50+ SKUs where manual audits are impractical."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#6e7681] text-xs pb-8">
        © {new Date().getFullYear()} Shopify Product SEO Grader. All rights reserved.
      </footer>
    </main>
  );
}
