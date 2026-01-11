"use client";
import React, { useState } from 'react';
import { Phone, MapPin, Clock, Calendar, Star, MessageCircle, Stethoscope, Syringe, Scissors, Activity, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- COMPONENTS ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: string;
  className?: string;
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md";
  const variants: any = {
    primary: "bg-blue-900 text-white hover:bg-blue-800",
    secondary: "bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-50",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white/20"
  }; 
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ children, centered = true }: any) => 
  <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-6 ${centered ? 'text-center' : ''}`}>
    {children}
    <div className={`h-1.5 w-20 bg-blue-900 mt-3 rounded-full ${centered ? 'mx-auto' : ''}`} />
  </h2>


const Card = ({ children, className = "" }: any) => 
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all ${className}`}
  >
    {children}
  </motion.div>

export default function VeterinaryWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', pet: '', date: '', phone: '',Reason: ''});

  const handleInputChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    
    // 1. Create the detailed message
    const message = `*New Appointment Request* 🏥
    
👤 *Owner:* ${formData.name}
🐾 *Pet:* ${formData.pet}
📞 *Phone:* ${formData.phone}
📝 *Reason:* ${formData.Reason}
📅 *Date:* ${formData.date}
    
Please confirm this appointment.`;

    // 2. Create WhatsApp Link (sending to +91 8097022556)
    const whatsappUrl = `https://wa.me/918097022556?text=${encodeURIComponent(message)}`;

    // 3. Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };
  const whatsappMessage = `Hi, I would like to book an appointment at Mahalaxmi Animal Centre.`;
  const whatsappLink = `https://wa.me/8097022556?text=${encodeURIComponent(whatsappMessage)}`;

  // THE CORRECT IMAGE LINK
  const doctorImage = "https://drive.google.com/uc?export=view&id=1qn-rbJJAJGdB_qRIlLrlyxtWstDgeF3N";

  const services = [
    { icon: <Stethoscope />, title: "General Checkups", desc: "Comprehensive health exams to keep your pet healthy." },
    { icon: <Syringe />, title: "Vaccinations", desc: "Essential immunization against common diseases." },
    { icon: <Activity />, title: "Surgery & Emergency", desc: "Expert surgical care for critical conditions." },
    { icon: <Scissors />, title: "Grooming & Spa", desc: "Baths, nail trimming, and styling for a fresh look." },
    { icon: <Activity />, title: "Dental Care", desc: "Cleaning and treatments for strong teeth and gums." },
    { icon: <Activity />, title: "Lab & Blood Tests", desc: "In-house diagnostics for accurate and fast results." },
    { icon: <Activity />, title: "Sterilization / Spaying", desc: "Safe procedures for population control and health." },
    { icon: <Calendar />, title: "Pet Boarding", desc: "Safe and comfortable hostel for when you're away." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* --- HEADER --- */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">M</div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900 leading-none">Mahalaxmi</h1>
              <span className="text-sm text-gray-500 font-medium">Animal Centre</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <a href="#home" className="hover:text-blue-900 transition">Home</a>
            <a href="#about" className="hover:text-blue-900 transition">About Dr. Waghmale</a>
            <a href="#services" className="hover:text-blue-900 transition">Services</a>
            <a href="#reviews" className="hover:text-blue-900 transition">Reviews</a>
            <Button onClick={() => window.location.href='#contact'}>Book Appointment</Button>
          </nav>

          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="flex flex-col p-4 gap-4">
                <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative bg-blue-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm font-medium"
            >
              📍 Mahalaxmi, Mumbai
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Expert Care for Your <br/>
              <span className="text-blue-300">Faithful Companions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg text-blue-100 max-w-lg"
            >
              From routine checkups to emergency surgeries, Dr. Shailendra G. Waghmale and his team provide compassionate veterinary services for your pets.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a href="tel:7942700857" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full justify-center">
                  <Phone size={20} /> Call Now
                </Button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                 <Button variant="outline" className="w-full justify-center">
                  <MessageCircle size={20} /> WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            {/* DOCTOR PHOTO (HERO) - CLEAN & CLEAR */}
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative">
              <img 
                src="https://i.ibb.co/1GLg8dM5/Screenshot-2026-01-04-124923.png"
                alt="Dr. Shailendra G. Waghmale" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- KEY INFO STRIP --- */}
      <div className="bg-white shadow-lg border-b border-gray-100">
        <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="flex items-center gap-4 px-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-900"><Clock /></div>
            <div>
              <p className="font-bold text-gray-800">10:00 AM - 9:00 PM</p>
              <p className="text-sm text-gray-500">Daily (Dr. from 12 PM)</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-900"><MapPin /></div>
            <div>
              <p className="font-bold text-gray-800">Jacob Circle, Mahalaxmi</p>
              <p className="text-sm text-gray-500">Shop No. 19, Mumbai</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4">
             <div className="bg-blue-100 p-3 rounded-full text-blue-900"><Phone /></div>
             <div>
               <p className="font-bold text-gray-800">+91 80970 22556</p>
               <p className="text-sm text-gray-500">Call for Appointments</p>
             </div>
          </div>
        </div>
      </div>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 container mx-auto px-4">
        <SectionHeading>Our Services</SectionHeading>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We offer a full range of veterinary services to ensure your pet lives a long, happy, and healthy life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center hover:bg-blue-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* --- ABOUT DOCTOR SECTION --- */}
      <section id="about" className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             {/* DOCTOR PHOTO (ABOUT) */}
             <img 
               src="https://i.ibb.co/kVpXffXL/dd.jpg"
               alt="Dr. Shailendra G. Waghmale" 
               className="w-full h-auto object-cover object-top rounded-xl shadow-lg border-4 border-white"      
             />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Meet Dr. Shailendra G. Waghmale</h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Dr. Waghmale is a dedicated veterinarian committed to providing the highest quality care for your pets. 
              With years of experience in surgery, diagnostics, and general wellness, he treats every patient with 
              patience and gentleness.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="font-bold text-blue-900">Clinic Hours</p>
                <p className="text-sm text-gray-600">10:00 AM - 9:00 PM</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="font-bold text-blue-900">Doctor Availability</p>
                <p className="text-sm text-gray-600">Starts at 12:00 PM</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 col-span-2">
                <p className="font-bold text-blue-900">Lunch Break</p>
                <p className="text-sm text-gray-600">3:00 PM - 5:00 PM (Daily)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* --- REVIEWS SECTION (WITH STAR RATINGS) --- */}
     <section id="reviews" className="py-20 container mx-auto px-4">
        <SectionHeading>Happy Paws & Parents</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[
            {
              name: "Bhavesh Solanki",
              text: "Good Clinic.. Very Good Doctor And Good Treatment Is Given Here And The Staff Is Also Very Co-operative.",
              initial: "B",
              stars: 5
            },
            {
              name: "Pratik Waghmare",
              text: "I have been visiting since 8yrs Best Doctor since I know him Dr Waghmale The treatment and vaccination for the pet they give is effective",
              initial: "P",
              stars:4
            },
            {
              name: "Sayed Owais ",
              text: "Price is affordable as compared to other vets in Mumbai",
              initial: "R",
              stars:5
            },
            {
              name: "Balraj Mhatre",
              text: "Excellent service for pets Thank you doctor!",
              intial: "B",
              stars:5
            },
            {
              name:"Smita Khamkar",
              text:"Wide range of petfood n medicines Good price for product",
              initial:"S",
              stars:4
            },
            {
              name:"Tarun Takkar",
              text:"Good staff and excellent doctor",
              initial:"T",
              stars:5
            }
          ].map((review, i) => (
            <Card key={i} className="relative pt-10">
             <div className="absolute -top-6 left-6 text-6xl text-blue-100 font-serif"></div>
              {/* Dynamic Star Rating */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-4">
              {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                  {review.initial}
                </div>
                <div>
                  <p className="font-bold text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">Google Review</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
              {/* --- BOOKING & CONTACT SECTION --- */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading centered={false}> <span className="text-white">Book an Appointment</span> </SectionHeading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            
            {/* Left: Contact Info & Map Link */}
            <div className="space-y-8">
              <p className="text-blue-100 text-lg">
                Walk-ins are welcome, but we recommend booking an appointment to reduce waiting time.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-3 rounded-lg"><MapPin className="text-blue-300" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Visit Us</h4>
                    <p className="text-blue-100">Shop no.19, Bapurao Jagtap Marg,<br/> Jacob Circle, Mahalaxmi, Mumbai - 400011</p>
                    <a href="https://maps.app.goo.gl/4s9T2zPAimtiMjrM9"
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-blue-300 hover:text-white underline text-sm mt-1 inline-block">
                      View on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-3 rounded-lg"><Phone className="text-blue-300" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-blue-100 mb-2">+91 80970 22556</p>
                    <a href="tel:8097022556" className="bg-white text-blue-900 px-4 py-2 rounded-md text-sm font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition">
                      <Phone size={14} /> Call Now
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-3 rounded-lg"><MessageCircle className="text-blue-300" /></div>
                  <div>
                    <h4 className="font-bold text-lg">WhatsApp Us</h4>
                    <p className="text-blue-100 mb-2">Chat with us directly</p>
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-bold inline-flex items-center gap-2 hover:bg-green-600 transition">
                      <MessageCircle size={14} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Request an Appointment</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" name="name" required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
                    placeholder="Enter your name"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pet Type & Name</label>
                  <input 
                    type="text" name="pet" required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
                    placeholder="e.g. Dog (Rocky)"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" name="phone" required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
                    placeholder="Your mobile number"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
                  <textarea 
                    name="reason" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
                    placeholder="e.g. Vaccination, Stomach issue, General checkup"
                    rows={2}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                    <input 
                      type="date" name="date" required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition">
                      <option>Morning (12 PM - 3 PM)</option>
                      <option>Evening (5 PM - 9 PM)</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full justify-center mt-2">Confirm Booking</Button>
                <p className="text-xs text-gray-500 text-center mt-2">We will call you to confirm the exact time.</p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-blue-950 text-blue-200 py-10 text-center border-t border-blue-900">
        <p>© {new Date().getFullYear()} Mahalaxmi Animal Centre. All rights reserved.</p>
        <p className="text-sm mt-2">Pet Food & Accessories Available at Store</p>
      </footer>

    </div>
  );
}