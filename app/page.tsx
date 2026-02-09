"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header / Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            🔧 Plomberie Électricité 29
          </div>
          <div className="hidden md:flex gap-6">
            <Link href="#services" className="hover:text-primary transition">Services</Link>
            <Link href="#zones" className="hover:text-primary transition">Zones d'intervention</Link>
            <Link href="#contact" className="hover:text-primary transition">Contact</Link>
          </div>
          <a href="tel: 06-98-35-08-71" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition font-semibold">
            📞 Appelez-nous
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Plombier & Electricien Finistere
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Interventions rapide dans tout le Finistère (29) • Dépannage 6j/7 • Devis gratuit
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel: 06-98-35-08-71" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              🚨 Urgence 24/6
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition">
              Demander un devis
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nos Services dans le Finistère
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Service Plomberie */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="mb-4">
                      <img
                        src="/images/service-plomberie.jpg"
                        alt="Service de plomberie professionnel"
                        className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-3xl font-bold">PLOMBERIE</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Services de Plomberie</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Dépannage urgent (fuites, canalisations bouchées)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Installation sanitaire complète</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Rénovation salle de bain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Installation chaudière et chauffage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Détection de fuites invisibles</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="tel: 06-98-35-08-71" className="block text-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition font-semibold">
                    Appeler pour la plomberie
                  </a>
                </div>
              </div>
            </div>

            {/* Service Électricité */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="relative h-64 bg-gradient-to-br from-yellow-500 to-orange-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="mb-4">
                      <img
                        src="/images/service-electricite.jpg"
                        alt="Service d'électricité professionnel"
                        className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-3xl font-bold">ELECTRICITÉ</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Services d'Electricité</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Dépannage électrique urgent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Mise aux normes électriques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Installation tableaux électriques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Éclairage intérieur et extérieur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Installation bornes de recharge véhicules</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="tel: 06-98-35-08-71" className="block text-center bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition font-semibold">
                    Appeler pour l'électricité
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section id="zones" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Zones d'intervention dans le Finistère
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Basés à Commana (29450), nous intervenons rapidement dans tout le département du Finistère
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-bold text-lg mb-2">Commana et environs</h3>
              <p className="text-gray-600 text-sm">Intervention en moins de 30 minutes</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🗺️</div>
              <h3 className="font-bold text-lg mb-2">Tout le Finistère Nord</h3>
              <p className="text-gray-600 text-sm">Morlaix, Landivisiau, Brest...</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="font-bold text-lg mb-2">Département 29</h3>
              <p className="text-gray-600 text-sm">Quimper, Carhaix, Châteaulin...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pourquoi nous faire confiance ?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2">Rapidité</h3>
              <p className="text-gray-600">Intervention rapide 7j/7</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-bold text-lg mb-2">Expertise</h3>
              <p className="text-gray-600">15 ans d'expérience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-lg mb-2">Tarifs clairs</h3>
              <p className="text-gray-600">Devis gratuit détaillé</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-bold text-lg mb-2">Garantie</h3>
              <p className="text-gray-600">Travaux garantis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Besoin d'un plombier ou électricien dans le finistere ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous maintenant pour un devis gratuit ou une intervention d'urgence
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <a href="tel: 06-98-35-08-71" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition flex items-center gap-2">
              📞 06-98-35-08-71
            </a>
            <a href="mailto:flason.lucien29450@gmail.com" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition flex items-center gap-2">
              ✉️ flason.lucien29450@gmail.com
            </a>
          </div>

          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">📍 10 bis rue Penavern
            </h3>
            <p className="text-lg mb-2">Commana 29450, Finistère</p>
            <p className="text-sm opacity-90">
              Coordonnées GPS : 48.413057, -3.955789
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2026 Plomberie Électricité Finistère - Tous droits réservés</p>
          <p className="text-gray-400 text-sm">
            Plombier et électricien à Commana (29450) et dans tout le Finistère
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm text-gray-400">
            <Link href="/mentions-legales" className="hover:text-white transition">Mentions légales</Link>
            <span>•</span>
            <Link href="/politique-confidentialite" className="hover:text-white transition">Politique de confidentialité</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
