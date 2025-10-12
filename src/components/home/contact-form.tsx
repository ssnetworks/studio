"use client";

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast"

const ContactForm = () => {
    const { toast } = useToast()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thanks — we will revert within 24 hours.",
        })
        e.currentTarget.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4" id="contactForm">
            <Input id="name" type="text" placeholder="Your Name" required className="!bg-transparent border-primary/10 focus:!bg-background placeholder:text-muted-foreground" />
            <Input id="email" type="email" placeholder="Your Email" required className="!bg-transparent border-primary/10 focus:!bg-background placeholder:text-muted-foreground" />
            <Textarea id="message" placeholder="Your Message" required className="!bg-transparent border-primary/10 focus:!bg-background min-h-[100px] placeholder:text-muted-foreground" />
            <Button type="submit" className="mt-2.5 font-extrabold text-base bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
        </form>
    );
};

export default ContactForm;
