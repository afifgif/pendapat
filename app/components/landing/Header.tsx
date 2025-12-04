"use client";

import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { colors } from "@/tokens";
import { icons } from "@/assets/assets";
// import Image from "next/image";

export function Header() {
	return (
		<header
			style={{
				backgroundColor: "white",
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				padding: "20px 0",
				width: "100%",
			}}
		>
			<nav
				style={{
					display: "flex",
					gap: "48px",
					alignItems: "center",
					width: "100%",
				}}
			>
				{/* Left Container */}
				<div
					style={{
						display: "flex",
						gap: "30px",
						alignItems: "center",
					}}
				>
					{/* Brand Logo */}
					<div
						style={{
							height: "33.4px",
							width: "156.999px",
							position: "relative",
						}}
					>
						{/* <Image
							src={icons.brandLogo}
							alt="Pendapat Logo"
							crossOrigin="anonymous"
							onError={(e) => {
								const target = e.target as HTMLImageElement;
								target.style.display = "none";
								target.parentElement!.innerHTML =
									'<div style="width:100%;height:100%;background:#f8f8f8;display:flex;align-items:center;justify-content:center;font-size:12px;color:#ccc">Logo</div>';
							}}
							style={{
								width: "100%",
								height: "100%",
								objectFit: "contain",
								display: "block",
							}}
						/> */}
					</div>

					{/* Menu Toggle */}
					<div
						style={{
							backgroundColor: colors.neutral[100],
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							padding: "8px 20px",
							borderRadius: "10px",
							gap: "8px",
						}}
					>
						<div
							style={{
								width: "24px",
								height: "24px",
								position: "relative",
								overflow: "hidden",
							}}
						>
							{/* <img
								src={icons.menu}
								alt="Menu"
								crossOrigin="anonymous"
								onError={(e) => {
									const target = e.target as HTMLImageElement;
									target.style.display = "none";
									target.parentElement!.innerHTML =
										'<div style="width:100%;height:100%;background:#f8f8f8;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#ccc">☰</div>';
								}}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
									display: "block",
								}}
							/> */}
						</div>
						<Typography
							variant="paragraph-small-regular"
							style={{
								fontFamily: "Euclid Circular A",
								fontSize: "16px",
								fontWeight: 500,
								lineHeight: "24px",
							}}
						>
							Menu
						</Typography>
					</div>
				</div>

				{/* Search Input */}
				<div
					style={{
						flex: 1,
						display: "flex",
						justifyContent: "center",
						minWidth: 0,
					}}
				>
					<div
						style={{
							backgroundColor: colors.neutral[100],
							display: "flex",
							gap: "18px",
							alignItems: "center",
							padding: "9px 16px",
							borderRadius: "10px",
							width: "526px",
							maxWidth: "100%",
						}}
					>
						<div
							style={{
								width: "20px",
								height: "20px",
								position: "relative",
								overflow: "hidden",
								flexShrink: 0,
							}}
						>
							{/* <img
								src={icons.search}
								alt="Search"
								crossOrigin="anonymous"
								onError={(e) => {
									const target = e.target as HTMLImageElement;
									target.style.display = "none";
									target.parentElement!.innerHTML =
										'<div style="width:100%;height:100%;background:#f8f8f8;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#ccc">🔍</div>';
								}}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
									display: "block",
								}}
							/> */}
						</div>
						<Typography
							variant="paragraph-small-regular"
							style={{
								color: colors.neutral[400],
								fontFamily: "Euclid Circular A",
								fontSize: "16px",
								fontWeight: 500,
								lineHeight: "20.541px",
							}}
						>
							Search
						</Typography>
					</div>
				</div>

				{/* Right Container */}
				<div
					style={{
						display: "flex",
						gap: "10px",
						alignItems: "center",
						flexShrink: 0,
					}}
				>
					{/* Login Link */}
					<div
						style={{
							padding: "8px 50px",
							borderRadius: "10px",
						}}
					>
						<Typography
							variant="button"
							style={{
								fontFamily: "Euclid Circular A",
								fontSize: "16px",
								fontWeight: 600,
								lineHeight: "24px",
								letterSpacing: "0px",
							}}
						>
							Log Masuk
						</Typography>
					</div>

					{/* Signup Button */}
					<Button variant="secondary" state="outline" size="medium">
						Daftar Masuk
					</Button>
				</div>
			</nav>
		</header>
	);
}
