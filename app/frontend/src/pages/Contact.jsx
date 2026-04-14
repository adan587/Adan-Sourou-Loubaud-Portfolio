import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { personalInfo } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
    const { toast } = useToast();
    const [copiedField, setCopiedField] = useState(null);

    const handleCopy = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        toast({
            title: "Copié !",
            description: `${field} copié dans le presse-papiers`,
        });
        setTimeout(() => setCopiedField(null), 2000);
    };

    const contactMethods = [
        {
            icon: <Mail className="h-6 w-6" />,
            label: 'Email',
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
            color: 'emerald'
        },
        {
            icon: <Phone className="h-6 w-6" />,
            label: 'Téléphone',
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone}`,
            color: 'cyan'
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            label: 'Localisation',
            value: personalInfo.location,
            href: null,
            color: 'blue'
        }
    ];

    const socialLinks = [
        {
            icon: <Github className="h-6 w-6" />,
            label: 'GitHub',
            username: '@adan587',
            href: personalInfo.github,
            color: 'from-gray-600 to-gray-800'
        },
        {
            icon: <Linkedin className="h-6 w-6" />,
            label: 'LinkedIn',
            username: '/in/adan-sourou-loubaud',
            href: personalInfo.linkedin,
            color: 'from-blue-500 to-blue-700'
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <div className="container mx-auto max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Contactez-moi
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Je suis disponible pour une alternance ou des collaborations
                    </p>
                </div>

                {/* Main Contact Card */}
                <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 border-2 dark:border-emerald-500/20">
                    <div className="text-center mb-12">
                        <div className="w-24 h-24 rounded-full mx-auto mb-6 border-4 dark:border-emerald-500/30 shadow-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                            <span className="text-3xl font-bold text-white">AS</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-2">{personalInfo.name}</h2>
                        <p className="text-lg text-muted-foreground">{personalInfo.title}</p>
                    </div>

                    {/* Contact Methods */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="group"
                                style={{
                                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <Card className="p-6 text-center  hover:scale-105 transition-all duration-300 border-2 hover:dark:border-emerald-500/50 cursor-pointer">
                                    <div className="text-emerald-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                                        {method.icon}
                                    </div>
                                    <h3 className="font-semibold mb-2">{method.label}</h3>
                                    <p className="text-sm text-muted-foreground mb-4 break-all">
                                        {method.value}
                                    </p>
                                    <div className="flex gap-2 justify-center">
                                        {method.href && (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                asChild
                                                className="hover:bg-emerald-500/10 hover:border-emerald-500"
                                            >
                                                <a href={method.href}>
                                                    <Send className="h-4 w-4 mr-2" />
                                                    Contacter
                                                </a>
                                            </Button>
                                        )}
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => handleCopy(method.value, method.label)}
                                            className="hover:bg-cyan-500/10 hover:border-cyan-500"
                                        >
                                            {copiedField === method.label ? (
                                                <Check className="h-4 w-4" />
                                            ) : (
                                                <Copy className="h-4 w-4" />
                                            )}
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Social Links */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Réseaux sociaux
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {socialLinks.map((social, index) => (
                            <Card
                                key={index}
                                className="p-6  hover:scale-[1.02] transition-all duration-300 border-2 hover:dark:border-emerald-500/50"
                            >
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 group"
                                >
                                    <div className={`p-4 rounded-xl bg-gradient-to-br ${social.color} text-white group-hover:scale-110 transition-transform`}>
                                        {social.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg mb-1 group-hover:text-emerald-500 transition-colors">
                                            {social.label}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">{social.username}</p>
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-emerald-500 group-hover:translate-x-2 transition-all" />
                                </a>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <Card className="p-8 text-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-2 dark:border-emerald-500/30">
                    <h2 className="text-2xl font-bold mb-4">
                        Travaillons ensemble
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Je suis à la recherche d'une alternance dans le domaine de l'administration
                        réseaux ou du DevOps. N'hésitez pas à me contacter !
                    </p>
                    <Button
                        size="lg"
                        asChild
                        className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg hover:scale-105 transition-all"
                    >
                        <a href={`mailto:${personalInfo.email}`}>
                            <Mail className="mr-2 h-5 w-5" />
                            Envoyer un email
                        </a>
                    </Button>
                </Card>
            </div>
        </div>
    );
};


export default Contact;
