import { About } from "../components/About";

export function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen pt-20" tabIndex={-1} aria-label="About main content">
      <section className="py-24">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center mb-24">
            <h1 className="text-6xl md:text-8xl mb-12 heading-seaglass">About</h1>
            <div className="accent-line-seaglass w-32 mx-auto mb-8"></div>
            <p className="text-xl font-montserrat text-seaglass-ink/90 max-w-4xl mx-auto leading-tight">
              Bridging realms of human cognition and digital consciousness<br/>
              Crafting experiences that transcend the ordinary
            </p>
          </div>
          <About />
        </div>
      </section>
    </main>
  );
}