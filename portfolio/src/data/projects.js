// Import actual existing assets
import swiftShopMain from '../projectsImg/SwiftShop_main.png'
import swiftShopSmall from '../projectsImg/SwiftShop_small.png'
import swiftShopVideo from '../projectsImg/SwiftShop.mp4'

import weatherForecastMain from '../projectsImg/Weather_Forecast_main.png'
import weatherForecastVideo from '../projectsImg/Weather_Forecast.mp4'

import godotMain from '../projectsImg/Godot_main.png'
import godotSmall from '../projectsImg/Godot_small.png'
import godotVideo from '../projectsImg/Jeu.mp4'

import formaPlusSmall from '../projectsImg/FormaPlus_small.svg'
import formaPlusMain from '../projectsImg/FormaPlus_main.png'

// Fallback image for missing assets (FormaPlus)
import placeholderImg from '../assets/Photo placeholder.png'

export const projectsData = [
    {
        id: 1,
        name: "SwiftShop",
        descriptionCourte: "Plateforme de e-commerce avec Laravel.",
        description: "SwiftShop est un projet de site e-commerce que j'ai réalisé en PHP avec Laravel. Il permet aux utilisateurs d'acheter et de vendre des produits.\nLes compétences sur lesquelles j'ai été évaluées étaient ma capacité à créer de A à Z un site e-commerce, ainsi que ma capacité à manipuler les bases de données.",
        technologies: ["PHP", "Laravel", "MySQL", "CSS", "HTML", "Javascript"],
        mainImg: swiftShopMain,
        smallImg: swiftShopSmall,
        video: swiftShopVideo,
        lien: "https://github.com/aZeDen31/e-commerce-laravel"
    },
    {
        id: 2,
        name: "FormaPlus",
        descriptionCourte: "Application de gestion de formations pour les bénévoles de l'association Frequencies.",
        descritpion: "Formaplus est une application web que j'ai réalisé pour l'association Frequencies. Elle permet de récupérer et d'afficher les informations par rapport à différentes formations et webinaires de plusieurs sources différentes.\nLa partie frontend est faite en React et le scraping (récupération automatique des données sur les sites fournisseurs de formation) est fait en Python.\nJ'ai réalisé ce projet dans le cadre de mon stage et il s'agit de la première fois que mon travail se trouve en production.",
        technologies: ["React", "JavaScript", "Python", "Firebase/Firestore"],
        mainImg: formaPlusMain,
        smallImg: formaPlusSmall,
        video: null,
        lien: null
    },
    {
        id: 3,
        name: "Weather Forecast",
        descriptionCourte: "Application météo en Flutter.",
        description: "Weather Forecast est une application mobile que j'ai réalisé en Flutter. Elle récupère les informations météo avec OpenWeatherMap et affiche les données des 5 prochains jours.",
        technologies: ["Flutter", "Dart"],
        mainImg: weatherForecastMain,
        smallImg: weatherForecastMain,
        video: weatherForecastVideo,
        lien: "https://github.com/aZeDen31/weather-forecast"
    },
    {
        id: 4,
        name: "Jeu avec Godot",
        descriptionCourte: "Plateformer 3D.",
        description: 'Ce jeu a été réalisé dans le cas d\'un challenge lancé par un de mes professeurs : réaliser un jeu en deux jours avec comme thème "subversif".\nPartant de ce thème j\'ai décidé de faire un plateformer 3D assez simple mais avec un twist : le joueur doit payer pour chaque action. Un saut lui coutera 1€, prendre un assenceur 5€ etc. Et quand il se retrouve à court d\'argent, une popup apparait sur son écran, bloque le jeu, et le redirige vers mon paypal.\nLe challenge était amusant et une belle découverte de Godot.',
        technologies: ["Godot", "GDScript"],
        mainImg: godotMain,
        smallImg: godotSmall,
        video: godotVideo,
        lien: null
    }
]