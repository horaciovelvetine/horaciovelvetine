import { SimpleInlineLink } from "../../../../components";

export function ProjectSummary() {
  return (
    <section className='mb-8'>
      <div className='bg-gray-800/40 rounded-lg p-6 border-l-4 border-blue-500/30'>
        <h2 className='text-2xl font-bold text-white mb-4'>
          Summary
        </h2>
        <div className="text-gray-300 text-base sm:text-lg md:text-xl">
          <p className='leading-relaxed mb-4'>
            A network graph visualization tool built to explore Wikipedia topics which emphasizes natural topic discovery and the complex relationships within Wikipedia. Libraries have always had a gigantic advantage for the curious, topics are explored in a single space and are grouped by their shared domain. The Wikiverse aims to combat digital domain isloation of search by putting topics around you as you explore, providing a cumulative shape as you explore a given topic domain. Leveraging Wikidata's rich structured data, this project creates an immersive, navigable universe where users can discover the connections between concepts, place, people and ideas.
          </p>
          <p className='leading-relaxed mb-4'>
            Built in the browser using <SimpleInlineLink text="P5.js" href="www.p5js.org" /> for visualization and <SimpleInlineLink text="React/TypeScript" href="https://react.dev/" /> as the framework. The Wikiverse transforms abstract knowledge into
            an intuitive, visual experience that makes learning and
            discovery both engaging and accessible.
          </p>
        </div>
      </div>
    </section>
  )
}