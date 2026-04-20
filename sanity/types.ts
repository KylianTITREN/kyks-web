export type LocaleString = { fr?: string; en?: string };
export type LocaleText = { fr?: string; en?: string };
export type LocaleArray = { fr?: string[]; en?: string[] };

export type SanityImage = {
	_type: "image";
	asset: { _ref: string; _type: "reference" };
	hotspot?: { x: number; y: number; height: number; width: number };
};

export type Collaboration = {
	_id: string;
	name: string;
	slug: string;
	logo?: SanityImage;
	url?: string;
	role?: LocaleString;
	summary?: LocaleText;
	contributions?: LocaleArray;
	period?: string;
	featured?: boolean;
};

export type Project = {
	_id: string;
	name: string;
	slug: string;
	url?: string;
	cover?: SanityImage;
	tagline?: LocaleString;
	summary?: LocaleText;
	highlights?: LocaleArray;
	stack?: string[];
	category?: "vitrine" | "ecommerce" | "saas" | "mobile" | "tool";
	status?: "active" | "shipped" | "archived";
	year?: string;
	featured?: boolean;
};

export type Experience = {
	_id: string;
	company: string;
	role?: LocaleString;
	startDate: string;
	endDate?: string;
	location?: string;
	summary?: LocaleText;
	achievements?: LocaleArray;
	stack?: string[];
	url?: string;
};

export type SkillGroup = {
	_id: string;
	title?: LocaleString;
	skills?: string[];
};

export type Education = {
	_id: string;
	school: string;
	degree?: LocaleString;
	summary?: LocaleText;
	startDate?: string;
	endDate?: string;
	location?: string;
	url?: string;
};

export type SocialLink = {
	_id: string;
	label: string;
	url: string;
	platform?: "linkedin" | "github" | "x" | "notion" | "email" | "other";
	scope?: "kyks" | "kylian" | "both";
};

export type SiteSettings = {
	tagline?: LocaleString;
	pitch?: LocaleText;
	contactEmail?: string;
	openGraphImage?: SanityImage;
	kylianPortrait?: SanityImage;
};
