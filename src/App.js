import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import MissionsSection from './components/MissionsSection';
import AddMissionForm from './components/AddMissionForm';
import StatsSection from './components/StatsSection';
import { loadFromLocalStorage, saveToLocalStorage } from './utils/localStorage';
import { sampleMissions, sampleProfile } from './data/sampleData';

function App() {
  const [profile, setProfile] = useState(sampleProfile);

  const [missions, setMissions] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [filters, setFilters] = useState({
    organization: '',
    dateFrom: '',
    dateTo: ''
  });

  // Charger les données depuis localStorage au démarrage
  useEffect(() => {
    const savedProfile = loadFromLocalStorage('profile');
    const savedMissions = loadFromLocalStorage('missions');
    
    if (savedProfile) {
      setProfile(savedProfile);
    }
    
    if (savedMissions && savedMissions.length > 0) {
      setMissions(savedMissions);
    } else {
      // Charger les données d'exemple si aucune donnée sauvegardée
      setMissions(sampleMissions);
    }
  }, []);

  // Fonction pour réinitialiser avec les données d'exemple
  const loadSampleData = () => {
    setProfile(sampleProfile);
    setMissions(sampleMissions);
  };

  // Sauvegarder les missions dans localStorage
  useEffect(() => {
    saveToLocalStorage('missions', missions);
  }, [missions]);

  // Sauvegarder le profil dans localStorage
  useEffect(() => {
    saveToLocalStorage('profile', profile);
  }, [profile]);

  const addMission = (newMission) => {
    const mission = {
      ...newMission,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setMissions(prev => [mission, ...prev]);
    setShowAddForm(false);
  };

  const deleteMission = (missionId) => {
    setMissions(prev => prev.filter(mission => mission.id !== missionId));
  };

  return (
    <div className="min-h-screen bg-warm-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            <ProfileSection profile={profile} setProfile={setProfile} />
            
            <MissionsSection 
              missions={missions}
              filters={filters}
              setFilters={setFilters}
              onDeleteMission={deleteMission}
              onShowAddForm={() => setShowAddForm(true)}
            />
            
            {showAddForm && (
              <AddMissionForm 
                onAddMission={addMission}
                onCancel={() => setShowAddForm(false)}
              />
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <StatsSection missions={missions} />
            
            {/* Bouton pour charger les données d'exemple */}
            <div className="mt-6 card">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Données de test</h3>
              <button 
                onClick={loadSampleData}
                className="btn-secondary w-full text-sm"
              >
                🎯 Charger des données d'exemple
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Charge un profil et des missions d'exemple pour tester l'application
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;