import { SectionTitle } from '@/components/shared/section-title';

const reasons = [
  { title: 'Structured DSA & Interview Prep', description: 'Master algorithms, data structures and system design through guided curriculum tailored for placements.' },
  { title: 'Mentor Reviews & Code Feedback', description: 'Personalized code reviews and mentor-guided improvements on projects.' },
  { title: 'Mock Interviews & Career Guidance', description: 'Simulated interviews, resume guidance and interview loop practice with experts.' },
];

const WhyStrike = () => {
  return (
    <section id="why" className="py-12 mt-4">
      <SectionTitle>Why STRIKE?</SectionTitle>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5 mt-3">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-white/5 p-4 rounded-xl border border-primary/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
            <h3 className="text-primary font-bold mb-2 text-lg">{reason.title}</h3>
            <p className="text-muted-foreground">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyStrike;
