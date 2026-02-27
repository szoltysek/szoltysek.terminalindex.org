import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Mail, Sun, Moon, Terminal, ExternalLink, Cpu, Code, Coffee, Smartphone, Globe, FileText } from 'lucide-react';

export default function App() {
    const [isDark, setIsDark] = useState(true);
    const [activeTab, setActiveTab] = useState<'explorations' | 'docs'>('explorations');

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <div className="min-h-screen selection:bg-[var(--primary-color)] selection:text-[var(--bg-color)] relative font-body overflow-x-hidden">
            {/* Background Orbs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[var(--primary-color)] opacity-10 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--secondary-color)] opacity-10 blur-[120px] animate-float"></div>
            </div>

            {/* Mini Nav */}
            <nav className="fixed top-6 right-6 z-50 flex gap-4">
                <button
                    onClick={() => setIsDark(!isDark)}
                    className="skeuo-button p-4 flex items-center justify-center text-[var(--text-color)]"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </nav>

            <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 relative z-10">
                {/* Header Section */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-3 py-1 mb-6 skeuo-inset font-mono text-[10px] tracking-widest text-[var(--primary-color)] uppercase font-bold">
                            Engineering Student @ Silesian University of Technology
                        </div>
                        <h1 className="font-serif text-6xl md:text-8xl mb-6 text-[var(--text-color)] leading-none italic">
                            Karol / @szoltysek
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--secondary-color)] max-w-2xl leading-relaxed font-light">
                            Pushing the boundaries of <span className="text-[var(--text-color)] font-medium">Virtualization</span>, refining <span className="text-[var(--text-color)] font-medium">Wayland</span>, and bringing <span className="text-[var(--text-color)] font-medium">Mainline Linux</span> to unconventional hardware.
                        </p>
                    </motion.div>
                </section>

                {/* Status Terminal */}
                <section className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="skeuo-panel p-6 bg-[var(--code-bg)] overflow-hidden relative"
                    >
                        <div className="flex items-center gap-3 mb-6 border-b border-[var(--border-color)] pb-4">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            </div>
                            <span className="font-mono text-xs uppercase tracking-widest opacity-50 ml-2">Alacritty</span>
                        </div>
                        <div className="crt-screen rounded-lg p-6 font-mono text-sm leading-relaxed">
                            <div className="space-y-2">
                                <p className="text-[var(--code-comment)]"># Ongoing Projects</p>
                                <div className="flex gap-2">
                                    <span className="text-green-400 font-bold">&gt;</span>
                                    <p className="text-[var(--code-text)]">Mainlining sm8250 (Sony Xperia 5 II)</p>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-green-400 font-bold">&gt;</span>
                                    <p className="text-[var(--code-text)]">GUI for vfio-windows-aio Script</p>
                                </div>
                                <p className="text-[var(--code-comment)] mt-4"># Availability</p>
                                <p className="text-blue-400">Open for any kind of collaborations. Feel free to contact me.</p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Essential Links */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                    <BioLink
                        icon={<Github />}
                        title="GitHub"
                        desc="Technical Repositories"
                        link="https://github.com/szoltysek"
                    />
                    <BioLink
                        icon={<Globe />}
                        title="Main Portal"
                        desc="Terminal-Index Projects"
                        link="https://terminalindex.org"
                    />
                    <BioLink
                        icon={<Mail />}
                        title="Email"
                        desc="szoltysek@terminalindex.org"
                        link="mailto:szoltysek@terminalindex.org"
                    />
                    <BioLink
                        icon={<Coffee />}
                        title="Support"
                        desc="Sponsor the exploration"
                        link="https://github.com/sponsors/szoltysek"
                    />
                </section>

                {/* Tabbed Content Section */}
                <section>
                    <div className="flex items-center justify-between mb-8 border-b border-[var(--border-color)]">
                        <div className="flex gap-8">
                            <button
                                onClick={() => setActiveTab('explorations')}
                                className={`pb-4 text-sm font-mono uppercase tracking-widest transition-all relative ${activeTab === 'explorations' ? 'text-[var(--primary-color)] opacity-100' : 'text-[var(--text-color)] opacity-40 hover:opacity-60'}`}
                            >
                                Key Explorations
                                {activeTab === 'explorations' && (
                                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-color)] shadow-[0_0_10px_var(--primary-color)]" />
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab('docs')}
                                className={`pb-4 text-sm font-mono uppercase tracking-widest transition-all relative ${activeTab === 'docs' ? 'text-[var(--primary-color)] opacity-100' : 'text-[var(--text-color)] opacity-40 hover:opacity-60'}`}
                            >
                                Published Documents
                                {activeTab === 'docs' && (
                                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-color)] shadow-[0_0_10px_var(--primary-color)]" />
                                )}
                            </button>
                        </div>
                    </div>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                    >
                        {activeTab === 'explorations' ? (
                            <>
                                <ProjectCard
                                    title="vfio-windows-aio"
                                    desc="Near-native Windows gaming on Linux via pure KVM/QEMU automation."
                                    link="https://github.com/szoltysek/vfio-windows-aio"
                                    icons={[<Cpu />, <Terminal />]}
                                />
                                <ProjectCard
                                    title="pdx206-mainline"
                                    desc="Bringing the mainline Linux Kernel to the Sony Xperia 5 II (pdx206)."
                                    link="https://github.com/szoltysek/android_kernel_sony_sm8250"
                                    icons={[<Smartphone />, <Activity />]}
                                />
                                <ProjectCard
                                    title="gitclock"
                                    desc="Turning Android devices into an always-on GitHub contribution dashboard."
                                    link="https://github.com/szoltysek/gitclock"
                                    icons={[<Github />, <Globe />]}
                                />
                                <ProjectCard
                                    title="NVIDIA-Optimus-Wayland"
                                    desc="A guide for running Wayland on modern laptops with NVIDIA GPUs."
                                    link="https://github.com/szoltysek/NVIDIA-Optimus-Wayland"
                                    icons={[<Cpu />, <Code />]}
                                />
                            </>
                        ) : (
                            <>
                                <ProjectCard
                                    title="pdx206-mainline-readme.pdf"
                                    desc="Technical documentation and guide for the pdx206 mainline Linux kernel project."
                                    link="https://github.com/terminal-index/pdx206-mainline/blob/main/pdx206-mainline-readme.pdf"
                                    icons={[<FileText />, <Terminal />]}
                                    cta="Download PDF"
                                />
                            </>
                        )}
                    </motion.div>
                </section>

                {/* Footer */}
                <footer className="mt-32 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-6 opacity-50 font-mono text-xs uppercase tracking-tighter">
                    <p>© {new Date().getFullYear()} Karol (szoltysek)</p>
                    <p>Refining Virtualization & Mobile Linux @ Silesian University of Technology</p>
                </footer>
            </main>
        </div>
    );
}

function BioLink({ icon, title, desc, link }: { icon: any, title: string, desc: string, link: string }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="skeuo-button p-6 flex items-center gap-5 group"
        >
            <div className="p-3 skeuo-inset rounded-xl text-[var(--primary-color)] transition-transform group-hover:scale-110">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-[var(--text-color)]">{title}</h4>
                <p className="text-sm text-[var(--secondary-color)]">{desc}</p>
            </div>
            <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-30 transition-opacity" />
        </a>
    );
}

function ProjectCard({ title, desc, link, icons, cta = "View Doc" }: { title: string, desc: string, link: string, icons: any[], cta?: string }) {
    return (
        <div className="skeuo-panel p-8 group hover:border-[var(--primary-color)] transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2 text-[var(--primary-color)] opacity-60">
                    {icons.map((icon, i) => <div key={i}>{icon}</div>)}
                </div>
                <a
                    href={link}
                    className="font-mono text-[10px] uppercase font-bold text-[var(--primary-color)] border border-[var(--primary-color)] px-3 py-1 rounded hover:bg-[var(--primary-color)] hover:text-[var(--bg-color)] transition-all"
                >
                    {cta}
                </a>
            </div>
            <h4 className="font-serif text-2xl mb-2">{title}</h4>
            <p className="text-[var(--secondary-color)] leading-relaxed">{desc}</p>
        </div>
    );
}

function Activity() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
}
