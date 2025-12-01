import Image from "next/image";
import FAQ from "./components/FAQ";
import StatsCounter from "./components/StatsCounter";
import Navigation from "./components/Navigation";
import { Wrench, Zap, BadgeCheck, DollarSign, MapPin, Mail, Clock, Facebook, Instagram, Linkedin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-900/80 to-black/90 z-10"></div>
        <Image
            src="/photo-1.jpg"
            alt="Warsztat samochodowy"
            fill
            className="object-cover opacity-40"
          priority
        />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-20"></div>
        <div className="relative z-30 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase">Profesjonalny Serwis</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight px-4">
            Profesjonalny Serwis Samochodowy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 text-gray-300 max-w-2xl mx-auto px-4">
            Doświadczeni mechanicy, wysokiej jakości usługi, konkurencyjne ceny
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center flex-wrap px-4">
            <a 
              href="#kontakt" 
              className="w-full sm:w-auto group bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 text-center"
            >
              Umów wizytę
            </a>
            <a 
              href="#uslugi" 
              className="w-full sm:w-auto bg-gray-800/50 backdrop-blur-md border-2 border-gray-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:border-yellow-500 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 text-center"
            >
              Nasze usługi
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <StatsCounter end={15} suffix="+" />
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">Lat doświadczenia</p>
            </div>
            <div className="text-center">
              <StatsCounter end={5000} suffix="+" />
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">Zadowolonych klientów</p>
            </div>
            <div className="text-center">
              <StatsCounter end={10000} suffix="+" />
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">Naprawionych pojazdów</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">Pogotowie drogowe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-16 md:py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Nasze Usługi
            </h2>
            <p className="text-center text-gray-400 text-base md:text-lg">Kompleksowa obsługa Twojego pojazdu</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1 */}
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                <Image
                  src="/photo-2.jpg"
                  alt="Naprawa silnika"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white group-hover:text-yellow-400 transition-colors">Naprawa Silnika</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  Kompleksowa diagnostyka i naprawa silników. Doświadczeni mechanicy z wieloletnim doświadczeniem.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                <Image
                  src="/photo-3.jpg"
                  alt="Przegląd techniczny"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white group-hover:text-yellow-400 transition-colors">Przegląd Techniczny</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  Kompleksowe przeglądy pojazdów zgodnie z wymogami. Szybka i rzetelna obsługa.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                <Image
                  src="/photo-4.jpg"
                  alt="Wymiana opon"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white group-hover:text-yellow-400 transition-colors">Wymiana Opon</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  Sezonowa wymiana opon, wyważanie kół. Szeroki wybór opon w konkurencyjnych cenach.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                <Image
                  src="/photo-5.jpg"
                  alt="Diagnostyka komputerowa"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white group-hover:text-yellow-400 transition-colors">Diagnostyka Komputerowa</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  Nowoczesna diagnostyka komputerowa wszystkich systemów pojazdu. Szybka identyfikacja problemów.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                <Image
                  src="/photo-6.jpg"
                  alt="Wymiana oleju"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white group-hover:text-yellow-400 transition-colors">Wymiana Oleju</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  Regularna wymiana oleju i filtrów. Używamy tylko wysokiej jakości produktów.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                <Image
                  src="/photo-7.jpg"
                  alt="Naprawa układu hamulcowego"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white group-hover:text-yellow-400 transition-colors">Układ Hamulcowy</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  Naprawa i wymiana klocków, tarcz hamulcowych. Bezpieczeństwo to nasz priorytet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2">Obsługujemy wszystkie marki</p>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Marki Pojazdów</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto items-center opacity-60 hover:opacity-100 transition-opacity">
            {['BMW', 'Audi', 'Mercedes', 'Volkswagen', 'Toyota', 'Ford'].map((brand) => (
              <div key={brand} className="text-center">
                <div className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-gray-800/50 hover:border-yellow-500/50 transition-all">
                  <p className="text-white font-semibold text-sm sm:text-base md:text-lg">{brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-4 inline-block">
                <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase">O nas</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                O nas
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Jesteśmy lokalnym serwisem samochodowym z wieloletnim doświadczeniem. Nasz zespół 
                składa się z wykwalifikowanych mechaników, którzy pasjonują się swoją pracą.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Oferujemy kompleksową obsługę pojazdów wszystkich marek. W naszym warsztacie 
                wykorzystujemy nowoczesny sprzęt diagnostyczny i wysokiej jakości części zamienne.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Zadowolenie klientów jest dla nas najważniejsze. Zawsze staramy się wykonać 
                pracę szybko, rzetelnie i w konkurencyjnej cenie.
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10"></div>
              <Image
                src="/photo-8.jpg"
                alt="Nasz warsztat"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Nasz Warsztat
            </h2>
            <p className="text-center text-gray-400 text-lg">Zobacz gdzie pracujemy</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              '/photo-1.jpg',
              '/photo-2.jpg',
              '/photo-3.jpg',
              '/photo-4.jpg',
              '/photo-5.jpg',
              '/photo-6.jpg'
            ].map((src, i) => (
              <div key={i} className="relative h-64 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-yellow-500/50 transition-all group">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Image
                  src={src}
                  alt={`Warsztat ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cennik" className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Cennik
            </h2>
            <p className="text-center text-gray-400 text-base md:text-lg">Transparentne ceny bez ukrytych kosztów</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Price Item 1 */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <h3 className="text-base md:text-xl font-bold text-white">Przegląd Techniczny</h3>
                <span className="text-xl md:text-2xl font-bold text-yellow-400">150 zł</span>
              </div>
              <p className="text-gray-400 text-xs md:text-sm">Kompleksowy przegląd pojazdu</p>
            </div>

            {/* Price Item 2 */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <h3 className="text-base md:text-xl font-bold text-white">Wymiana Oleju</h3>
                <span className="text-xl md:text-2xl font-bold text-yellow-400">80 zł</span>
              </div>
              <p className="text-gray-400 text-xs md:text-sm">Olej + filtr (materiały wliczone)</p>
            </div>

            {/* Price Item 3 */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <h3 className="text-base md:text-xl font-bold text-white">Diagnostyka Komputerowa</h3>
                <span className="text-xl md:text-2xl font-bold text-yellow-400">120 zł</span>
              </div>
              <p className="text-gray-400 text-xs md:text-sm">Pełna diagnostyka wszystkich systemów</p>
            </div>

            {/* Price Item 4 */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <h3 className="text-base md:text-xl font-bold text-white">Wymiana Opon</h3>
                <span className="text-xl md:text-2xl font-bold text-yellow-400">60 zł</span>
              </div>
              <p className="text-gray-400 text-xs md:text-sm">Komplet 4 opon + wyważenie</p>
            </div>

            {/* Price Item 5 */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <h3 className="text-base md:text-xl font-bold text-white">Klocki Hamulcowe</h3>
                <span className="text-xl md:text-2xl font-bold text-yellow-400">od 200 zł</span>
              </div>
              <p className="text-gray-400 text-xs md:text-sm">Wymiana przednich/tylnych (materiały)</p>
            </div>

            {/* Price Item 6 */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <h3 className="text-base md:text-xl font-bold text-white">Naprawa Silnika</h3>
                <span className="text-xl md:text-2xl font-bold text-yellow-400">od 300 zł</span>
              </div>
              <p className="text-gray-400 text-xs md:text-sm">Wycena indywidualna po diagnozie</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">* Ceny mogą się różnić w zależności od modelu pojazdu</p>
            <a 
              href="#kontakt" 
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 px-8 py-3 rounded-xl font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105"
            >
              Zapytaj o wycenę
            </a>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(250,204,21,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Promocje
            </h2>
            <p className="text-gray-400 text-lg">Sprawdź nasze aktualne oferty</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-yellow-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">PROMOCJA</span>
                  <span className="text-yellow-400 text-sm">Ograniczona czasowo</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  -20% na przegląd techniczny
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Skorzystaj z promocji i zaoszczędź na przeglądzie technicznym. Oferta ważna do końca miesiąca.
                </p>
                <a 
                  href="#kontakt" 
                  className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 px-8 py-3 rounded-xl font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105"
                >
                  Skorzystaj z promocji
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Dlaczego warto nas wybrać?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <Zap className="w-16 h-16 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Szybka Obsługa</h3>
              <p className="text-gray-400 leading-relaxed">
                Staramy się wykonać naprawy w możliwie najkrótszym czasie, nie tracąc przy tym na jakości.
              </p>
            </div>
            <div className="text-center bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <BadgeCheck className="w-16 h-16 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Gwarancja Jakości</h3>
              <p className="text-gray-400 leading-relaxed">
                Wszystkie wykonane przez nas naprawy objęte są gwarancją. Używamy tylko sprawdzonych części.
              </p>
            </div>
            <div className="text-center bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <DollarSign className="w-16 h-16 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Konkurencyjne Ceny</h3>
              <p className="text-gray-400 leading-relaxed">
                Oferujemy atrakcyjne ceny bez ukrytych kosztów. Transparentne wyceny przed rozpoczęciem pracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Reviews Section */}
      <section id="opinie" className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Opinie Klientów
            </h2>
            <p className="text-center text-gray-400 text-base md:text-lg">Co mówią o nas nasi klienci</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Review 1 */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center gap-1 mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg md:text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                "Profesjonalna obsługa, szybka naprawa i konkurencyjne ceny. Polecam każdemu!"
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-gray-900 font-bold text-sm md:text-base">
                  JK
                </div>
                <div>
                  <p className="font-semibold text-white text-sm md:text-base">Jan Kowalski</p>
                  <p className="text-xs md:text-sm text-gray-400">Warszawa</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center gap-1 mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg md:text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                "Najlepszy serwis w okolicy. Mechanicy wiedzą co robią, a ceny są uczciwe. Wróciłem już kilka razy."
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-gray-900 font-bold text-sm md:text-base">
                  AN
                </div>
                <div>
                  <p className="font-semibold text-white text-sm md:text-base">Anna Nowak</p>
                  <p className="text-xs md:text-sm text-gray-400">Warszawa</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center gap-1 mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg md:text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                "Szybka diagnoza, rzetelna wycena i wykonanie w terminie. Wszystko jak należy!"
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-gray-900 font-bold text-sm md:text-base">
                  PW
                </div>
                <div>
                  <p className="font-semibold text-white text-sm md:text-base">Piotr Wiśniewski</p>
                  <p className="text-xs md:text-sm text-gray-400">Warszawa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="mapa" className="py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Jak dojechać
            </h2>
            <p className="text-center text-gray-400 text-lg">Znajdź nas łatwo</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden">
              <div className="relative h-[500px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.674123456789!2d21.012229!3d52.229676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzQ2LjgiTiAyMcKwMDAnNDQuMCJF!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[50%]"
                ></iframe>
              </div>
              <div className="p-8 bg-gray-900/80">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Auto Serwis</h3>
                    <p className="text-gray-400">ul. Przykładowa 123, 00-000 Warszawa</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=52.229676,21.012229"
            target="_blank"
            rel="noopener noreferrer"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 px-6 py-3 rounded-xl font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 whitespace-nowrap"
                  >
                    Pobierz trasę
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Kontakt
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-800/50">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white">Dane Kontaktowe</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Adres</p>
                    <p className="text-gray-400">ul. Przykładowa 123<br />00-000 Warszawa</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Telefon</p>
                    <p className="text-gray-400">
                      <a href="tel:+48123456789" className="hover:text-yellow-400 transition-colors text-lg">
                        +48 123 456 789
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Email</p>
                    <p className="text-gray-400">
                      <a href="mailto:kontakt@autoserwis.pl" className="hover:text-yellow-400 transition-colors">
                        kontakt@autoserwis.pl
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Godziny Otwarcia</p>
                    <p className="text-gray-400">
                      Pon-Pt: 8:00 - 18:00<br />
                      Sob: 9:00 - 14:00<br />
                      Nd: Zamknięte
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-800/50">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white">Wyślij wiadomość</h3>
              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Imię i nazwisko"
                    className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Telefon"
                    className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Wiadomość"
                    rows={5}
                    className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800/50 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Auto Serwis
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Profesjonalny serwis samochodowy z wieloletnim doświadczeniem. Zaufaj ekspertom.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Szybkie linki</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#uslugi" className="text-gray-400 hover:text-yellow-400 transition">Usługi</a></li>
                <li><a href="#cennik" className="text-gray-400 hover:text-yellow-400 transition">Cennik</a></li>
                <li><a href="#o-nas" className="text-gray-400 hover:text-yellow-400 transition">O nas</a></li>
                <li><a href="#kontakt" className="text-gray-400 hover:text-yellow-400 transition">Kontakt</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Kontakt</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>ul. Przykładowa 123</li>
                <li>00-000 Warszawa</li>
                <li><a href="tel:+48123456789" className="hover:text-yellow-400 transition">+48 123 456 789</a></li>
                <li><a href="mailto:kontakt@autoserwis.pl" className="hover:text-yellow-400 transition">kontakt@autoserwis.pl</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Śledź nas</h4>
              <div className="flex gap-4 mb-6">
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-white text-sm">Newsletter</h5>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Twój email"
                    className="flex-1 px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm hover:from-yellow-400 hover:to-orange-400 transition"
                  >
                    Zapisz
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Auto Serwis. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <a
        href="tel:+48123456789"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/50 hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="Zadzwoń"
      >
        <Phone className="w-6 h-6 md:w-7 md:h-7 text-gray-900" />
      </a>
    </div>
  );
}
