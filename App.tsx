import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Brain, 
  Zap, 
  CheckCircle2, 
  MessageSquare, 
  Star, 
  HelpCircle, 
  ShoppingBag,
  ArrowRight,
  Shield,
  Smile,
  Target,
  XCircle,
  Trophy,
  Infinity,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Components
const Navbar: React.FC = () => (
  <nav className="sticky top-0 z-50 bg-white shadow-sm py-4">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-medium-blue rounded-full flex items-center justify-center">
          <Smile className="text-white" />
        </div>
        <span className="font-bold text-xl text-gray-800">Bob Good</span>
      </div>
      <a href="#ofertas" className="hidden md:block bg-aqua-green hover:bg-opacity-90 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 no-underline">
        Quero Conhecer
      </a>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <header className="bg-white pt-12 pb-20 overflow-hidden">
    <div className="container mx-auto px-6 text-center max-w-4xl">
      <div className="inline-flex items-center gap-2 bg-blue-50 text-medium-blue px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-pulse">
        <ShieldCheck size={16} />
        Especialmente desenvolvido para TEA
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
        Transforme o silêncio do caos em um <span className="text-medium-blue">abraço de calma</span> para seu filho.
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
        Bob Good é o método de desenhos terapêuticos que ajuda a reduzir crises sensoriais e promove a autorregulação emocional que sua família tanto precisa.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#ofertas" className="bg-aqua-green hover:bg-opacity-90 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all transform hover:-translate-y-1 no-underline">
          Quero ajudar meu filho agora
        </a>
        <a href="#como-funciona" className="bg-white border-2 border-gray-100 hover:border-medium-blue text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all no-underline">
          Ver como funciona
        </a>
      </div>
      <div className="mt-12">
        <img 
          src="https://i.ibb.co/mCXd7MSz/capa.jpg" 
          alt="Bob Good Capa" 
          className="rounded-3xl shadow-2xl mx-auto border-8 border-white object-cover max-h-[600px] w-full"
        />
      </div>
    </div>
  </header>
);

const StorySection: React.FC = () => (
  <section className="bg-gray-50 py-20">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-50 flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/3">
          <img 
            src="https://i.ibb.co/R4sSHHkJ/leo.jpg" 
            alt="Leo concentrado e calmo" 
            className="rounded-2xl shadow-md w-full object-cover aspect-square"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 italic">"Eu achei que as crises nunca passariam..."</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            A Mariana, mãe do pequeno Leo (6 anos), vivia em um estado constante de alerta. Ir ao mercado ou a um aniversário era sinônimo de medo. As crises sensoriais eram intensas e o Leo levava horas para se acalmar.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Depois de muitas tentativas frustradas, ela conheceu o método Bob Good. Em apenas duas semanas, o Leo começou a usar os desenhos para se autorregular antes mesmo de uma crise explodir. Hoje, o silêncio na casa da Mariana não é de medo, mas de paz.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-0.5 bg-medium-blue"></div>
            <span className="font-semibold text-gray-700 uppercase tracking-widest text-sm">História Real</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PainPoints: React.FC = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        Você se identifica com algum desses <span className="text-red-400">desafios</span>?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Zap className="text-red-400" />, title: "Crises inesperadas", desc: "Momentos de sobrecarga sensorial que parecem não ter fim." },
          { icon: <Target className="text-orange-400" />, title: "Falta de foco", desc: "Dificuldade em manter a atenção em tarefas simples do dia a dia." },
          { icon: <Shield className="text-blue-400" />, title: "Insegurança", desc: "O medo constante de como seu filho vai reagir a novos ambientes." },
          { icon: <Brain className="text-purple-400" />, title: "Ansiedade constante", desc: "A sensação de que você está sempre 'apagando incêndios'." }
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-blue-100 transition-all hover:bg-white hover:shadow-lg">
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProductPresentation: React.FC = () => (
  <section id="como-funciona" className="bg-blue-50 py-20 overflow-hidden scroll-mt-20">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          O que é o <span className="text-medium-blue">Bob Good</span>?
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          O Bob Good é um material digital exclusivo de desenhos terapêuticos desenhados especificamente para o cérebro atípico. Através de padrões visuais calculados, eles ajudam a baixar a ansiedade e focar o sistema sensorial.
        </p>
        <ul className="space-y-4">
          {[
            "Mais de 500 desenhos no Plano Completo",
            "Padrões que evitam sobrecarga visual",
            "Temas que geram conexão imediata",
            "Fácil aplicação: basta imprimir e usar"
          ].map((text, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle2 className="text-aqua-green" size={20} />
              <span className="text-gray-700 font-medium">{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 relative">
        <div className="absolute -inset-4 bg-medium-blue opacity-10 blur-3xl rounded-full"></div>
        <img 
          src="https://i.ibb.co/RGdRDCyH/Image-fx-2.jpg" 
          alt="Desenhos terapêuticos Bob Good em uso" 
          className="relative rounded-3xl shadow-2xl z-10 w-full object-cover"
        />
      </div>
    </div>
  </section>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: "Carla Silveira", child: "Pedro, 4 anos", text: "O Bob Good virou o melhor amigo do Pedro. As crises no banho, que eram terríveis, diminuíram 80%." },
    { name: "Roberto Mendes", child: "Arthur, 7 anos", text: "Pela primeira vez conseguimos ir ao cinema sem que o Arthur ficasse agitado. Os desenhos deram a segurança que ele precisava." },
    { name: "Luciana Farias", child: "Bia, 5 anos (Grau 2)", text: "Não vivo mais sem. A Bia leva para a escola e a professora disse que ela está muito mais participativa." },
    { name: "Ana Paula", child: "João, 3 anos", text: "O Bob Good trouxe uma calma que eu não via há meses. Sinto que finalmente tenho uma ferramenta que funciona." },
    { name: "Marcos Túlio", child: "Vinícius, 6 anos", text: "Excelente qualidade. Meu filho é muito seletivo com imagens e ele amou os padrões visuais imediatamente." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = window.setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section className="bg-gray-50 py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Relatos de quem <span className="text-medium-blue">viveu a mudança</span>
        </h2>
        <p className="text-center text-gray-500 mb-16">Pais reais, resultados extraordinários.</p>

        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Carousel Area */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-blue-50 max-w-3xl mx-auto relative">
                    <div className="absolute top-8 right-10 opacity-10">
                      <MessageSquare size={80} className="text-medium-blue" />
                    </div>
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="#FFD700" color="#FFD700" />)}
                    </div>
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed italic mb-10 relative z-10">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-medium-blue font-bold text-xl shadow-inner">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-lg">{t.name}</p>
                        <p className="text-medium-blue font-medium">{t.child}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-4 rounded-full shadow-lg text-gray-400 hover:text-medium-blue transition-all hidden md:block"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-4 rounded-full shadow-lg text-gray-400 hover:text-medium-blue transition-all hidden md:block"
          >
            <ChevronRight size={32} />
          </button>

          {/* Indicators/Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-3 transition-all rounded-full ${currentIndex === i ? 'w-10 bg-medium-blue' : 'w-3 bg-gray-300'}`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingSection: React.FC = () => (
  <section id="ofertas" className="bg-white py-24 scroll-mt-20">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Escolha a melhor forma de ajudar o seu filho</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Temos duas opções pensadas para diferentes necessidades e orçamentos. Descubra qual delas melhor se adapta à rotina do seu pequeno.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20 items-stretch">
        {/* Oferta 1: Plano Básico - R$ 14,90 */}
        <div className="bg-gray-50 p-8 rounded-3xl border-2 border-gray-100 hover:border-aqua-green transition-all flex flex-col h-full group shadow-sm">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Plano Básico</h3>
            <p className="text-gray-500 text-sm italic">Ideal para quem quer testar o método</p>
          </div>
          <div className="mb-8">
            <div className="text-4xl font-black text-gray-800">R$ 14,90</div>
            <p className="text-gray-400 text-sm">Pagamento único</p>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-gray-600">
              <CheckCircle2 size={18} className="text-gray-400" />
              Acesso a 10 desenhos selecionados
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <CheckCircle2 size={18} className="text-gray-400" />
              Conteúdo simples para introdução
            </li>
            <li className="flex items-center gap-3 text-gray-400 opacity-60">
              <XCircle size={18} className="text-red-300" />
              Sem atualizações mensais
            </li>
            <li className="flex items-center gap-3 text-gray-400 opacity-60">
              <XCircle size={18} className="text-red-300" />
              Sem desenhos temáticos
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <ShieldCheck size={18} className="text-gray-400" />
              Garantia de 7 dias
            </li>
          </ul>
          <a 
            href="https://pay.cakto.com.br/s4kh3ej" 
            className="w-full bg-white border-2 border-aqua-green text-aqua-green py-4 rounded-xl font-bold hover:bg-aqua-green hover:text-white transition-all text-center no-underline block shadow-md hover:shadow-lg"
          >
            Quero começar com o básico
          </a>
        </div>

        {/* Oferta 2: Plano Completo - R$ 24,90 */}
        <div className="bg-white p-8 rounded-3xl border-4 border-aqua-green shadow-2xl flex flex-col h-full relative transform md:scale-105 z-10 overflow-hidden">
          <div className="absolute top-0 right-0 bg-aqua-green text-white px-8 py-1 rotate-45 translate-x-10 translate-y-6 text-xs font-bold uppercase tracking-widest shadow-sm">
            Top Escolha
          </div>
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-aqua-green text-white px-6 py-1.5 rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
            <Trophy size={14} /> Mais escolhido pelos pais
          </div>
          <div className="mb-6 pt-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Plano Completo</h3>
            <p className="text-medium-blue text-sm font-semibold flex items-center gap-1 italic">
              <Sparkles size={14} /> Melhor custo-benefício
            </p>
          </div>
          <div className="mb-8">
            <div className="text-5xl font-black text-gray-800">R$ 24,90</div>
            <p className="text-gray-400 text-sm">Pagamento único • Acesso Completo</p>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-gray-700 font-medium">
              <Infinity size={18} className="text-aqua-green" />
              Mais de 500 desenhos exclusivos
            </li>
            <li className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 size={18} className="text-aqua-green" />
              Acesso Vitalício (Sem mensalidades)
            </li>
            <li className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 size={18} className="text-aqua-green" />
              Temas: Heróis e Desenhos Bíblicos
            </li>
            <li className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 size={18} className="text-aqua-green" />
              Atualizações mensais sem custo adicional
            </li>
            <li className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 size={18} className="text-aqua-green" />
              Conteúdo para diferentes fases do TEA
            </li>
            <li className="flex items-center gap-3 text-gray-700 font-medium">
              <ShieldCheck size={18} className="text-aqua-green" />
              Garantia completa de 30 dias
            </li>
          </ul>
          <a 
            href="https://pay.cakto.com.br/q59wtmr_711000" 
            className="w-full bg-aqua-green text-white py-5 rounded-2xl text-xl font-black shadow-xl hover:bg-opacity-90 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 no-underline text-center block"
          >
            Quero o acesso completo agora <ArrowRight size={20} />
          </a>
        </div>
      </div>

      {/* Tabela de Comparação Visual */}
      <div className="bg-gray-50 rounded-3xl overflow-hidden hidden md:block border border-gray-100 shadow-sm mt-12">
        <div className="p-8 bg-white border-b border-gray-100 text-center">
          <h4 className="text-2xl font-bold text-gray-800">Comparação Detalhada</h4>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="p-6 font-bold">O que está incluído?</th>
              <th className="p-6 text-center font-bold">Plano Básico</th>
              <th className="p-6 text-center font-bold bg-blue-50">Plano Completo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              { f: "Quantidade de Desenhos", b: "10 unidades", c: "500+ unidades" },
              { f: "Desenhos de Heróis", b: "Não", c: "Sim (Incluso)" },
              { f: "Desenhos Bíblicos", b: "Não", c: "Sim (Incluso)" },
              { f: "Acesso Vitalício", b: "Não", c: "Sim" },
              { f: "Atualizações Mensais", b: "Não", c: "Sim" },
              { f: "Garantia", b: "7 dias", c: "30 dias" },
              { f: "Uso Contínuo (Longa Duração)", b: "Limitado", c: "Totalmente Indicado" }
            ].map((row, i) => (
              <tr key={i} className="hover:bg-white transition-colors">
                <td className="p-6 text-gray-700 font-medium">{row.f}</td>
                <td className="p-6 text-center text-gray-500">{row.b}</td>
                <td className="p-6 text-center text-gray-800 font-bold bg-blue-50 bg-opacity-30">{row.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-20 text-center max-w-3xl mx-auto">
        <div className="p-8 bg-blue-50 rounded-2xl border-2 border-dashed border-blue-200 mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
             <Target className="text-medium-blue" /> Por que o Plano Completo é a melhor escolha?
          </h3>
          <p className="text-gray-700 leading-relaxed italic">
            "Embora o plano básico seja uma ótima forma de conhecer o método, o <strong>Plano Completo</strong> foi criado para ser o companheiro diário do seu filho. A pequena diferença de preço entrega 50x mais conteúdo e a tranquilidade de saber que você sempre terá novas ferramentas para os momentos de crise."
          </p>
        </div>
        
        <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Seu filho merece acesso completo a ferramentas que ajudam no desenvolvimento diário.</h4>
        <p className="text-gray-500 text-sm">Não deixe passar a oportunidade de garantir um material que traz paz para sua casa.</p>
      </div>
    </div>
  </section>
);

const Benefits: React.FC = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">A Transformação que você verá</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Mais do que um produto, uma nova fase para o desenvolvimento do seu filho.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Noite de Sono", desc: "Colorir antes de dormir ajuda a relaxar o sistema sensorial para um descanso profundo." },
          { title: "Saídas Tranquilas", desc: "Leve os desenhos em viagens ou restaurantes para manter a calma do seu filho." },
          { title: "Melhora no Foco", desc: "Os padrões visuais estimulam a concentração e a coordenação motora fina." }
        ].map((benefit, idx) => (
          <div key={idx} className="border-2 border-gray-50 p-8 rounded-3xl hover:border-aqua-green transition-all group">
            <div className="w-12 h-12 bg-aqua-green bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="text-aqua-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
            <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ: React.FC = () => {
  const [open, setOpen] = React.useState<number | null>(null);
  const questions = [
    { q: "Funciona para qualquer grau de autismo?", a: "Sim! O Bob Good foi desenvolvido para auxiliar na regulação sensorial independentemente do grau (1, 2 ou 3)." },
    { q: "Em quanto tempo vejo resultados?", a: "Muitos pais relatam alívio imediato nas crises. No entanto, para autorregulação a longo prazo, recomendamos o uso consistente por pelo menos 7 dias." },
    { q: "O material é seguro?", a: "Totalmente. O conteúdo digital é seguro e os temas são curados por especialistas para evitar gatilhos negativos." },
    { q: "Qual a idade recomendada?", a: "Ideal para crianças de 2 a 12 anos, adaptando-se perfeitamente às necessidades dessa faixa etária." },
    { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, você recebe os dados de acesso em seu e-mail para baixar e imprimir." },
    { q: "Acompanha algum manual de uso?", a: "Sim! Você recebe um guia exclusivo com técnicas de estimulação para usar em casa." }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center gap-2">
          <HelpCircle className="text-medium-blue" /> Dúvidas Frequentes
        </h2>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800">{item.q}</span>
                <span className="text-medium-blue font-bold text-2xl">{open === i ? '-' : '+'}</span>
              </button>
              {open === i && (
                <div className="p-6 bg-blue-50 text-gray-600 border-t border-blue-100 animate-fadeIn">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Guarantee: React.FC = () => (
  <section className="bg-medium-blue py-16">
    <div className="container mx-auto px-6 text-center text-white max-w-4xl">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
          <ShieldCheck size={48} className="text-medium-blue" />
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4">Garantia Blindada de 30 Dias</h2>
      <p className="text-lg opacity-90 mb-8">
        Nós confiamos tanto na transformação que o Bob Good proporciona que removemos todo o seu risco. Se em 30 dias você não notar melhora no comportamento ou bem-estar do seu filho, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
      </p>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-400 py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-800 pb-12 mb-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-medium-blue rounded-full flex items-center justify-center">
            <Smile className="text-white" size={16} />
          </div>
          <span className="font-bold text-white text-lg">Bob Good</span>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white">Políticas</a>
          <a href="#" className="hover:text-white">Termos de Uso</a>
          <a href="#" className="hover:text-white">Suporte</a>
        </div>
      </div>
      <div className="text-center text-xs opacity-50">
        © {new Date().getFullYear()} Bob Good - Todos os direitos reservados. Este produto não substitui acompanhamento médico ou terapêutico especializado.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StorySection />
      <PainPoints />
      
      <section className="bg-white py-12 text-center">
        <div className="container mx-auto px-6">
          <div className="inline-block bg-medium-blue bg-opacity-5 border border-medium-blue border-dashed p-8 rounded-3xl max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Atenção Pais:</h3>
            <p className="text-gray-600 italic">
              "As vagas para o lote promocional com acesso vitalício são limitadas. Garanta o material completo hoje mesmo."
            </p>
          </div>
        </div>
      </section>

      <ProductPresentation />
      <Benefits />

      {/* Demo Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Onde o Bob Good faz a diferença?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                <ShoppingBag className="text-medium-blue" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-gray-800">Em Ambientes Públicos</h4>
                <p className="text-gray-600 italic">"Levamos os desenhos no mercado e serviu como uma âncora de segurança, evitando que o barulho incomodasse o Leo."</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                <CheckCircle2 className="text-medium-blue" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-gray-800">Nas Terapias</h4>
                <p className="text-gray-600 italic text-sm">"A terapeuta ocupacional notou que ele fica mais tempo focado quando está engajado nos padrões visuais do Bob Good."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      <PricingSection />

      <Guarantee />
      
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;