export const infoMe = (socialLinks) => {
  return (
		<>
			<div className='py-4 mx-2 text-center'>
				<p className='text-xlg font-semibold tracking-wider leading-none'>James Tillman</p>
				<a
					href='https://flatironschool.com/courses/coding-bootcamp/' //TODO: Change this to reference, or pull up a more comprehensive version of my about summary
					className='text-sm  text-ui-text/80 tracking-tighter hover:underline hover:underline-offset-0 hover:decoration-icon-fill '>
					Full-Stack Developer
				</a>
			</div>

			<div className='mx-auto text-center mb-4 text-sm'>
				I build modern and creative web applications that solve problems for clients and make happy users.
			</div>

			<div className='flex mx-2 mb-4'>
				<p className='flex text-sm text-ui-text tracking-tighter font-light'>
					Find me on:
					<span className='translate-x-1 inline-flex items-center font-normal text-dodger-blue gap-1'>
						{socialLinks.map((link) => {
							return socialLink(link);
						})}
					</span>
				</p>
			</div>
		</>
	);
}