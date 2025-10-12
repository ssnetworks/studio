import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 h-[72px] flex items-center justify-between px-9 bg-black/55 backdrop-blur-sm z-50 border-b border-primary/10">
        <Link href="#home" className="flex gap-3 items-center">
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-extrabold text-2xl">
            S
          </div>
          <div className="font-bold text-primary text-lg tracking-wider">STRIKE</div>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          <Link href="#why" className="text-white font-semibold px-3 py-2 rounded-lg hover:text-primary transition-colors">Why</Link>
          <Link href="#courses" className="text-white font-semibold px-3 py-2 rounded-lg hover:text-primary transition-colors">Courses</Link>
          <Link href="#community" className="text-white font-semibold px-3 py-2 rounded-lg hover:text-primary transition-colors">Community</Link>
          <Link href="#contact" className="text-white font-semibold px-3 py-2 rounded-lg hover:text-primary transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
