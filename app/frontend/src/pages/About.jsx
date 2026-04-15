import React from 'react';
import { GraduationCap, Award, BookOpen, Plane, Music, Dumbbell } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { personalInfo, education, certifications } from '../data/mock';

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        À propos de moi
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Parcours et formation
                    </p>
                </div>

                {/* Profile Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <Card className="md:col-span-1 p-8 text-center  transition-shadow">
                        <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 dark:border-emerald-500/20 shadow-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                            <span className="text-4xl font-bold text-white">ASL</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{personalInfo.name}</h2>
                        <p className="text-muted-foreground mb-4">{personalInfo.title}</p>
                        <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20">
                            {personalInfo.subtitle}
                        </Badge>
                    </Card>

                    <Card className="md:col-span-2 p-8  transition-shadow">
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <BookOpen className="h-6 w-6 mr-2 text-emerald-500" />
                            Mon parcours
                        </h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Attiré par les technologies de l'information, j'ai toujours été
                                intéressé par le fonctionnement des réseaux et des systèmes informatiques.
                                Cet intérêt m'a naturellement conduit à poursuivre des études en
                                administration systèmes et réseaux à l'IPI.
                            </p>
                            <p>
                                Actuellement en deuxième année de Bachelor, je développe mes compétences
                                à travers un homelab Proxmox complet avec cluster Kubernetes, pipelines
                                CI/CD GitLab, et une approche GitOps avec ArgoCD. Mon stage chez Celowen
                                m'a permis de consolider mes compétences en environnement professionnel.
                            </p>
                            <p>
                                Je suis à la recherche d'une alternance dans le domaine de l'administration
                                réseaux ou du DevOps. Mon objectif est de devenir un expert en infrastructure
                                cloud et systèmes distribués.
                            </p>
                        </div>
                    </Card>
                </div>

                {/* Education Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 flex items-center">
                        <GraduationCap className="h-8 w-8 mr-3 text-emerald-500" />
                        Formation
                    </h2>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <Card
                                key={index}
                                className="p-6  hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-emerald-500"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                                        <p className="text-muted-foreground">{edu.school}</p>
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                                        <p>{edu.location}</p>
                                        <p>{edu.period}</p>
                                    </div>
                                </div>
                                <Badge className="bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20">
                                    {edu.status}
                                </Badge>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                {certifications.length > 0 && (
                <div>
                    <h2 className="text-3xl font-bold mb-8 flex items-center">
                        <Award className="h-8 w-8 mr-3 text-emerald-500" />
                        Certifications
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <Card
                                key={index}
                                className="p-6  hover:scale-[1.02] transition-all duration-300 group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                                        <Award className="h-6 w-6 text-emerald-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">{cert.date}</span>
                                            <Badge
                                                className={
                                                    cert.status === 'completed'
                                                        ? 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
                                                        : 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20'
                                                }
                                            >
                                                {cert.status === 'completed' ? 'Obtenue' : 'En cours'}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
                )}

                {/* Interests Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
                        Centres d'intérêt
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="p-8 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300 border-2 hover:dark:border-emerald-500/50 group cursor-pointer">
                            <div className="mb-4 p-4 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                                <Plane className="h-8 w-8 text-emerald-500" />
                            </div>
                            <h3 className="text-xl font-bold">Voyages</h3>
                        </Card>
                        
                        <Card className="p-8 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300 border-2 hover:dark:border-cyan-500/50 group cursor-pointer">
                            <div className="mb-4 p-4 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                                <Music className="h-8 w-8 text-cyan-500" />
                            </div>
                            <h3 className="text-xl font-bold">Piano</h3>
                        </Card>
                        
                        <Card className="p-8 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300 border-2 hover:dark:border-violet-500/50 group cursor-pointer">
                            <div className="mb-4 p-4 rounded-full bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors">
                                <Dumbbell className="h-8 w-8 text-violet-500" />
                            </div>
                            <h3 className="text-xl font-bold">Musculation</h3>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
