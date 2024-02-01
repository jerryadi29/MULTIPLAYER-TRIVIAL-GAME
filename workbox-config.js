module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{png,json,jpg,ico,html,txt,css,js}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};