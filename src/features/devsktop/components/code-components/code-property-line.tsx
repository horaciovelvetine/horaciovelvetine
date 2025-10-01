import { GITHUB } from '../../../../consts/urls';
import { CodeArrayValue } from './code-array-value';
import { CodeLine } from './code-line';
import { CodeProperty } from './code-property';
import { CodeStringValue } from './code-string-value';
import { CodeText } from './code-text';

interface PropertyLineProps {
	property: string;
	value: string | string[];
}

/**
 * A code line component that displays a property assignment in TypeScript/JavaScript syntax.
 * Supports both string and array values, with special handling for clickable properties.
 *
 * @param property - The name of the property being assigned
 * @param value - The value to assign, can be a string or array of strings
 */
export function CodePropertyLine({ property, value }: PropertyLineProps) {
	const isArray = Array.isArray(value);
	const displayValue =
		isArray ? `[${value.map(v => `"${v}"`).join(', ')}]` : `"${value}"`;

	const isClickable =
		property === 'handle' ||
		property === 'github' ||
		property === 'linkedin' ||
		property === 'email';

	const url =
		isClickable ?
			property === 'handle' ? GITHUB
			: property === 'email' ? `mailto:${value as string}`
			: (value as string)
		:	null;

	return (
		<CodeLine indent={2}>
			<div className='flex items-start gap-1 flex-wrap'>
				<CodeProperty text='this' />
				<CodeText text='.' />
				<CodeProperty text={property} />
				<CodeText text=' = ' />
				{isArray ?
					<>
						<CodeArrayValue text='[' />
						{value.map((item, index) => (
							<span
								key={`${property}-${item}-${index.toString()}`}
								className='flex items-center'>
								<CodeArrayValue text={`"${item}"`} />
								{index < value.length - 1 && <CodeText text=', ' />}
							</span>
						))}
						<CodeArrayValue text=']' />
						<CodeText text=';' />
					</>
				: isClickable && url ?
					<a
						href={url}
						target='_blank'
						rel='noopener noreferrer'
						className='break-words hover:underline transition-all duration-200'>
						<CodeStringValue text={displayValue} />
						<CodeText text=';' />
					</a>
				:	<span className='break-words'>
						<CodeStringValue text={displayValue} />
						<CodeText text=';' />
					</span>
				}
			</div>
		</CodeLine>
	);
}
