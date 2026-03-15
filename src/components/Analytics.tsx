import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

/**
 * Conditionally loads the Google Analytics script.
 * Only renders when NEXT_PUBLIC_GA_ID is set.
 * Uses next/script with strategy='afterInteractive' for optimal loading.
 */
export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'denied',
          });
          gtag('config', '${GA_ID}', {
            page_title: document.title,
            send_page_view: true,
          });
        `}
      </Script>
    </>
  );
}
