export async function FetchFakeStoreData(path: `/${string}`) {
    const res = await fetch(`https://localhost:3000${path}`);
    return res.json();
}