import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "./env";

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn,
	perspective: "published",
});

/**
 * Server-side client with token — sees drafts + published.
 * Use for data fetching in server components / route handlers.
 * Never expose this client to the browser.
 */
export const previewClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
	perspective: "previewDrafts",
	token: process.env.SANITY_API_TOKEN,
});
