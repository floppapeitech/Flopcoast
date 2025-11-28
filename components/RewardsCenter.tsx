
import React from 'react';
import { User } from '../types';
import { Gift, Coffee, ArrowUpCircle, History, Award, ArrowLeft } from 'lucide-react';

interface RewardsCenterProps {
    user: User;
    onBack: () => void;
}

const RewardsCenter: React.FC<RewardsCenterProps> = ({ user, onBack }) => {
    const redemptionOptions = [
        { id: 1, title: 'Lounge Pass', points: 5000, icon: <Coffee size={24}/>, desc: 'One-time entry to any Flopcoast Lounge' },
        { id: 2, title: 'Seat Upgrade', points: 15000, icon: <ArrowUpCircle size={24}/>, desc: 'Upgrade to next cabin class on your next flight' },
        { id: 3, title: '$50 Duty Free', points: 10000, icon: <Gift size={24}/>, desc: 'Valid for in-flight shopping or at the airport' },
    ];

    return (
        <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-in fade-in slide-in-from-right-4">
             <button onClick={onBack} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
                <ArrowLeft size={20} /> Back to Dashboard
            </button>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                <div>
                    <h1 className="text-4xl font-display font-bold">Rewards Center</h1>
                    <p className="text-silver-500 mt-2">Redeem your hard-earned miles for exclusive perks.</p>
                </div>
                <div className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-2xl flex items-center gap-4 mt-4 md:mt-0">
                    <Award size={24} />
                    <div>
                        <div className="text-xs font-bold uppercase opacity-80">Available Points</div>
                        <div className="text-2xl font-bold font-mono">{user.awardsPoints.toLocaleString()}</div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
                {redemptionOptions.map(option => (
                     <div key={option.id} className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all group">
                         <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                             {option.icon}
                         </div>
                         <h3 className="text-xl font-bold font-display mb-2">{option.title}</h3>
                         <p className="text-silver-500 mb-6 text-sm min-h-[40px]">{option.desc}</p>
                         <div className="flex items-center justify-between">
                             <span className="font-bold text-lg">{option.points.toLocaleString()} pts</span>
                             <button 
                                disabled={user.awardsPoints < option.points}
                                className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                             >
                                Redeem
                             </button>
                         </div>
                     </div>
                ))}
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-silver-200 dark:border-zinc-800">
                <div className="flex items-center gap-3 mb-8">
                    <History size={24} />
                    <h2 className="text-2xl font-bold font-display">Activity History</h2>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-silver-50 dark:bg-zinc-950 rounded-2xl">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center font-bold text-xs">
                                EARN
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Flight: JFK to LHR (FC-101)</h4>
                                <p className="text-xs text-silver-500">May 12, 2024</p>
                            </div>
                        </div>
                        <span className="font-bold text-green-600">+4,500 pts</span>
                    </div>
                     <div className="flex items-center justify-between p-4 bg-silver-50 dark:bg-zinc-950 rounded-2xl">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center font-bold text-xs">
                                USE
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Lounge Access Redemption</h4>
                                <p className="text-xs text-silver-500">April 02, 2024</p>
                            </div>
                        </div>
                        <span className="font-bold text-silver-500">-5,000 pts</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RewardsCenter;
