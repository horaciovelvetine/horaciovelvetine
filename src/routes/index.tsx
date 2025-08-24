import { createFileRoute } from '@tanstack/react-router';
import { SolvedokuIcon } from '../features';
import {
	CSSBadge,
	JavaBadge,
	P5JSBadge,
	ProjectCard,
	ReactBadge,
	ReactP5WrapperBadge,
	SimpleInlineLink,
	SpringBootBadge,
	TailwindCSSBadge,
	TypescriptBadge,
} from '../components';
import {
	FrameworksGrid,
	LandingPageIntro,
	LanguagesGrid,
	VisualToolsGrid,
} from '../features/devsktop/components';
import { GITHUB, LINKEDIN } from '../consts/urls';
import { GithubLogo, LinkedInLogo } from '../assets';

// root/index.tsx
export const Route = createFileRoute('/')({
	component: MobileHomePage,
});

function MobileHomePage() {
	return (
		<div className='flex flex-col gap-2 mx-0.5 my-2'>
			<div className='bg-stone-900/60 py-2 rounded-xl ring-1 ring-stone-300/30'>
				<LandingPageIntro />
				<div className='flex justify-center items-center text-lg px-2 mx-auto font-bold gap-2 border-t-2 pt-1 mt-1.5 border-stone-300/30'>
					<div className='inline-flex items-center gap-1'>
						<SimpleInlineLink
							text='Github'
							url={GITHUB}
							showArrow
						/>
						<img
							src={GithubLogo}
							className='h-6 '
						/>
					</div>
					<div className='inline-flex items-center gap-1'>
						<SimpleInlineLink
							text='LinkedIn'
							url={LINKEDIN}
							showArrow
						/>
						<img
							src={LinkedInLogo}
							className='h-6'
						/>
					</div>
				</div>
			</div>

			<div className='bg-stone-900/60 py-3 rounded-xl ring-1 ring-stone-300/30'>
				<h2 className='tracking-tighter text-center font-extrabold sm:font-bold text-3xl xs:text-4xl sm:text-5xl mb-2'>
					About:
				</h2>
				<p className='text-center font-bold text-2xl/5 xs:text-3xl/6.5 sm:text-4xl/7 mb-2 px-2 tracking-tight sm:tracking-tighter text-white'>
					I design and develop bespoke solutions for challenging problems
					leveraging technology and creativity at every turn.
				</p>
				<div className='flex flex-col mx-2 tracking-tight'>
					<LanguagesGrid />
					<FrameworksGrid />
					<VisualToolsGrid />
				</div>
			</div>

			<div className='bg-stone-900/60 py-2 rounded-xl ring-1 ring-stone-300/30 px-2'>
				<div>
					<h2 className='tracking-tighter text-center font-extrabold sm:font-bold text-3xl xs:text-4xl sm:text-5xl mb-2'>
						Work:
					</h2>

					<div className='flex flex-col gap-2'>
						<ProjectCard
							title='Wikiverse'
							description={`The Wikiverse is a web app (and API) that allows you to search Wikidata and uniquely explore topics in 3D space.  Leveraging Wikidata's publically available api for data, the Wikiverse dynamically generates a graph of the result and it's related topics, to answer the question 'What would Wikipedia look like in 3D?'.`}
							thumbnailSrc='https://raw.githubusercontent.com/horaciovelvetine/wikidata-universe-client/main/.github/readme_assets/wikipedia_in3D_v0.0.1.png'
							linkText='Visit the Github'
							linkURL='https://github.com/horaciovelvetine/wikidata-universe-client'
							tools={[
								JavaBadge,
								SpringBootBadge,
								ReactBadge,
								TypescriptBadge,
								P5JSBadge,
								ReactP5WrapperBadge,
								CSSBadge,
							]}
						/>
						<ProjectCard
							title='Rock Paper Scissors'
							description={`A self playing game of Rock, Paper, Scissors where emoji's fly around the screen colliding with each other until only the winner remains. Built with P5.js and inspired by a viral GIF!`}
							thumbnailSrc='https://raw.githubusercontent.com/horaciovelvetine/rock-paper-scissors/main/src/assets/Demo_Gif.gif'
							pageLinkText='Open Rock, Paper, Scissors'
							pageLinkRoute='/rock-paper-scissors'
							tools={[
								ReactBadge,
								TypescriptBadge,
								TailwindCSSBadge,
								P5JSBadge,
								ReactP5WrapperBadge,
							]}
						/>
						<ProjectCard
							title='Solvedoku'
							description={`A Sudoku puzzle solver and game, built for the browser using React and Typescript, it solves puzzles in real-time classic backtracking algorithim. Just enter your puzzle (or have it generate one for you) and hit 'Solve Puzzle' to watch it work out a solution in real-time!`}
							ThumbnailIcon={SolvedokuIcon}
							pageLinkRoute={'/solvedoku'}
							pageLinkText='Open Solvedoku'
							tools={[ReactBadge, TypescriptBadge, TailwindCSSBadge]}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
