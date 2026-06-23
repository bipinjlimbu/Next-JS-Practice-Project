import { FakeStoreData } from "@/data/FakeStoreData";

export async function GET(request: Request) {
    const data = await FakeStoreData;
    return new Response(JSON.stringify(data));
}