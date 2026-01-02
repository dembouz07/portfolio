import { Project } from '../types';

export const projects: Project[] = [
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