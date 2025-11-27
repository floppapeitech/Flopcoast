
import React from 'react';
import { User } from '../types';
import { Shield, Search, MoreHorizontal, User as UserIcon } from 'lucide-react';

interface AdminPanelProps {
  users: User[];
}

const AdminPanel: React.FC<AdminPanelProps> = ({ users }) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto">
      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-display font-bold flex items-center gap-3">
              <Shield className="text-black dark:text-white" /> User Database
            </h2>
            <p className="text-silver-500 mt-2">Manage customer accounts and administrative privileges.</p>
          </div>
          
          <div className="bg-silver-100 dark:bg-zinc-800 p-1 rounded-full flex items-center gap-2 px-4 w-full md:w-auto">
            <Search size={18} className="text-silver-400" />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="bg-transparent border-none outline-none py-2 text-sm w-full md:w-64 placeholder-silver-500"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-silver-200 dark:border-zinc-800">
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-silver-400">User</th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-silver-400">Role</th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-silver-400">Tier</th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-silver-400">Points</th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-silver-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-silver-100 dark:divide-zinc-800">
              {users.map((user) => (
                <tr key={user.id} className="group hover:bg-silver-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-silver-100 dark:bg-zinc-800 flex items-center justify-center">
                        <UserIcon size={16} className="text-silver-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{user.name}</div>
                        <div className="text-xs text-silver-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-bold rounded-full ${user.role === 'ADMIN' ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-silver-100 text-silver-600 dark:bg-zinc-800 dark:text-silver-300'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium">{user.awardsTier}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-mono text-silver-500">{user.awardsPoints.toLocaleString()}</span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="p-2 hover:bg-silver-200 dark:hover:bg-zinc-700 rounded-full transition-colors text-silver-400 hover:text-black dark:hover:text-white">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 text-center">
           <p className="text-xs text-silver-400">
             Confidential Information. Access Restricted to Flopcoast Administrators.
           </p>
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;
