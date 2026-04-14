// Portfolio data - Adan Sourou-Loubaud

export const personalInfo = {
    name: "Adan Sourou-Loubaud",
    title: "Étudiant en Administration Systèmes et Réseaux",
    subtitle: "Bachelor 2ème année",
    bio: "Passionné par les infrastructures IT et le DevOps, je suis à la recherche d'une alternance dans le domaine de l'administration réseaux ou du DevOps. Je développe mes compétences en administration système Linux/Windows, en conteneurisation et en approche GitOps.",
    email: "asourou@icloud.com",
    phone: "06 28 95 75 07",
    location: "Toulouse, France",
    github: "https://github.com/adan587",
    linkedin: "https://www.linkedin.com/in/adan-sourou-loubaud",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adan"
};

export const projects = [
    // === PROJETS SCOLAIRES ===
    {
        id: 1,
        slug: "ipiscine-opnsense",
        title: "IPIscine : Infrastructure Réseau avec OPNsense",
        description: "Configuration DHCP, pare-feu et VPN sécurisé pour sécuriser les connexions distantes.",
        technologies: ["OPNsense", "DHCP", "Firewall Rules", "OPNvpn", "LAN/WAN"],
        section: "scolaire",
        category: "Réseau",
        details: {
            context: "Projet scolaire IPIscine visant à concevoir et déployer de A à Z une infrastructure réseau sécurisée d'entreprise autour d'OPNsense.",
            objectives: [
                "Configurer un pare-feu OPNsense (filtrage strict stateful)",
                "Mettre en place un serveur DHCP statique",
                "Déployer un tunnel VPN sécurisé",
                "Segmenter le réseau via des VLANs"
            ],
            results: "Acquisition de compétences solides en routing/switching et en sécurisation des flux réseau.",
            extendedSections: [
                {
                    title: "1. Topologie & Routage",
                    subtitle: "Architecture de base du réseau local.",
                    items: [
                        "Segmentation VLAN : Isolement des postes clients et des serveurs pour limiter les domaines de diffusion.",
                        "Routage inter-VLAN : Définition de règles précises pour autoriser uniquement les flux légitimes entre les sous-réseaux.",
                        "Service DHCP : Configuration de baux statiques (DHCP Reservation) pour garantir un adressage déterministe."
                    ]
                },
                {
                    title: "2. Sécurité & Contrôle d'Accès",
                    subtitle: "Mise en place des barrières de sécurité sur OPNsense.",
                    items: [
                        "Firewall Rules : Création de règles de filtrage restrictives (inbound/outbound) basées sur les adresses IP et les ports.",
                        "Accès Distant (VPN) : Paramétrage d'un tunnel sécurisé OPNvpn/WireGuard pour permettre l'administration à distance."
                    ]
                }
            ]
        }
    },
    {
        id: 2,
        slug: "labo-cybersecurite",
        title: "Laboratoire : Environnement d'Entraînement Cybersécurité",
        description: "Mise en place d'un environnement complet d'entraînement pour étudiants.",
        technologies: ["Proxmox", "Ansible", "Automatisation"],
        section: "scolaire",
        category: "Cybersécurité",
        details: {
            context: "Création d'un laboratoire virtuel d'entraînement à la cybersécurité (Lab CTF/Pentest) pour permettre l'exercice des étudiants dans un environnement isolé.",
            objectives: [
                "Déployer un hyperviseur Proxmox dédié",
                "Automatiser le provisionnement via Ansible",
                "Créer des machines vulnérables reproductibles"
            ],
            results: "Mise en place d'une infrastructure type Infrastructure-as-Code (IaC) orientée formation.",
            extendedSections: [
                {
                    title: "1. Hypervision (Proxmox VE)",
                    subtitle: "Socle de virtualisation du laboratoire.",
                    items: [
                        "Isolation réseau : Création de bridges dédiés (Host-only) pour éviter toute fuite des scénarios d'attaque vers le réseau de l'école.",
                        "Gestion des templates : Création de modèles de VMs Debian/Windows prêtes à être déployées à la volée."
                    ]
                },
                {
                    title: "2. Automatisation (Ansible)",
                    subtitle: "Provisionnement et configuration as Code.",
                    items: [
                        "Playbooks Ansible : Écriture de scripts pour installer les configurations et injecter les failles volontaires (mauvaises permissions, services obsolètes).",
                        "Reproductibilité : Possibilité de détruire et reconstruire le laboratoire complet en quelques minutes après une session d'entraînement."
                    ]
                }
            ]
        }
    },
    {
        id: 3,
        slug: "projet-fin-annee",
        title: "Projet de fin d'année 2ème année – Infra & Sécurité",
        description: "Déploiement collaboratif d'une infrastructure sécurisée (AD Linux, Nextcloud, Prometheus) et script de hardening complet via Ansible.",
        technologies: ["Ansible", "Linux", "Samba AD", "Nextcloud", "Prometheus", "Sécurité (Hardening)"],
        section: "scolaire",
        category: "Travail d'équipe",
        details: {
            context: "Projet collaboratif de fin de 2ème année de Bachelor, réalisé au sein d'une équipe de 5 personnes. L'objectif global était la conception, le déploiement et la sécurisation d'une infrastructure de services complets (Annuaire, Collaboration, Supervision).",
            objectives: [
                "Déployer un Active Directory sous Linux",
                "Automatiser la création d'utilisateurs sur l'AD avec Ansible",
                "Mettre à disposition un serveur Nextcloud pour l'équipe",
                "Installer un environnement Prometheus pour le monitoring",
                "Appliquer des règles strictes de sécurité (Hardening Linux) sur les serveurs"
            ],
            results: "Une infrastructure fonctionnelle et supervisée. Ma contribution principale a permis de sécuriser toute la flotte en un seul script, instaurant un socle durci et standardisé.",
            extendedSections: [
                {
                    title: "1. Architecture d'Équipe",
                    subtitle: "Déploiements applicatifs réalisés par mes collègues.",
                    items: [
                        "Identité & Annuaire (Linux AD) : Mise en place d'un contrôleur de domaine sous Linux (Samba-AD) comme alternative à Windows Server.",
                        "Automatisation Utilisateurs : Ajout des utilisateurs AD en masse via l'écriture de playbooks Ansible.",
                        "Fichiers & Collaboration : Installation et interconnexion d'un serveur Nextcloud.",
                        "Supervision (Prometheus) : Déploiement du serveur Prometheus pour centraliser les métriques de performance et de santé des machines."
                    ]
                },
                {
                    title: "2. Automatisation de la Sécurité (Ma contribution)",
                    subtitle: "Développement d'un script Ansible de Hardening (Durcissement).",
                    items: [
                        "Conception du Playbook Ansible : Écriture d'un script regroupant les meilleures pratiques de durcissement Linux (Hardening SSH, politiques de mots de passe, permissions réseau et système).",
                        "Exécution Centralisée : Possibilité de déployer tout le socle de sécurité via une seule commande sur n'importe quel serveur du projet.",
                        "Standardisation : Garantie qu'aucune machine n'est mise en production avec une faille de configuration de base, grâce au provisionnement automatisé de la sécurité."
                    ]
                }
            ]
        }
    },
    // === PROJETS PERSONNELS / PROFESSIONNELS ===
    {
        id: 4,
        slug: "homelab-v1",
        title: "Home Lab V1 – Infrastructure & Sécurité",
        description: "Mise en place d'un home lab complet pour expérimenter administration système, réseau et cybersécurité. Un environnement de test robuste simulant des conditions réelles.",
        technologies: ["Proxmox", "OPNsense", "Docker", "Portainer", "Nginx Proxy Manager", "WireGuard", "VLANs", "AdGuard", "Uptime Kuma", "LXC"],
        section: "perso",
        category: "Infrastructure",
        details: {
            context: "Projet personnel de conception d'une infrastructure complète pour expérimenter l'administration système, réseau et cybersécurité dans un environnement réaliste.",
            objectives: [
                "Déployer Proxmox (VMs et LXC) et un pare-feu OPNsense",
                "Mettre en place l'écosystème Docker avec Portainer",
                "Exposer et sécuriser les services (NPM, VPN WireGuard)",
                "Mettre en place DNS local et monitoring (AdGuard, Uptime Kuma)"
            ],
            results: "Architecture réseau segmentée, fonctionnelle et robuste servant de bac à sable permanent pour l'apprentissage continu.",
            extendedSections: [
                {
                    title: "1. Virtualisation & Réseau",
                    subtitle: "La base de l'infrastructure Homelab.",
                    items: [
                        "Hyperviseur Proxmox VE : Utilisation mixte de VMs classiques et de conteneurs LXC pour optimiser les ressources matérielles.",
                        "OPNsense & VLANs : Séparation stricte des flux (LAN, IoT, Serveurs, Invités). Modèle Zero Trust intra-zones."
                    ]
                },
                {
                    title: "2. Services Conteneurisés",
                    subtitle: "Déploiement applicatif léger et modulaire.",
                    items: [
                        "Docker & Portainer : Gestion graphique et centralisée des stacks Docker Compose.",
                        "Exposition Sécurisée : Nginx Proxy Manager pour terminer le flux HTTPS (Let's Encrypt) et router vers les conteneurs."
                    ]
                },
                {
                    title: "3. Sécurité et Supervision",
                    subtitle: "Garantir l'accessibilité et bloquer les menaces.",
                    items: [
                        "AdGuard Home : Résolution DNS locale avec blocage publicitaire et filtrage de tracking réseau au niveau global.",
                        "WireGuard VPN : Accès distant chiffré performant pour l'administration.",
                        "Monitoring : Mise en place d'Uptime Kuma pour alerter en cas d'indisponibilité d'un service critique."
                    ]
                }
            ]
        }
    },
    {
        id: 5,
        slug: "homelab-v2",
        title: "Home Lab V2 – Kubernetes & GitOps",
        description: "Évolution du homelab vers un cluster Kubernetes (Talos Linux) avec approche GitOps, registry privé Harbor, Gitea auto-hébergé et reverse proxy Traefik.",
        technologies: ["Kubernetes", "Talos Linux", "Helm", "ArgoCD", "GitOps", "Harbor", "Gitea", "Traefik", "Dashy", "CoreDNS"],
        section: "perso",
        category: "DevOps",
        details: {
            context: "Modernisation totale du Homelab en migrant des conteneurs isolés vers une architecture Kubernetes hautement disponible gérée par approche GitOps.",
            objectives: [
                "Déployer K8s sur OS Immuable (Talos Linux)",
                "Intégrer les pratiques GitOps via ArgoCD",
                "Mettre en place un Registry Privé (Harbor) et un Git local (Gitea)",
                "Gérer l'Ingress (Traefik) et le DNS interne (CoreDNS)"
            ],
            results: "Infrastructure cloud-native d'entreprise simulée à domicile, permettant un déploiement continu et une résilience applicative.",
            extendedSections: [
                {
                    title: "1. Socle Kubernetes",
                    subtitle: "Changement de paradigme : du monolythe Docker vers l'orchestrateur K8s.",
                    items: [
                        "Talos Linux : Installation d'un système d'exploitation minimaliste, sécurisé et entièrement géré par API pour faire tourner les nœuds K8s.",
                        "Ingress Controller : Remplacement du reverse proxy classique par Traefik en tant qu'Ingress Kubernetes, gérant dynamiquement les routes TLS."
                    ]
                },
                {
                    title: "2. Pipeline & GitOps (ArgoCD)",
                    subtitle: "Déploiement déclaratif continu.",
                    items: [
                        "Dépôt Gitea : Auto-hébergement du code source et des manifests YAML/Helm de l'infrastructure de manière privée.",
                        "ArgoCD : Synchronisation continue entre le dépôt Gitea et l'état réel du cluster. Toute modification sur Git est immédiatement appliquée au cluster K8s.",
                        "Registry Docker privé : Installation de Harbor pour stocker, signer et analyser les vulnérabilités des images Docker locales."
                    ]
                },
                {
                    title: "3. Expérience Utilisateur (Dashboard)",
                    subtitle: "Accès centralisé.",
                    items: [
                        "Dashy : Création d'un portail intuitif réunissant tous les services internes (monitoring, git, CI/CD, orchestration) avec authentification SSO."
                    ]
                }
            ]
        }
    },
    {
        id: 6,
        slug: "stage-celowen",
        title: "Stage – Celowen : Infra, DevOps & Kubernetes",
        description: "Bilan des réalisations techniques : conception d'un socle réseau sécurisé, déploiement d'une architecture Kubernetes (Talos), et automatisation CI/CD.",
        technologies: ["OPNsense", "HAProxy", "Talos Linux", "Kubernetes", "Cilium", "Proxmox", "OpenShift", "GitLab CI", "Docker"],
        section: "perso",
        category: "Professionnel",
        details: {
            context: "Synthèse exhaustive des missions d'ingénierie, de déploiement et de maintien en condition opérationnelle (MCO) menées au cours de mon stage. L'infrastructure globale repose sur des principes de haute disponibilité, de sécurité \"Zero Trust\" et d'Infrastructure as Code (IaC).",
            objectives: [
                "Déployer une infrastructure réseau (OPNsense, HAProxy, VLANs)",
                "Mettre en place l'architecture K8s sur Talos Linux",
                "Gérer les services K8s, la persistance et le load balancing",
                "Automatiser avec GitLab CI/CD, Authentik et Docker",
                "Administrer les environnements lourds (Proxmox, OpenShift)",
                "Créer une documentation opérationnelle et des procédures PRA"
            ],
            results: "Une infrastructure de production stable, documentée et sécurisée. Le projet a couvert tous les aspects du DevOps moderne, de la couche réseau jusqu'à l'orchestration complexe et la CI/CD.",
            extendedSections: [
                {
                    title: "1. Infrastructure Réseau, Sécurité & Routage Applicatif",
                    subtitle: "Conception du socle réseau sécurisé permettant l'interconnexion et l'exposition des différents services.",
                    items: [
                        "Déploiement Pare-feu & Segmentation : Installation d'OPNsense. Gestion de VLANs (Management, DMZ, LAN, Cluster K8s) avec routage inter-VLAN strict.",
                        "Configuration Reverse Proxy (HAProxy) : Point d'entrée unique (Front-end 443) pour exposer les services internes.",
                        "Terminaison SSL & Chiffrement : Déchiffrement SSL centralisé. Configuration 'ssl verify none' sur backends spécifiques (Kubernetes Dashboard, Omni) pour les certificats auto-signés.",
                        "Routage Dynamique (SNI) : Utilisation des ACLs SNI pour trier et rediriger vers GitLab ou Vaultwarden sans conflits de ports."
                    ]
                },
                {
                    title: "2. Architecture Kubernetes & OS Immuable (Talos Linux)",
                    subtitle: "Déploiement d'un cluster Kubernetes de production \"Bare Metal\" sécurisé et optimisé.",
                    items: [
                        "Déploiement de Cluster Talos : 6 nœuds (3 Control Planes, 3 Workers) basé sur l'OS immuable Talos Linux via talosctl/kubectl.",
                        "Réseau Cloud Native (CNI) : Installation de Cilium (eBPF) en remplacement de kube-proxy pour optimiser routage et sécurité.",
                        "Gestion PKI : Résolution d'incidents d'authentification TLS (CAs désynchronisés), gestion stricte du secrets.yaml.",
                        "Configuration Hybride : Administration via Git Bash (Windows), résolution de conflits de syntaxe Shell pour les contextes KUBECONFIG."
                    ]
                },
                {
                    title: "3. Services K8s, Persistance & Load Balancing",
                    subtitle: "Mise en production d'applications conteneurisées avec gestion complexe du stockage et réseau externe.",
                    items: [
                        "Load Balancing Interne (MetalLB) : Mode Layer 2 pour attribution IP dynamique (services LoadBalancer), correction de syntaxes YAML.",
                        "Déploiement de Services : Mise en production de Vaultwarden.",
                        "Persistance sur OS Immuable : Stockage via hostPath pour contourner l'immuabilité de Talos.",
                        "Gestion des Registres Helm : Migration vers registres OCI et manifests YAML bruts face à l'instabilité de certains dépôts."
                    ]
                },
                {
                    title: "4. Architecture Cloud Native, CI/CD & Identité",
                    subtitle: "Automatisation des cycles de développement et intégration SSO.",
                    items: [
                        "Pipeline CI/CD : GitLab CI pour déploiement auto d'images Docker vers Portainer via Webhooks.",
                        "Gestion des Bases de Données : Migrations SQL automatisées. Résolution d'états de verrouillage (Dirty database) via purge de volumes.",
                        "SSO & Résolution DNS interne : Authentification OIDC (Authentik). Résolution de l'isolation DNS des conteneurs via extra_hosts."
                    ]
                },
                {
                    title: "5. Virtualisation & Orchestration Lourde (Proxmox & OpenShift)",
                    subtitle: "Administration des hyperviseurs et déploiement d'architectures d'entreprise certifiées.",
                    items: [
                        "Déploiement OpenShift (SNO) : Installation via Assisted Installer. Enregistrements DNS stricts (Host Overrides sous pfSense/OPNsense).",
                        "Déploiement d'une application propre à OpenShift : Moteur en Certified Containers. Local Storage Operator, clés d'entité, licences.",
                        "Optimisation Proxmox : Diagnostic d'une fuite RAM impactant l'hyperviseur.",
                        "Tuning Système (Kernel) : Saturation de mémoire Slab (indexation snapshots ZFS). Procédure de purge à chaud (drop_caches) et réglage vm.vfs_cache_pressure."
                    ]
                },
                {
                    title: "6. Outils, Veille & Documentation Opérationnelle",
                    subtitle: "Capitalisation des connaissances et production de livrables professionnels.",
                    items: [
                        "Rédaction Technique : Utilisation d'Obsidian (Better Export PDF) pour génération automatisée de rapports.",
                        "Procédures de Reprise (PRA) : Documentation de restauration de pare-feu (Disaster Recovery) et récupération d'accès administrateurs locaux via console Rails."
                    ]
                }
            ]
        }
    }
];

export const experiencesIT = [
    {
        id: 1,
        title: "Administrateur Systèmes et Réseaux",
        company: "Celowen",
        location: "France",
        period: "2025",
        type: "Stage",
        description: "Administration des systèmes et réseaux de l'entreprise, gestion de l'infrastructure IT.",
        tasks: [
            "Administration des serveurs et de l'infrastructure réseau",
            "Gestion et maintenance des systèmes",
            "Support technique et résolution d'incidents",
            "Documentation technique des procédures"
        ]
    }
];

export const experiencesOther = [
    {
        id: 2,
        title: "Agent Polyvalent",
        company: "Intermarché",
        location: "Merville (31)",
        period: "Depuis septembre 2024",
        type: "CDI étudiant",
        description: "Caisse, mise en rayon, accueil et renseignement aux clients.",
        tasks: [
            "Mise en rayon des produits",
            "Gestion de caisse",
            "Accueil et renseignement aux clients",
            "Formation des nouveaux employés"
        ]
    },
    {
        id: 3,
        title: "Agent Polyvalent",
        company: "Carrefour",
        location: "Lacanau (33)",
        period: "Août 2023",
        type: "Emploi saisonnier",
        description: "Mise en rayon des produits, gestion de caisse, accueil et renseignement aux clients.",
        tasks: [
            "Mise en rayon des produits",
            "Gestion de caisse",
            "Accueil et renseignement aux clients"
        ]
    },
    {
        id: 4,
        title: "Animateur",
        company: "Cap33",
        location: "Lacanau (33)",
        period: "Août 2023",
        type: "Emploi saisonnier (SNU phase 2)",
        description: "Encadrement d'activités sportives dans le cadre de la phase 2 du SNU.",
        tasks: [
            "Encadrement d'un groupe d'environ 20 personnes (enfants et adultes)",
            "Organisation d'activités sportives",
            "Respect des règles de sécurité"
        ]
    }
];

export const skills = [
    {
        id: "cybersecurity",
        title: "Cybersécurité",
        icon: "Shield",
        items: [
            "Chiffrement et authentification",
            "Sécurisation des accès",
            "Outils de découverte",
            "VPN (WireGuard, OPNvpn)",
            "VPN site-to-site",
            "Machines virtuelles vulnérables (lab CTF)",
            "Analyse réseau avancée",
            "Hardening système",
            "Gestion des certificats (PKI)"
        ]
    },
    {
        id: "network",
        title: "Réseaux & Sécurité",
        icon: "Network",
        items: [
            "Modèle OSI / TCP-IP",
            "DHCP statique / DNS",
            "HTTP / HTTPS / SSH",
            "Pare-feu OPNsense",
            "Segmentation réseau (VLANs)",
            "NAT & Filtrage DNS (AdGuard)",
            "CoreDNS",
            "Cisco Packet Tracer",
            "Routage inter-VLAN",
            "Architecture LAN / WAN"
        ]
    },
    {
        id: "infra",
        title: "Virtualisation & Infrastructure",
        icon: "Server",
        items: [
            "Administration Proxmox VE",
            "Kubernetes (K8s)",
            "Talos Linux",
            "Conteneurs LXC",
            "Machines Virtuelles (VM)",
            "Linux (Debian, Ubuntu)",
            "Windows Server (AD DS, DNS)",
            "Active Directory (GPO, OU)",
            "Gestion utilisateurs et droits",
            "VMware Workstation",
            "Stockage & Snapshots"
        ]
    },
    {
        id: "devops",
        title: "DevOps & CI/CD",
        icon: "Container",
        items: [
            "Écosystème Docker",
            "Docker-in-Docker (DinD)",
            "Portainer",
            "Docker Compose (YAML)",
            "Déploiement de Stacks",
            "GitLab CI/CD",
            "ArgoCD (GitOps)",
            "Helm Charts",
            "Ansible",
            "Terraform",
            "Git & Gitea",
            "Harbor (Registry Docker)",
            "YAML / JSON"
        ]
    },
    {
        id: "web",
        title: "Services Web & Accès",
        icon: "Globe",
        items: [
            "Reverse Proxy (Nginx Proxy Manager)",
            "Traefik (Ingress Kubernetes)",
            "Certificats SSL/TLS (Let's Encrypt)",
            "Exposition sécurisée de services",
            "Webhooks (déploiement auto)",
            "Dashy (Dashboard unifié)",
            "Homepage",
            "Configuration DNS locale"
        ]
    },
    {
        id: "monitoring",
        title: "Monitoring & Troubleshooting",
        icon: "Activity",
        items: [
            "Uptime Kuma (Surveillance)",
            "Tableaux de bord unifiés",
            "Analyse de logs",
            "Débogage de conteneurs",
            "Résolution d'incidents CLI",
            "Shell scripting (Bash/PowerShell)",
            "Wireshark",
            "Documentation technique"
        ]
    }
];

export const certifications = [];

export const education = [
    {
        degree: "Bachelor Administration Systèmes et Réseaux",
        school: "IPI",
        location: "Toulouse, France",
        period: "2024 - 2026",
        status: "En cours - 2ème année"
    }
];
