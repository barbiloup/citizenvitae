import React, { useState } from 'react';

const ProfileSection = ({ profile, setProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProfile(profile);
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditedProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Mon Profil</h2>
        {!isEditing ? (
          <button 
            onClick={handleEdit}
            className="btn-secondary text-sm"
          >
            ✏️ Éditer
          </button>
        ) : (
          <div className="flex space-x-2">
            <button 
              onClick={handleSave}
              className="btn-primary text-sm"
            >
              ✅ Sauvegarder
            </button>
            <button 
              onClick={handleCancel}
              className="btn-secondary text-sm"
            >
              ❌ Annuler
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">
              {profile.firstName?.[0]}{profile.lastName?.[0]}
            </span>
          </div>
          
          <div className="flex-1">
            {!isEditing ? (
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {profile.firstName} {profile.lastName}
                </h3>
                <p className="text-gray-600">{profile.email}</p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Prénom"
                    value={editedProfile.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    className="input-field text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    value={editedProfile.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    className="input-field text-sm"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={editedProfile.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="input-field text-sm w-full"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">🏆</div>
            <p className="text-sm text-gray-600 mt-1">Citoyen Engagé</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;