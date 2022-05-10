module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-react'],
	plugins: [
		[
			require.resolve('babel-plugin-module-resolver'),
			{
				extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
				root: ['.', './src', '../..', '../../src'],
				alias: {
					'@assets': [
						'./src/assets'
					],
					'@components': [
						'./src/components'
					],
					'@constants': [
						'./src/constants'
					],
					'@helpers': [
						'./src/helpers'
					],
					'@hooks': [
						'./src/hooks'
					],
					'@pages': [
						'./src/pages'
					],
					'@services': [
						'./src/services'
					],
					'@types': [
						'./src/types'
					],
					'@redux': [
						'./src/redux'
					]
				}
			}
		]
	]
}
