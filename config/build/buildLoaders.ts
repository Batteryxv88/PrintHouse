import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // const svgLoaderUrl = {
    //     test: /\.svg$/i,
    //     resourceQuery: /url/, // Если ?url, обрабатываем как URL
    //     type: 'asset/resource',
    // };
    // const svgLoaderComponent = {
    //     test: /\.svg$/i,
    //     use: ['@svgr/webpack'], // Остальные SVG будут как React-компоненты
    // };
    const svgLoader = {
        test: /\.svg$/i,
        oneOf: [
            {
                resourceQuery: /url/, // Обрабатываем `?url` как файл
                type: 'asset/resource',
            },
            {
                use: ['@svgr/webpack'], // Остальные SVG — React-компоненты
            },
        ],
    };
    

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    // Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader, // SVG как компонент
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
