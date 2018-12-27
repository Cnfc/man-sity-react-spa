import React, {Component} from 'react';

import AdminLayout from '../../Hoc/AdminLayout';

class Dashboard extends Component {

    render() {
        return (
            <AdminLayout>
                <div className="user_dashboard">
                    This is your Dashboard
                </div>
                
            </AdminLayout>
        );
    }
}

export default Dashboard;