
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AchievementsSection from '@/components/AchievementsSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogsSection from '@/components/BlogsSection';
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
      
      {/* White background for hero */}
      <div className="bg-white">
        <HeroSection />
      </div>
      
      {/* Vibrant blue gradient background */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600">
        <AboutSection />
      </div>
      
      {/* White background */}
      <div className="bg-white">
        <AchievementsSection />
      </div>
      
      {/* Vibrant blue gradient background */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700">
        <SkillsSection />
      </div>
      
      {/* White background */}
      <div className="bg-white">
        <ExperienceSection />
      </div>
      
      {/* Vibrant blue gradient background */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600">
        <ProjectsSection />
      </div>
      
      {/* White background */}
      <div className="bg-white">
        <BlogsSection />
      </div>
      
      {/* White background */}
      <div className="bg-white">
        <ResumeSection />
      </div>
      
      {/* Vibrant blue gradient background */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600">
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
