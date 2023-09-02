import tv1 from '../img/device-pile.png';
import tv2 from '../img/nflix_hero.jpg';

export default function ShowOne() {
	return (
		<>
			<section className='bg-black text-white py-28 lg:px-7'>
				<div className='flex max-w-[1170px] mx-auto justify-around items-center lg:flex-col-reverse'>
					<div className='relative z-20  overflow-hidden w-fit'>
						<img src={tv1} alt='' />
						<div className='inner'>
							<img
								className='absolute top-10 left-28 w-4/6 pr-3 -z-20'
								src={tv2}
								alt=''
							/>
						</div>
					</div>
					<div className='w-1/2 lg:text-center lg:w-full lg:mb-7'>
						<h1 className='text-5xl font-extrabold mb-7 lg:text-3xl'>
							Watch everywhere
						</h1>
						<p className='text-2xl lg:text-xl'>
							Stream unlimited movies and TV shows on your phone, tablet,
							laptop, and TV.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
