import { ChevronRightIcon } from "@heroicons/react/solid";

export const contactMe = () => {
  return (
		<div className='w-content mx-auto mb-4 mt-2 transition duration-300 ease-in-out decoration-dodger-blue hover:underline hover:decoration hover:decoration-dodger-blue hover:underline-offset-2 hover:scale-105 hover:-translate-y-1'>
			<a
				type='button'
				href='mailto:horaciovelvetine@gmail.com?subject=I%20Saw%20Your%20Resume%20and...'
				className='tracking-tight text-dodger-blue font-light inline-flex items-center leading-4'>
				Contact Me
				<ChevronRightIcon className='h-6' />
			</a>
		</div>
	);
}