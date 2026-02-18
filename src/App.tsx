
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import ContactForm from "./pages/ContactForm";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const RTLWrapper = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const isRTL = language === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <RTLWrapper>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/datenschutz" element={<Privacy />} />
              <Route path="/kontakt" element={<ContactForm />} />
              <Route path="/ueber-mich" element={<AboutMe />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </RTLWrapper>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
