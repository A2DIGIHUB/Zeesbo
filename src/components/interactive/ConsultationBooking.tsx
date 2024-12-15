'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface ConsultationBookingProps {
  className?: string;
}

export default function ConsultationBooking({ className = '' }: ConsultationBookingProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  // Example time slots (in real app, these would come from an API)
  const timeSlots: TimeSlot[] = [
    { id: '1', time: '09:00 AM', available: true },
    { id: '2', time: '10:00 AM', available: true },
    { id: '3', time: '11:00 AM', available: false },
    { id: '4', time: '02:00 PM', available: true },
    { id: '5', time: '03:00 PM', available: true },
    { id: '6', time: '04:00 PM', available: true },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { ...formData, date: selectedDate, time: selectedTime });
    // Show success message or handle errors
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`bg-white dark:bg-charcoal rounded-lg shadow-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold text-royal dark:text-gold mb-6">
        Book a Virtual Consultation
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-royal dark:focus:border-gold focus:ring-royal dark:focus:ring-gold dark:bg-charcoal-light"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-royal dark:focus:border-gold focus:ring-royal dark:focus:ring-gold dark:bg-charcoal-light"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-royal dark:focus:border-gold focus:ring-royal dark:focus:ring-gold dark:bg-charcoal-light"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              htmlFor="projectType"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-royal dark:focus:border-gold focus:ring-royal dark:focus:ring-gold dark:bg-charcoal-light"
              onChange={handleInputChange}
            >
              <option value="">Select a project type</option>
              <option value="residential">Residential Construction</option>
              <option value="commercial">Commercial Projects</option>
              <option value="industrial">Industrial Solutions</option>
              <option value="renovation">Renovation</option>
            </select>
          </div>
        </div>

        {/* Date and Time Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              required
              min={new Date().toISOString().split('T')[0]}
              className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-royal dark:focus:border-gold focus:ring-royal dark:focus:ring-gold dark:bg-charcoal-light"
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Available Time Slots
            </label>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <motion.button
                  key={slot.id}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!slot.available}
                  onClick={() => setSelectedTime(slot.time)}
                  className={`p-2 rounded-md text-sm ${
                    selectedTime === slot.time
                      ? 'bg-royal dark:bg-gold text-white'
                      : slot.available
                      ? 'bg-gray-100 dark:bg-charcoal-light text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-charcoal-dark'
                      : 'bg-gray-100 dark:bg-charcoal-light text-gray-400 dark:text-gray-600 cursor-not-allowed'
                  }`}
                >
                  {slot.time}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-royal dark:focus:border-gold focus:ring-royal dark:focus:ring-gold dark:bg-charcoal-light"
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-4 py-2 bg-royal dark:bg-gold text-white rounded-md shadow-md hover:bg-royal-dark dark:hover:bg-gold-dark transition-colors"
        >
          Book Consultation
        </motion.button>
      </form>
    </div>
  );
}
