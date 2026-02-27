import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Mail, Sun, Moon, Terminal, ExternalLink, Cpu, Code, Coffee, Smartphone, Globe, FileText, Monitor, Layers, Activity, Laptop, Settings, Layout } from 'lucide-react';

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

    const statsImages = [
        `https://github-readme-stats-one.vercel.app/api?username=szoltysek&show_icons=true&theme=gruvbox&count_private=true`,
        `https://github-readme-stats-one.vercel.app/api/top-langs/?username=szoltysek&layout=compact&theme=gruvbox&hide=html,css`,
        `https://github-readme-streak-stats.herokuapp.com/?user=szoltysek&theme=gruvbox`
    ];

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
                            Hi there, I'm Karol 👋
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--secondary-color)] max-w-2xl leading-relaxed font-light">
                            Low-level systems enthusiast. Expert in <span className="text-[var(--text-color)] font-medium">Linux kernel mainlining</span>, <span className="text-[var(--text-color)] font-medium">high-performance virtualization</span>, and exploring the architectural purity of <span className="text-[var(--text-color)] font-medium">Unix/BSD</span>.
                        </p>
                    </motion.div>
                </section>

                {/* Organization Section */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="skeuo-panel p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group"
                    >
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-color)] opacity-[0.03] blur-3xl group-hover:opacity-[0.07] transition-opacity"></div>

                        <div className="relative">
                            <div className="w-24 h-24 rounded-full skeuo-inset p-1.5 overflow-hidden ring-1 ring-[var(--border-color)]">
                                <img
                                    src="https://github.com/terminal-index.png"
                                    alt="Terminal-Index"
                                    className="w-full h-full rounded-full grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[var(--bg-color)] rounded-full flex items-center justify-center border border-[var(--border-color)] shadow-sm">
                                <Globe size={12} className="text-[var(--primary-color)]" />
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h2 className="font-serif text-3xl mb-3 tracking-tight italic">Terminal-Index</h2>
                            <p className="text-[var(--secondary-color)] leading-relaxed max-w-xl mb-6">
                                Exploring the boundaries of what's possible on Linux. Dedicated to <span className="text-[var(--text-color)] font-medium">high-performance virtualization</span>, <span className="text-[var(--text-color)] font-medium">kernel mainlining</span>, and bringing modern desktop experiences to unconventional hardware.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <a
                                    href="https://github.com/terminal-index"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="skeuo-button px-6 py-2.5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest font-bold"
                                >
                                    <Github size={14} /> GitHub
                                </a>
                                <a
                                    href="https://terminalindex.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="skeuo-button px-6 py-2.5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest font-bold text-[var(--primary-color)]"
                                >
                                    <ExternalLink size={14} /> Website
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Expertise Section */}
                <section className="mb-20">
                    <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] mb-8 opacity-60">
                        <Terminal size={14} /> Systems Experience & Expertise
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ExpertiseCard
                            title="Linux"
                            description="My daily driver. Specializing in Arch (mainline/testing), Alpine, and Debian. Kernel mainlining and driver development."
                            icon={<Cpu />}
                        />
                        <ExpertiseCard
                            title="Unix / BSD"
                            description="Deep appreciation for architectural purity. Extensive experience with OpenBSD and FreeBSD 15.0."
                            icon={<Globe />}
                        />
                        <ExpertiseCard
                            title="Microkernels"
                            description="Explorations into Minix and the foundational principles of microkernel OS design."
                            icon={<Layers />}
                        />
                        <ExpertiseCard
                            title="Virtualization"
                            description="Bridging the gap between Linux and Windows using VFIO and KVM/QEMU for native-like performance."
                            icon={<Monitor />}
                        />
                    </div>
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

                {/* Skills Section */}
                <section className="mb-20">
                    <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] mb-8 opacity-60">
                        <Code size={14} /> Skills & Technologies
                    </h3>
                    <div className="space-y-10">
                        <div>
                            <h4 className="font-mono text-[10px] uppercase tracking-widest mb-4 opacity-40">Languages</h4>
                            <div className="flex flex-wrap gap-3">
                                <SkillChip text="Shell Script" icon={<Terminal size={12} />} />
                                <SkillChip text="C" icon={<Cpu size={12} />} />
                                <SkillChip text="Kotlin" icon={<Smartphone size={12} />} />
                                <SkillChip text="TypeScript" icon={<Code size={12} />} />
                                <SkillChip text="Python" icon={<Terminal size={12} />} />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-mono text-[10px] uppercase tracking-widest mb-4 opacity-40">Systems & Virtualization</h4>
                            <div className="flex flex-wrap gap-3">
                                <SkillChip text="Arch Linux" icon={<Monitor size={12} />} />
                                <SkillChip text="OpenBSD" icon={<Globe size={12} />} />
                                <SkillChip text="FreeBSD" icon={<Activity size={12} />} />
                                <SkillChip text="Debian" icon={<Layers size={12} />} />
                                <SkillChip text="Alpine Linux" icon={<Monitor size={12} />} />
                                <SkillChip text="KVM/QEMU" icon={<Settings size={12} />} />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-mono text-[10px] uppercase tracking-widest mb-4 opacity-40">Tools & Frameworks</h4>
                            <div className="flex flex-wrap gap-3">
                                <SkillChip text="React" icon={<Globe size={12} />} />
                                <SkillChip text="Vite" icon={<Activity size={12} />} />
                                <SkillChip text="Tailwind CSS" icon={<Layout size={12} />} />
                                <SkillChip text="Wayland" icon={<Monitor size={12} />} />
                                <SkillChip text="Android" icon={<Smartphone size={12} />} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hardware Section */}
                <section className="mb-20">
                    <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] mb-8 opacity-60">
                        <Laptop size={14} /> Hardware & Systems
                    </h3>
                    <div className="skeuo-panel overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-[var(--border-color)] bg-[var(--code-bg)] opacity-50">
                                        <th className="px-6 py-4 font-mono text-[10px] uppercase tracking-widest">Machine</th>
                                        <th className="px-6 py-4 font-mono text-[10px] uppercase tracking-widest">Specs</th>
                                        <th className="px-6 py-4 font-mono text-[10px] uppercase tracking-widest text-right">OS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[var(--border-color)]">
                                    <HardwareRow machine="ThinkPad P53" specs="i7-9850H • 64GB RAM • Quadro RTX 5000" os={["Arch Linux (Testing)"]} />
                                    <HardwareRow machine="ThinkPad T480" specs="i7-8550U • 16GB RAM" os={["Arch Linux (Testing)", "OpenBSD"]} />
                                    <HardwareRow machine="ThinkPad T440" specs="i5-4300U • 4GB RAM" os={["Arch Linux", "FreeBSD 15.0"]} />
                                    <HardwareRow machine="ThinkPad T440p" specs="i7-4710MQ • 8GB RAM" os={["Alpine Linux", "Arch Linux", "Debian"]} />
                                    <HardwareRow machine="ThinkPad T440s" specs="i7-4600U • 8GB RAM" os={["OpenBSD"]} />
                                    <HardwareRow machine="Dell Latitude E6430" specs="i7-3740QM • 4GB RAM" os={["Arch Linux", "FreeBSD VM"]} />
                                </tbody>
                            </table>
                        </div>
                        <div className="p-6 bg-[var(--code-bg)] opacity-60 italic text-sm border-t border-[var(--border-color)]">
                            "Notice how there's not a single Windows laptop!"
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="skeuo-panel p-6 flex items-center gap-4">
                            <div className="p-3 skeuo-inset rounded-xl text-[var(--primary-color)]">
                                <Smartphone />
                            </div>
                            <div>
                                <h4 className="font-bold text-[var(--text-color)] text-sm">Daily Driver</h4>
                                <p className="text-lg font-serif">iPhone 14 Pro</p>
                            </div>
                        </div>
                        <div className="skeuo-panel p-6 flex items-center gap-4">
                            <div className="p-3 skeuo-inset rounded-xl text-[var(--primary-color)]">
                                <Activity />
                            </div>
                            <div>
                                <h4 className="font-bold text-[var(--text-color)] text-sm">Second-Daily</h4>
                                <p className="text-lg font-serif italic">Sony Xperia 5 II</p>
                                <p className="text-xs font-mono opacity-50 uppercase tracking-tighter mt-1">postmarketOS & Mainline Kernel</p>
                            </div>
                        </div>
                    </div>
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

                {/* GitHub Stats Section */}
                <section className="mt-32">
                    <div className="flex flex-col items-center gap-12">
                        <div className="w-full">
                            <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] mb-12 opacity-60 justify-center">
                                <Github size={14} /> Github Analytics
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                                <div className="space-y-6">
                                    <div className="skeuo-panel p-2 overflow-hidden bg-[var(--code-bg)] hover:shadow-lg transition-shadow">
                                        <img src={statsImages[0]} alt="Github Stats" className="w-full filter contrast-[1.05] grayscale-[0.2]" />
                                    </div>
                                    <div className="skeuo-panel p-2 overflow-hidden bg-[var(--code-bg)] hover:shadow-lg transition-shadow">
                                        <img src={statsImages[2]} alt="GitHub Streak" className="w-full filter contrast-[1.05] grayscale-[0.2]" />
                                    </div>
                                </div>
                                <div className="skeuo-panel p-2 overflow-hidden bg-[var(--code-bg)] h-full flex flex-col justify-center hover:shadow-lg transition-shadow">
                                    <img src={statsImages[1]} alt="Top Languages" className="w-full filter contrast-[1.05] grayscale-[0.2]" />
                                </div>
                            </div>
                        </div>
                    </div>
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

function ExpertiseCard({ title, description, icon }: { title: string, description: string, icon: any }) {
    return (
        <div className="skeuo-panel p-6 hover:translate-y-[-2px] transition-all">
            <div className="p-3 skeuo-inset rounded-xl w-fit text-[var(--primary-color)] mb-4">
                {icon}
            </div>
            <h4 className="font-bold text-lg mb-2 text-[var(--text-color)]">{title}</h4>
            <p className="text-sm text-[var(--secondary-color)] leading-relaxed">{description}</p>
        </div>
    );
}

function SkillChip({ text, icon }: { text: string, icon: any }) {
    return (
        <div className="skeuo-inset px-4 py-2 flex items-center gap-3 group hover:border-[var(--primary-color)] transition-colors">
            <div className="text-[var(--primary-color)] opacity-50 group-hover:opacity-100 transition-opacity">
                {icon}
            </div>
            <span className="font-mono text-xs tracking-tight text-[var(--secondary-color)] group-hover:text-[var(--text-color)] transition-colors">
                {text}
            </span>
        </div>
    );
}

function HardwareRow({ machine, specs, os }: { machine: string, specs: string, os: string[] }) {
    return (
        <tr className="group hover:bg-[var(--glass-bg)] transition-colors">
            <td className="px-6 py-4 font-bold text-[var(--text-color)]">{machine}</td>
            <td className="px-6 py-4 text-sm text-[var(--secondary-color)]">{specs}</td>
            <td className="px-6 py-4 text-right">
                <div className="flex flex-wrap justify-end gap-1.5">
                    {os.map(name => (
                        <span key={name} className="px-2 py-0.5 rounded bg-[var(--primary-color)] text-[var(--bg-color)] text-[9px] font-mono uppercase font-bold tracking-tighter opacity-80">
                            {name}
                        </span>
                    ))}
                </div>
            </td>
        </tr>
    );
}
