import { SectionTitle } from '@/components/shared/section-title';
import ContactForm from './contact-form';

const Contact = () => {
  return (
    <section id="contact" className="py-12 mt-4">
      <SectionTitle>Contact Us</SectionTitle>
      <div className="flex flex-wrap gap-5 justify-center items-start mt-4">
        <div className="flex-1 min-w-[300px] max-w-md bg-white/5 p-5 rounded-xl border border-primary/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <h3 className="text-primary font-bold text-xl mt-0 mb-4">Send us a message</h3>
          <ContactForm />
        </div>
        <div className="flex-1 min-w-[300px] max-w-md bg-white/5 p-5 rounded-xl border border-primary/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <h3 className="text-primary font-bold text-xl mt-0 mb-4">Get in touch</h3>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>Email Us</strong><br/><span className="text-foreground">hello@strike.com</span></p>
            <p><strong>Call Us</strong><br/>Mon–Fri 9 AM – 6 PM<br/><span className="text-foreground">+91 99XXXXXXXX</span></p>
            <p><strong>Visit Us</strong><br/><span className="text-foreground">Dwarka, Delhi</span></p>
            <p className="text-muted-foreground mt-2">We typically respond within 24 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
