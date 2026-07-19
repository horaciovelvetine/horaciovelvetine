import { SimpleInlineLink } from "../../../../components";
import { PROJECT_CONTENT } from "../../../../consts/site-content";

export function ProjectSummary() {
  const project = PROJECT_CONTENT.theWikiverse;

  return (
    <section className='mb-8'>
      <div className='rounded-[24px] border border-white/10 bg-white/[0.03] p-6'>
        <h2 className='text-2xl font-bold text-white mb-4'>
          Summary
        </h2>
        <div className="text-gray-300 text-base sm:text-lg md:text-xl">
          {project.summary.map(paragraph => (
            <p key={paragraph} className='mb-4 leading-relaxed'>
              {paragraph}
            </p>
          ))}
          <p className='leading-relaxed'>
            Built in the browser using <SimpleInlineLink text="P5.js" href="https://p5js.org/" /> for visualization and <SimpleInlineLink text="React and TypeScript" href="https://react.dev/" /> for the interface layer.
          </p>
        </div>
      </div>
    </section>
  )
}