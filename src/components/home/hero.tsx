import Countdown from './countdown';
import NotifyForm from './notify-form';

const Hero = () => {
  return (
    <section id="home" className="text-center py-14 px-5 rounded-xl mb-2.5 bg-gradient-to-b from-primary/5 to-black/30 border border-primary/5 shadow-[inset_0_-40px_90px_rgba(0,0,0,0.4)]" aria-label="Hero">
      <h1 className="text-[2.2rem] font-bold text-primary mb-0">
        💥 STRIKE — Next-Gen Learning
      </h1>
      <p className="text-muted-foreground max-w-3xl mx-auto my-4 text-base">
        Project-based DSA, Generative AI labs, mentor reviews, mock interviews and placement assistance.
      </p>
      <div className="mt-2" aria-live="polite">
        <Countdown />
        <div className="mt-3">
          <NotifyForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
