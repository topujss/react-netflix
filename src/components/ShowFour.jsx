import tv1 from '../img/mobile.jpg';
import tv2 from '../img/boxshot.png';

export default function ShowFour() {
	return (
		<>
			<section className=' bg-black text-white py-24 '>
				<div className='flex max-w-screen-xl mx-auto justify-around items-center lg:flex-col-reverse'>
					<div className='relative -z-5  overflow-clip'>
						<img src={tv1} alt='' />
						<div className='border bg-black py-3 border-slate-200 absolute bottom-10 left-28 w-4/6 z-20 flex flex-row justify-around items-center rounded-xl'>
							<img className='w-14' src={tv2} alt='' />
							<div className='pr-5'>
								<h5 className='font-semibold'>Stranger Things</h5>
								<p className='text-sky-600'>Downloading...</p>
							</div>
							<i className='text-3xl bx bxs-download cursor-wait'></i>
						</div>
					</div>
					<div className='w-1/2 lg:w-full lg:text-center '>
						<h1 className='text-5xl font-bold mb-7 leading-tight lg:text-3xl lg:mb-2 mr-48 xxl:mr-0'>
							Download your shows to watch offline
						</h1>
						<p className='text-2xl'>Only available on ad-free plans.</p>
					</div>
				</div>
			</section>
		</>
	);
}
