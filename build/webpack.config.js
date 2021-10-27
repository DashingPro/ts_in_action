import { merge } from 'webpack-merge'
import baseConfig from './webpack.base.config.js'
import devConfig from './webpack.dev.config.js'
import proConfig from './webpack.pro.config.js'

console.log(baseConfig);

let config = process.NODE_ENV === 'development' ? devconfig : proConfig
export default merge(baseConfig, config)