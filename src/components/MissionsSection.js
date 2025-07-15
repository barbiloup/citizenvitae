import React from 'react';
import MissionCard from './MissionCard';
import MissionFilters from './MissionFilters';

const MissionsSection = ({ 
  missions, 
  filters, 
  setFilters, 
  onDeleteMission, 
  onShowAddForm 
}) => {
  // Filtrer les missions selon les critères
  const filteredMissions = missions.filter(mission => {
    const matchesOrganization = !filters.organization || 
      mission.organization.toLowerCase().includes(filters.organization.toLowerCase());
    
    const matchesDateFrom = !filters.dateFrom || 
      new Date(mission.date) >= new Date(filters.dateFrom);
    
    const matchesDateTo = !filters.dateTo || 
      new Date(mission.date) <= new Date(filters.dateTo);
    
    return matchesOrganization && matchesDateFrom && matchesDateTo;
  });

  return (
    <section className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Mes Missions Bénévoles
          <span className="ml-2 text-sm font-normal text-gray-500">
            ({filteredMissions.length} mission{filteredMissions.length !== 1 ? 's' : ''})
          </span>
        </h2>
        <button 
          onClick={onShowAddForm}
          className="btn-primary"
        >
          ➕ Ajouter une mission
        </button>
      </div>

      <MissionFilters filters={filters} setFilters={setFilters} />

      <div className="space-y-4">
        {filteredMissions.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {missions.length === 0 ? 'Aucune mission pour le moment' : 'Aucune mission ne correspond aux filtres'}
            </h3>
            <p className="text-gray-600 mb-4">
              {missions.length === 0 
                ? 'Commencez par ajouter votre première mission bénévole !' 
                : 'Essayez de modifier vos critères de recherche.'
              }
            </p>
            {missions.length === 0 && (
              <button 
                onClick={onShowAddForm}
                className="btn-primary"
              >
                Ajouter ma première mission
              </button>
            )}
          </div>
        ) : (
          filteredMissions.map(mission => (
            <MissionCard 
              key={mission.id} 
              mission={mission} 
              onDelete={onDeleteMission}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default MissionsSection;