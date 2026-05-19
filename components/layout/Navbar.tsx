"use client";

import React from "react";
import Darkmode from "@/public/SVG/Darkmode";
import { Separator } from "@/components/ui/separator";
import { Command } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Navbar = () => {
	const { theme, resolvedTheme, setTheme } = useTheme();

	const navItems = [
		{
			name: "Components",
			href: "#components",
		},
		{
			name: "Blogs",
			href: "#blogs",
		},
		{
			name: "Templates",
			href: "#templates",
		},
		{
			name: "Pricing",
			href: "#pricing",
		},
	];
	return (
		<nav className="flex justify-between items-center 2xl:px-12 md:px-8 py-4 sticky top-0">
			<div className="flex items-center justify-center md:gap-4 2xl:gap-8">
				<div>
					<h1 className="text-2xl font-semibold">Image</h1>
				</div>
				<ul className="flex items-center justify-center md:gap-2 2xl:gap-8 text-[14px] font-medium">
					{navItems.map((item, index) => (
						<li key={index}>{item.name}</li>
					))}
				</ul>
			</div>
			<div className="flex items-center justify-center gap-4">
				<div className="flex items-center justify-center gap-3 border border-foreground/15 pl-2 pr-1 py-1 rounded-lg">
					<span className="text-[14px]">Search</span>
					<div className="flex items-center justify-center gap-1 px-2 bg-foreground/15 rounded-sm ring ring-foreground/20">
						<Command className="w-4 text-muted-foreground" />
						<span className="text-[12px] text-muted-foreground">K</span>
					</div>
				</div>

				<div
					className="cursor-pointer"
					onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
				>
					<Darkmode />
				</div>
				<Separator orientation="vertical" />

				<Button variant="link">Login</Button>
				<Button>Get Full-Access</Button>
			</div>
		</nav>
	);
};

export default Navbar;
