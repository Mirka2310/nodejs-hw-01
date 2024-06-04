import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
    // Читання даних з файлу
    const read = await fs.readFile(PATH_DB, 'utf-8');
    const myArray = JSON.parse(read);

    // Відбір контактів
    const thanos = myArray.filter(() => Math.random() >= 0.5);

    // Підготовка даних для запису
    const update = JSON.stringify(thanos, null, 2);

    // Запис у файл db.json
    await fs.writeFile(PATH_DB, update + '\n');

    // Вивід результату у консоль
    console.log(thanos);
};

await thanos();
