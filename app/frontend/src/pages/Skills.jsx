import React, { useState } from 'react';
import { Shield, Network, Server, Box, Globe, Activity } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { skills } from '../data/mock';

const iconMap = {
    Shield,
    Network,
    Server,
    Container: Box,
    Globe,
    Activity,
};

const colors = [
    { icon: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400', border: 'dark:border-emerald-500/30', badge: 'hover:bg-emerald-500/10 hover:dark:border-emerald-500/50', tab: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 dark:border-emerald-500/30', tabActive: 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25' },
    { icon: 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400', border: 'dark:border-cyan-500/30', badge: 'hover:bg-cyan-500/10 hover:dark:border-cyan-500/50', tab: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 dark:border-cyan-500/30', tabActive: 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25' },
    { icon: 'bg-violet-500/15 text-violet-600 dark:text-violet-400', border: 'border-violet-500/30', badge: 'hover:bg-violet-500/10 hover:border-violet-500/50', tab: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30', tabActive: 'bg-gradient-to-r from-violet-500 to-violet-600 text-white shadow-lg shadow-violet-500/25' },
    { icon: 'bg-orange-500/15 text-orange-600 dark:text-orange-400', border: 'border-orange-500/30', badge: 'hover:bg-orange-500/10 hover:border-orange-500/50', tab: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30', tabActive: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25' },
    { icon: 'bg-blue-500/15 text-blue-600 dark:text-blue-400', border: 'border-blue-500/30', badge: 'hover:bg-blue-500/10 hover:border-blue-500/50', tab: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30', tabActive: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25' },
    { icon: 'bg-rose-500/15 text-rose-600 dark:text-rose-400', border: 'border-rose-500/30', badge: 'hover:bg-rose-500/10 hover:border-rose-500/50', tab: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30', tabActive: 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg shadow-rose-500/25' },
];

const Skills = () => {
    const [activeTab, setActiveTab] = useState(skills[0]?.id || '');
    const totalSkills = skills.reduce((acc, cat) => acc + cat.items.length, 0);

    const activeCategory = skills.find(s => s.id === activeTab);
    const activeIndex = skills.findIndex(s => s.id === activeTab);
    const activeColor = colors[activeIndex % colors.length];
    const ActiveIcon = iconMap[activeCategory?.icon] || Box;

    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <div className="container mx-auto max-w-5xl">
                {/* Header */}
                <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Compétences Techniques
                    </h1>
                    <p className="text-xl text-muted-foreground mb-4">
                        Technologies et outils utilisés
                    </p>
                    <div className="flex justify-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full"></span>
                            {skills.length} catégories
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full"></span>
                            {totalSkills} compétences
                        </span>
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {skills.map((category, index) => {
                        const Icon = iconMap[category.icon] || Box;
                        const color = colors[index % colors.length];
                        const isActive = activeTab === category.id;

                        return (
                            <Button
                                key={category.id}
                                variant="outline"
                                onClick={() => setActiveTab(category.id)}
                                className={`flex items-center gap-2 px-4 py-2 h-auto border-2 transition-all duration-300 hover:scale-105 ${
                                    isActive ? color.tabActive : color.tab
                                }`}
                            >
                                <Icon className="h-4 w-4" />
                                <span className="hidden sm:inline text-sm font-medium">{category.title}</span>
                                <span className="sm:hidden text-sm font-medium">{category.title.split(' ')[0]}</span>
                            </Button>
                        );
                    })}
                </div>

                {/* Active Category Content */}
                {activeCategory && (
                    <Card
                        key={activeTab}
                        className={`p-8 md:p-10 border-2 ${activeColor.border} animate-in fade-in slide-in-from-bottom-2 duration-500`}
                    >
                        {/* Category Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className={`p-3 rounded-xl ${activeColor.icon}`}>
                                <ActiveIcon className="h-7 w-7" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">{activeCategory.title}</h2>
                                <p className="text-sm text-muted-foreground">{activeCategory.items.length} compétences</p>
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {activeCategory.items.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className={`p-4 rounded-xl border bg-background/60 transition-all duration-200 ${activeColor.badge}`}
                                    style={{
                                        animation: `fadeInUp 0.3s ease-out ${idx * 0.04}s both`
                                    }}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium text-sm text-foreground">{skill.name}</span>
                                        <span className="text-xs font-semibold opacity-70">{skill.level}%</span>
                                    </div>
                                    <Progress value={skill.level} className="h-1.5" />
                                </div>
                            ))}
                        </div>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default Skills;
