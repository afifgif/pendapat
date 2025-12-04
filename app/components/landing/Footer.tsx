"use client";

import { Typography } from "@/components/Typography";
import { colors } from "@/tokens";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
	const socialIcons = [
		{
			name: "Facebook",
			icon: <Facebook />,
			href: "https://www.facebook.com",
		},
		{
			name: "Instagram",
			icon: <Instagram />,
			href: "https://www.instagram.com",
		},
		{ name: "Twitter", icon: <Twitter />, href: "https://www.twitter.com" },
	];

	return (
		<footer className="flex items-center justify-between w-full p-5">
			<Typography
				variant="paragraph-small-regular"
				style={{ color: colors.base.dark }}
			>
				© 2025 Pendapat. All rights reserved.
			</Typography>

			<div className="flex gap-6 items-center">
				{socialIcons.map((social, index) => (
					<Link
						key={index}
						href={social.href}
						className="size-6 flex items-center justify-center cursor-pointer text-decoration-none"
						title={social.name}
						aria-label={social.name}
					>
						{social.icon}
					</Link>
				))}
			</div>
		</footer>
	);
}
