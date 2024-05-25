import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
    projectId: '664fc97500211e8fe8ce',
    url: 'https://cloud.appwrite.io/v1',
    databaseId: '6650744e0019972468fd',
    storageId: '665073a4002daaada14e',
    userCollectionId: '665076f2001932253db7',
    postCollectionId: '665076cb00183104f86b',
    savesCollectionId: '6650770a001346cad30c'
}

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
