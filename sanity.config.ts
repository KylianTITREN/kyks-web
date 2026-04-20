import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
	name: "kyks-studio",
	title: "KYKS Studio",
	projectId,
	dataset,
	basePath: "/studio",
	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title("Contenu")
					.items([
						S.listItem()
							.title("Réglages site")
							.child(S.document().schemaType("siteSettings").documentId("siteSettings")),
						S.divider(),
						S.documentTypeListItem("collaboration").title("Collaborations"),
						S.documentTypeListItem("project").title("Projets"),
						S.divider(),
						S.listItem()
							.title("CV Kylian")
							.child(
								S.list()
									.title("CV Kylian")
									.items([
										S.documentTypeListItem("experience").title("Expériences"),
										S.documentTypeListItem("skillGroup").title("Compétences"),
										S.documentTypeListItem("education").title("Formation"),
									]),
							),
						S.documentTypeListItem("socialLink").title("Liens sociaux"),
					]),
		}),
		visionTool({ defaultApiVersion: apiVersion }),
	],
	schema: {
		types: schemaTypes,
	},
});
