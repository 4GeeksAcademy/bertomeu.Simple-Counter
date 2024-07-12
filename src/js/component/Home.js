import React from "react";

import Counter from "./Counter";
import Navbar from "./Navbar";


//create your first component
const Home = ({ numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix }) => {


	return (
		<div>
			<Navbar />
			<Counter
				numberOne={numberOne}
				numberTwo={numberTwo}
				numberThree={numberThree}
				numberFour={numberFour}
				numberFive={numberFive}
				numberSix={numberSix}
			/>
		</div>
	);
};

export default Home;
