import React, { useState } from 'react';
import Sidebar from '../../components/common/sidebar';
import Header from '../../components/common/header'
import JobBoard from './JobBoard';
import AddStaffModel from './AddStaffModal'

function LayoutJobBoard() {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1">
                <Header />
                <JobBoard setShowModal={setShowModal}/>
            </div>

            {showModal && <AddStaffModel closeModal={() => setShowModal(false)} />}
        </div>
    );
}

export default LayoutJobBoard;
