import bgImg from '../img/nflix_hero.jpg';
import popcorn from '../img/popcorn.png';

export default function Hero() {
	return (
		<div
			className='hero relative bg-no-repeat bg-left-top px-20'
			style={{ background: `url(${bgImg})` }}
		>
			<header className='top flex justify-between py-4 max-w-[1170px] mx-auto'>
				<div className='logo'>
					<img
						className='w-40'
						src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
						alt=''
					/>
				</div>
				<div className='menu text-white flex justify-center items-center gap-4'>
					<ul className='border border-zinc-300 bg-black px-3 py-1 flex items-center gap-3 cursor-pointer rounded-md'>
						<i className='bx bx-world text-xl'></i>
						<li>English</li>
					</ul>
					<button className='bg-red-600 px-4 py-1 rounded-md'>Sign in</button>
				</div>
			</header>
			<section className='text-center content flex items-center flex-col justify-center text-white pt-48 shadow-lg'>
				<h1 className='text-5xl font-extrabold'>
					Unlimited movies, TV shows, and more
				</h1>
				<h3 className='text-3xl pt-7'>Watch anywhere. Cancel anytime.</h3>
				<p className='text-xl py-5'>
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				<div className='w-full'>
					<form className='flex justify-center items-center gap-3'>
						<input
							className='focus:outline-none bg-slate-800 text-gray-300 pl-4 pr-40 py-5 rounded'
							type='email'
							placeholder='Email address'
						/>
						<button
							type='submit'
							className='bg-red-600 text-white text-2xl py-4 rounded font-medium px-3'
						>
							Get Started <i className='bx bx-chevron-right'></i>
						</button>
					</form>
				</div>
				<div className='ad_sign flex items-center justify-center gap-4 mt-4 w-full relative top-16 py-8'>
					<img className='w-24 h-24' src={popcorn} alt='' />
					<div className='text-left'>
						<h3 className='text-2xl font-bold'>
							The Netflix you love for just $6.99.
						</h3>
						<p>Get the Standard with ads plan.</p>
						<button>Learn More</button>
					</div>
				</div>
			</section>
		</div>
		// show three done
	);
}
