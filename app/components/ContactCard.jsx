import ContactForm from "./ContactForm";

export default function ContactCard() {
	return (
		<div className="relative bg-[#c5d1e7] mt-4 rounded-lg">
			<div className="lg:absolute lg:inset-0 lg:left-1/2">
				<img
					className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full rounded-r-lg"
					src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
					alt=""
				/>
			</div>
			<div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
				<div className="px-6 lg:px-8">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Travaillons ensemble</h2>
						<p className="mt-2 text-lg leading-8 text-gray-600">
							Si vous le souhaitez, vous pouvez me contacter pour discuter de votre projet. Je serai ravi de vous accompagner dans votre transition
							numérique.
						</p>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
}
