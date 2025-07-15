# Profil Citoyen 🏆

Une application web React pour gérer et suivre ses missions bénévoles.

## 🚀 Fonctionnalités

- **Profil utilisateur** : Gestion des informations personnelles avec édition en ligne
- **Gestion des missions** : Ajout, affichage et suppression de missions bénévoles
- **Filtres avancés** : Recherche par organisation, période
- **Statistiques** : Suivi des heures, progression, badges
- **Gamification** : Système de niveaux et récompenses
- **Sauvegarde locale** : Données persistantes via localStorage
- **Interface responsive** : Optimisée pour mobile et desktop

## 🛠️ Technologies utilisées

- **React 18** - Framework JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **LocalStorage** - Persistance des données côté client
- **Netlify** - Déploiement et hébergement

## 📦 Installation

1. Cloner le projet
```bash
git clone <url-du-repo>
cd profil-citoyen
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer en mode développement
```bash
npm start
```

4. Construire pour la production
```bash
npm run build
```

## 🎯 Structure du projet

```
src/
├── components/          # Composants React
│   ├── Header.js       # En-tête de l'application
│   ├── ProfileSection.js   # Section profil utilisateur
│   ├── MissionsSection.js  # Liste des missions
│   ├── MissionCard.js      # Carte d'une mission
│   ├── MissionFilters.js   # Filtres de recherche
│   ├── AddMissionForm.js   # Formulaire d'ajout
│   └── StatsSection.js     # Statistiques et gamification
├── utils/              # Utilitaires
│   └── localStorage.js # Gestion du localStorage
├── App.js             # Composant principal
├── index.js           # Point d'entrée
└── index.css          # Styles globaux
```

## 🎨 Design System

L'application utilise un design system inspiré du scoutisme avec des tons pastels :
- **Couleurs** : Palette pastel naturelle (vert sauge, beige sable, bleu ciel, terre de sienne)
- **Style** : Design doux et chaleureux inspiré de l'univers scout
- **Typographie** : Hiérarchie claire avec des couleurs harmonieuses
- **Composants** : Boutons arrondis, cartes avec ombres douces, formulaires élégants
- **Icônes** : Emojis thématiques scout (🏕️, 🧭, 🔥, 🎖️) pour une interface conviviale
- **Responsive** : Grille adaptative mobile-first avec transitions fluides

## 🏅 Système de gamification

- **Niveaux** : 6 niveaux inspirés du scoutisme basés sur les heures de bénévolat
- **Badges** : Récompenses thématiques scout (🌱 Premier Pas, 🔥 Persévérant, 🧭 Polyvalent, 🎖️ Héros Local)
- **Progression** : Barre de progression dégradée vers le niveau suivant
- **Statistiques** : Métriques détaillées avec design pastel et icônes scout
- **Visuels** : Interface chaleureuse avec couleurs naturelles et formes arrondies

## 🚀 Déploiement

L'application est configurée pour un déploiement automatique sur Netlify :

1. Connecter le repository à Netlify
2. La configuration `netlify.toml` gère le build automatiquement
3. L'application sera accessible via l'URL Netlify

## 📱 Fonctionnalités bonus implémentées

- ✅ Total d'heures cumulées
- ✅ Filtres par organisation et date
- ✅ Système de gamification complet
- ✅ Interface responsive
- ✅ Sauvegarde localStorage
- ✅ Configuration Netlify

## 🔮 Améliorations possibles

- Authentification utilisateur
- Synchronisation cloud
- Export des données (PDF, CSV)
- Notifications et rappels
- Géolocalisation des missions
- Partage sur réseaux sociaux
- Mode sombre
- Graphiques de progression

## 📄 Licence

Ce projet est créé dans le cadre d'un test technique de stage.# citizenvitae
