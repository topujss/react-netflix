const leftList = [
	{
		title: 'FAQ',
		link: '/',
	},
	{
		title: 'Media Center',
		link: '/',
	},
	{
		title: 'Netflix shop',
		link: '/',
	},
	{
		title: 'Ways to Watch',
		link: '/',
	},
	{
		title: 'Cookie preferences',
		link: '/',
	},
	{
		title: 'speed test',
		link: '/',
	},
	{
		title: 'Do Not Sell or Share My Personal Information',
		link: '/',
	},
];
const centerList = [
	{
		title: 'Help Center',
		link: '/',
	},
	{
		title: 'Investor Relations',
		link: '/',
	},
	{
		title: 'Reedeem Gift Cards',
		link: '/',
	},
	{
		title: 'Terms of use',
		link: '/',
	},
	{
		title: 'Corporate information',
		link: '/',
	},
	{
		title: 'Legal notices',
		link: '/',
	},
	{
		title: 'Ad choices',
		link: '/',
	},
];
const rightList = [
	{
		title: 'Account',
		link: '/',
	},
	{
		title: 'Jobs',
		link: '/',
	},
	{
		title: 'Buy Gift Cards',
		link: '/',
	},
	{
		title: 'Privacy',
		link: '/',
	},
	{
		title: 'Contact us',
		link: '/',
	},
	{
		title: 'Only on Netflix',
		link: '/',
	},
];

export default function Footer() {
	return (
		<>
			<footer className='py-16 bg-black text-gray-300 lg:px-10'>
				<section className='max-w-[1170px] mx-auto lg:text-center'>
					<h4 className='font-semibold mb-7'>
						Questions? Call
						<a className='pl-1 hover:underline' href='/'>
							1-844-505-2993
						</a>
					</h4>
					<section className='flex justify-between text-xl lg:flex-col lg:gap-10 lg:text-center'>
						<ul className='w-1/3'>
							{leftList.map(({ title, link }, index) => (
								<li key={index}>
									<a href={link}>{title}</a>
								</li>
							))}
						</ul>
						<ul className='w-[35%]'>
							{centerList.map(({ title, link }, index) => (
								<li key={index}>
									<a href={link}>{title}</a>
								</li>
							))}
						</ul>
						<ul className='w-[35%]'>
							{rightList.map(({ title, link }, index) => (
								<li key={index}>
									<a href={link}>{title}</a>
								</li>
							))}
						</ul>
					</section>
					<button className='mt-10 border border-zinc-300 bg-black mr-8 px-1 py-2 text-xl'>
						<i className='bx bx-world'></i> English{' '}
						<i className='bx bxs-down-arrow'></i>
					</button>
				</section>
			</footer>
		</>
	);
}
