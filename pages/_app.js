import { useState } from "react";
import Navbar from "../components/Navbar";
import ContactSlideover from "../components/ContactSlideover";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  // ⚠️ YOUR GOOGLE ANALYTICS MEASUREMENT ID (G-EKCZSW6Q1B) IS DIRECTLY ADDED HERE
  const GA_ID = "G-EKCZSW6Q1B";

  return (
    <ThemeProvider>
      {/* Google Analytics - Script 1: Loads the core gtag library */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      {/* Google Analytics - Script 2: Initializes gtag and sends the config command */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>

      <Navbar openContact={openContact} />
      <Component {...pageProps} openContact={openContact} />
      <ContactSlideover isOpen={isContactOpen} onClose={closeContact} />
    </ThemeProvider>
  );
}

export default MyApp;