import { defineConfig } from 'umi';
import CONFIG from '../config';
import CaseSensitivePathsWabpackPlugin from 'case-sensitive-paths-webpack-plugin';

export default defineConfig({
    chainWebpack(config, { webpack }) {
        config
            .plugin('case-sensitive-paths-webpack-plugin')
            .use(CaseSensitivePathsWabpackPlugin, [{ debug: true }]);
    },
    title: CONFIG.title,
    nodeModulesTransform: {
        type: 'none',
    },
    hash: true,
    routes: [
        {
            path: '/',
            component: '@/pages/index',
            exact: true,
        },
        {
            path: '/',
            component: '@/pages/board/board',
            exact: false,
        },
    ],
    proxy: {
        '/data': {
            // target: 'https://board.xcpcio.com',
            target: 'http://data.top',
            changeOrigin: true,
        },
    },
    publicPath: CONFIG.publicPath,
});
