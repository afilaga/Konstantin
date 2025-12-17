import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, ShieldCheck, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-navy dark">
            {/* Background Gradient Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-teal/20 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-brand-gold/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="max-w-2xl animate-slide-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-sm font-medium mb-6">
                        <Globe className="w-4 h-4" />
                        <span>Dubai Real Estate Insider</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        Строим капитал <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-gold">
                            в ритме Дубая
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
                        Личный консалтинг Константина Лютовича. Инвестиции, релокация и бизнес в ОАЭ без "розовых очков".
                    </p>

                    <div className="flex flex-col gap-4">
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Выберите вашу цель:</p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <Button size="lg" className="justify-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white min-h-[4rem]">
                                <div className="p-2 rounded bg-brand-teal/20 text-brand-teal">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold">Я Инвестор</div>
                                    <div className="text-xs text-slate-400 font-normal">ROI, флиппинг, доход</div>
                                </div>
                            </Button>

                            <Button size="lg" className="justify-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white min-h-[4rem]">
                                <div className="p-2 rounded bg-brand-gold/20 text-brand-gold">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold">Переезд семьи</div>
                                    <div className="text-xs text-slate-400 font-normal">Визы, школы, районы</div>
                                </div>
                            </Button>
                        </div>

                        <div className="mt-4 flex items-center gap-4 text-slate-500 text-sm">
                            <Link href="#about" className="hover:text-brand-teal transition-colors flex items-center gap-1">
                                Подробнее обо мне <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Visual / Spline Placeholder */}
                <div className="relative h-[500px] w-full hidden lg:block animate-fade-in">
                    {/* This is where the 3D Spline scene will go */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[80%] h-[80%] relative">
                            {/* Abstract decorative circles mimicking a 3D orbit */}
                            <div className="absolute inset-0 border border-brand-teal/30 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-[10%] border border-brand-gold/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute inset-[25%] bg-gradient-to-tr from-brand-teal to-brand-navy rounded-full opacity-20 blur-2xl" />

                            {/* Floating Cards Mockup */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                                <div className="h-4 w-20 bg-brand-teal/20 rounded mb-4" />
                                <div className="h-2 w-full bg-white/10 rounded mb-2" />
                                <div className="h-2 w-2/3 bg-white/10 rounded mb-8" />
                                <div className="h-32 w-full bg-brand-navy/50 rounded-lg border border-white/5" />
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-brand-navy/90 backdrop-blur-xl border border-brand-teal/20 rounded-2xl p-6 shadow-2xl transform translate-x-12 translate-y-12 rotate-[6deg] hover:rotate-0 transition-transform duration-500">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="h-8 w-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                                        <TrendingUp className="w-4 h-4" />
                                    </div>
                                    <span className="text-brand-teal font-mono text-xs">+15.4%</span>
                                </div>
                                <div className="text-2xl font-bold text-white mb-1">$42,500</div>
                                <div className="text-sm text-slate-400">Прирост капитала</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
