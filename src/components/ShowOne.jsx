import tv1 from '../img/tv1.png';
import tv2 from '../img/nflix_hero.jpg';

export default function ShowOne() {
	return (
		<>
			<section className=' bg-black text-white py-24 border-b-8 border-gray-500 lg:px-5'>
				<div className='flex mx-auto justify-around items-center max-w-[1170px] lg:block'>
					<div className='w-1/2 lg:block lg:mx-auto lg:w-full lg:text-center'>
						<h1 className='text-5xl font-extrabold mb-7 lg:text-3xl'>
							Enjoy on your TV
						</h1>
						<p className='text-2xl lg:text-xl'>
							Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
							Blu-ray players, and more.
						</p>
					</div>
					<div className='relative z-20 lg:block overflow-hidden lg:mx-auto w-fit'>
						<img src={tv1} alt='' />
						<div className='inner overflow-hidden'>
							<img className='absolute top-5 -z-20' src={tv2} alt='' />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
