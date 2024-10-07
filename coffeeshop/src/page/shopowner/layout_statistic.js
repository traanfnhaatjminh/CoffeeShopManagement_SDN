import React, { useState } from 'react';
import EditUserModal from './EditUserModal';
import AddUserModal from './AddUserModal';
import Sidebar from '../../components/common/sidebar';
import Header from '../../components/common/header';
import Statistic from './Statistic';

function LayoutSetting() {

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1">
                <Header />
                <Statistic />
            </div>
        </div>
    );
}

export default LayoutSetting;
