"use client";

import { Typography } from "@/components/Typography";
import { colors } from "@/tokens";
import iconCommunity from "@/assets/icon/Icon-community.svg";
import iconPeka from "@/assets/icon/Icon-peka.svg";
import iconData from "@/assets/icon/Icon-data.svg";
import iconHand from "@/assets/icon/Icon-hand.svg";

interface FeatureCardProps {
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
	title: string;
	description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
	// Check if icon is a React component (function) or a string URL
	const isReactComponent = typeof icon === "function" || (typeof icon === "object" && icon !== null && "$$typeof" in icon);
	const IconComponent = isReactComponent ? icon as React.ComponentType<React.SVGProps<SVGSVGElement>> : null;
	const iconUrl = typeof icon === "string" ? icon : null;
	
	return (
		<div
			style={{
				flex: 1,
				backgroundColor: "white",
				display: "flex",
				flexDirection: "column",
				gap: "12px",
				alignItems: "center",
				padding: "48px",
				borderRadius: "16px",
				minHeight: "100%",
			}}
		>
			{/* Icon */}
			<div
				style={{
					width: "54.966px",
					height: "52px",
					position: "relative",
					borderRadius: "10px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					overflow: "hidden",
					marginBottom: "12px",
					marginTop: "12px",
					backgroundColor: colors.success[400],
				}}
			>
				{iconUrl ? (
					<img
						src={iconUrl}
						alt=""
						style={{
							width: "47.567px",
							height: "45px",
							objectFit: "contain",
							display: "block",
						}}
					/>
				) : IconComponent ? (
					<IconComponent
						width="47.567"
						height="45"
						style={{
							display: "block",
						}}
					/>
				) : null}
			</div>

			{/* Title */}
			<Typography
				variant="subheadline-bold"
				style={{
					textAlign: "center",
					letterSpacing: "1px", 
					lineHeight: "100%"
				}}
			>
				{title}
			</Typography>

			{/* Description */}
			<Typography
				variant="paragraph-small-regular"
				style={{
					textAlign: "center",
					color: colors.base.black,
					lineHeight: "120%",
				}}
			>
				{description}
			</Typography>
		</div>
	);
}

export function FeaturesSection() {
	const features = [
		{
			icon: iconCommunity,
			title: "Interaksi bersama komuniti",
			description: "Suarakan pandangan dengan kritis dan jelas",
		},
		{
			icon: iconPeka,
			title: "Sentiasa peka pada isu-isu semasa",
			description: "Melahirkan generasi yang sentiasa mengambil tahu.",
		},
		{
			icon: iconData,
			title: "Ketahui fakta melalui data dunia sebenar",
			description: "Memanfaatkan data untuk kebaikan bersama.",
		},
		{
			icon: iconHand,
			title: "Perjuangkan hak digital anda",
			description: "Hak digital anda adalah kebebasan bersuara anda.",
		},
	];

	return (
		<section
			style={{
				backgroundColor: colors.neutral[100],
				display: "flex",
				flexDirection: "column",
				gap: "32px",
				alignItems: "center",
				justifyContent: "center",
				padding: "50px 100px",
				width: "100%",
			}}
		>
			<Typography
				variant="heading-h2-bold"
				as="h2"
				style={{
					textAlign: "center",
					letterSpacing: "1px",
					lineHeight: "100%",
					maxWidth: "828px",
				}}
			>
				Sertai kaji selidik dan nyatakan pendapat anda tentang isu ini.
			</Typography>

			<div
				style={{
					display: "flex",
					gap: "20px",
					width: "100%",
					alignItems: "stretch",
				}}
			>
				{features.map((feature, index) => (
					<FeatureCard
						key={index}
						icon={feature.icon}
						title={feature.title}
						description={feature.description}
					/>
				))}
			</div>
		</section>
	);
}
