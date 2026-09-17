export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const target = url.searchParams.get("url");

  if (!target) {
    return new Response("Parâmetro ?url= é obrigatório", { status: 400 });
  }

  try {
    const targetUrl = new URL(target);
    const response = await fetch(target, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "follow",
    });

    const contentType = response.headers.get("Content-Type") || "";

    // Remove headers que impedem iframe
    const newHeaders = new Headers(response.headers);
    newHeaders.set("Access-Control-Allow-Origin", "*");
    newHeaders.delete("X-Frame-Options");
    newHeaders.delete("Content-Security-Policy");
    newHeaders.delete("X-Content-Type-Options");
    newHeaders.delete("Content-Security-Policy-Report-Only");

    // Se não for HTML, só devolve (imagens, css, js, etc)
    if (!contentType.includes("text/html")) {
      return new Response(response.body, {
        status: response.status,
        headers: newHeaders,
      });
    }

    // === Reescreve o HTML ===
    class AttributeRewriter {
      constructor(attributeName) {
        this.attributeName = attributeName;
      }
      element(element) {
        const attr = element.getAttribute(this.attributeName);
        if (!attr) return;

        // Ignora âncoras e javascript:
        if (attr.startsWith("#") || attr.startsWith("javascript:") || attr.startsWith("data:")) return;

        try {
          // Transforma em URL absoluta
          const absolute = new URL(attr, targetUrl).href;
          // Passa pelo nosso proxy
          const proxied = `/proxy?url=${encodeURIComponent(absolute)}`;
          element.setAttribute(this.attributeName, proxied);
        } catch (e) {
          // ignora URLs inválidas
        }
      }
    }

    const rewriter = new HTMLRewriter()
      .on("a", new AttributeRewriter("href"))
      .on("link", new AttributeRewriter("href"))
      .on("img", new AttributeRewriter("src"))
      .on("script", new AttributeRewriter("src"))
      .on("iframe", new AttributeRewriter("src"))
      .on("source", new AttributeRewriter("src"))
      .on("video", new AttributeRewriter("src"))
      .on("audio", new AttributeRewriter("src"))
      .on("form", new AttributeRewriter("action"))
      .on("[data-src]", new AttributeRewriter("data-src"))
      .on("[data-href]", new AttributeRewriter("data-href"));

    return rewriter.transform(
      new Response(response.body, {
        status: response.status,
        headers: newHeaders,
      })
    );
  } catch (err) {
    return new Response("Erro ao buscar a URL: " + err.message, { status: 502 });
  }
}
