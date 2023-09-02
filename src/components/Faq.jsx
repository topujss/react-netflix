// For quick check
const faqItems = [
	{
		question: 'What is Netflix?',
		answer: `Netflix is a streaming service that offers a wide variety of
		award-winning TV shows, movies, anime, documentaries, and more on
		thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every weeks!`,
	},
	{
		question: 'How much does Netflix cost?',
		answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts.`,
	},
	{
		question: 'Where can i watch?',
		answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
		You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
		`,
	},
	{
		question: 'How do i cancel?',
		answer: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
	},
	{
		question: 'What can i watch on netflix?',
		answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
	},
	{
		question: 'Is netflix good for kids?',
		answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

		Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
	},
];

export default function Faq() {
	return (
		<>
			<section className='text-center content flex items-center flex-col justify-center py-24 bg-black text-white border-y-8 border-neutral-600'>
				<h1 className='text-5xl font-semibold mb-10'>
					Frequently Asked Questions
				</h1>

				{faqItems.map((item, index) => (
					<details className='w-3/4 mx-auto text-left text-2xl' key={index}>
						<div className='sum my-2 bg-neutral-800 p-4'>{item.answer}</div>
						<summary className='accordion cursor-pointer bg-neutral-800 hover:bg-neutral-700 transition-all flex justify-between items-center py-5 px-8 mb-2 text-3xl'>
							{item.question}
							<span>
								<i className='text-4xl bx bx-plus'></i>
							</span>
						</summary>
					</details>
				))}

				<p className='text-xl pt-10'>
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				<div className='w-full mt-5'>
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
			</section>
		</>
	);
}
