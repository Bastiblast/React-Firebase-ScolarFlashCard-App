import "./App.css";
import Navbar from "./component/daisyui/Navbar.tsx";
import Accueil from "./container/Accueil.tsx";
import Entrainement from "./container/Entrainement.tsx";
import AdaptativeCarousel from "./container/AdaptativeCarousel.tsx";
import Statistiques from "./container/Statistiques.tsx";
import Examens from "./container/Examens.tsx";

function App() {
	const setThemePreference = () => {
		const themePreference = localStorage.getItem("theme");
		console.log("getThemePreference theme : ", themePreference);
		const navigationTheme =
			document.querySelector<HTMLHtmlElement>("html")!.dataset;
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		themePreference
			? (navigationTheme.theme = themePreference)
			: (navigationTheme.theme = "corporate");
	};

	setThemePreference();

	return (
		<>
			<Navbar />

			<AdaptativeCarousel>
				<div id="1">
					<label>Accueil</label>
					<Accueil />
				</div>

				<div id="2">
					<label>Statistiques</label>
					<Statistiques />
				</div>

				<div id="3">
					<label>Entrainement</label>
					<Entrainement />
				</div>

				<div id="4">
					<label>Résultat</label>
					<Examens />
				</div>
			</AdaptativeCarousel>

			<footer />
		</>
	);
}

export default App;
