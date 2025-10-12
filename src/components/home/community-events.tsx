import { SectionTitle } from '@/components/shared/section-title';

const timelineEvents = [
  {
    date: 'Oct 18, 2025',
    title: 'Live DSA Workshop',
    description: 'Master Data Structures and Algorithms with our interactive workshop.',
  },
  {
    date: 'Oct 22, 2025',
    title: 'AI Project Showcase',
    description: 'Community members present AI projects and receive feedback from experts.',
  },
  {
    date: 'Nov 29, 2025',
    title: 'System Design Challenge',
    description: 'Participate in our design competition and win STRIKE merchandise.',
  },
  {
    date: 'Dec 05, 2025',
    title: 'Career Q&A with Tech Leaders',
    description: 'Get your career questions answered by senior engineers and hiring managers.',
  },
];

const TimelineCard = ({ date, title, description, side }: {date: string; title: string; description: string, side: 'left' | 'right'}) => (
  <div className={`bg-white/5 p-4 rounded-xl border border-primary/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative text-left 
    ${side === 'left' ? 'md:text-right' : ''}
    ${side === 'left' 
      ? "md:after:content-[''] md:after:absolute md:after:right-[-36px] md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-9 md:after:h-0.5 md:after:bg-primary/20 md:after:rounded-sm" 
      : "md:after:content-[''] md:after:absolute md:after:left-[-36px] md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-9 md:after:h-0.5 md:after:bg-primary/20 md:after:rounded-sm"
    }`}>
    <strong className="text-foreground/90">{date}</strong>
    <h3 style={{color: '#ffdede'}} className="my-1 text-lg font-semibold">{title}</h3>
    <p className="text-muted-foreground m-0">{description}</p>
  </div>
);

const CommunityEvents = () => (
  <section id="community" className="py-12 mt-4">
    <SectionTitle>Upcoming Community Events</SectionTitle>
    <div className="max-w-4xl my-9 mx-auto relative px-2.5
                   before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-accent before:to-[#6b0000] before:rounded-full before:shadow-[0_20px_60px_rgba(255,59,59,0.06)]
                   before:left-[28px] md:before:left-1/2 md:before:-translate-x-1/2"
          role="list"
          aria-label="Community timeline"
    >
      {timelineEvents.map((event, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div key={index} role="listitem" className="grid grid-cols-[40px_1fr] md:grid-cols-[1fr_60px_1fr] items-start gap-3 md:gap-4 my-7">
            {isLeft ? (
              <>
                <div className="hidden md:block md:col-start-1"><TimelineCard {...event} side="left"/></div>
                <div aria-hidden="true" className="col-start-1 row-start-1 w-[18px] h-[18px] rounded-full bg-primary border-[3px] border-[#0b0606] ml-[calc(28px-9px)] md:col-start-2 md:justify-self-center md:ml-0 md:translate-x-[-8px] shadow-[0_8px_28px_rgba(255,59,59,0.2)]"></div>
                <div className="col-start-2 md:hidden"><TimelineCard {...event} side="right"/></div>
              </>
            ) : (
              <>
                <div className="hidden md:block"></div>
                <div aria-hidden="true" className="col-start-1 row-start-1 w-[18px] h-[18px] rounded-full bg-primary border-[3px] border-[#0b0606] ml-[calc(28px-9px)] md:col-start-2 md:justify-self-center md:ml-0 md:translate-x-[8px] shadow-[0_8px_28px_rgba(255,59,59,0.2)]"></div>
                <div className="col-start-2 md:col-start-3"><TimelineCard {...event} side="right"/></div>
              </>
            )}
          </div>
        )
      })}
    </div>
  </section>
);

export default CommunityEvents;
