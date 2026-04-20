import { urlForImage } from "@/sanity/image";
import type { SanityImage } from "@/sanity/types";
import Image from "next/image";

type Props = {
	cover?: SanityImage;
	name: string;
};

const initials = (name: string): string =>
	name
		.split(/\s+/)
		.map((part) => part[0])
		.filter(Boolean)
		.slice(0, 2)
		.join("")
		.toUpperCase();

export function ProjectCover({ cover, name }: Props) {
	if (cover) {
		return (
			<div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)]">
				<Image
					src={urlForImage(cover).width(960).height(600).fit("crop").url()}
					alt={name}
					fill
					sizes="(max-width: 768px) 100vw, 50vw"
					className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
				/>
			</div>
		);
	}

	return (
		<div
			aria-hidden
			className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-alt)]"
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,var(--color-accent)_0%,transparent_40%)] opacity-[0.12]" />
			<div className="absolute inset-0 flex items-center justify-center">
				<span className="font-[var(--font-display)] text-[clamp(3rem,8vw,5rem)] font-medium leading-none tracking-[-0.04em] text-[var(--color-text)]/30">
					{initials(name)}
				</span>
			</div>
			<div
				className="absolute right-6 top-6 h-5 w-5 rotate-45 bg-[var(--color-accent)]"
				aria-hidden
			/>
		</div>
	);
}
