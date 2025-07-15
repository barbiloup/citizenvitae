import React from 'react';

const StatsSection = ({ missions }) => {
  // Calculs des statistiques
  const totalHours = missions.reduce((sum, mission) => sum + mission.duration, 0);
  const totalMissions = missions.length;
  
  // Organisations uniques
  const uniqueOrganizations = [...new Set(missions.map(m => m.organization))].length;
  
  // Calcul du niveau basé sur les heures - style scout
  const getLevel = (hours) => {
    if (hours >= 200) return { level: 5, title: 'Expert Bénévole', icon: '🎖️', color: 'text-secondary-600' };
    if (hours >= 100) return { level: 4, title: 'Bénévole Confirmé', icon: '🏕️', color: 'text-secondary-500' };
    if (hours >= 50) return { level: 3, title: 'Bénévole Expérimenté', icon: '🧭', color: 'text-accent-600' };
    if (hours >= 20) return { level: 2, title: 'Bénévole Actif', icon: '🔥', color: 'text-warm-600' };
    if (hours >= 5) return { level: 1, title: 'Bénévole Débutant', icon: '⭐', color: 'text-primary-500' };
    return { level: 0, title: 'Nouveau Bénévole', icon: '🌱', color: 'text-success-500' };
  };

  const currentLevel = getLevel(totalHours);
  const nextLevelThresholds = [5, 20, 50, 100, 200];
  const nextThreshold = nextLevelThresholds.find(threshold => threshold > totalHours);
  const progressPercentage = nextThreshold 
    ? (totalHours / nextThreshold) * 100 
    : 100;

  // Missions par mois (derniers 6 mois)
  const getMissionsThisMonth = () => {
    const now = new Date();
    const thisMonth = missions.filter(mission => {
      const missionDate = new Date(mission.date);
      return missionDate.getMonth() === now.getMonth() && 
             missionDate.getFullYear() === now.getFullYear();
    });
    return thisMonth.length;
  };

  const StatCard = ({ title, value, subtitle, icon, color = "text-primary-600" }) => (
    <div className="bg-white rounded-2xl p-5 border border-warm-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-secondary-600 font-medium">{title}</p>
          <p className={`text-2xl font-bold ${color}`}>{value}</p>
          {subtitle && <p className="text-xs text-secondary-500">{subtitle}</p>}
        </div>
        <div className="text-3xl opacity-80">{icon}</div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Niveau et progression */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Votre Progression
        </h3>
        
        <div className="text-center mb-4">
          <div className={`text-4xl mb-2 ${currentLevel.color}`}>
            {currentLevel.icon}
          </div>
          <h4 className="font-medium text-gray-900">{currentLevel.title}</h4>
          <p className="text-sm text-gray-600">Niveau {currentLevel.level}</p>
        </div>

        {nextThreshold && (
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>{totalHours}h</span>
              <span>{nextThreshold}h</span>
            </div>
            <div className="w-full bg-warm-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-primary-400 to-primary-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center">
              Plus que {nextThreshold - totalHours}h pour le niveau suivant !
            </p>
          </div>
        )}
      </div>

      {/* Statistiques */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Statistiques</h3>
        
        <StatCard
          title="Total d'heures"
          value={totalHours}
          subtitle="heures de bénévolat"
          icon="⏰"
          color="text-primary-600"
        />
        
        <StatCard
          title="Missions réalisées"
          value={totalMissions}
          subtitle="missions accomplies"
          icon="🎯"
          color="text-success-600"
        />
        
        <StatCard
          title="Organisations"
          value={uniqueOrganizations}
          subtitle="partenaires différents"
          icon="🏛️"
          color="text-accent-600"
        />
        
        <StatCard
          title="Ce mois-ci"
          value={getMissionsThisMonth()}
          subtitle="missions ce mois"
          icon="📋"
          color="text-secondary-600"
        />
      </div>

      {/* Badges/Récompenses */}
      {totalHours > 0 && (
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Badges Obtenus
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {totalMissions >= 1 && (
              <div className="text-center p-3 bg-primary-50 rounded-xl border border-primary-200">
                <div className="text-2xl mb-1">🌱</div>
                <p className="text-xs font-medium text-primary-700">Premier Pas</p>
              </div>
            )}
            {totalHours >= 10 && (
              <div className="text-center p-3 bg-success-50 rounded-xl border border-success-200">
                <div className="text-2xl mb-1">🔥</div>
                <p className="text-xs font-medium text-success-700">Persévérant</p>
              </div>
            )}
            {uniqueOrganizations >= 3 && (
              <div className="text-center p-3 bg-accent-50 rounded-xl border border-accent-200">
                <div className="text-2xl mb-1">🧭</div>
                <p className="text-xs font-medium text-accent-700">Polyvalent</p>
              </div>
            )}
            {totalHours >= 50 && (
              <div className="text-center p-3 bg-secondary-50 rounded-xl border border-secondary-200">
                <div className="text-2xl mb-1">🎖️</div>
                <p className="text-xs font-medium text-secondary-700">Héros Local</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsSection;