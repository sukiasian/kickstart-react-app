import __buildTypeScriptForProvider from "../build-typescript";


const { argv } = process;
let typescript = false;

if(argv.includes('--typescript')) {
    typescript = true;

    __buildTypeScriptForProvider();
}

const pathToConsumerProject = '../../../';

// /////////// babel используется webpack-ом - поэтому 

    // ../../../ will lead to a directory which uses 



// что будет если сделать так:

/* 

(async () => { 
    await installation.execReactScripts();
    await installation.execBabelScritps();
    await installation.execWebpackScripts();
}())

скорее всего в первый поток выстроятся await-ы анонимной функции, а когда они 
будут выполнены, затем последуют коллбэки этих анонимных функций. Чтобы решить проблему выполнения 
вебпак скриптов в последнюю очередь, нам нужно синхронно выполнить 


*/
