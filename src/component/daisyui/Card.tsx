import { Component } from "react";

export default class Card extends Component {
	render() {
		return (
			<div className="shadow-xl card bg-secondary-100 w-96">
				<div className="card-body">
					<h2 className="card-title">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
				</div>
				<figure>
					<img
						src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
						alt="Shoes"
					/>
				</figure>
			</div>
		);
	}
}
