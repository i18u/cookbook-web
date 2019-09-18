module.exports = {
	devServer: {
		proxy: {
			'^/api/ingredient': {
				target: 'http://ingredients:80'
			},
			'^/api/files': {
				target: 'http://files:80'
			}
		}
	}
};