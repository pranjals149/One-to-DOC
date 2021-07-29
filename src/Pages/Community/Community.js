import React from 'react';
import Chat from '../../Components/Chat/Chat';
import Dashboard from '../../Components/Dashboard/Dashboard';
import CommSidebar from '../../Components/Sidebar/Sidebar';

export default function Community() {
    return (
        <div className="community">
            <Dashboard />
            <CommSidebar />
            <Chat />
        </div>
    );
}
