export default async function FetchFakeStoreAPI(path: `/${string}`) {
    const res = await fetch(`https://fakestoreapi.com${path}`);
    return res.json();
}