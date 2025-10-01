import { ContactContent } from '../components';

export function ContactWindow() {
	return (
		<div
			className='flex flex-col'
			style={{ maxHeight: 'calc(100vh - 72px)' }}>
			{/* MAIN CONTAINER WITH SCROLLABLE CONTENT */}
			<div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-stone-400/80 [&::-webkit-scrollbar-thumb]:bg-stone-600/70 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar-track]:bg-transparent'>
				<div className='flex flex-col w-full items-center relative'>
					<div className='sm:p-4 md:p-6 lg:p-8'>
						<div className='p-3 sm:p-4 md:p-6 lg:p-8'>
							<ContactContent
								className='rounded-xl overflow-hidden'
								showAdditionalInfo={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
