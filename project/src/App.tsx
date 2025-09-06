import React, { useEffect, useState } from 'react';
import { MapPin, Camera, Waves, Sun, Heart, Mail, Phone } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Golden Sunset Beach',
      description: 'Where the sky meets the Arabian Sea'
    },
    {
      url: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Pristine Coastline',
      description: 'Untouched natural beauty'
    },
    {
      url: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Morning Waves',
      description: 'Peaceful dawn at Karwar beach'
    },
    {
      url: 'https://images.pexels.com/photos/1007011/pexels-photo-1007011.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tropical Paradise',
      description: 'Lush greenery meets the ocean'
    },
    {
      url: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Fishing Boats',
      description: 'Traditional life by the sea'
    },
    {
      url: 'https://images.pexels.com/photos/1007011/pexels-photo-1007011.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Western Ghats View',
      description: 'Mountains embracing the coast'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 100 ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-sky-500" />
              <span className={`font-bold text-xl ${
                scrollY > 100 ? 'text-gray-900' : 'text-white'
              }`}>Karwar</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className={`font-medium transition-colors ${
                scrollY > 100 ? 'text-gray-700 hover:text-sky-500' : 'text-white hover:text-sky-200'
              }`}>Home</a>
              <a href="#about" className={`font-medium transition-colors ${
                scrollY > 100 ? 'text-gray-700 hover:text-sky-500' : 'text-white hover:text-sky-200'
              }`}>About</a>
              <a href="#gallery" className={`font-medium transition-colors ${
                scrollY > 100 ? 'text-gray-700 hover:text-sky-500' : 'text-white hover:text-sky-200'
              }`}>Gallery</a>
              <a href="#contact" className={`font-medium transition-colors ${
                scrollY > 100 ? 'text-gray-700 hover:text-sky-500' : 'text-white hover:text-sky-200'
              }`}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            transform: `translateY(${scrollY * 0.5}px) scale(1.05)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        
        <div className="relative text-center text-white z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            My Home Town
            <span className="block text-sky-300">Karwar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Where the Arabian Sea kisses the Western Ghats
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg mb-8">
            <MapPin className="h-6 w-6 text-sky-300" />
            <span>Karnataka, India</span>
          </div>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Explore Karwar
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Coastal Paradise
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nestled on the western coast of Karnataka, Karwar is a breathtaking coastal town where pristine beaches meet lush tropical landscapes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Waves className="h-8 w-8 text-sky-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pristine Beaches</h3>
              <p className="text-gray-600 leading-relaxed">
                Miles of golden sand beaches kissed by the gentle waves of the Arabian Sea, perfect for peaceful walks and stunning sunsets.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Natural Beauty</h3>
              <p className="text-gray-600 leading-relaxed">
                Surrounded by the Western Ghats, Karwar offers a perfect blend of coastal charm and mountain serenity with rich biodiversity.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tropical Climate</h3>
              <p className="text-gray-600 leading-relaxed">
                Year-round pleasant weather makes Karwar an ideal destination for beach lovers and nature enthusiasts seeking tranquility.
              </p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">A Place Close to My Heart</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Growing up in Karwar has been a blessing. Every morning brings the sound of waves, the scent of salt air, and the warmth of community. This coastal gem has shaped who I am, from childhood adventures on the beach to quiet moments watching fishing boats return at sunset.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The town's natural harbor, historical significance, and proximity to Goa make it a unique blend of tranquility and accessibility. Whether it's the famous Karwar Beach, the serene Devbagh Beach, or the historic Sadashivgad Fort, every corner tells a story.
              </p>
              <div className="flex items-center text-sky-600">
                <Heart className="h-5 w-5 mr-2 fill-current" />
                <span className="font-semibold">Forever in my heart</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1007011/pexels-photo-1007011.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Karwar coastline" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-500 rounded-full opacity-20" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-400 rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Natural Wonders
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the breathtaking beauty of Karwar through these glimpses of paradise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Visit Karwar</h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Experience the magic of my hometown. Plan your visit to this coastal paradise.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-6 w-6 text-sky-400" />
              <span className="text-lg">Karwar, Karnataka 581301, India</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-sky-400" />
              <span className="text-lg">visit@karwar.com</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Best Time to Visit</h3>
            <p className="text-gray-300 leading-relaxed">
              October to March offers the most pleasant weather with cool breezes and clear skies. 
              Perfect for beach activities and sightseeing.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Waves className="h-6 w-6 text-sky-400" />
            <span className="text-xl font-bold">Karwar</span>
          </div>
          <p className="text-center text-gray-400">
            © 2024 My Home Town Karwar. Made with <Heart className="inline h-4 w-4 text-red-500 fill-current mx-1" /> for my beloved hometown.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;