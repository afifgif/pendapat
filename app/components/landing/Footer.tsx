"use client";

import { Typography } from "@/components/Typography";
import { colors } from "@/tokens";
import Link from "next/link";
import { icons } from "@/assets/assets";

export function Footer() {
	const socialIcons = [
		{
			name: "Facebook",
			icon: icons.facebook,
			href: "https://www.facebook.com",
		},
		{
			name: "Instagram",
			icon: icons.instagram,
			href: "https://www.instagram.com",
		},
		{ 
			name: "GitHub", 
			icon: icons.github,
			href: "https://www.github.com" 
		},
	];

	return (
		<footer style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			width: '100%',
			padding: '0 100px'
		}}>
			<Typography
				variant="paragraph-small-regular"
				style={{ 
					color: colors.base.dark,
					fontFamily: "Euclid Circular A",
					fontSize: "16px",
					fontWeight: 400,
					lineHeight: "24px"
				}}
			>
				© 2025 Pendapat. All rights reserved.
			</Typography>

			<div style={{
				display: 'flex',
				gap: '24px',
				alignItems: 'center'
			}}>
				{socialIcons.map((social, index) => (
					<Link
						key={index}
						href={social.href}
						style={{
							display: 'flex',
							alignItems: 'center',
							cursor: 'pointer',
							textDecoration: 'none',
							overflow: 'hidden',
							width: '24px',
							height: '24px',
							position: 'relative'
						}}
						title={social.name}
						aria-label={social.name}
					>
						<div style={{
							width: '100%',
							height: '100%',
							position: 'relative',
							overflow: 'hidden'
						}}>
							<img 
								src={social.icon} 
								alt={social.name}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'contain',
									display: 'block'
								}}
							/>
						</div>
					</Link>
				))}
			</div>
		</footer>
	);
}
