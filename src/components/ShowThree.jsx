import kid from '../img/kid.png';

export default function ShowThree() {
	return (
		<>
			<section className='bg-black text-white py-20 border-y-8 border-gray-500 lg:px-10'>
				<div className='flex max-w-[1170px] mx-auto justify-around items-center lg:flex-col'>
					<div className='w-1/2 lg:text-center lg:w-full lg:mb-7'>
						<h1 className='text-5xl font-bold mb-7 lg:text-3xl'>
							Create profiles for kids
						</h1>
						<p className='text-2xl lg:text-xl'>
							Send kids on adventures with their favorite characters in a space
							made just for them—free with your membership.
						</p>
					</div>
					<div className=''>
						<img src={kid} alt='' />
					</div>
				</div>
			</section>
		</>
	);
}
