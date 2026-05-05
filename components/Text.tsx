import React from "react";
import TextAnimation from "./AnimatedText/AnimatedText";

const Text = () => {
	return (
		<div>
			<div className="w-full h-screen bg-black text-white flex items-center justify-center">
				<TextAnimation delay={0.5}>
					<p className="2xl:text-5xl lg:text-3xl md:text-2xl font-bold w-[60%]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
						quia minus soluta unde nemo repellat eius maxime esse cupiditate
						aliquam dolore in ipsa, numquam ex possimus sequi animi excepturi
						modi?
					</p>
				</TextAnimation>
			</div>
			<div className="w-full h-screen bg-[#2f4f07] text-[#9ee781] flex items-center justify-center">
				<TextAnimation>
					<p className="2xl:text-5xl lg:text-3xl md:text-2xl font-bold w-[60%]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
						quia minus soluta unde nemo repellat eius maxime esse cupiditate
						aliquam dolore in ipsa, numquam ex possimus sequi animi excepturi
						modi?
					</p>
				</TextAnimation>
			</div>
			<div className="w-full h-screen bg-black text-white flex items-center justify-center">
				<TextAnimation>
					<p className="2xl:text-5xl lg:text-3xl md:text-2xl font-bold w-[60%]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
						quia minus soluta unde nemo repellat eius maxime esse cupiditate
						aliquam dolore in ipsa, numquam ex possimus sequi animi excepturi
						modi?
					</p>
				</TextAnimation>
			</div>
		</div>
	);
};

export default Text;
