import { createFileRoute, Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { GITHUB, MAILTO } from '../consts/urls';

export const Route = createFileRoute('/contact')({
	component: MobileContactPage,
});

// Contact data structure
const contactData = {
	email: 'horaciovelvetine@gmail.com',
	github: GITHUB,
	linkedin: 'https://linkedin.com/in/horaciovelvetine',
	preferredMethod: 'email',
	availability: 'Available for freelance projects',
};

/**
 * Mobile Contact Page Component
 *
 * A contact page that displays contact information in a code editor theme.
 * This component follows the same design pattern as the about and projects pages,
 * featuring a simulated code editor interface with syntax highlighting.
 *
 * Features:
 * - Code editor themed interface matching site design
 * - Contact information displayed as JavaScript object properties
 * - Clickable links for email, GitHub, and LinkedIn
 * - Responsive layout optimized for mobile and desktop viewing
 * - Consistent styling with about and projects pages
 *
 * @component
 */
function MobileContactPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6 lg:p-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='bg-gray-900/95 backdrop-blur-sm font-mono rounded-xl border border-gray-600/50 shadow-2xl shadow-black/20 overflow-hidden'>
					{/* Header */}
					<div className='bg-gray-800/80 border-b border-gray-600/50 px-4 py-3 flex items-center space-x-2'>
						<div className='text-gray-400 text-lg sm:text-xl leading-relaxed ml-4'>
							contact
						</div>
					</div>

					{/* Content */}
					<div className='p-4 sm:p-6 lg:p-8 xl:p-10'>
						<div className='flex flex-col text-sm sm:text-base md:text-lg font-mono space-y-1 sm:space-y-2 overflow-auto'>
							{/* Object declaration */}
							<CodeLine>
								<Keyword text='export' />
								<Space />
								<Keyword text='const' />
								<Space />
								<Property text='contactInfo' />
								<Space />
								<Text text='= ' />
								<OpenBracket />
							</CodeLine>

							{/* Properties */}
							{Object.entries(contactData).map(([key, value]) => (
								<PropertyLine
									key={key}
									property={key}
									value={value}
								/>
							))}

							{/* Close object */}
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
										<Link to='/contact'>
											<Property text='contact' />
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
	value: string;
}) {
	// Check if this is a clickable property
	const isClickable =
		property === 'email' || property === 'github' || property === 'linkedin';
	const url =
		isClickable ?
			property === 'email' ?
				MAILTO
				: value
			: null;

	return (
		<CodeLine indent={1}>
			<div className='flex items-start gap-1 text-nowrap'>
				<Property text={property} />
				<Text text=': ' />
				{isClickable && url ?
					<a
						href={url}
						target={property === 'email' ? '_self' : '_blank'}
						rel={property === 'email' ? '' : 'noopener noreferrer'}
						className='break-words hover:underline transition-all duration-200'>
						<StringValue text={`"${value}"`} />
						<Text text=',' />
					</a>
					: <span className='break-words'>
						<StringValue text={`"${value}"`} />
						<Text text=',' />
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

function Comment({ text }: { text: string }) {
	return (
		<span className='text-gray-500 hover:text-gray-400 transition-colors duration-200'>
			{text}
		</span>
	);
}
