import React, {
} from "react";



export function AccordionComponent(props: AccordionComponent) {
	const {message,title} = props

	return (
		<div
			className="my-3 collapse collapse-plus bg-primary text-primary-content"
		>
			<input type="radio" name="my-accordion-3" defaultChecked />
			<div className="text-xl font-medium collapse-title">
				{" "}
				{title}
			</div>
			<div className="collapse-content">{message}</div>
		</div>
	);
};
	


export default function AccordionWithChilds({
	children,
}: {
	children: React.ReactElement<AccordionComponent>[];
}) {
	// console.log("children",children)
	if (!children.length) {
		return;
	}


	return (
		<div id="accordion-container" className="w-full mx-6">
			{children}
		</div>
	);
}
/* ORIGINAL
    <div>
        <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
        </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>
    </div>
    */
