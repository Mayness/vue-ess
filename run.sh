#!/bin/bash

function pull_work() {
    git pull > /dev/null
    if [ $? = 0 ]
    then
        echo '( 1 )拉取成功，正在下载依赖...'
        install_work
    else
        echo -e '\n拉取失败'
    fi
}

function install_work() {
    npm install > /dev/null
    if [ $? = 0 ]
    then
        echo -e '\n( 2 )依赖下载成功，正在构建中...'
        build_work
    else
        echo -e '\n依赖下载失败'
    fi
}

function build_work() {
    npm run build > /dev/null
    if [ $? = 0 ]
    then
        echo -e '\n( 3 )构建成功，正在部署...'
        run_work
    else
        echo -e '\n构建失败'
    fi
}

function run_work() {
    npm run startup:config > /dev/null
    if [ $? = 0 ]
    then
        echo -e '\n( 4 )部署成功'
    else
        echo -e '\n部署失败'
    fi
}

pull_work