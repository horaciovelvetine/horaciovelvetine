/**
 * ProjectsScreenshots component renders a screenshot gallery section for The Wikiverse project.
 *
 * This component displays a grid of placeholder screenshots showcasing different aspects of
 * The Wikiverse application. Each screenshot placeholder includes a descriptive caption
 * indicating what feature or view it represents. The component is designed to be responsive,
 * adapting from a single column layout on mobile to a three-column grid on larger screens.
 *
 * Features:
 * - Responsive grid layout that adapts to different screen sizes
 * - Hover effects with blue accent border transitions
 * - Aspect-ratio preserving placeholder containers
 * - Descriptive captions for each screenshot placeholder
 * - Consistent styling with the project's gray color scheme
 *
 * The screenshots represent key features of The Wikiverse including the main dashboard,
 * interactive node graphs, search interfaces, detail views, mobile design, and data export
 * functionality. This provides visitors with a visual overview of the application's
 * capabilities and user interface design.
 *
 * @component
 */
export function ProjectScreenshots() {
  return (
    <section className='mb-8'>
      <h2 className='text-2xl font-bold text-white mb-6'>Screenshots</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Placeholder screenshots */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className='bg-gray-800/50 rounded-lg p-4 border border-gray-600/30 hover:border-blue-500/50 transition-colors duration-300'>
            <div className='aspect-video bg-gray-700/50 rounded-lg mb-3 flex items-center justify-center'>
              <span className='text-gray-400 text-sm'>
                Screenshot {i + 1} Placeholder
              </span>
            </div>
            <p className='text-gray-300 text-sm'>
              {
                [
                  'Main dashboard view',
                  'Interactive node graph',
                  'Search and filter interface',
                  'Detail view with connections',
                  'Mobile responsive design',
                  'Data export options',
                ][i]
              }
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
