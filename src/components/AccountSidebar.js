"use client";

import { useEffect, useState } from 'react';

export default function AccountSidebar({ isOpen, onClose }) {
    // Simple UI state for now, as real auth requires backend
    const [activeTab, setActiveTab] = useState('login');

    return (
        <>
            <div className={`account-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
            <aside className={`account-sidebar ${isOpen ? 'open' : ''}`} id="account-sidebar">
                <div className="account-header">
                    <h3>👤 Mijn Account</h3>
                    <button className="close-btn" onClick={onClose} aria-label="Sluit account">&times;</button>
                </div>
                <div className="account-body">
                    {/* Placeholder for Auth Logic */}
                    <div className="account-avatar">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>

                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <p>Log in om uw bestellingen te bekijken.</p>
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '1rem' }}>
                            <button className="btn btn-primary">Inloggen</button>
                            <button className="btn btn-outline">Registreren</button>
                        </div>
                    </div>

                    <div className="account-orders">
                        <h4>Recente Bestellingen</h4>
                        <p className="text-muted">U moet ingelogd zijn om bestellingen te zien.</p>
                    </div>
                </div>
            </aside>
        </>
    );
}
