export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="block text-center text-primary text-[1.6rem] font-bold mb-4 after:content-[''] after:block after:h-1 after:w-20 after:bg-gradient-to-r after:from-primary after:to-accent after:mx-auto after:mt-2.5 after:rounded">
      {children}
    </h2>
);
