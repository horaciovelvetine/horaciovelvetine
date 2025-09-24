export function ProjectStackOverview() {
  return (
    <section className='mb-8'>
      <h2 className='text-2xl font-bold text-white mb-6'>
        Technology Stack
      </h2>
      <div className='flex flex-wrap gap-3'>
        {[
          'Java',
          'Spring Boot',
          'Wikidata Toolkit',
          'TypeScript',
          'React',
          'P5.js',
          'TailwindCSS',
          'Azure CI/CD Pipieline'
        ].map(tech => (
          <span
            key={tech}
            className='px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full border border-blue-500/30 hover:bg-blue-500/30 hover:text-blue-200 transition-all duration-300'>
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}