type Props = {
	eyebrow: string;
	title: string;
	description?: string;
};

export function SectionHeader({ eyebrow, title, description }: Props) {
	return (
		<div className="mb-10 max-w-3xl md:mb-14">
			<span className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
				<span aria-hidden className="accent-diamond" />
				{eyebrow}
			</span>
			<h2 className="text-[var(--text-4xl)] font-medium leading-[1.1] tracking-[-0.03em]">
				{title}
			</h2>
			{description ? (
				<p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">{description}</p>
			) : null}
		</div>
	);
}
