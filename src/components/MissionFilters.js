import React from 'react';

const MissionFilters = ({ filters, setFilters }) => {
  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      organization: '',
      dateFrom: '',
      dateTo: ''
    });
  };

  const hasActiveFilters = filters.organization || filters.dateFrom || filters.dateTo;

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-700">Filtres</h3>
        {hasActiveFilters && (
          <button 
            onClick={clearFilters}
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            Effacer les filtres
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Organisation
          </label>
          <input
            type="text"
            placeholder="Rechercher une organisation..."
            value={filters.organization}
            onChange={(e) => handleFilterChange('organization', e.target.value)}
            className="input-field text-sm"
          />
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Date de début
          </label>
          <input
            type="date"
            value={filters.dateFrom}
            onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
            className="input-field text-sm"
          />
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Date de fin
          </label>
          <input
            type="date"
            value={filters.dateTo}
            onChange={(e) => handleFilterChange('dateTo', e.target.value)}
            className="input-field text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionFilters;