import useListe from "../../customHook/useListe";

export default function ReadTap() {
	const {
		bundleList,
		displayed,
		input,
		onClickNextButton,
		RenderResult,
		ListSelector,
	} = useListe(); // list to use

	const ReadAndTapTraining = () => {
		return (
			<div className="grid w-full grid-flow-row grid-cols-2 p-3">
				{bundleList.map((word, index) => (
					<button
						key={index}
						className="m-2 btn btn-secondary"
						onClick={(e) => {
							console.log("e.currentTarget",e.currentTarget.textContent)
							input.current = e.currentTarget.textContent ?? ""
							onClickNextButton()
						}}
					>
						{word}
					</button>
				))}
			</div>
		);
	};

	return (
		<div
			id="readtap-training"
			className="flex flex-col w-full h-full justify-evenly training-readtap bg-primary text-primary-content"
		>
			{displayed.home && <ListSelector />}
			{displayed.training && (
				<>
					<ReadAndTapTraining />
				</>
			)}
			{displayed.finish && (
				<>
					<div className="textarea-md">
						<div className="text-xl font-bold">
							Bravo tu l&apos;as fait !
						</div>
						<RenderResult />
					</div>
				</>
			)}
		</div>
	);
}
