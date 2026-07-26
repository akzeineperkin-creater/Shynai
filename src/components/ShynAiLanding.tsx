import React, { useState } from "react"
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Search,
  ShieldCheck,
  Zap,
  FileText,
  Code2,
  Database,
  ExternalLink,
  Sparkles,
  Layers,
  BarChart3,
  Cpu,
  Bookmark,
  Check,
  ChevronRight,
  Globe,
  Quote,
  Clock,
  Lock,
  Download
} from "lucide-react"
import { Beams, Button } from "./ui/ethereal-beams-hero"
import ShynAiLogo from "./ShynAiLogo"

const GithubIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)


// Sample claims for the live fact-check simulator
const SIMULATED_CLAIMS = [
  {
    id: 1,
    claim: "Индекс физического объёма ВВП Казахстана за 2025 год составил 106,5%",
    verdict: "SUPPORTED",
    verdictLabel: "ПОДТВЕРЖДЕНО",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    quote: "«...индекс физического объёма ВВП Казахстана за 2025 год по сравнению с прошлым периодом составил 106,5%.»",
    source: "Бюро национальной статистики РК",
    docId: "doc_0001_ru",
    matchType: "Буквальное совпадение цитаты",
    language: "RU",
    confidence: "99.4%"
  },
  {
    id: 2,
    claim: "Национальный оператор связи объявил, что гигабайты будут сгорать каждые 7 дней",
    verdict: "CONTRADICTED",
    verdictLabel: "ОПРОВЕРЖЕНО / ФЕЙК",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    quote: "«Информация об изменении срока действия остатков интернет-трафика до 7 дней не соответствует действительности.»",
    source: "Официальное заявление оператора связи",
    docId: "doc_0042_ru",
    matchType: "Прямое противоречие фактам",
    language: "RU",
    confidence: "98.1%"
  },
  {
    id: 3,
    claim: "Қазақстанда жұмыссыздық деңгейі 2026 жылдың І тоқсанында 4,5% құрады",
    verdict: "SUPPORTED",
    verdictLabel: "ПОДТВЕРЖДЕНО",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    quote: "«...ведомство деректері бойынша жұмыссыздық деңгейі 4,5% деңгейінде белгіленді.»",
    source: "ҚР Ұлттық статистика бюросы",
    docId: "doc_0010_kk",
    matchType: "Буквальное совпадение цитаты",
    language: "KK",
    confidence: "99.1%"
  },
  {
    id: 4,
    claim: "Новый закон обязывает региональные СМИ публиковать 80% материалов на видео",
    verdict: "INSUFFICIENT",
    verdictLabel: "НЕДОСТАТОЧНО ДАННЫХ",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    quote: "Точная цитата в официальном корпусе документов не найдена. Требуется дополнительная проверка.",
    source: "Проверка в официальном реестре нормативных актов",
    docId: "none",
    matchType: "Честный отказ от галлюцинации",
    language: "RU",
    confidence: "0%"
  }
]

export default function ShynAiLanding() {
  const [selectedClaim, setSelectedClaim] = useState(SIMULATED_CLAIMS[0])
  const [isVerifying, setIsVerifying] = useState(false)
  const [activeTab, setActiveTab] = useState<"ru" | "kk">("ru")
  const [activeStep, setActiveStep] = useState(0)

  const handleSimulateCheck = (claimItem: typeof SIMULATED_CLAIMS[0]) => {
    setIsVerifying(true)
    setSelectedClaim(claimItem)
    setTimeout(() => {
      setIsVerifying(false)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      {/* Dynamic 3D Beams Hero Header */}
      <header className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col justify-between border-b border-zinc-800">
        {/* 3D WebGL Background */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
          <Beams
            beamWidth={2.8}
            beamHeight={20}
            beamNumber={14}
            lightColor="#ffffff"
            speed={2.2}
            noiseIntensity={1.8}
            scale={0.16}
            rotation={42}
          />
        </div>

        {/* Glassmorphic Navbar */}
        <nav className="relative z-20 w-full pt-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between rounded-full bg-zinc-950/70 border border-zinc-800/80 px-6 backdrop-blur-xl shadow-2xl">
              {/* Brand Logo */}
              <div className="flex items-center space-x-3">
                <ShynAiLogo className="h-9 w-9 text-white drop-shadow-md" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                    ShynAI <span className="text-[10px] font-mono uppercase bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded border border-zinc-700">v0.2.0</span>
                  </span>
                </div>
              </div>

              {/* Navigation Pills */}
              <div className="hidden md:flex items-center space-x-1 rounded-full bg-zinc-900/60 p-1 border border-zinc-800/60 text-sm">
                <a href="#about" className="rounded-full px-4 py-1.5 text-zinc-300 transition hover:bg-zinc-800 hover:text-white font-medium">
                  О продукте
                </a>
                <a href="#how-it-works" className="rounded-full px-4 py-1.5 text-zinc-300 transition hover:bg-zinc-800 hover:text-white font-medium">
                  Как работает
                </a>
                <a href="#demo-simulator" className="rounded-full px-4 py-1.5 text-zinc-300 transition hover:bg-zinc-800 hover:text-white font-medium">
                  Демо-фактчекер
                </a>
                <a href="#architecture" className="rounded-full px-4 py-1.5 text-zinc-300 transition hover:bg-zinc-800 hover:text-white font-medium">
                  Архитектура
                </a>
                <a href="#metrics" className="rounded-full px-4 py-1.5 text-zinc-300 transition hover:bg-zinc-800 hover:text-white font-medium">
                  Метрики
                </a>
              </div>

              {/* Header Actions */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://github.com/regullar/ShynAI"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-800 hover:text-white"
                >
                  <GithubIcon className="mr-2 h-3.5 w-3.5" />
                  GitHub
                </a>
                <Button size="sm" onClick={() => document.getElementById('demo-simulator')?.scrollIntoView({ behavior: 'smooth' })}>
                  Проверить факт
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 my-auto py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              

              {/* Main Headline */}
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
                Проверяемый источник <br />
                <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                  вместо еще одного мнения ИИ
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mb-8 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
                Умное Chrome-расширение для редакторов студенческих и региональных медиа Казахстана. Выделяйте факты в тексте и мгновенно получайте вердикт со стопроцентными цитатами из первоисточников.
              </p>


{/* CTA Buttons */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
  <Button
    size="lg"
    className="shadow-2xl shadow-white/20 font-semibold w-full sm:w-auto"
    onClick={() => window.open('https://github.com/regullar/ShynAI', '_blank', 'noopener,noreferrer')}
  >
    <Download className="mr-2 h-5 w-5" />
    Установить Chrome-расширение
  </Button>
  <Button
    variant="outline"
    size="lg"
    className="font-semibold bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:text-white w-full sm:w-auto"
    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
  >
    Исследование CustDev & Данные
  </Button>
</div>
              {/* Key Trust Highlights */}
              <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-zinc-800/60">
                <div className="p-3 rounded-xl bg-zinc-950/40 border border-zinc-900">
                  <div className="text-2xl font-bold text-white font-mono">100.0%</div>
                  <div className="text-xs text-zinc-500 font-medium">Валидность цитат</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/40 border border-zinc-900">
                  <div className="text-2xl font-bold text-white font-mono">81.7%</div>
                  <div className="text-xs text-zinc-500 font-medium">Точность вердиктов</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/40 border border-zinc-900">
                  <div className="text-2xl font-bold text-white font-mono">3.09 с</div>
                  <div className="text-xs text-zinc-500 font-medium">Медианный отклик (p50)</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/40 border border-zinc-900">
                  <div className="text-2xl font-bold text-white font-mono">RU / KK</div>
                  <div className="text-xs text-zinc-500 font-medium">Двуязычный корпус</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black/60" />
      </header>

      {/* SECTION 1: Problem & Market Context */}
      <section id="about" className="py-24 border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Context */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Одна неопределенная цифра превращает скорость в риск для доверия
              </h2>
              <p className="text-zinc-400 leading-relaxed text-base">
                Редакторам студенческих и региональных СМИ приходится выпускать десятки новостей ежедневно. Перед публикацией необходимо быстро проверить конкретное утверждение — без штатного фактчекера и распутывания десятков открытых вкладок.
              </p>

              {/* CustDev Quote Box */}
              <div className="relative rounded-2xl bg-zinc-900/90 border border-zinc-800 p-6 shadow-xl space-y-3">
                <Quote className="h-8 w-8 text-zinc-600 opacity-40" />
                <p className="text-zinc-200 italic font-medium text-sm sm:text-base">
                  «ИИ может помочь найти признаки фейка, но окончательное решение всё равно должен принимать человек на основе первоисточника.»
                </p>
                <div className="text-xs text-zinc-500 font-mono pt-2 border-t border-zinc-800">
                  Из интервью CustDev (3 глубоких интервью + 66 респондентов медиасферы)
                </div>
              </div>
            </div>

            {/* Right Column: Statistics & Survey Results */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-black border border-zinc-800 hover:border-zinc-700 transition">
                  <div className="text-4xl font-black text-white font-mono mb-2">41%</div>
                  <div className="text-sm font-semibold text-zinc-300 mb-1">Устаревшие ссылки</div>
                  <p className="text-xs text-zinc-500 leading-normal">
                    Журналисты постоянно сталкиваются с поисковой выдачей прошлых лет и неактуальной статистикой.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-black border border-zinc-800 hover:border-zinc-700 transition">
                  <div className="text-4xl font-black text-white font-mono mb-2">36%</div>
                  <div className="text-sm font-semibold text-zinc-300 mb-1">Сложность доверия</div>
                  <p className="text-xs text-zinc-500 leading-normal">
                    Редакторы не понимают, каким интернет-источникам можно верить при быстрой подготовке материала.
                  </p>
                </div>
              </div>

              {/* Mini Poll Breakdown Box */}
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Опрос редакторов (66 ответов)</span>
                  <span className="text-zinc-500">Июль 2026</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between text-zinc-300 mb-1">
                      <span>Огромные PDF-отчеты ведомств сложно искать</span>
                      <span className="font-mono">29%</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-zinc-400 h-full rounded-full" style={{ width: '29%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-zinc-300 mb-1">
                      <span>Десятки открытых вкладок утомляют</span>
                      <span className="font-mono">23%</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-zinc-400 h-full rounded-full" style={{ width: '23%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-zinc-300 mb-1">
                      <span>Используют ИИ, но боятся галлюцинаций</span>
                      <span className="font-mono">38%</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-white h-full rounded-full" style={{ width: '38%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: 4-Step Factchecking Workflow */}
      <section id="how-it-works" className="py-24 border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
              <Zap className="h-3.5 w-3.5 text-zinc-300" />
              <span>Прозрачный алгоритм</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              ShynAI сокращает путь от сомнения до первоисточника
            </h2>
            <p className="text-zinc-400 text-base">
              Мы не создаем очередной чат-бот с абстрактными ответами. Каждое решение подтверждается выдержкой из официального документа.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="relative p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition flex flex-col justify-between group">
              <div>
                <div className="text-3xl font-black font-mono text-zinc-600 group-hover:text-white transition mb-4">01</div>
                <h3 className="text-lg font-bold text-white mb-2">Выделить</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Выделяйте сомнительное утверждение или анализируйте весь текст статьи в 1 клик прямо на веб-странице в Chrome.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-900 text-[11px] text-zinc-500 font-mono flex items-center justify-between">
                <span>Интерфейс Chrome MV3</span>
                <Search className="h-3.5 w-3.5 text-zinc-500" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition flex flex-col justify-between group">
              <div>
                <div className="text-3xl font-black font-mono text-zinc-600 group-hover:text-white transition mb-4">02</div>
                <h3 className="text-lg font-bold text-white mb-2">Найти</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Система ищет совпадения исключительно в проверенном RU- и KK-сегменте локального корпуса законов и данных.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-900 text-[11px] text-zinc-500 font-mono flex items-center justify-between">
                <span>Фильтр Top-3 чанков</span>
                <Database className="h-3.5 w-3.5 text-zinc-500" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition flex flex-col justify-between group">
              <div>
                <div className="text-3xl font-black font-mono text-zinc-600 group-hover:text-white transition mb-4">03</div>
                <h3 className="text-lg font-bold text-white mb-2">Проверить</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Получите вердикт (Подтверждено / Опровергнуто / Недостаточно данных), понятное объяснение и точную цитату.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-900 text-[11px] text-zinc-500 font-mono flex items-center justify-between">
                <span>GPT-5.6 Terra AI</span>
                <ShieldCheck className="h-3.5 w-3.5 text-zinc-500" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition flex flex-col justify-between group">
              <div>
                <div className="text-3xl font-black font-mono text-zinc-600 group-hover:text-white transition mb-4">04</div>
                <h3 className="text-lg font-bold text-white mb-2">Перепроверить</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Переходите в оригинальный документ в 1 клик или задавайте уточняющие вопросы по найденным доказательствам.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-900 text-[11px] text-zinc-500 font-mono flex items-center justify-between">
                <span>Оригинальная ссылка</span>
                <ExternalLink className="h-3.5 w-3.5 text-zinc-500" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Interactive Extension Simulator Widget */}
      <section id="demo-simulator" className="py-24 border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
              <Sparkles className="h-3.5 w-3.5 text-zinc-300" />
              <span>Интерактивный симулятор</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Испробуйте ShynAI в действии
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Выберите утверждение из новостной ленты ниже, чтобы увидеть, как Chrome-расширение анализирует текст и выдает верифицированный вердикт.
            </p>
          </div>

          {/* Interactive Widget Box */}
          <div className="max-w-5xl mx-auto rounded-3xl bg-black border border-zinc-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Box: Article Preview */}
            <div className="lg:col-span-6 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4 pb-3 border-b border-zinc-900">
                  <span className="flex items-center gap-2">
                    <Globe className="h-3.5 w-3.5 text-zinc-400" />
                    Новостной портал (Макет статьи)
                  </span>
                  <span className="text-zinc-600">RU / KK</span>
                </div>

                <h3 className="text-lg font-bold text-zinc-200 mb-4 leading-snug">
                  Выберите утверждение для проверки в 1 клик:
                </h3>

                {/* List of selectable claims */}
                <div className="space-y-3">
                  {SIMULATED_CLAIMS.map((item) => {
                    const isSelected = selectedClaim.id === item.id
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSimulateCheck(item)}
                        className={`w-full text-left p-4 rounded-xl text-xs sm:text-sm transition-all border ${
                          isSelected
                            ? "bg-zinc-900 border-zinc-600 text-white shadow-lg ring-1 ring-zinc-500"
                            : "bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="leading-relaxed">"{item.claim}"</span>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 shrink-0">
                            {item.language}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900 text-xs text-zinc-500 flex items-center justify-between">
                <span>Поддержка расширением Chrome MV3</span>
                <span className="text-zinc-400 font-mono">2026 Benchmark Dataset</span>
              </div>
            </div>

            {/* Right Box: Extension Popup Interface */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-zinc-950/90 flex flex-col justify-between relative">
              
              <div>
                {/* Popup Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800">
                  <div className="flex items-center space-x-2">
                    <ShynAiLogo className="h-6 w-6 text-white" />
                    <span className="font-bold text-sm text-white">ShynAI Extension</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Live Verified
                  </span>
                </div>

                {/* Loading state or Result display */}
                {isVerifying ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-2 border-zinc-600 border-t-white" />
                    <div className="text-xs font-mono text-zinc-400">
                      Поиск в корпусе RU/KK & сверка цитаты...
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 animate-fadeIn">
                    
                    {/* Verdict Tag */}
                    <div>
                      <div className="text-xs text-zinc-500 font-mono mb-1.5 uppercase tracking-wider">Вердикт системы</div>
                      <div className={`inline-flex items-center px-3.5 py-1.5 rounded-lg border text-xs sm:text-sm font-bold ${selectedClaim.badgeColor}`}>
                        {selectedClaim.verdict === "SUPPORTED" && <CheckCircle2 className="mr-2 h-4 w-4" />}
                        {selectedClaim.verdict === "CONTRADICTED" && <XCircle className="mr-2 h-4 w-4" />}
                        {selectedClaim.verdict === "INSUFFICIENT" && <AlertTriangle className="mr-2 h-4 w-4" />}
                        {selectedClaim.verdictLabel}
                      </div>
                    </div>

                    {/* Verifiable Exact Quote */}
                    <div className="rounded-xl bg-black border border-zinc-800 p-4 space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                        <span>Точная цитата из первоисточника:</span>
                        <span className="text-zinc-500">{selectedClaim.matchType}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-200 italic leading-relaxed font-serif">
                        {selectedClaim.quote}
                      </p>
                    </div>

                    {/* Metadata Footer */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                        <div className="text-[10px] text-zinc-500 font-mono">Источник / Документ</div>
                        <div className="font-semibold text-zinc-300 truncate mt-0.5">{selectedClaim.source}</div>
                        <div className="text-[10px] text-zinc-500 font-mono">{selectedClaim.docId}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                        <div className="text-[10px] text-zinc-500 font-mono">Уверенность модели</div>
                        <div className="font-semibold text-zinc-300 font-mono mt-0.5">{selectedClaim.confidence}</div>
                        <div className="text-[10px] text-emerald-400 font-mono">No Hallucination</div>
                      </div>
                    </div>

                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs text-zinc-500">Результаты проверены по бенчмарку 2026</span>
                <a
                  href="#metrics"
                  className="text-xs text-white hover:underline font-medium inline-flex items-center gap-1"
                >
                  Смотреть метрики <ChevronRight className="h-3 w-3" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Architecture & Engineering Chain */}
      <section id="architecture" className="py-24 border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
              <Cpu className="h-3.5 w-3.5 text-zinc-300" />
              <span>Архитектура системы</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Инженерная ИИ-цепочка, а не простая обёртка
            </h2>
            <p className="text-zinc-400 text-base">
              ShynAI сочетает строго контролируемый локальный RAG, двухэтапную валидацию цитат и резервный поиск Sonar Pro.
            </p>
          </div>

          {/* Architecture Pipeline Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-2">
              <div className="h-8 w-8 rounded-lg bg-zinc-900 text-zinc-300 font-mono text-xs flex items-center justify-center mx-auto mb-3 border border-zinc-800">
                01
              </div>
              <h4 className="font-bold text-sm text-white">Chrome MV3</h4>
              <p className="text-xs text-zinc-500">React 18 + TypeScript фронтенд интерфейс</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-2">
              <div className="h-8 w-8 rounded-lg bg-zinc-900 text-zinc-300 font-mono text-xs flex items-center justify-center mx-auto mb-3 border border-zinc-800">
                02
              </div>
              <h4 className="font-bold text-sm text-white">FastAPI</h4>
              <p className="text-xs text-zinc-500">Pydantic 2 валидация & rate limiting</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-2">
              <div className="h-8 w-8 rounded-lg bg-zinc-950 text-white font-mono text-xs flex items-center justify-center mx-auto mb-3 border border-zinc-700">
                03
              </div>
              <h4 className="font-bold text-sm text-white">Локальный RAG</h4>
              <p className="text-xs text-zinc-500">Фильтр RU/KK корпусов + Top-3 чанка</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-2">
              <div className="h-8 w-8 rounded-lg bg-zinc-900 text-zinc-300 font-mono text-xs flex items-center justify-center mx-auto mb-3 border border-zinc-800">
                04
              </div>
              <h4 className="font-bold text-sm text-white">GPT-5.6 Terra</h4>
              <p className="text-xs text-zinc-500">Анализ в закрытом локальном контексте</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-2">
              <div className="h-8 w-8 rounded-lg bg-zinc-900 text-zinc-300 font-mono text-xs flex items-center justify-center mx-auto mb-3 border border-zinc-800">
                05
              </div>
              <h4 className="font-bold text-sm text-white">Точная цитата</h4>
              <p className="text-xs text-zinc-500">Прямое верифицированное совпадение</p>
            </div>

          </div>

          {/* Sonar Pro Fallback Card */}
          <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                <Lock className="h-3 w-3" />
                Если локальных доказательств недостаточно
              </div>
              <h3 className="text-xl font-bold text-white">Sonar Pro Резервный поиск</h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                При слабом соответствии RAG включается подсистема контролируемого веб-поиска Sonar Pro с отдельной проверкой URL, SSL, IP и размера ответа.
              </p>
            </div>
            <div className="flex gap-6 text-center font-mono text-xs text-zinc-400 shrink-0">
              <div>
                <div className="text-xl font-bold text-white">30</div>
                <div>Документов</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">39</div>
                <div>Чанков</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">15+15</div>
                <div>RU / KK Документов</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: Benchmark & Metrics */}
      <section id="metrics" className="py-24 border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Metrics Graph/Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
                <BarChart3 className="h-3.5 w-3.5 text-zinc-300" />
                <span>Бенчмарк Jury_v0.2</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Честная оценка качества без скрытых оговорок
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base">
                Мы протестировали систему на 60 официальных утверждениях (по 20 на каждый класс). Система запрограммирована на осторожность: лучше вернуть <code className="text-zinc-300 bg-zinc-900 px-1 py-0.5 rounded font-mono">insufficient</code>, чем соврать.
              </p>

              {/* Progress Bars */}
              <div className="space-y-4 pt-4">
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-zinc-200 mb-1.5">
                    <span>Валидность цитат (Citation Validity)</span>
                    <span className="font-mono text-emerald-400">100.0% (29/29)</span>
                  </div>
                  <div className="w-full bg-zinc-900 h-3 rounded-full overflow-hidden border border-zinc-800">
                    <div className="bg-emerald-400 h-full rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-zinc-200 mb-1.5">
                    <span>Macro-F1 Метрика</span>
                    <span className="font-mono text-white">82.2%</span>
                  </div>
                  <div className="w-full bg-zinc-900 h-3 rounded-full overflow-hidden border border-zinc-800">
                    <div className="bg-white h-full rounded-full" style={{ width: '82.2%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-zinc-200 mb-1.5">
                    <span>Точность вердиктов (Accuracy)</span>
                    <span className="font-mono text-zinc-200">81.7% (49/60)</span>
                  </div>
                  <div className="w-full bg-zinc-900 h-3 rounded-full overflow-hidden border border-zinc-800">
                    <div className="bg-zinc-300 h-full rounded-full" style={{ width: '81.7%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-zinc-200 mb-1.5">
                    <span>RAG Recall@1 / Recall@3 (MRR 0.6542)</span>
                    <span className="font-mono text-zinc-300">60.0% / 72.5%</span>
                  </div>
                  <div className="w-full bg-zinc-900 h-3 rounded-full overflow-hidden border border-zinc-800">
                    <div className="bg-zinc-400 h-full rounded-full" style={{ width: '72.5%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Benchmark Run Info & Latency Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-black border border-zinc-800 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-5xl font-black font-mono text-white">81.7%</span>
                    <span className="text-zinc-400 text-sm font-medium">точность (49/60)</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-400">
                    Macro-F1: 82.2% • Цитаты: 100.0%
                  </div>
                </div>

                <div className="text-xs text-zinc-400 leading-relaxed space-y-1.5 border-t border-b border-zinc-900 py-4">
                  <div className="flex justify-between font-mono">
                    <span className="text-zinc-500">Датасет:</span>
                    <span className="text-zinc-300">jury_v0.2/claims.jsonl (60)</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-zinc-500">Модели:</span>
                    <span className="text-zinc-300">gpt-5.6-terra + pplx-embed</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-zinc-500">Языки:</span>
                    <span className="text-zinc-300">RU (54) / KK (6)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex justify-around text-center">
                  <div>
                    <div className="text-lg font-bold font-mono text-white">3.09 с</div>
                    <div className="text-[11px] text-zinc-500">p50 Медиана</div>
                  </div>
                  <div className="border-r border-zinc-800" />
                  <div>
                    <div className="text-lg font-bold font-mono text-zinc-300">4.76 с</div>
                    <div className="text-[11px] text-zinc-500">p95 Хвостовая задержка</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* FOOTER & FINAL CTA */}
      <footer className="py-20 bg-black text-center relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 relative z-10 space-y-8">
          
          <ShynAiLogo className="h-14 w-14 mx-auto text-white drop-shadow-2xl" />

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Не заменяем журналиста. <br />
            <span className="text-zinc-400">Даём ему проверяемое доказательство.</span>
          </h2>

          <p className="text-zinc-400 text-lg font-mono">
            Сомневайся быстрее. Публикуй увереннее.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="shadow-2xl shadow-white/20 font-semibold"
              onClick={() => window.open('https://github.com/regullar/ShynAI', '_blank')}
            >
              <GithubIcon className="mr-2 h-5 w-5" />
              Открыть исходный код на GitHub
            </Button>
          </div>

          <div className="pt-12 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-600 gap-4">
            <span>© 2026 ShynAI</span>
            <div className="flex space-x-6">
              <a href="https://github.com/regullar/ShynAI" target="_blank" rel="noreferrer" className="hover:text-zinc-400 transition">
                github.com/regullar/ShynAI
              </a>
              <a href="http://shynai.duckdns.org" target="_blank" rel="noreferrer" className="hover:text-zinc-400 transition">
                shynai.duckdns.org
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}
