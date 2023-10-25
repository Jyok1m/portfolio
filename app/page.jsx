import Intro from "@/app/components/Intro";
import Photos from "@/app/components/Photos";

import { Container } from "@/app/components/Container";

export default async function Home() {
	return (
		<>
			<Container className="mt-9">
				<Intro />
			</Container>
			<Photos />
		</>
	);
}
