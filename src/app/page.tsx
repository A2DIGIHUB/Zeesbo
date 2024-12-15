'use client';

import { motion } from "framer-motion";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import BlurImage from "@/components/BlurImage";
import BlogSection from "@/components/BlogSection";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal/90 z-10" />
        <div className="absolute inset-0">
          <BlurImage
            src="/images/hero.jpg"
            alt="Luxury Construction Project"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Hero Content */}
        <motion.div 
          className="relative z-20 text-center px-4 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl text-pearl mb-6 font-bold">
            Building <span className="text-gold">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-silver mb-12 max-w-3xl mx-auto">
            Crafting architectural masterpieces with precision and innovation
          </p>
          <motion.div 
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="#projects"
              className="bg-gold text-charcoal px-8 py-4 rounded-md hover:bg-gold-light transition-all font-semibold btn-hover"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              className="border-2 border-pearl text-pearl px-8 py-4 rounded-md hover:bg-pearl/10 transition-all font-semibold btn-hover"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-pearl py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl text-royal mb-12 text-center font-bold"
            {...fadeIn}
          >
            Our Expertise
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Residential",
                description: "Bespoke homes crafted with precision and elegance",
                icon: "🏛️",
              },
              {
                title: "Commercial Projects",
                description: "State-of-the-art facilities for modern businesses",
                icon: "🏢",
              },
              {
                title: "Industrial Solutions",
                description: "Innovative spaces for manufacturing excellence",
                icon: "🏭",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-royal mb-2">
                  {service.title}
                </h3>
                <p className="text-charcoal-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
