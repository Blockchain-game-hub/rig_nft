import React from "react";
import { Element } from "react-scroll";
import "./App.css";
import Layout from "./components/Layout";
import { AboutSection } from "./sections/AboutSection";

function App() {
	return (
		<div className="App">
			<Layout>
				<AboutSection />
				<AboutSection />
				<AboutSection />
				<AboutSection />
				<AboutSection />
				<Element name="test1" className="element">
					<AboutSection />
				</Element>
			</Layout>
		</div>
	);
}

export default App;
