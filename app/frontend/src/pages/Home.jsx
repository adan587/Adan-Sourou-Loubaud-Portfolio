import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Network, Shield, Terminal, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { personalInfo } from '../data/mock';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        {
            icon: <Network className="h-8 w-8" />,
            title: "Infrastructure & Virtualisation",
            description: "Déploiement d'environnements Proxmox, Kubernetes et gestion de clusters Talos Linux"
        },
        {
            icon: <Terminal className="h-8 w-8" />,
            title: "DevOps & CI/CD",
            description: "Pipelines GitLab CI/CD, conteneurisation Docker et déploiement automatisé"
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "GitOps & Orchestration",
            description: "ArgoCD, Helm Charts et gestion déclarative des applications Kubernetes"
        },
        {
            icon: <Code className="h-8 w-8" />,
            title: "Automatisation",
            description: "Automatisation avec Ansible, Bash et Terraform pour optimiser les opérations"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container mx-auto max-w-6xl">
                    <div
                        className={`text-center space-y-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        {/* Title */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold">
                                Bonjour, je suis{' '}
                                <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent animate-gradient">
                                    {personalInfo.name}
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                                {personalInfo.title}
                            </p>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                {personalInfo.bio}
                            </p>
                        </div>

                        {/* Alternance Banner */}
                        <Card className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-2 dark:border-emerald-500/30 hover:dark:border-emerald-500/60 transition-all">
                            <div className="flex items-center justify-center gap-3 mb-3">
                                <Search className="h-6 w-6 text-emerald-500" />
                                <h2 className="text-xl font-bold">Recherche d'alternance</h2>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Je suis à la recherche d'une alternance en <strong className="text-foreground">administration réseaux</strong> ou <strong className="text-foreground">DevOps</strong>
                            </p>
                            <Link to="/contact">
                                <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg hover:scale-105 transition-all duration-300">
                                    Me contacter
                                </Button>
                            </Link>
                        </Card>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <Link to="/projects">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg  hover:scale-105 transition-all duration-300 group"
                                >
                                    Voir mes projets
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link to="/experience">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 hover:bg-accent hover:scale-105 transition-all duration-300"
                                >
                                    Mon parcours
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Domaines d'expertise
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Compétences techniques en infrastructure, DevOps et administration réseaux
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="p-6  hover:scale-105 transition-all duration-300 border-2 hover:dark:border-emerald-500/50 group cursor-pointer"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className="text-emerald-500 mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {feature.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 bg-accent/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '2', label: "Années d'études" },
                            { value: '6+', label: 'Projets réalisés' },
                            { value: '1', label: 'Stage effectué' },
                            { value: '15+', label: 'Technologies utilisées' }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center space-y-2 transform hover:scale-110 transition-transform duration-300"
                            >
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
