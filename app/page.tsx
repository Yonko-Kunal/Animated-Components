"use client";

import Image from "next/image";
import React from "react";
import Headertext from "@/components/Headertext";
import Text from "@/components/Text";

export default function Home() {
	return (
		<div className="flex items-center justify-center h-screen">
			{/* <Headertext /> */}
			{/* <Text /> */}
			<h1 className="text-5xl font-semibold">Centered text</h1>
		</div>
	);
}
