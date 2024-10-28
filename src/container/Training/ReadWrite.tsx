import React from "react";
import useListe from "../../customHook/useListe";

export default function ReadWrite() {
	const { ListSelector, 
		displayed, 
		RenderResult, 
		pickedWord,
		input,
		onClickNextButton } = useListe();
	
	const handleFocus = (e: React.AnimationEvent<HTMLInputElement>) => {
		console.log("e",e)
		const focusTarget = e.target as HTMLInputElement
		focusTarget.focus();
	};

	

	const ReadAndWriteTraining = () => {

		console.log("pickedWord",pickedWord)

		return (
			<div className="flex flex-col justify-center text-center">
				<div className="tracking-in-contract-bck">
					Lis attentivement le mot et écris le.
				</div>
				<span className="font-bold text-accent roll-in-fade-out"> {pickedWord[0].word} </span> 
				<input type="text" 
					onAnimationEnd={handleFocus} 
					onChange={(e) => input.current = e.currentTarget.value}
					placeholder="écris le mot" 
					className="w-1/2 mx-auto text-center puff-in-hor bg-accent text-accent-content"/>
					
				<button onClick={onClickNextButton}>Valider</button>
				
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
					<ReadAndWriteTraining />
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
