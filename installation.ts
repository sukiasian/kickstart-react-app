import * as fs from 'fs';
import { promisify  } from 'util';
import { exec } from "child_process";

const readFile = promisify(fs.readFile);

/* 

Что должен делать проект-потребитель? 

Он должен получить webpack, запустить его. 
Как это сделать ? 

Для этого нам нужны скрипты проекта-продюсера которые запустятся из проекта-потребителя.

Какие именно скрипты ? webpack.

Следующий вопрос - можем ли мы обратиться к модулям node проекта продюсера из проекта потребителя ? 


*/

const spawnWebpackScripts = (typeScript: boolean): void => { 
    // выполнить установки
    // сгенерировать конфигурационный файл в ../../../

    // а что делать если есть typescript ? тогда установить ts-loader 

    
}

const spawnBabelScripts = async (typeScript: boolean): Promise<void>  => { 
    // 1. установить babel, babel-cli, babel-react-preset 

    /* 
    
    
    
    */

    // const babelScript = readFile()
}

const spawnReactScripts = (): void => { 
    // установить react 
}

const spawnTypeScriptScripts = (): void  => {
    // первым должен пойти typescript
    // добавить в конфигурационный файл 


};


module.exports = { 
    spawnWebpackScripts,
    spawnBabelScripts,
    spawnReactScripts,
    spawnTypeScriptScripts
}