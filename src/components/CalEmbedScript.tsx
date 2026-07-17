import Script from "next/script";
import { site } from "@/lib/site";

export function CalEmbedScript() {
  return (
    <Script
      id="cal-embed"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function (C, A, L) {
            let p = function (a, ar) {
              a.q.push(ar);
            };
            let d = C.document;
            C.Cal = C.Cal || function () {
              let cal = C.Cal;
              let ar = arguments;
              if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];
                d.head.appendChild(d.createElement("script")).src = A;
                cal.loaded = true;
              }
              if (ar[0] === L) {
                const api = function () {
                  p(api, arguments);
                };
                const namespace = ar[1];
                api.q = api.q || [];
                typeof namespace === "string"
                  ? (cal.ns[namespace] = api) && p(api, ar)
                  : p(cal, ar);
                return;
              }
              p(cal, ar);
            };
          })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "${site.bookingCalNamespace}", { origin: "https://cal.com" });
          Cal.ns["${site.bookingCalNamespace}"]("preload", { calLink: "${site.bookingCalLink}" });
          Cal.ns["${site.bookingCalNamespace}"]("ui", {
            theme: "dark",
            styles: { branding: { brandColor: "#ff5c29" } },
            hideEventTypeDetails: false,
            layout: "month_view"
          });
        `,
      }}
    />
  );
}
