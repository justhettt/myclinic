
import { useState } from "react";
import { Search, MapPin, Calendar, ArrowRight } from "lucide-react";

interface Hospital {
  id: number;
  name: string;
  location: string;
  specialties: string[];
  rating: number;
  image: string;
}

const featuredHospitals: Hospital[] = [
  {
    id: 1,
    name: "City General Hospital",
    location: "Downtown Medical District",
    specialties: ["Cardiology", "Neurology", "Orthopedics"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    id: 2,
    name: "Medicare Plus Center",
    location: "Westside Healthcare Park",
    specialties: ["Pediatrics", "Obstetrics", "General Surgery"],
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    id: 3,
    name: "Wellness Heights Hospital",
    location: "Northern Medical Complex",
    specialties: ["Oncology", "Dermatology", "Internal Medicine"],
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1587351021384-a7893afd4d5f?auto=format&fit=crop&q=80&w=300&h=200",
  },
];

const specialties = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Oncology",
  "Dermatology",
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find and Book Hospital Appointments
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Quick and easy booking for the care you need
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-lg p-2 flex items-center shadow-lg">
              <Search className="w-6 h-6 text-gray-400 mx-2" />
              <input
                type="text"
                placeholder="Search hospitals, specialties, or doctors..."
                className="flex-1 px-4 py-2 text-gray-800 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Popular Specialties
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

      {/* Featured Hospitals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Featured Hospitals
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHospitals.map((hospital) => (
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
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        Next Available: Today
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {hospital.specialties.join(" • ")}
                    </div>
                  </div>
                  <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-md transition-colors flex items-center justify-center">
                    Book Appointment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Immediate Care?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our dedicated team is here to help you find the right care at the right time.
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-md transition-colors text-lg">
            Find Emergency Care
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
