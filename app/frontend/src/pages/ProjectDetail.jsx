import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Layers } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { projects } from '../data/mock';

const ProjectDetail = () => {
    const { slug } = useParams();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen pt-24 pb-20 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
                    <p className="text-muted-foreground mb-8">Ce projet n'existe pas.</p>
                    <Link to="/projects">
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Retour aux projets
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Back Button */}
                <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-emerald-500 transition-colors mb-8 group">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Retour aux projets
                </Link>

                {/* Header */}
                <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-emerald-500/10 text-emerald-500">
                            {project.category}
                        </Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        {project.description}
                    </p>
                </div>

                {/* Technologies */}
                <Card className="p-6 mb-8">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Layers className="h-5 w-5 text-emerald-500" />
                        Technologies utilisées
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                            <Badge
                                key={idx}
                                variant="outline"
                                className="px-4 py-2 hover:bg-emerald-500/10 hover:border-emerald-500 transition-colors"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </Card>

                {/* Details */}
                {project.details && (
                    <div className="space-y-8">
                        {/* Context */}
                        <Card className="p-6 border-l-4 border-l-emerald-500">
                            <h2 className="text-xl font-bold mb-3">Contexte</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.details.context}
                            </p>
                        </Card>

                        {/* Objectives */}
                        <Card className="p-6 border-l-4 border-l-cyan-500">
                            <h2 className="text-xl font-bold mb-4">Objectifs</h2>
                            <ul className="space-y-3">
                                {project.details.objectives.map((obj, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                        <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        {/* Results */}
                        <Card className="p-6 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 border-2 dark:border-emerald-500/20">
                            <h2 className="text-xl font-bold mb-3">Résultats</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.details.results}
                            </p>
                        </Card>

                        {/* Extended Sections */}
                        {project.details.extendedSections && project.details.extendedSections.map((section, idx) => (
                            <Card key={idx} className="p-6 border-l-4 border-l-purple-500">
                                <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                                {section.subtitle && (
                                    <p className="text-sm text-emerald-400 mb-4 italic">{section.subtitle}</p>
                                )}
                                <ul className="space-y-3">
                                    {section.items.map((item, itemIdx) => {
                                        const colonIndex = item.indexOf(' : ');
                                        if (colonIndex !== -1) {
                                            return (
                                                <li key={itemIdx} className="flex items-start gap-3 text-muted-foreground">
                                                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                                    <span>
                                                        <strong className="text-foreground">{item.substring(0, colonIndex)}</strong> : 
                                                        {item.substring(colonIndex + 3)}
                                                    </span>
                                                </li>
                                            );
                                        }
                                        return (
                                            <li key={itemIdx} className="flex items-start gap-3 text-muted-foreground">
                                                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                                <span>{item}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;
