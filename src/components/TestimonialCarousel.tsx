import { useState, useEffect } from 'react';
import { testimonials } from '../data/content';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-3xl mx-auto text-center">
      {/* Grid stack: all items occupy the same cell so the tallest sets the height */}
      <div className="grid">
        {testimonials.map((t, i) => (
          <blockquote
            key={i}
            className={`col-start-1 row-start-1 transition-opacity duration-500 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={i !== current}
          >
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
              "{t.quote}"
            </p>
            <footer>
              <cite className="not-italic">
                <span className="font-bold block text-brand-dark text-lg">{t.name}</span>
                <span className="text-brand-orange text-sm">{t.role}</span>
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? 'bg-brand-orange' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
