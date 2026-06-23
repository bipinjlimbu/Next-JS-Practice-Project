export default async function FetchFakeStoreData(path: `/${string}`) {
    const res = await fetch(`http://localhost:3000${path}`);
    return await res.json();
}