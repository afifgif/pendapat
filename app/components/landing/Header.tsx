"use client";

import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { colors } from "@/tokens";

export function Header() {
	return (
		<header
			className='bg-white flex flex-col gap-10px p-20px w-full'
	
			
		>
			<nav
				className='flex gap-48px items-center w-full'
			
				
			>
				{/* Left Container */}
				<div
					className='flex gap-30px items-center'
				
				>
					{/* Brand Logo */}
					<div 
						className='h-33.4px w-156.999px relative'
					>
						woi
					
					</div>

					{/* Menu Toggle */}
					<div className='bg-neutral-100 flex items-center justify-center p-8px rounded-10px gap-8px'
					>
						<div className='w-24px h-24px relative overflow-hidden'
						>
						woi
						
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
				<div className="flex-1 flex justify-center min-w-0"

				>
					<div className="bg-neutral-100 flex gap-18px items-center p-9px rounded-10px w-526px max-w-full"
	
					>
						<div 
							className='w-20px h-20px relative overflow-hidden flex-shrink-0'
						>
							woi
						
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
					className='flex gap-10px items-center flex-shrink-0'
				>
					{/* Login Link */}
					<div className='p-8px rounded-10px'
					>
						<Typography className='font-family-euclid-circular-a font-size-16px font-weight-600 line-height-24px letter-spacing-0px'
							variant="button"
							
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
