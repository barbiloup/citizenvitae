# Guide de Test - Profil Citoyen 🧪

## 🚀 Démarrage de l'application

### Option 1 : Script automatique
```bash
./start.sh
```

### Option 2 : Commandes manuelles
```bash
# Installer les dépendances (première fois)
npm install

# Démarrer le serveur de développement
npm start
```

L'application s'ouvrira automatiquement sur `http://localhost:3000`

## 📋 Plan de Test Complet

### 1️⃣ Test Initial - Chargement des données
- [ ] L'application se charge sans erreur
- [ ] Les données d'exemple sont présentes (5 missions)
- [ ] Le profil "Marie Martin" est affiché
- [ ] Les statistiques montrent 17h total

### 2️⃣ Test Section Profil
- [ ] Cliquer sur "✏️ Éditer"
- [ ] Modifier le prénom, nom, email
- [ ] Cliquer "✅ Sauvegarder" → vérifier la mise à jour
- [ ] Cliquer "❌ Annuler" → vérifier l'annulation
- [ ] Rafraîchir la page → vérifier la persistance

### 3️⃣ Test Ajout de Mission
- [ ] Cliquer "➕ Ajouter une mission"
- [ ] Tester la validation (champs vides)
- [ ] Remplir le formulaire :
  - Titre : "Test Mission"
  - Organisation : "Test Org" (ou choisir dans la liste)
  - Durée : 2
  - Date : aujourd'hui
  - Description : optionnelle
- [ ] Cliquer "✅ Ajouter la mission"
- [ ] Vérifier l'apparition dans la liste
- [ ] Vérifier la mise à jour des statistiques

### 4️⃣ Test Filtres
- [ ] Filtrer par organisation : taper "Restos"
- [ ] Vérifier que seules les missions correspondantes s'affichent
- [ ] Filtrer par date : sélectionner une période
- [ ] Combiner plusieurs filtres
- [ ] Cliquer "Effacer les filtres"

### 5️⃣ Test Suppression
- [ ] Cliquer sur l'icône 🗑️ d'une mission
- [ ] Vérifier la suppression
- [ ] Vérifier la mise à jour des statistiques

### 6️⃣ Test Gamification
- [ ] Observer le niveau actuel et la progression
- [ ] Ajouter des missions pour changer de niveau
- [ ] Vérifier l'apparition de nouveaux badges
- [ ] Tester avec différents totaux d'heures

### 7️⃣ Test Responsive
- [ ] Redimensionner la fenêtre (mobile/tablet/desktop)
- [ ] Tester sur mobile réel si possible
- [ ] Vérifier que tous les éléments restent accessibles
- [ ] Tester les interactions tactiles

### 8️⃣ Test Persistance
- [ ] Ajouter des données
- [ ] Rafraîchir la page → données conservées
- [ ] Fermer/rouvrir l'onglet → données conservées
- [ ] Tester en navigation privée → données temporaires

### 9️⃣ Test Données d'Exemple
- [ ] Cliquer "🎯 Charger des données d'exemple"
- [ ] Vérifier le rechargement des données
- [ ] Tester plusieurs fois

## 🐛 Tests d'Edge Cases

### Validation de Formulaire
- [ ] Soumettre un formulaire vide
- [ ] Durée négative ou zéro
- [ ] Date future très éloignée
- [ ] Texte très long dans les champs

### Limites du Système
- [ ] Ajouter beaucoup de missions (50+)
- [ ] Tester avec des noms d'organisation très longs
- [ ] Tester les caractères spéciaux

### Navigation
- [ ] Utiliser Tab pour naviguer au clavier
- [ ] Tester Escape pour fermer les modales
- [ ] Tester Enter pour valider les formulaires

## 📱 Test Multi-Navigateurs

### Navigateurs Desktop
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (Mac)
- [ ] Edge

### Navigateurs Mobile
- [ ] Chrome Mobile
- [ ] Safari Mobile
- [ ] Samsung Internet

## 🎯 Scénarios d'Usage Réels

### Scénario 1 : Nouveau Bénévole
1. Charger l'app pour la première fois
2. Modifier son profil
3. Ajouter sa première mission
4. Observer sa progression

### Scénario 2 : Bénévole Expérimenté
1. Charger les données d'exemple
2. Ajouter plusieurs nouvelles missions
3. Utiliser les filtres pour retrouver des missions
4. Observer l'évolution des statistiques

### Scénario 3 : Consultation Mobile
1. Ouvrir sur mobile
2. Consulter ses statistiques
3. Ajouter rapidement une mission
4. Filtrer ses missions récentes

## ✅ Checklist de Validation

### Fonctionnalités Core
- [ ] ✅ Profil éditable
- [ ] ✅ Ajout de missions
- [ ] ✅ Liste des missions
- [ ] ✅ Suppression de missions
- [ ] ✅ Filtres fonctionnels
- [ ] ✅ Statistiques correctes
- [ ] ✅ Sauvegarde localStorage

### Fonctionnalités Bonus
- [ ] ✅ Total d'heures cumulées
- [ ] ✅ Filtres par organisation/date
- [ ] ✅ Gamification complète
- [ ] ✅ Interface responsive

### Qualité
- [ ] ✅ Interface intuitive
- [ ] ✅ Design cohérent
- [ ] ✅ Performance fluide
- [ ] ✅ Pas d'erreurs console
- [ ] ✅ Code propre et lisible

## 🚨 Problèmes Potentiels

### Si l'application ne démarre pas
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm start
```

### Si localStorage ne fonctionne pas
- Vérifier que vous n'êtes pas en navigation privée
- Vérifier les paramètres de cookies du navigateur

### Si le style ne s'affiche pas
- Vérifier que Tailwind CSS est bien configuré
- Redémarrer le serveur de développement

## 📊 Métriques de Succès

Une application réussie doit :
- ✅ Se charger en moins de 3 secondes
- ✅ Être utilisable sur mobile et desktop
- ✅ Sauvegarder les données de façon fiable
- ✅ Avoir une interface intuitive sans formation
- ✅ Gérer gracieusement les erreurs utilisateur

## 🎉 Validation Finale

Si tous les tests passent, votre application est prête pour :
- 🎯 Présentation du test technique
- 🚀 Déploiement en production
- 📱 Utilisation réelle par des bénévoles

Bonne chance pour vos tests ! 🍀