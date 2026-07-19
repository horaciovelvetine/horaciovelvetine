import { PROJECT_CONTENT } from '../../../../consts/site-content';

export function ProjectStackOverview() {
  const project = PROJECT_CONTENT.theWikiverse;

  return (
    <section className='mb-8'>
      <h2 className='text-2xl font-bold text-white mb-6'>
        Technology Stack
      </h2>
      <div className='flex flex-wrap gap-3'>
        {project.technologies.map(tech => (
          <span
            key={tech}
            className='rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-stone-200 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]'>
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}