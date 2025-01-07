export const initializeGA = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-GH94SH4XGZ"); // ضع رقم تتبع Google الخاص بك
  };
  