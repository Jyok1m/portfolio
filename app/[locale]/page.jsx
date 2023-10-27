import Intro from "@server-components/home/Intro";
import Photos from "@server-components/home/Photos";
import Resume from "@server-components/home/Resume";
import Projects from "@server-components/home/Projects";
import Inquiry from "@server-components/home/Inquiry";

import { Container } from "@global-components/Container";

export default function Home() {
	return (
		<>
			<Container className="mt-9">
				<Intro />
			</Container>
			<Photos />
			<Container className="mt-24 md:mt-28">
				<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
					<div className="space-y-20 ">
						<Projects />
						<Resume />
						<Inquiry />
					</div>
				</div>
			</Container>
		</>
	);
}
