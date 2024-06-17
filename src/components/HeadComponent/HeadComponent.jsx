import React from 'react'
import {Helmet} from 'react-helmet'
import '../../global.css'
import WebFont from 'webfontloader'
function HeadComponent() {

    React.useEffect(() => {
        WebFont.load({
          google: {
            families: [
              'Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic',
              'Sora:100,200,300,regular,500,600,700,800',
            ],
          },
        });
      }, []);

  return (
    <Helmet>
        <meta charset="utf-8" />
    <title>Schbang: Creative + Media + Technology Agency</title>
    <meta
      content="Leading creative, media, and technology-driven digital agency in India and the UK. Specializing in brand strategy and marketing, we provide innovative solutions to transform your brand in the digital landscape. Explore our services today."
      name="description"
    />
    <meta
      content="Schbang: Creative + Media + Technology Agency"
      property="og:title"
    />
    <meta
      content="Leading creative, media, and technology-driven digital agency in India and the UK. Specializing in brand strategy and marketing, we provide innovative solutions to transform your brand in the digital landscape. Explore our services today."
      property="og:description"
    />
    <meta
      content="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64841ede3cbfcd23c7595626_Temporary-Facebook-Featured-Image-Cover-1.jpg"
      property="og:image"
    />
    <meta
      content="Schbang: Creative + Media + Technology Agency"
      property="twitter:title"
    />
    <meta
      content="Leading creative, media, and technology-driven digital agency in India and the UK. Specializing in brand strategy and marketing, we provide innovative solutions to transform your brand in the digital landscape. Explore our services today."
      property="twitter:description"
    />
    <meta
      content="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64841ede3cbfcd23c7595626_Temporary-Facebook-Featured-Image-Cover-1.jpg"
      property="twitter:image"
    />
    <meta property="og:type" content="website" />
    <meta content="summary_large_image" name="twitter:card" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link
      href="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/css/schbang1.8204186b3.min.css"
      rel="stylesheet"
      type="text/css"
    />
  
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link
      href="https://fonts.gstatic.com"
      rel="preconnect"
      crossorigin="anonymous"
    />
    <script
      src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
      type="text/javascript"
    ></script>
    {/* <script type="text/javascript">
    {  `WebFont.load({
        google: {
          families: [
            "Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
            "Sora:100,200,300,regular,500,600,700,800",
          ],
        },
      });`}
    </script> */}
    <script
      src="https://use.typekit.net/qco7rai.js"
      type="text/javascript"
    ></script>
    <script type="text/javascript">
     {` try {
        Typekit.load();
      } catch (e) {}`}
    </script>
    <script type="text/javascript">
   {`   !(function (o, c) {
        var n = c.documentElement,
          t = " w-mod-";
        (n.className += t + "js"),
          ("ontouchstart" in o ||
            (o.DocumentTouch && c instanceof DocumentTouch)) &&
            (n.className += t + "touch");
      })(window, document);`}
    </script>
    <link
      href="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649a7faa42bc962c81b8c90f_Schbang%20Logomark%20(Custom)%20(1).png"
      rel="shortcut icon"
      type="image/x-icon"
    />
    <link
      href="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649a7f832922c16b172196b5_Schbang%20Logomark%20(Custom).png"
      rel="apple-touch-icon"
    />
    {/* <!-- Facebook Pixel Code --> */}
    <script>
      {`!(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", "428538613981080");
      fbq("track", "PageView");`}
    </script>
    <noscript>
     {` <img
        height="1"
        width="1"
        style="display: none"
        src="https://www.facebook.com/tr?id=428538613981080&ev=PageView&noscript=1"
      />`}
    </noscript>
    {/* <!-- End Facebook Pixel Code --> */}

    {/* <!-- Google tag (gtag.js) --> */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-T3B0TEEECZ"
    ></script>
     <script>
     { `window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-T3B0TEEECZ");`}
    </script> 
{/* 
     <!-- Google Tag Manager --> */}
    <script>
   {   `(function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-KZXTCZT");`}
    </script>
    {/* <!-- End Google Tag Manager -->  */}

  
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-109062015-1"
    ></script>
     <script>
     { `window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "UA-109062015-1");`}
    </script> 
<script type="application/ld+json">
{JSON.stringify(  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Schbang",
    "url": "https://www.schbang.com/",
    "logo": "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64804f295294d986354397af_logo%20animation1%20updated1.gif",
    "sameAs": [
      "https://www.facebook.com/schbang/",
      "https://www.instagram.com/letschbang/",
      "https://www.youtube.com/channel/UCYUF_b_ISfKkA0wHTvfQOrQ",
      "https://in.linkedin.com/company/letschbang"
    ]
  })}

  </script>

  <meta name="twitter:card" content= {"summary_large_image"}/>
  <meta name="twitter:image" content="https://assets.website-files.com/64081b3f2fda69c80b5566e5/641d89ea977db9180d1e206a_Schbang%20white1.png"/>
    
   
    <script type="application/ld+json">
     { JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Schbang",
        "url": "https://www.schbang.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "{search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })}
    </script>


    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.2/dist/css/splide-core.min.css"
    />

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.css"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.css"
    />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    </Helmet>
  )
}

export default HeadComponent