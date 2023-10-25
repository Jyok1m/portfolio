import Intro from "@/app/components/Home/Intro";
import Photos from "@/app/components/Home/Photos";
import Resume from "@/app/components/Home/Resume";
import Inquiry from "@/app/components/Home/Inquiry";

import { Container } from "@/app/components/Container";

export default async function Home() {
	return (
		<>
			<Container className="mt-9">
				<Intro />
			</Container>
			<Photos />
			<Container className="mt-24 md:mt-28">
				<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
					<div className="flex flex-col gap-16">
						<Resume />
					</div>
					<div className="flex flex-col gap-16">
						<Inquiry />
					</div>
				</div>
			</Container>
		</>
	);
}
