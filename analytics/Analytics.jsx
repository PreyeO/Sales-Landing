import Script from "next/script";
import React from "react";

const Analytics = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7BNBWJMF74"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
gtag('config', 'G-7BNBWJMF74');`}
      </Script>
    </>
  );
};

export default Analytics;
