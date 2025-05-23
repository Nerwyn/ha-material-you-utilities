/**
 * Asynchronous query selector
 * @param {ParentNode} parent Element to query
 * @param {string} selector Query selector string
 * @param {number} [timeout=60000] Timeout until promise rejection in milliseconds, defaults to 60000
 * @returns {Promise<HTMLElement>} The queried element
 */
export async function querySelectorAsync(
	parent: ParentNode,
	selector: string,
	timeout: number = 60000,
): Promise<HTMLElement> {
	return new Promise((resolve, reject) => {
		const element = parent.querySelector(selector) as HTMLElement;
		if (element) {
			resolve(element);
		}

		const rejectTimeout = setTimeout(
			() =>
				reject(
					`Timeout waiting for ${selector} in ${parent} after ${timeout}ms.`,
				),
			timeout,
		);

		const observer = new MutationObserver(() => {
			const element = parent.querySelector(selector) as HTMLElement;
			if (element) {
				clearTimeout(rejectTimeout);
				observer.disconnect();
				resolve(element);
			}
		});
		observer.observe(parent, { childList: true, subtree: true });
	});
}

/**
 * Asynchronous getter which waits for value to not be either undefined or null
 * @param {Node} element node to get value from
 * @param {string} key key to get value of
 * @param {number} [timeout=60000] Timeout until promise rejection in milliseconds, defaults to 60000
 * @returns {Promise<any>} The defined value
 */
export async function getAsync(
	element: Node,
	key: string,
	timeout: number = 60000,
): Promise<any> {
	let sleep = 1;
	setTimeout(() => (sleep = 10), 100);
	setTimeout(() => (sleep = 100), 1000);
	setTimeout(() => (sleep = 1000), 5000);

	let kill = false;
	setTimeout(() => (kill = true), timeout);

	while (!(key in element) || element[key as keyof object] == null) {
		if (kill) {
			console.error(
				`Timeout waiting for ${key} in ${element} after ${timeout}ms.`,
			);
			break;
		}
		await new Promise((resolve) => setTimeout(resolve, sleep));
	}
	return element[key as keyof object];
}
