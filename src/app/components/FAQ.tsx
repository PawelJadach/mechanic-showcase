'use client';

import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

const faqData: FAQItem[] = [
  {
    q: "Jak długo trwa przegląd techniczny?",
    a: "Standardowy przegląd techniczny trwa około 30-45 minut. W przypadku wykrycia usterek czas może się wydłużyć. Dokładny czas zależy od stanu pojazdu i zakresu przeglądu."
  },
  {
    q: "Czy oferujecie gwarancję na wykonane naprawy?",
    a: "Tak, wszystkie wykonane przez nas naprawy objęte są gwarancją. Szczegóły gwarancji zależą od rodzaju naprawy. Standardowo oferujemy 12 miesięcy gwarancji na części i robociznę."
  },
  {
    q: "Czy mogę umówić wizytę online?",
    a: "Tak, możesz skontaktować się z nami telefonicznie lub przez formularz kontaktowy, aby umówić wizytę. Staramy się odpowiadać na wszystkie zapytania w ciągu 24 godzin."
  },
  {
    q: "Jakie marki pojazdów obsługujecie?",
    a: "Obsługujemy wszystkie marki pojazdów - od popularnych marek po pojazdy premium. Mamy doświadczenie z różnymi modelami i zawsze znajdziemy rozwiązanie dla Twojego pojazdu."
  },
  {
    q: "Czy oferujecie usługę pogotowia drogowego?",
    a: "Tak, oferujemy usługę pogotowia drogowego 24/7. Wystarczy zadzwonić, a przyjedziemy na miejsce awarii. Nasz zespół jest gotowy pomóc w każdej sytuacji."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-start">
          {/* Left side - Title and description */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Często Zadawane Pytania
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Zaufali nam klienci z całej Polski. Odpowiadamy na najczęstsze pytania dotyczące naszych usług.
            </p>
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden transition-all hover:border-yellow-500/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between text-left group"
                >
                  <span className={`font-semibold text-base md:text-lg transition-colors pr-4 ${
                    openIndex === index ? 'text-yellow-400' : 'text-white group-hover:text-yellow-400'
                  }`}>
                    {faq.q}
                  </span>
                  <span className={`text-yellow-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 md:px-6 pb-4 md:pb-5">
                    <div className="pt-2 border-t border-gray-800">
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

