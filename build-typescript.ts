import { spawn } from 'child_process';

export default  () => { 
    const buildCommand = 'npx tsc';
    const typescriptBuildSpawn = spawn(buildCommand);
    
    typescriptBuildSpawn.on('error', (err: Error) => { 
        console.error('Error while building TypeScript files. Please restart the process. Error: ', err);
        
        process.exit(1);
    });
}



