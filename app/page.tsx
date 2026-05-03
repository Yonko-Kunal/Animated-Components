"use client";

import Image from "next/image";
import React from "react";

import AnimatedHeader from "@/components/AnimatedHeader/AnimatedHeader";

export default function Home() {
	return (
		<div>
			<div className="bg-[#2b0350] text-[#c67de1] flex items-center justify-center h-screen w-full">
				<AnimatedHeader>
					<h1 className="text-8xl font-bold text-center w-[30%]">
						Batman is the real GOAT
					</h1>
				</AnimatedHeader>
			</div>
			<div className="flex items-center justify-center h-screen w-full">
				<AnimatedHeader animateOnScroll>
					<h1 className="text-8xl font-bold text-center w-[30%]">
						Batman is the real GOAT
					</h1>
				</AnimatedHeader>
			</div>
			<div className="bg-[#2f4f07] text-[#9ee781] flex items-center justify-center h-screen w-full">
				<AnimatedHeader scrub>
					<h1 className="text-6xl font-bold text-center w-[70%]">
						Batman is the real GOAT
					</h1>
				</AnimatedHeader>
			</div>
		</div>
	);
}
