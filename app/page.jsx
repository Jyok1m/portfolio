import AboutCard from "@/app/components/AboutCard";
import ContactCard from "@/app/components/ContactCard";
import Divider from "@/utils/components/Divider";

export default function Home() {
	return (
		<main className="min-h-screen p-12">
			<AboutCard />
			<Divider title="Contact" />
			<ContactCard />
		</main>
	);
}
