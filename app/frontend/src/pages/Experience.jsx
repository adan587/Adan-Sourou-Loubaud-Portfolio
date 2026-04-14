import React from 'react';
import { Briefcase, Calendar, MapPin, Monitor, ShoppingCart } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { experiencesIT, experiencesOther } from '../data/mock';

const ExperienceCard = ({ exp, index }) => (
    <div
        key={exp.id}
        style={{
            animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
        }}
    >
        <Card className="p-6  hover:scale-[1.02] transition-all duration-300 border-2 hover:dark:border-emerald-500/50">
            <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="h-5 w-5 text-emerald-500" />
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                        </div>
                        <p className="text-lg font-semibold text-muted-foreground">
                            {exp.company}
                        </p>
                    </div>
                    <Badge className="bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 w-fit">
                        {exp.type}
                    </Badge>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-emerald-500" />
                        <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-emerald-500" />
                        <span>{exp.location}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground">{exp.description}</p>

                {/* Tasks */}
                <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-emerald-500">
                        Missions principales
                    </h4>
                    <ul className="space-y-2">
                        {exp.tasks.map((task, idx) => (
                            <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                                <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span>{task}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    </div>
);

const Experience = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <div className="container mx-auto max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Expériences
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Mes expériences professionnelles
                    </p>
                </div>

                {/* IT Experiences */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <div className="p-2 bg-emerald-500/10 rounded-lg">
                            <Monitor className="h-6 w-6 text-emerald-500" />
                        </div>
                        Informatique
                    </h2>
                    <div className="space-y-6">
                        {experiencesIT.map((exp, index) => (
                            <ExperienceCard key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                </div>

                {/* Other Experiences */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <div className="p-2 bg-cyan-500/10 rounded-lg">
                            <ShoppingCart className="h-6 w-6 text-cyan-500" />
                        </div>
                        Autres expériences
                    </h2>
                    <div className="space-y-6">
                        {experiencesOther.map((exp, index) => (
                            <ExperienceCard key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div>
                    <Card className="p-8 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 border-2 dark:border-emerald-500/20 text-center">
                        <h2 className="text-2xl font-bold mb-4">
                            Recherche d'alternance
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Je suis actuellement à la recherche d'une alternance en administration réseaux ou DevOps pour continuer à développer mes compétences.
                        </p>
                        <a href="/contact">
                            <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg hover:scale-105 transition-all">
                                Me contacter
                            </Button>
                        </a>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Experience;
