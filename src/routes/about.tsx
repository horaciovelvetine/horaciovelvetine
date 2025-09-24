import { createFileRoute, Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { GITHUB, LINKEDIN } from '../consts/urls';

export const Route = createFileRoute('/about')({
	component: MobileAboutPage,
});

// Data structure for developer info
const developerData = {
	location: 'Denver, Colorado',
	github: GITHUB,
	linkedin: LINKEDIN,
	languages: [
		'C++',
		'Java',
		'Python',
		'Ruby',
		'JavaScript',
		'TypeScript',
		'CSS',
		'HTML',
		'SQL',
	],
	frameworks: ['SpringBoot', 'React', 'Vue', 'Ruby on Rails', 'Sinatra'],
	selectedLibraries: [
		'GTest',
		'Guava',
		'JUnit',
		'vavr',
		'Wikidata Toolkit',
		'Tanstack (Router/Query)',
		'Remark',
		'OmniAuth',
		'Devise',
		'Cypress',
		'Faker',
	],
	visuals: [
		'P5.js',
		'TailwindCSS',
		'Bootstrap',
		'Figma',
		'Illustrator',
		'Photoshop',
	],
};

/**
 * Main component for the About page that displays developer information in a code editor theme
 *
 * Renders a mobile-friendly about page with a simulated code editor interface showing
 * developer data including location, skills, and contact information. The component uses
 * a dark theme with syntax highlighting colors to create an immersive coding experience.
 *
 * @component
 */

function MobileAboutPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6 lg:p-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='bg-gray-900/95 backdrop-blur-sm font-mono rounded-xl border border-gray-600/50 shadow-2xl shadow-black/20 overflow-hidden'>
					{/* Header */}
					<div className='bg-gray-800/80 border-b border-gray-600/50 px-4 py-3 flex items-center space-x-2'>
						<div className='text-gray-400 text-lg sm:text-xl leading-relaxed ml-4'>
							about
						</div>
					</div>

					{/* Code content */}
					<div className='p-4 sm:p-6 lg:p-8 xl:p-10'>
						<div className='flex flex-col text-sm sm:text-base md:text-lg font-mono space-y-1 sm:space-y-2 overflow-auto'>
							{/* Multi-line doc comment */}
							<div className='mb-4 bg-gray-800/40 rounded-lg p-4 sm:p-6 lg:p-8 border-l-4 border-emerald-500/30 w-full min-w-130'>
								<CodeLine>
									<Comment text='/**' />
								</CodeLine>
								<CodeLine>
									<Comment text=' * Represents a James object - a full-stack developer entity with comprehensive technical capabilities and creative vision.' />
								</CodeLine>
								<CodeLine>
									<Comment text=' * This class encapsulates the core attributes and behaviors of a modern software engineer, including technical' />
								</CodeLine>
								<CodeLine>
									<Comment text=' * skills, creative tools, and professional location data.' />
								</CodeLine>
								<CodeLine>
									<Comment text=' * ' />
								</CodeLine>
								<CodeLine>
									<Comment text=' * @constructor Creates a new Developer instance with essential coding fuel, debugging capabilities, and a passion for innovation' />
								</CodeLine>
								<CodeLine>
									<Comment text=' * ' />
								</CodeLine>
								<CodeLine>
									<Comment text=' * @param {string} dietCoke - Essential fuel for coding, and creative problem-solving' />
								</CodeLine>
								<CodeLine>
									<Comment text=' * ' />
								</CodeLine>
								<CodeLine>
									<Comment text=' * @returns {Developer} A fully initialized developer instance ready for action, problem-solving, innovation, and building amazing experiences' />
								</CodeLine>
								<CodeLine>
									<Comment text=' * ' />
								</CodeLine>
								<CodeLine>
									<Comment text=' * @since 2020 - Continuously evolving with new technologies, frameworks, development methodologies, and industry best practices' />
								</CodeLine>
								<CodeLine>
									<Comment text=' */' />
								</CodeLine>
							</div>

							{/* Class declaration */}
							<CodeLine>
								<Keyword text='class' />
								<Space />
								<ClassName text='Developer' />
								<Space />
								<OpenBracket />
							</CodeLine>

							{/* Constructor */}
							<div className='my-2'>
								<CodeLine indent={1}>
									<Keyword text='constructor' />
									<Text text='(' />
									<Parameter text='dietCoke' />
									<Text text=') ' />
									<OpenBracket />
								</CodeLine>

								{/* Properties */}
								{Object.entries(developerData).map(([key, value]) => (
									<PropertyLine
										key={key}
										property={key}
										value={value}
									/>
								))}

								{/* Close constructor */}
								<CodeLine indent={1}>
									<CloseBracket />
								</CodeLine>
							</div>

							{/* Close class */}
							<CodeLine>
								<CloseBracket />
							</CodeLine>

							{/* Breadcrumb footer */}
							<div className='mt-6 pt-4 border-t border-gray-600/30'>
								<CodeLine>
									<div className='flex items-center gap-2 text-xs sm:text-sm text-gray-500'>
										<Comment text='//' />
										<Comment text='Navigation:' />
										<Text text='/' />
										<Link to='/'>
											<Property text='home' />
										</Link>
										<Text text=' → ' />
										<Link to='/about'>
											<Property text='about' />
										</Link>
									</div>
								</CodeLine>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function CodeLine({
	children,
	indent = 0,
}: {
	children: ReactNode;
	indent?: number;
}) {
	const indentClasses = {
		0: '',
		1: 'ml-4 sm:ml-6 lg:ml-8',
		2: 'ml-8 sm:ml-12 lg:ml-16',
		3: 'ml-12 sm:ml-18 lg:ml-24',
		4: 'ml-16 sm:ml-24 lg:ml-32',
	} as const;

	return (
		<div
			className={`${indentClasses[indent as keyof typeof indentClasses] || ''} leading-relaxed hover:bg-gray-800/30 transition-colors duration-200 rounded px-1 -mx-1 min-w-124`}>
			{children}
		</div>
	);
}

function PropertyLine({
	property,
	value,
}: {
	property: string;
	value: string | string[];
}) {
	const isArray = Array.isArray(value);
	const displayValue =
		isArray ? `[${value.map(v => `"${v}"`).join(', ')}]` : `"${value}"`;

	// Check if this is a clickable property
	const isClickable =
		property === 'handle' || property === 'github' || property === 'linkedin';
	const url =
		isClickable ?
			property === 'handle' ?
				GITHUB
				: (value as string)
			: null;

	return (
		<CodeLine indent={2}>
			<div
				className={`flex items-start gap-1 ${isArray ? 'flex-wrap min-w-124' : 'text-nowrap'}`}>
				<Property text='this' />
				<Text text='.' />
				<Property text={property} />
				<Text text=' = ' />
				{isArray ?
					<div className='flex flex-wrap gap-1 w-full'>
						<ArrayValue text='[' />
						{value.map((item, index) => (
							<span
								key={`${property}-${item}-${index.toString()}`}
								className='flex items-center'>
								<ArrayValue text={`"${item}"`} />
								{index < value.length - 1 && <Text text=', ' />}
							</span>
						))}
						<span>
							<ArrayValue text=']' />
							<Text text=';' />
						</span>
					</div>
					: isClickable && url ?
						<a
							href={url}
							target='_blank'
							rel='noopener noreferrer'
							className='break-words hover:underline transition-all duration-200'>
							<StringValue text={displayValue} />
							<Text text=';' />
						</a>
						: <span className='break-words'>
							<StringValue text={displayValue} />
							<Text text=';' />
						</span>
				}
			</div>
		</CodeLine>
	);
}

function Space() {
	return <span className='text-gray-100'> </span>;
}

function Text({ text }: { text: string }) {
	return (
		<span className='text-gray-100 hover:text-white transition-colors duration-200'>
			{text}
		</span>
	);
}

function OpenBracket() {
	return (
		<span className='text-gray-100 hover:text-white transition-colors duration-200'>
			{'{'}
		</span>
	);
}

function CloseBracket() {
	return (
		<span className='text-gray-100 hover:text-white transition-colors duration-200'>
			{'}'}
		</span>
	);
}

function Keyword({ text }: { text: string }) {
	return (
		<span className='text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-200'>
			{text}
		</span>
	);
}

function ClassName({ text }: { text: string }) {
	return (
		<span className='text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-200'>
			{text}
		</span>
	);
}

function Parameter({ text }: { text: string }) {
	return (
		<span className='text-orange-400 hover:text-orange-300 transition-colors duration-200'>
			{text}
		</span>
	);
}

function Property({ text }: { text: string }) {
	return (
		<span className='text-blue-400 hover:text-blue-300 transition-colors duration-200'>
			{text}
		</span>
	);
}

function StringValue({ text }: { text: string }) {
	return (
		<span className='text-green-400 hover:text-green-300 transition-colors duration-200'>
			{text}
		</span>
	);
}

function ArrayValue({ text }: { text: string }) {
	return (
		<span className='text-yellow-400 hover:text-yellow-300 transition-colors duration-200'>
			{text}
		</span>
	);
}

function Comment({ text }: { text: string }) {
	return (
		<span className='text-gray-500 hover:text-gray-400 transition-colors duration-200'>
			{text}
		</span>
	);
}
