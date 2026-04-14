import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Filter, GraduationCap, Rocket } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { projects } from '../data/mock';

const ProjectCard = ({ project, index }) => (
    <Card
        key={project.id}
        className="overflow-hidden  hover:scale-[1.02] transition-all duration-300 border-2 hover:dark:border-emerald-500/50 group"
        style={{
            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
        }}
    >
        <div className="p-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
                <Badge className="bg-emerald-500/10 text-emerald-500">
                    {project.category}
                </Badge>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                    <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs hover:bg-cyan-500/10 hover:border-cyan-500 transition-colors"
                    >
                        {tech}
                    </Badge>
                ))}
            </div>

            <div className="pt-4 border-t">
                <Link to={`/projects/${project.slug}`}>
                    <Button
                        size="sm"
                        variant="ghost"
                        className="group/btn hover:text-emerald-500 w-full justify-center"
                    >
                        Voir détails
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </div>
    </Card>
);

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const scolaires = projects.filter(p => p.section === 'scolaire');
    const persos = projects.filter(p => p.section === 'perso');

    const filterProjects = (list) => {
        if (!searchTerm) return list;
        return list.filter(project =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    };

    const filteredScolaires = filterProjects(scolaires);
    const filteredPersos = filterProjects(persos);
    const hasResults = filteredScolaires.length > 0 || filteredPersos.length > 0;

    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Mes Projets
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Projets scolaires, personnels et professionnels
                    </p>
                </div>

                {/* Search */}
                <div className="mb-12">
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Rechercher un projet ou une technologie..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 py-6 text-base border-2 focus:border-emerald-500 transition-colors"
                        />
                    </div>
                </div>

                {hasResults ? (
                    <>
                        {/* Section Scolaires */}
                        {filteredScolaires.length > 0 && (
                            <div className="mb-16">
                                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <div className="p-2 bg-violet-500/10 rounded-lg">
                                        <GraduationCap className="h-6 w-6 text-violet-500" />
                                    </div>
                                    Projets Scolaires
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredScolaires.map((project, index) => (
                                        <ProjectCard key={project.id} project={project} index={index} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Section Personnels / Professionnels */}
                        {filteredPersos.length > 0 && (
                            <div className="mb-16">
                                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                                        <Rocket className="h-6 w-6 text-emerald-500" />
                                    </div>
                                    Projets Personnels & Professionnels
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredPersos.map((project, index) => (
                                        <ProjectCard key={project.id} project={project} index={index} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-20">
                        <Filter className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Aucun projet trouvé</h3>
                        <p className="text-muted-foreground">
                            Essayez de modifier votre recherche
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
