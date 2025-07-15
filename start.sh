#!/bin/bash

echo "🚀 Démarrage de l'application Profil Citoyen"
echo "============================================"

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
fi

echo "🔧 Démarrage du serveur de développement..."
echo "L'application sera accessible sur http://localhost:3000"
echo ""
echo "Fonctionnalités disponibles :"
echo "✅ Gestion du profil utilisateur"
echo "✅ Ajout et gestion des missions bénévoles"
echo "✅ Filtres et recherche"
echo "✅ Statistiques et gamification"
echo "✅ Sauvegarde locale des données"
echo "✅ Interface responsive"
echo ""

npm start