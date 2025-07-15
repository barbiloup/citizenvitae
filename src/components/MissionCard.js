import React from 'react';

const MissionCard = ({ mission, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getOrganizationIcon = (organization) => {
    const icons = {
      'Croix-Rouge': '🏥',
      'Restos du Cœur': '🍽️',
      'Secours Populaire': '🤝',
      'Emmaüs': '♻️',
      'Médecins Sans Frontières': '🩺',
      'Unicef': '👶',
      'WWF': '🌍',
      'Greenpeace': '🌱'
    };
    
    // Recherche par mot-clé dans le nom de l'organisation
    for (const [key, icon] of Object.entries(icons)) {
      if (organization.toLowerCase().includes(key.toLowerCase())) {
        return icon;
      }
    }
    
    return '🏢'; // Icône par défaut
  };

  return (
    <div className="bg-white border border-warm-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300 hover:border-primary-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
              <span className="text-xl">{getOrganizationIcon(mission.organization)}</span>
            </div>
            <div>
              <h3 className="font-semibold text-primary-800">{mission.title}</h3>
              <p className="text-sm text-secondary-600">{mission.organization}</p>
            </div>
          </div>
          
          {mission.description && (
            <p className="text-secondary-700 text-sm mb-4 line-clamp-2">
              {mission.description}
            </p>
          )}
          
          <div className="flex items-center space-x-4 text-sm text-secondary-500">
            <div className="flex items-center space-x-1 bg-warm-100 px-2 py-1 rounded-lg">
              <span>⏰</span>
              <span>{mission.duration}h</span>
            </div>
            <div className="flex items-center space-x-1 bg-warm-100 px-2 py-1 rounded-lg">
              <span>📅</span>
              <span>{formatDate(mission.date)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 ml-4">
          <button
            onClick={() => onDelete(mission.id)}
            className="text-secondary-400 hover:text-red-500 transition-colors duration-200 p-2 hover:bg-red-50 rounded-xl"
            title="Supprimer cette mission"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;