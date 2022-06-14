export const request = async(url: string) => {
	return fetch(url)
		.then(response => response.json())
		.catch(error => { throw new Error(error) })
}