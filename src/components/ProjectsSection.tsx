import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    title: 'Luxury Villa Complex',
    category: 'Residential',
    image: '/projects/villa.jpg',
    description: 'Modern luxury villas with sustainable design',
  },
  {
    title: 'Corporate Headquarters',
    category: 'Commercial',
    image: '/projects/office.jpg',
    description: 'State-of-the-art office complex in downtown',
  },
  {
    title: 'Smart Factory',
    category: 'Industrial',
    image: '/projects/factory.jpg',
    description: 'Automated manufacturing facility with IoT integration',
  },
  {
    title: 'Shopping Mall',
    category: 'Commercial',
    image: '/projects/mall.jpg',
    description: 'Modern retail space with entertainment facilities',
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl text-pearl mb-4 text-center font-bold">
          Our <span className="text-gold">Projects</span>
        </h2>
        <p className="text-silver text-center mb-12 max-w-3xl mx-auto">
          Discover our portfolio of exceptional construction projects
        </p>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-gold text-charcoal'
                  : 'text-pearl border border-gold hover:bg-gold/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-pearl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-silver">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
