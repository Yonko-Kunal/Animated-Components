"use client";

import Image from "next/image";
import React from "react";

import AnimatedHeader from "@/components/AnimatedHeader/AnimatedHeader";

export default function Home() {
	const textStyle =
		"2xl:text-8xl md:text-7xl text-5xl font-bold text-center 2xl:w-[30%] md:w-[40%] w-[70%]";
	return (
		<div>
			<div className="bg-[#2b0350] text-[#c67de1] flex items-center justify-center h-screen w-full">
				<AnimatedHeader>
					<h1 className={`${textStyle}`}>Batman is the real GOAT</h1>
				</AnimatedHeader>
			</div>
			<div className="flex items-center justify-center h-screen w-full bg-black text-white">
				<AnimatedHeader animateOnScroll>
					<h1 className={`${textStyle}`}>Batman is the real GOAT</h1>
				</AnimatedHeader>
			</div>
			<div className="bg-[#2f4f07] text-[#9ee781] flex items-center justify-center h-screen w-full">
				<AnimatedHeader scrub>
					<h1 className={`${textStyle}`}>Batman is the real GOAT</h1>
				</AnimatedHeader>
			</div>
		</div>
	);
}
