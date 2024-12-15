'use client';

import BeforeAfterSlider from '@/components/interactive/BeforeAfterSlider';
import CostCalculator from '@/components/interactive/CostCalculator';
import ProjectTimeline from '@/components/interactive/ProjectTimeline';
import ConsultationBooking from '@/components/interactive/ConsultationBooking';

const renovationTimelineItems = [
  {
    title: 'Initial Consultation',
    description: 'Meet with our experts to discuss your renovation goals and vision.',
    duration: '1-2 days',
    status: 'completed' as const,
  },
  {
    title: 'Design Phase',
    description: 'Create detailed plans and 3D renderings of your renovation project.',
    duration: '1-2 weeks',
    status: 'in-progress' as const,
  },
  {
    title: 'Material Selection',
    description: 'Choose materials, fixtures, and finishes for your project.',
    duration: '1 week',
    status: 'upcoming' as const,
  },
  {
    title: 'Construction',
    description: 'Execute the renovation plan with our skilled craftsmen.',
    duration: '4-8 weeks',
    status: 'upcoming' as const,
  },
  {
    title: 'Final Inspection',
    description: 'Quality check and final walkthrough of the completed project.',
    duration: '1-2 days',
    status: 'upcoming' as const,
  },
];

const calculatorFields = [
  {
    id: 'area',
    label: 'Floor Area',
    type: 'number' as const,
    unit: 'm²',
    multiplier: 50000, // ₦50,000 per square meter
  },
  {
    id: 'rooms',
    label: 'Number of Rooms to Renovate',
    type: 'number' as const,
    multiplier: 500000, // ₦500,000 per room
  },
  {
    id: 'quality',
    label: 'Quality Level',
    type: 'select' as const,
    options: [
      { value: '1', label: 'Standard' },
      { value: '1.5', label: 'Premium' },
      { value: '2', label: 'Luxury' },
    ],
    multiplier: 1,
  },
];

export default function RenovationPage() {
  return (
    <div className="min-h-screen bg-pearl dark:bg-charcoal">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-royal to-royal-dark dark:from-charcoal-dark dark:to-charcoal">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Transform Your Space
            </h1>
            <p className="text-xl md:text-2xl text-pearl-dark max-w-2xl">
              Expert renovation services that bring your vision to life with precision and
              excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Before/After Examples */}
        <section>
          <h2 className="text-3xl font-bold text-royal dark:text-gold mb-8">
            Our Transformations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BeforeAfterSlider
              beforeImage="/images/renovation-before-1.jpg"
              afterImage="/images/renovation-after-1.jpg"
              beforeLabel="Before"
              afterLabel="After"
            />
            <BeforeAfterSlider
              beforeImage="/images/renovation-before-2.jpg"
              afterImage="/images/renovation-after-2.jpg"
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>
        </section>

        {/* Project Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-royal dark:text-gold mb-8">
            Our Process
          </h2>
          <ProjectTimeline items={renovationTimelineItems} />
        </section>

        {/* Cost Calculator */}
        <section>
          <h2 className="text-3xl font-bold text-royal dark:text-gold mb-8">
            Estimate Your Project
          </h2>
          <CostCalculator
            title="Renovation Cost Calculator"
            fields={calculatorFields}
            className="max-w-2xl mx-auto"
          />
        </section>

        {/* Consultation Booking */}
        <section>
          <h2 className="text-3xl font-bold text-royal dark:text-gold mb-8">
            Book a Consultation
          </h2>
          <ConsultationBooking className="max-w-3xl mx-auto" />
        </section>
      </div>
    </div>
  );
}
