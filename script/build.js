'use strict';
// const fs = require('fs');
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');
const rimraf = require('rimraf');
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.js');

const config = require('../config');

const spinner = ora({
    text: chalk.white.bgGreen.bold('Building...\n'),
    color: 'green'
});
spinner.start();

// 打包
const pack = () => {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig, (err, stats) => {
            spinner.stop();
            if (err) {
                reject(err.toString());
            }

            const info = stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n';
            console.log(info);
            if (stats.hasErrors()) {
                reject(chalk.white.bgRed.bold('Build Error.\n'));
            }
            resolve(chalk.white.bgGreen.bold('Build Complete.\n'));
        });
    });
};

// 清除文件
const clean = path => new Promise((resolve, reject) => {
    console.log(chalk.white.bgCyan.bold(`Remove ${path} \n`));
    rimraf(path, err => {
        if (err) {
            reject(err.toString());
        }
        console.log(chalk.white.bgCyan.bold('Remove Done.\n'));
        resolve();
    });
});

// 移动文件
// const move = (oldPath,newPath) => {
//     console.log(chalk.white.bgCyan.bold(`Move ${oldPath} to ${newPath} \n`));
//     return new Promise((resolve,reject) => {
//         fs.rename(oldPath,newPath,(e) => {
//             if(e){
//                 reject(e);
//             }
//             console.log(chalk.white.bgCyan.bold('Move Done.\n'));
//             resolve();
//         });
//     });

// };

const build = async () => {
    await clean(config.distDir);
    await pack();
    // await clean(config.publicDistDir);
    // await move(config.distDir,config.publicDistDir);

    return chalk.white.bgGreen.bold('Build Success.\n');
};

build().then(result => {
    spinner.succeed(result);
}).catch(err => {
    spinner.fail(err);
});

