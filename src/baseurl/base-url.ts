const apiBaseURLOne = "https://api.api-store.workers.dev/api/bazardor";
const apiBaseURLTwo = "https://api.abcz.workers.dev/api/bazardor";

export default async function getApiBaseURL() {
	try {
		const res = await fetch(`${apiBaseURLOne}/products`, {
			cache: "no-store",
		});

		if (res.ok) {
			return apiBaseURLOne;
		}
	} catch (error) {
		console.error("Primary API failed:", error);
	}

	return apiBaseURLTwo;
}
