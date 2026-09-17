export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  const target = url.searchParams.get("url");

  if (!target) {
    return new Response("Parâmetro ?url= é obrigatório", { status: 400 });
  }

  try {
    const response = await fetch(target, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "follow",
    });

    const newHeaders = new Headers(response.headers);
    newHeaders.set("Access-Control-Allow-Origin", "*");
    newHeaders.delete("X-Frame-Options");
    newHeaders.delete("Content-Security-Policy");
    newHeaders.delete("X-Content-Type-Options");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  } catch (err) {
    return new Response("Erro ao buscar a URL: " + err.message, { status: 502 });
  }
}
