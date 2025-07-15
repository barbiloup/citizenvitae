import React, { useState } from 'react';

const AddMissionForm = ({ onAddMission, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    organization: '',
    duration: '',
    date: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const organizationSuggestions = [
    'Croix-Rouge Française',
    'Restos du Cœur',
    'Secours Populaire Français',
    'Emmaüs',
    'Médecins Sans Frontières',
    'Unicef France',
    'WWF France',
    'Greenpeace France',
    'Fondation Abbé Pierre',
    'Secours Catholique'
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Effacer l'erreur pour ce champ
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Le titre est obligatoire';
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'L\'organisation est obligatoire';
    }

    if (!formData.duration || formData.duration <= 0) {
      newErrors.duration = 'La durée doit être supérieure à 0';
    }

    if (!formData.date) {
      newErrors.date = 'La date est obligatoire';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onAddMission({
        ...formData,
        duration: parseInt(formData.duration)
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Ajouter une nouvelle mission
            </h2>
            <button 
              onClick={onCancel}
              className="text-gray-400 hover:text-gray-600 text-xl"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Titre de la mission *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className={`input-field ${errors.title ? 'border-red-500' : ''}`}
                placeholder="Ex: Distribution de repas"
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Organisation *
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => handleChange('organization', e.target.value)}
                className={`input-field ${errors.organization ? 'border-red-500' : ''}`}
                placeholder="Ex: Restos du Cœur"
                list="organizations"
              />
              <datalist id="organizations">
                {organizationSuggestions.map(org => (
                  <option key={org} value={org} />
                ))}
              </datalist>
              {errors.organization && (
                <p className="text-red-500 text-xs mt-1">{errors.organization}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Durée (heures) *
                </label>
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={formData.duration}
                  onChange={(e) => handleChange('duration', e.target.value)}
                  className={`input-field ${errors.duration ? 'border-red-500' : ''}`}
                  placeholder="Ex: 4"
                />
                {errors.duration && (
                  <p className="text-red-500 text-xs mt-1">{errors.duration}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date *
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className={`input-field ${errors.date ? 'border-red-500' : ''}`}
                />
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description (optionnel)
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className="input-field resize-none"
                rows="3"
                placeholder="Décrivez brièvement votre mission..."
              />
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="submit"
                className="btn-primary flex-1"
              >
                ✅ Ajouter la mission
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="btn-secondary flex-1"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMissionForm;