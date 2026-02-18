import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslations } from "../utils/translations";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const t = useTranslations(language);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-8xl md:text-9xl heading-style text-primary mb-6">404</h1>
          <p className="text-2xl md:text-3xl heading-style mb-4">{t.notFound.title}</p>
          <p className="body-style text-lg mb-8">{t.notFound.message}</p>
          <Link
            to="/"
            className="cta-button inline-block"
          >
            {t.notFound.backToHome}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
