# Guide de Déploiement sur Netlify 🚀

## Méthode 1 : Déploiement via Git (Recommandée)

### 1. Préparer le repository Git
```bash
git init
git add .
git commit -m "Initial commit - Profil Citoyen App"
```

### 2. Pousser sur GitHub/GitLab
```bash
# Créer un repository sur GitHub puis :
git remote add origin https://github.com/votre-username/profil-citoyen.git
git branch -M main
git push -u origin main
```

### 3. Connecter à Netlify
1. Aller sur [netlify.com](https://netlify.com)
2. Se connecter avec GitHub/GitLab
3. Cliquer sur "New site from Git"
4. Sélectionner votre repository
5. Netlify détectera automatiquement la configuration grâce au fichier `netlify.toml`

### 4. Configuration automatique
Le fichier `netlify.toml` configure automatiquement :
- Build command: `npm run build`
- Publish directory: `build`
- Redirections pour SPA
- Version Node.js 18

## Méthode 2 : Déploiement manuel

### 1. Build local
```bash
npm run build
```

### 2. Déploiement drag & drop
1. Aller sur [netlify.com](https://netlify.com)
2. Faire glisser le dossier `build` sur la zone de déploiement

## Variables d'environnement (si nécessaire)

Si vous ajoutez des variables d'environnement plus tard :
1. Aller dans Site settings > Environment variables
2. Ajouter vos variables (ex: `REACT_APP_API_URL`)

## Domaine personnalisé (optionnel)

1. Aller dans Site settings > Domain management
2. Ajouter votre domaine personnalisé
3. Configurer les DNS selon les instructions

## Optimisations post-déploiement

### Performance
- ✅ Build optimisé automatique
- ✅ Compression gzip
- ✅ CDN global Netlify

### SEO
- ✅ Meta tags configurés
- ✅ Titre et description
- ✅ Favicon personnalisé

### Monitoring
- Netlify Analytics (optionnel, payant)
- Google Analytics (à ajouter si besoin)

## Commandes utiles

```bash
# Développement local
npm start

# Build de production
npm run build

# Test du build local
npx serve -s build

# Démarrage rapide
./start.sh
```

## Troubleshooting

### Erreur de build
- Vérifier les versions Node.js (18 recommandé)
- Vérifier que toutes les dépendances sont installées

### Erreur 404 sur les routes
- Le fichier `netlify.toml` gère les redirections SPA
- Vérifier que le fichier est bien présent

### Problème de localStorage
- Normal en navigation privée
- Les données sont sauvegardées localement dans le navigateur

## URL de démonstration

Une fois déployé, votre application sera accessible via :
`https://votre-site-name.netlify.app`

## Fonctionnalités de production

✅ **Interface responsive** - Fonctionne sur mobile et desktop  
✅ **Sauvegarde locale** - Données persistantes via localStorage  
✅ **Performance optimisée** - Build React optimisé  
✅ **SEO friendly** - Meta tags et structure appropriée  
✅ **Accessibilité** - Bonnes pratiques d'accessibilité  
✅ **PWA ready** - Peut être étendu en Progressive Web App