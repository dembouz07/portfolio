import { Competition } from '../types';

export const competitions: Competition[] = [
    {
        id: 1,
        title: "Mémoire de fin de cycle",
        organizer: "Institut Supérieur d'Informatique",
        date: "Decembre 2025",
        rank: "Très Bien",
        category: "soutenance",
        description: "Développement d'une plateforme de gestionn de projet Collaborative.",
        technologies: ["Laravel", "React", "Tailwind", "ElasticSearch"],
        achievements: [
            "Développement d’une plateforme complète de gestion de projet collaboratif",
            "Respect des délais et des exigences fonctionnelles du cahier des charges"
        ],
        imageUrl: "https://image.noelshack.com/fichiers/2026/05/4/1769717060-sou.jpg",
        certificateUrl: "#"
    },
    {
        id: 2,
        title: "Hackathon TechInnov IPP",
        organizer: "Intitut Polytechnique Panafricain",
        date: "Juillet 2025",
        rank: "3ème place",
        category: "hackathon",
        description: "Développement d'une solution innovante pour l'approvisionnement dans le mileu du BTP",
        technologies: ["Angular", "Laravel", "Tailwind"],
        achievements: [
            "Prix du meilleur projet technique",
            "Récompense de l'innovation sociale"
        ],
        imageUrl: "https://image.noelshack.com/fichiers/2026/05/4/1769710520-ipp.jpg",
        certificateUrl: "#"
    },
    {
        id: 3,
        title: "ODC Champions Competition",
        organizer: "Orange Digital Center MEA",
        date: "Novembre 2025",
        rank: "Participant",
        category: "competition",
        description: "Participation à ODC Champions, une compétition de programmation inspirée par la CAN, organisée par le réseau Orange Digital Center MEA, visant à mettre en avant les jeunes talents technologiques d’Afrique et du Moyen-Orient à travers des défis techniques et collaboratifs.",
        technologies: ["Algorithmique", "Python", "Java", "C++"],
        achievements: [
            "Sélection et participation en équipe représentant l’Institut Supérieur d'Informatique lors d’une compétition internationale",
            "Résolution de défis de programmation dans un contexte de temps limité",
        ],
        imageUrl: "https://image.noelshack.com/fichiers/2026/05/4/1769719165-odc.png",
        certificateUrl: "#"
    }
];