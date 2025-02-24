
import { useState } from "react";
import { Search, MapPin, Calendar, ArrowRight, Phone, Star, IndianRupee } from "lucide-react";
import { toast } from "sonner";

interface Hospital {
  id: number;
  name: string;
  location: string;
  specialties: string[];
  rating: number;
  price: number; // Consultation fee
  distance: number; // in km
  image: string;
}

const featuredHospitals: Hospital[] = [
  {
    id: 1,
    name: "My Clinic - Alkapuri",
    location: "Race Course Circle, Vadodara",
    specialties: ["General Medicine", "Pediatrics", "Orthopedics"],
    rating: 4.8,
    price: 500,
    distance: 2.5,
    image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    id: 2,
    name: "My Clinic - Karelibaug",
    location: "Near Karelibaug Bridge, Vadodara",
    specialties: ["General Surgery", "Gynecology", "Cardiology"],
    rating: 4.6,
    price: 450,
    distance: 4.1,
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    id: 3,
    name: "My Clinic - Waghodia",
    location: "Waghodia Road, Vadodara",
    specialties: ["Dermatology", "ENT", "General Medicine"],
    rating: 4.7,
    price: 400,
    distance: 5.8,
    image: "https://images.unsplash.com/photo-1587351021384-a7893afd4d5f?auto=format&fit=crop&q=80&w=300&h=200",
  },
];

const specialties = [
  "General Medicine",
  "Pediatrics",
  "Orthopedics",
  "Cardiology",
  "Gynecology",
  "Dermatology",
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    rating: 0,
    maxPrice: 1000,
    maxDistance: 10,
  });
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const filteredHospitals = featuredHospitals.filter(hospital => {
    return (
      hospital.rating >= filters.rating &&
      hospital.price <= filters.maxPrice &&
      hospital.distance <= filters.maxDistance &&
      (searchQuery === "" || 
        hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hospital.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())))
    );
  });

  const handleEmergencyCall = () => {
    window.location.href = "tel:108";
    toast.info("Connecting to Emergency Services (108)...");
  };

  const handleBooking = (hospitalId: number) => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select both date and time for your appointment");
      return;
    }
    toast.success("Appointment booked successfully! We'll send you a confirmation shortly.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My Clinic - Vadodara
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Professional Healthcare at Your Fingertips
            </p>
            
            {/* Search & Filters */}
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center mb-4">
                <Search className="w-6 h-6 text-gray-400 mx-2" />
                <input
                  type="text"
                  placeholder="Search clinics, specialties, or doctors..."
                  className="flex-1 px-4 py-2 text-gray-800 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-800">
                <div>
                  <label className="block text-sm font-medium mb-1">Minimum Rating</label>
                  <select
                    className="w-full p-2 rounded border"
                    value={filters.rating}
                    onChange={(e) => setFilters({...filters, rating: Number(e.target.value)})}
                  >
                    <option value={0}>Any Rating</option>
                    <option value={3}>3+ Stars</option>
                    <option value={4}>4+ Stars</option>
                    <option value={4.5}>4.5+ Stars</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Max Price</label>
                  <select
                    className="w-full p-2 rounded border"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({...filters, maxPrice: Number(e.target.value)})}
                  >
                    <option value={1000}>Any Price</option>
                    <option value={300}>Under ₹300</option>
                    <option value={500}>Under ₹500</option>
                    <option value={700}>Under ₹700</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Max Distance</label>
                  <select
                    className="w-full p-2 rounded border"
                    value={filters.maxDistance}
                    onChange={(e) => setFilters({...filters, maxDistance: Number(e.target.value)})}
                  >
                    <option value={10}>Any Distance</option>
                    <option value={2}>Under 2 km</option>
                    <option value={5}>Under 5 km</option>
                    <option value={7}>Under 7 km</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Call Button - Fixed Position */}
      <button
        onClick={handleEmergencyCall}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 z-50 animate-pulse"
      >
        <Phone className="w-6 h-6" />
        <span className="font-bold">108</span>
      </button>

      {/* Specialties Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Our Specialties
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center animate-fade-up"
            >
              <span className="font-medium text-gray-800">{specialty}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Clinics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Our Clinics in Vadodara
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fade-up"
              >
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{hospital.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{hospital.location}</span>
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      <span>{hospital.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <IndianRupee className="w-4 h-4 mr-1" />
                      <span>{hospital.price}</span>
                    </div>
                    <div className="text-gray-600 text-sm">
                      {hospital.distance} km
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <select
                        className="mr-2 p-1 border rounded"
                        onChange={(e) => setSelectedDate(e.target.value)}
                      >
                        <option value="">Select Date</option>
                        <option value="2024-02-21">Today</option>
                        <option value="2024-02-22">Tomorrow</option>
                        <option value="2024-02-23">Day After</option>
                      </select>
                      <select
                        className="p-1 border rounded"
                        onChange={(e) => setSelectedTime(e.target.value)}
                      >
                        <option value="">Select Time</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                      </select>
                    </div>
                    <div className="text-sm text-gray-600">
                      {hospital.specialties.join(" • ")}
                    </div>
                  </div>
                  <button 
                    onClick={() => handleBooking(hospital.id)}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-md transition-colors flex items-center justify-center"
                  >
                    Book Appointment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Emergency Care?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Call 108 for immediate medical assistance. Our emergency response team is available 24/7.
          </p>
          <button 
            onClick={handleEmergencyCall}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md transition-colors text-lg flex items-center space-x-2 mx-auto"
          >
            <Phone className="w-6 h-6" />
            <span className="font-bold">Call 108</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
