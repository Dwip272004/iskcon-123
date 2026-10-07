import { ScriptureIcon } from "@/components/devotional-art";
import { OrnamentDivider } from "@/components/ornaments";

/**
 * Promotional banner inviting visitors to sign up for the daily thought-of-
 * the-day email and the spiritual e-course, hosted externally at
 * joincourse.com. Dropped on the pages where visitors are most likely to be
 * ready to go deeper: Home, Visit, Get Involved, and Contact.
 */
export default function JoinCourseBanner() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 pattern-dots text-white/[0.05]" aria-hidden />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 relative text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-gold-light">
          <ScriptureIcon className="w-7 h-7" />
        </span>
        <p className="mt-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">
          Grow Your Practice
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-balance">
          Join Our Courses
        </h2>
        <p className="mt-4 text-white/85 leading-relaxed max-w-xl mx-auto">
          Sign up for our daily thought-of-the-day and spiritual e-course.
        </p>
        <p className="mt-2 text-sm text-white/60 leading-relaxed max-w-xl mx-auto">
          A short, free lesson in your inbox each day — simple wisdom from the
          Bhagavad-gita to help you start every morning with Krishna
          consciousness.
        </p>
        <OrnamentDivider center tone="white" className="mt-6" />
        <div className="mt-6">
          <a
            href="http://joincourse.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-white hover:bg-gold-light transition-colors shadow-sm"
          >
            Sign Up for Free
          </a>
        </div>
      </div>
    </section>
  );
}
