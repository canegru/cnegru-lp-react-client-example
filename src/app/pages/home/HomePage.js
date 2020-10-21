import React, { useEffect } from 'react';
import { lpTagNewPage } from '../../@utils/LivePerson';

function Dashboard() {
  useEffect(() => {
    lpTagNewPage(['lpRecommended', 'home']);
  }, []);

  return (
    <div className="w-full p-10 bg-gray-100">
    </div>
  )
}

export default Dashboard;