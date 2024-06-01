import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  const data = 'Some data to write to the file';
  await fs.writeFile(PATH_DB, data, 'utf-8');
};

await addOneContact();
