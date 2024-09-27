import { getItems, getTotalItems } from "@/app/lib/data/items/getItems";

export async function GET(request: Request) {
  console.log(process.env)
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const category = params.get("category");
  if (category === null) {
    return Response.error();
  }
  const limit: number | undefined =
    params.get("limit") != null
      ? parseInt(params.get("limit") as string)
      : undefined;

  const cursor: number | undefined =
    params.get("cursor") != null
      ? parseInt(params.get("cursor") as string)
      : undefined;

  const items = await getItems(category, limit, cursor);

  return Response.json({
    total: await getTotalItems("jackets"),
    cursor: items[items.length - 1]?.id ?? null,
    data: items,
  });
}
