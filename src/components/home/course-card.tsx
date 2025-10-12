import Link from 'next/link';

type CourseCardProps = {
  title: string;
  level: string;
  description: string;
  meta: string;
  duration: string;
  enrollText: string;
};

const CourseCard = ({ title, level, description, meta, duration, enrollText }: CourseCardProps) => {
  return (
    <article className="bg-white/5 p-5 rounded-xl border border-primary/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative flex flex-col pb-16" role="listitem">
      <div className="flex-grow">
        <h3 style={{color: '#ffdcdc'}} className="mb-1.5 text-lg font-bold">{title}</h3>
        <h4 className="text-primary text-sm font-semibold mb-2">{level}</h4>
        <p className="text-muted-foreground text-sm my-1.5">{description}</p>
        <p style={{color: '#ffbdbd'}} className="text-sm font-bold mt-2">{meta}</p>
        <p className="text-sm mt-2">⏱️ {duration}</p>
      </div>
      <Link href="#contact" className="absolute right-3.5 bottom-3.5 bg-primary text-primary-foreground px-3 py-2 rounded-lg font-extrabold text-sm hover:bg-primary/90 transition-colors">
        {enrollText}
      </Link>
    </article>
  );
};
export default CourseCard;
