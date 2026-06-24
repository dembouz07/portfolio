import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 8,
    title: "Clean & Net - Application mobile",
    description: "Application mobile (iOS/iPad) de nettoyage et d'entretien à la demande. Côté clients : description du besoin, devis instantané, signature électronique, suivi des interventions en temps réel et accès aux factures. Côté intervenants : missions géolocalisées, pointage, photos avant/après, check-list qualité et suivi des paiements, avec contrôle qualité assisté par IA.",
    tags: ["Mobile", "iOS", "App Store"],
    imageUrl: "/assets/mobile.png",
    link: "https://apps.apple.com/sn/app/clean-et-net/id6778542126?l=fr-FR"
  },
  {
    id: 7,
    title: "Clean & Net - Site de nettoyage professionnel",
    description: "Site vitrine pour une entreprise de nettoyage professionnel en Île-de-France. Il présente les services (bureaux, copropriétés, commerces, fin de chantier, vitrerie, désinfection), les secteurs d'intervention, la méthode en 3 étapes et un système de demande de devis et de rappel.",
    tags: ["WordPress", "PHP", "CSS", "JS"],
    imageUrl: "/assets/image.png",
    link: "https://www.cleanetnet.fr/"
  },
  {
    id: 6,
    title: "ACADERYM - Plateforme de formation professionnelle",
    description: "Plateforme web pour un organisme de formation professionnelle premium. Le site présente le catalogue de formations (bâtiment, copropriété, sinistres, commercial, numérique & IA), les formats (intra, inter, distanciel, hybride), la méthode en 5 étapes et un système de demande de devis.",
    tags: ["WordPress", "PHP", "CSS", "JS", "RGPD"],
    imageUrl: "/assets/Acaderym.png",
    link: "https://acaderym.com/"
  },
  {
    id: 1,
    title: "Application de Gestion de Projet",
    description: "Cette application permet de gérer les projets de bout en bout avec une organisation flexible et une communication centralisée avec la tracabilité des actions",
    tags: ["Laravel", "Tailwind-Css", "React", "PostgreSQL", "JS"],
    imageUrl: "https://image.noelshack.com/fichiers/2026/01/5/1767385696-softweb.png",
    link: "https://www.softweb.fun"
  },
  {
    id: 2,
    title: "Gestion d'une librairie en ligne",
    description: "Ce projet est une plateforme complète dédiée aux passionnés de lecture et aux professionnels du livre.",
    tags: ["Laravel", "Tailwind-Css", "PostgreSQL", "JS"],
    imageUrl: "https://image.noelshack.com/fichiers/2025/17/7/1745780195-laravel.png",
    link: "#"
  },
  {
    id: 3,
    title: "Gestion présences",
    description: "C'est un logiciel dédiée aux établissement pour les pointages par cours des professeurs et des absences, ainsi la gestion des cours.",
    tags: ["Java", "CSS", "JPA", "Maven"],
    imageUrl: "https://image.noelshack.com/fichiers/2025/17/7/1745780500-java.png",
    link: "#"
  },
  {
    id: 4,
    title: "ElasticSearch & Kibana",
    description: "Ce projet consiste à intégrer Elasticsearch pour offrir une recherche rapide, intelligente et en temps réel sur de grandes quantités de données. Il permet d’indexer, filtrer et analyser les informations, Affichage lisible des logs pour avoir une tracabilité.",
    tags: ["Laravel", "ElasticSearch", "PostgreSQL", "Kibana", "CSS"],
    imageUrl: "https://image.noelshack.com/fichiers/2025/18/2/1745950528-devops11.png",
    link: "#"
  },
  {
    id: 5,
    title: "Gestion de prêts matériel informatique",
    description: "Application desktop WinDev qui centralise le suivi des emprunts de matériel. Elle permet d’enregistrer facilement les demandes de prêt et de retour et de recevoir des alertes en cas de retard. Elle facilite la gestion quotidienne des équipements informatiques.",
    tags: ["Windev", "HFSQL"],
    imageUrl: "https://image.noelshack.com/fichiers/2025/17/7/1745781899-windev.jpg",
    link: "#"
  }
];