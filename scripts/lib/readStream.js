/**
 * Helper function to convert async Readable stream to
 * a Promise.
 * @param {Readable<string>} stream
 * @param {string} encoding
 * @returns Promise
 */
export const readStream = (stream, encoding = "utf8") => {
	stream.setEncoding(encoding);
	return new Promise((resolve, reject) => {
			let data = "";
			stream.on("data", chunk => { data += chunk });
			stream.on("end", () => resolve(data));
			stream.on("error", error => reject(error));
	});
}