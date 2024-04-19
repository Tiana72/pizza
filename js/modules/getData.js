import { hideLoader, showLoader } from "./loader.js";

export const getData = async (url) => {
    showLoader();
    try {
        const responce = await fetch(url);
        // const responce = await fetch('./../data/db.json');
        if (!responce.ok) {
            throw new Error('Failed');
        }
        return await responce.json();
    } catch (error) {
        console.error(`Error fetching progucts: ${error}`);
        return [];
    } finally {
        hideLoader()
    }
}
