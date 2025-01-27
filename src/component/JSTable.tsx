import { useEffect, useState } from "react";

export function JSTable() {
	const [data, setData] = useState<Array<JSPlaceholderElement>>([]);
	const renderHeadItem = () => (
		<tr>
			<th>userId</th>
			<th>title</th>
			<th>completed</th>
		</tr>
	);
	const renderBodyItem = (item: JSPlaceholderElement) => {
		return (
			<tr key={item.id}>
				<td>{item.userId}</td>
				<td>{item.title}</td>
				<td>{item.completed.toString()}</td>
			</tr>
		);
	};

	useEffect(() => {
		fetch(
			"https://jsonplaceholder.typicode.com/todos/",
		).then(response => response.json())
		.then(json => setData(json));

		return () => {};
	}, []);

	useEffect(() => {
		//  console.log("data",data)
		console.log(
			"groupby test",
			Object.groupBy(data, function (item) {
				return item.completed.toString();
			}),
		);

		// console.log("liste",liste)

		return () => {};
	}, [data]);

	return (
		<div className="App bg-slate-700">
			<table>
				<thead>{renderHeadItem()}</thead>
				<tbody>{data.map((item) => renderBodyItem(item))}</tbody>
			</table>
		</div>
	);
}
