export default function Divider({ title }) {
	return (
		<div className="relative my-4">
			<div className="absolute inset-0 flex items-center" aria-hidden="true">
				<div className="w-full border-t border-white" />
			</div>
			<div className="relative flex justify-center">
				<span className="px-3 text-base font-semibold leading-6 text-white" style={{ backgroundColor: "#101827" }}>
					{title}
				</span>
			</div>
		</div>
	);
}
