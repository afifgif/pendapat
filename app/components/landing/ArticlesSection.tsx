"use client";

import { Typography } from "@/components/Typography";
import { Image } from "@/components/Image";
import { colors } from "@/tokens";
import { images, icons } from "@/assets/assets";

interface ArticleCardProps {
	category: string;
	date: string;
	title: string;
	description: string;
	imageUrl?: string;
}

function ArticleCard({
	category,
	date,
	title,
	description,
	imageUrl,
}: ArticleCardProps) {
	// Generate slug from title
	const slug = title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");

	return (
		<a
			href={`/articles/${slug}`}
			style={{
				flex: 1,
				border: `1px solid ${colors.neutral[200]}`,
				display: "flex",
				flexDirection: "column",
				gap: "20px",
				padding: "20px 20px",
				borderRadius: "10px",
				minHeight: "100%",
				color: "inherit",
				cursor: "pointer",
				transition: "all 0.2s ease",
				backgroundColor: "white",
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
				e.currentTarget.style.transform = "translateY(-2px)";
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.boxShadow = "none";
				e.currentTarget.style.transform = "translateY(0)";
			}}
		>
			{/* Thumbnail Image */}
			<div
				style={{
					width: "100%",
					height: "200px",
					borderRadius: "10px",
					position: "relative",
					overflow: "hidden",
				}}
			>
				{imageUrl ? (
					<img
					src={imageUrl}
					alt={title}
					crossOrigin="anonymous"
					onError={(e) => {
					const target = e.target as HTMLImageElement
					target.style.display = 'none'
					if (target.parentElement) {
					  target.parentElement.style.background = colors.neutral[200]
					}
					}}
					style={{
					 width: '100%',
					 height: '100%',
					 objectFit: 'cover',
					 display: 'block',
					 position: 'absolute',
					 top: 0,
					 left: 0
				   }}
					/>
				) : (
					<div
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: colors.neutral[200],
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Typography
							variant="caption-regular"
							style={{ color: colors.neutral[400] }}
						>
							Article Image
						</Typography>
					</div>
				)}
			</div>

			{/* Content */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "12px",
					flex: 1,
					
				}}
			>
				{/* Category and Date */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "8px",
					}}
				>
					<Typography
						variant="paragraph-small-bold"
						style={{
							color: colors.neutral[600],
							letterSpacing: "1px",
							lineHeight: "120%",
						}}
					>
						{category}
					</Typography>
					<Typography
						variant="caption-regular"
						style={{ 
							color: colors.neutral[500]
						}}
					>
						{date}
					</Typography>
				</div>

				{/* Title */}
				<Typography variant="subheadline-bold">{title}</Typography>

				{/* Description */}
				<Typography
					variant="caption-regular"
					style={{ 
						color: colors.neutral[500],
						lineHeight: '1.2'
					}}
				>
					{description}
				</Typography>
			</div>
		</a>
	);
}

export function ArticlesSection() {
	const articles = [
		{
			category: "Sukan",
			date: "March, 29, 2022",
			title: "Prestasi sukan negara makin 'ke laut'?",
			description:
				"Sukan SEA baru saja melabuhkan tirai di Vietnam untuk edisi kali ini dengan Vietnam selaku tuan rumah, muncul juara temasya dwitahunan ini seperti dijangka...",
			imageUrl: images.articleImage1,
		},
		{
			category: "Sukan",
			date: "March, 29, 2022",
			title:
				"30 tahun kemarau juara Piala Thomas, Malaysia bakal jadi pasukan 'lauk'?",
			description:
				"Ibarat terus dihimpit kegagalan skuad badminton negara terus kempunan setelah tersingkir dalam persaingan Piala Thomas 2022 setelah tewas kepada India...",
			imageUrl: images.articleImage2,
		},
		{
			category: "Isu Semasa",
			date: "March, 29, 2022",
			title:
				"Adakah KPDNHEP sedang buat tindakan betul untuk jaga kebajikan rakyat?",
			description:
				"Inflasi makanan Malaysia dijangka kekal dalam aliran meningkat pada bulan-bulan akan datang berikutan kenaikan harga komoditi global,...",
			imageUrl: images.articleImage3,
		},
		{
			category: "Isu Semasa",
			date: "March, 29, 2022",
			title:
				"Adakah KPDNHEP sedang buat tindakan betul untuk jaga kebajikan rakyat?",
			description:
				"Inflasi makanan Malaysia dijangka kekal dalam aliran meningkat pada bulan-bulan akan datang berikutan kenaikan harga komoditi global,...",
			imageUrl: images.articleImage1,
		},
	];

	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "28px",
				width: "100%",
				padding: "0 100px",
			}}
		>
			{/* Section Header */}
			<div
				style={{
					display: "flex",
					gap: "50px",
					alignItems: "center",
					width: "100%",
				}}
			>
				<Typography
					variant="heading-h2-bold"
					style={{
						color: colors.secondary[500],
						letterSpacing: "1px",
					}}
				>
					Artikel
				</Typography>
				<div
					style={{
						flex: 1,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "12px",
					}}
				>
					{/* <img
						src={images.decorativeLine}
						alt=""
						crossOrigin="anonymous"
						onError={(e) => {
							const target = e.target as HTMLImageElement;
							target.style.display = "none";
							if (target.parentElement) {
								target.parentElement.style.background = colors.neutral[200];
								target.parentElement.style.height = "1px";
							}
						}}
						style={{
							width: "100%",
							height: "100%",
							objectFit: "contain",
							transform: "rotate(180deg)",
						}}
					/> */}
				</div>
			</div>

			{/* Articles Grid */}
			<div
				style={{
					display: "flex",
					gap: "20px",
					width: "100%",
				}}
			>
				{articles.map((article, index) => (
					<ArticleCard
						key={index}
						category={article.category}
						date={article.date}
						title={article.title}
						description={article.description}
						imageUrl={article.imageUrl}
					/>
				))}
			</div>

			{/* View More Link */}
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
					width: "100%",
				}}
			>
				<a
					href="/articles"
					style={{
						display: "flex",
						gap: "10px",
						alignItems: "center",
						padding: "10px",
						cursor: "pointer",
						textDecoration: "none",
						transition: "opacity 0.2s ease",
						marginBottom: '20px',
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.opacity = "0.8";
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.opacity = "1";
					}}
				>
					<Typography
						variant="footer-regular"
						style={{
							color: colors.secondary[300],
							letterSpacing: "1px",
						}}
					>
						Lihat lebih artikel
					</Typography>
					<Image
						src={icons.arrowRight}
						alt="Arrow right"
						fallback={<span style={{ color: '#10e06a', fontSize: '20px' }}>→</span>}
						style={{
							width: "24px",
							height: "24px",
							objectFit: "contain",
						}}
					/>
				</a>
			</div>
		</section>
	);
}
