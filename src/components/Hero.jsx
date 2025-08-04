import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Dakikalar İçinde
              <span className="block text-yellow-300">Kapında</span>
            </h1>
            <p className="text-xl text-purple-100">
              Binlerce ürün, yüzlerce kategori. İhtiyacın olan her şey dakikalar içinde kapında.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Hemen Başla
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Daha Fazla Bilgi
              </button>
            </div>
          </div>

          {}
          <div className="relative">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Hızlı Teslimat</h3>
                <p className="text-purple-100">
                  Siparişini ver, dakikalar içinde kapında olsun
                </p>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">10+</div>
            <div className="text-purple-100">Şehir</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">1000+</div>
            <div className="text-purple-100">Ürün</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">15dk</div>
            <div className="text-purple-100">Teslimat</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">24/7</div>
            <div className="text-purple-100">Hizmet</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 