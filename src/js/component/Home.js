import React from "react";

import Counter from "./Counter";
import Navbar from "./Navbar";


//create your first component
const Home = ({ counters }) => {


	return (
		<div>
			<Navbar />
			<Counter
				counters={counters}
				
			/>
		</div>
	);
};

export default Home;
