import { SectionTitle } from '@/components/shared/section-title';
import CourseCard from './course-card';

const coursesData = [
    {
      title: 'Applied DSA — Placement Track',
      level: 'DSA • All Levels',
      description: 'Master 100+ problems, timed OAs, and mock interviews tailored to real company patterns with personalized feedback.',
      meta: '200+ Problems • 50+ Mock Interviews • Real OA Patterns',
      duration: '12 Weeks',
      enrollText: 'Enroll Now',
    },
    {
      title: 'Generative AI Labs',
      level: 'AI • Intermediate',
      description: 'End-to-end LLM projects: dataset creation, model training, evaluation, and production deployment with real datasets.',
      meta: '8 AI Projects • LLM Fine-tuning • Portfolio Ready',
      duration: '16 Weeks',
      enrollText: 'Explore Labs',
    },
    {
      title: 'Interview Prep & Mentorship',
      level: 'CAREER • All Levels',
      description: 'Resume review, behavioral mock interviews, and role-specific interview loops with FAANG mentors.',
      meta: '1:1 Mentors • Resume Reviews • Mock Interviews',
      duration: '8 Weeks',
      enrollText: 'Start Journey',
    },
    {
      title: 'DSA Foundation Bootcamp',
      level: 'DSA • Beginner',
      description: 'Build strong fundamentals with visual learning, interactive problems, and step-by-step guidance.',
      meta: 'Visual Learning • 150+ Problems • Beginner Friendly',
      duration: '10 Weeks',
      enrollText: 'Get Started',
    },
    {
      title: 'Advanced AI Research',
      level: 'AI • Advanced',
      description: 'Work on cutting-edge research problems with industry experts and publish your findings.',
      meta: 'Research Papers • Industry Projects • Expert Guidance',
      duration: '20 Weeks',
      enrollText: 'Apply Now',
    },
    {
      title: 'System Design Mastery',
      level: 'CAREER • Intermediate',
      description: 'Design scalable systems from first principles with real-world case studies and implementation.',
      meta: 'Case Studies • Architecture Patterns • Scalability Focus',
      duration: '14 Weeks',
      enrollText: 'Master Design',
    },
];

const Courses = () => {
    return (
        <section id="courses" className="py-12 mt-4">
            <SectionTitle>Explore Our Courses</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4" role="list">
                {coursesData.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </section>
    )
}
export default Courses;
