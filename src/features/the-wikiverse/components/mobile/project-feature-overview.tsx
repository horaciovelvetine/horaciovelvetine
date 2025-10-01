/**
 * Project Feature Overview Component
 *
 * Displays a grid layout of key features for The Wikiverse project.
 * This component presents the main capabilities and functionality
 * of the project in an organized, visually appealing format.
 *
 * Features displayed include:
 * - Interactive 3D knowledge graph visualization
 * - Real-time search and filtering capabilities
 * - Dynamic node clustering and layout algorithms
 * - Multi-language support for international content
 * - Export functionality for research and analysis
 * - User-friendly navigation and exploration tools
 *
 * The component uses a responsive grid layout that adapts from single
 * column on mobile to two columns on medium screens and larger.
 * Each feature is presented in a card-like container with:
 * - Yellow bullet point indicator
 * - Hover effects for improved interactivity
 * - Consistent spacing and typography
 *
 * @component
 */
export function ProjectFeatureOverview() {
  return (
    <section className='mb-8'>
      <h2 className='text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6'>Features</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4'>
        {[
          'Java Spring-Boot API for data access and Graph creation',
          'TypeScript/React & P5.js custom UI/UX',
          'Interactive 3D knowledge graph visualization',
          'Real-time search and filtering capabilities',
          'Dynamic node clustering and layout algorithms',
          'Multi-language support for international content',
          'Export functionality for research and analysis',
          'User-friendly navigation and exploration tools',
        ].map(feature => (
          <div
            key={feature}
            className='flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-800/30 rounded-lg border border-gray-600/20 hover:border-gray-500/40 transition-colors duration-300'>
            <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0'></div>
            <span className='text-gray-300 text-sm sm:text-base leading-relaxed font-semibold'>
              {feature}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
