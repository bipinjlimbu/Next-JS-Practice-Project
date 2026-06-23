import { FakeStoreData } from "@/data/FakeStoreData";

export async function GET(req: Request, ctx: RouteContext<"/api/products/[id]">) {
    const { id } = await ctx.params;
    const product = FakeStoreData.find((item) => item.id === Number(id));
    if (!product) {
        return Response.json({ message: "Product not found" }, { status: 404 });
    }

    return Response.json(product);
}