
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import DarkModeToggle from '@/components/DarkModeToggle';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AchievementsSection from '@/components/AchievementsSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogsSection from '@/components/BlogsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DarkModeToggle />
      
      {/* Blue gradient background for hero */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100">
        <HeroSection />
      </div>
      
      {/* White background */}
      <div className="bg-white">
        <AboutSection />
      </div>
      
      {/* Blue gradient background */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100">
        <AchievementsSection />
      </div>
      
      {/* White background */}
      <div className="bg-white">
        <SkillsSection />
      </div>
      
      {/* Blue gradient background */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100">
        <ExperienceSection />
      </div>
      
      {/* White background */}
      <div className="bg-white">
        <ProjectsSection />
      </div>
      
      {/* Blue gradient background */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100">
        <BlogsSection />
      </div>
      
      {/* White background */}
      <div className="bg-white">
        <TestimonialsSection />
      </div>
      
      {/* Blue gradient background */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100">
        <ResumeSection />
      </div>
      
      {/* White background */}
      <div className="bg-white">
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
