import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
    return (
        <footer className="bg-accent/50 border-t border-border mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                            {personalInfo.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {personalInfo.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Intéressé par l'infrastructure IT et les technologies réseau.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Liens rapides</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link to="/" className="hover:text-emerald-500 transition-colors">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="hover:text-emerald-500 transition-colors">
                                    Projets
                                </Link>
                            </li>
                            <li>
                                <Link to="/experience" className="hover:text-emerald-500 transition-colors">
                                    Expérience
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-emerald-500 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Contact</h4>
                        <div className="space-y-3 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-emerald-500" />
                                <span>{personalInfo.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-emerald-500" />
                                <span>{personalInfo.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-emerald-500" />
                                <span>{personalInfo.location}</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-3 pt-2">
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-background hover:bg-emerald-500/10 hover:text-emerald-500 transition-all hover:scale-110"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-background hover:bg-cyan-500/10 hover:text-cyan-500 transition-all hover:scale-110"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;