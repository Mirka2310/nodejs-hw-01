import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
    
    const read = await fs.readFile( PATH_DB, 'utf-8');
    const myArray = JSON.parse(read);

  
    const thanos = myArray.filter(() => Math.random() >= 0.5);

   
    const update = JSON.stringify(thanos, null, 2);

    await fs.writeFile('filtered_data.json', update + '\n');

    console.log(thanos);
};

await thanos();
