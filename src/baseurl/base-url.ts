const apiBaseURLOne = "https://api.api-store.workers.dev/api/bazardor";
const apiBaseURLTwo = "https://api.abcz.workers.dev/api/bazardor";
const apiMainURL = "https://openapi.programming-hero.com/api/bazardor";

export default async function getApiBaseURL() {
	const apiURLs = [apiMainURL, apiBaseURLOne, apiBaseURLTwo];

	for (const apiURL of apiURLs) {
		try {
			const res = await fetch(`${apiURL}/products`, {
				cache: "no-store",
			});

			if (res.ok) {
				return apiURL;
			}
		} catch (error) {
			console.error(`API unavailable: ${apiURL}`, error);
		}
	}

	throw new Error("All APIs are currently unavailable.");
}
