
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Send, Hand } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';

const ContactForm = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = useTranslations(language);
  
  const formSchema = z.object({
    name: z.string().min(2, language === 'de' ? 'Name muss mindestens 2 Zeichen lang sein' : 'Name must be at least 2 characters long'),
    email: z.string().email(language === 'de' ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein' : 'Please enter a valid email address'),
    company: z.string().optional(),
    phone: z.string().optional(),
    subject: z.string().min(5, language === 'de' ? 'Betreff muss mindestens 5 Zeichen lang sein' : 'Subject must be at least 5 characters long'),
    message: z.string().min(10, language === 'de' ? 'Nachricht muss mindestens 10 Zeichen lang sein' : 'Message must be at least 10 characters long'),
  });

  type FormData = z.infer<typeof formSchema>;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: language === 'de' ? 'KI-Sparring Anfrage' : 'AI Sparring Request',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://formspree.io/f/xwpbqagl', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company || '',
          phone: data.phone || '',
          subject: data.subject,
          message: data.message,
          _replyto: data.email,
          _subject: data.subject,
        }),
      });

      if (response.ok) {
        toast({
          title: t.contactForm.successTitle,
          description: t.contactForm.successDescription,
        });
        form.reset();
      } else {
        throw new Error('Fehler beim Senden');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: t.contactForm.errorTitle,
        description: t.contactForm.errorDescription,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-navy text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-gold hover:text-gold/80 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.contactForm.backToHome}
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 heading-style">
              <span className="text-gold">{t.contactForm.title}</span>
            </h1>
            <p className="text-xl body-style max-w-3xl mx-auto">
              {t.contactForm.subtitle}
            </p>
          </div>

          {/* Kostenlose Beratung Hinweis */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-gold mb-4 flex items-center">
                <Hand className="h-8 w-8 mr-3 text-gold" />
                {t.contactForm.handPromiseTitle}
              </h2>
              <p className="text-lg body-style leading-relaxed">
                {t.contactForm.handPromiseText}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-morphism rounded-xl p-8 md:p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{t.contactForm.fields.name}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t.contactForm.placeholders.name}
                              className="bg-navy/50 border-white/20 text-white placeholder:text-white/60"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{t.contactForm.fields.email}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t.contactForm.placeholders.email}
                              type="email"
                              className="bg-navy/50 border-white/20 text-white placeholder:text-white/60"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{t.contactForm.fields.company}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t.contactForm.placeholders.company}
                              className="bg-navy/50 border-white/20 text-white placeholder:text-white/60"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{t.contactForm.fields.phone}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t.contactForm.placeholders.phone}
                              type="tel"
                              className="bg-navy/50 border-white/20 text-white placeholder:text-white/60"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">{t.contactForm.fields.subject}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t.contactForm.placeholders.subject}
                            className="bg-navy/50 border-white/20 text-white placeholder:text-white/60"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">{t.contactForm.fields.message}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t.contactForm.placeholders.message}
                            className="bg-navy/50 border-white/20 text-white placeholder:text-white/60 min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-center pt-6">
                    <Button 
                      type="submit" 
                      className="inline-flex items-center px-8 py-4 text-lg font-medium text-navy bg-gold hover:bg-gold/90 rounded-lg transition-colors duration-300"
                      disabled={form.formState.isSubmitting}
                    >
                      <Send className="mr-3 h-5 w-5" />
                      {form.formState.isSubmitting ? t.contactForm.sending : t.contactForm.submitButton}
                    </Button>
                  </div>
                </form>
              </Form>

              <div className="border-t border-white/20 pt-8 mt-8 text-center">
                <p className="text-sm body-style text-white/80">
                  {t.contactForm.orContactDirectly}<br />
                  <span className="text-gold">info@cp-cc.nl</span> |
                  <span className="text-gold"> +49-152-05198771 (DE)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactForm;
