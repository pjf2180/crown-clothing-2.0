const PRODUCTS_API_URL = `${process.env["NEXT_PUBLIC_APP_BASE_URL"]}/api/products`;

export async function getProducts(productCategory: string, cursor?: number) {
  console.log(PRODUCTS_API_URL);
  const url = new URL(PRODUCTS_API_URL);
  const params = new URLSearchParams(url.search);
  if (cursor != undefined) {
    params.set("cursor", cursor.toString());
  }
  params.set("limit", "10");
  params.set("category", productCategory);

  const response = await fetch(`${url.toString()}?${params.toString()}`);
  const x = await response.json();
  return x;
}
