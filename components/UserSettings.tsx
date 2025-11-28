
import React, { useRef } from 'react';
import { User } from '../types';
import { ArrowLeft, Bell, Lock, User as UserIcon, CreditCard, ToggleLeft, ToggleRight, Camera } from 'lucide-react';

interface UserSettingsProps {
    user: User;
    onBack: () => void;
    onUpdateUser: (user: User) => void;
}

const UserSettings: React.FC<UserSettingsProps> = ({ user, onBack, onUpdateUser }) => {
    const [emailAlerts, setEmailAlerts] = React.useState(true);
    const [smsAlerts, setSmsAlerts] = React.useState(false);
    const [priceAlerts, setPriceAlerts] = React.useState(true);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            onUpdateUser({ ...user, avatarUrl: url });
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-in fade-in slide-in-from-right-4">
             <button onClick={onBack} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
                <ArrowLeft size={20} /> Back to Dashboard
            </button>

            <h1 className="text-4xl font-display font-bold mb-8">Account Settings</h1>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Profile Section */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                        <h2 className="text-xl font-bold flex items-center gap-3 mb-6">
                            <UserIcon size={20} /> Personal Information
                        </h2>
                        
                        <div className="flex flex-col items-center mb-8">
                             <div 
                                className="w-24 h-24 rounded-full bg-silver-100 dark:bg-zinc-800 relative group cursor-pointer overflow-hidden border-2 border-dashed border-silver-300 dark:border-zinc-700 hover:border-black dark:hover:border-white transition-colors"
                                onClick={handleAvatarClick}
                             >
                                 {user.avatarUrl ? (
                                     <img src={user.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                                 ) : (
                                     <div className="w-full h-full flex items-center justify-center text-3xl font-display font-bold text-silver-400">
                                         {user.name.charAt(0)}
                                     </div>
                                 )}
                                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Camera size={24} className="text-white" />
                                 </div>
                             </div>
                             <p className="mt-3 text-sm font-medium text-silver-500">Tap to upload profile picture</p>
                             <input 
                                type="file" 
                                ref={fileInputRef} 
                                onChange={handleFileChange} 
                                className="hidden" 
                                accept="image/*"
                             />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-silver-400">Full Name</label>
                                <input type="text" value={user.name} readOnly className="w-full p-3 bg-silver-50 dark:bg-zinc-950 rounded-xl border border-transparent focus:border-black dark:focus:border-white outline-none font-medium" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-silver-400">Email Address</label>
                                <input type="email" value={user.email} readOnly className="w-full p-3 bg-silver-50 dark:bg-zinc-950 rounded-xl border border-transparent focus:border-black dark:focus:border-white outline-none font-medium" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-silver-400">Phone Number</label>
                                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full p-3 bg-silver-50 dark:bg-zinc-950 rounded-xl border border-transparent focus:border-black dark:focus:border-white outline-none font-medium" />
                            </div>
                             <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-silver-400">Passport Number</label>
                                <input type="text" placeholder="A12345678" className="w-full p-3 bg-silver-50 dark:bg-zinc-950 rounded-xl border border-transparent focus:border-black dark:focus:border-white outline-none font-medium" />
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">Save Changes</button>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                        <h2 className="text-xl font-bold flex items-center gap-3 mb-6">
                            <Bell size={20} /> Notification Preferences
                        </h2>
                        <div className="space-y-4">
                             <div className="flex items-center justify-between p-4 bg-silver-50 dark:bg-zinc-950 rounded-2xl">
                                 <div>
                                     <h4 className="font-bold text-sm">Email Notifications</h4>
                                     <p className="text-xs text-silver-500">Receive flight updates and booking confirmations via email.</p>
                                 </div>
                                 <button onClick={() => setEmailAlerts(!emailAlerts)}>
                                     {emailAlerts ? <ToggleRight size={32} className="text-green-500" /> : <ToggleLeft size={32} className="text-silver-300" />}
                                 </button>
                             </div>
                             <div className="flex items-center justify-between p-4 bg-silver-50 dark:bg-zinc-950 rounded-2xl">
                                 <div>
                                     <h4 className="font-bold text-sm">SMS Alerts</h4>
                                     <p className="text-xs text-silver-500">Get real-time gate changes and delay notifications.</p>
                                 </div>
                                 <button onClick={() => setSmsAlerts(!smsAlerts)}>
                                     {smsAlerts ? <ToggleRight size={32} className="text-green-500" /> : <ToggleLeft size={32} className="text-silver-300" />}
                                 </button>
                             </div>
                             <div className="flex items-center justify-between p-4 bg-silver-50 dark:bg-zinc-950 rounded-2xl">
                                 <div>
                                     <h4 className="font-bold text-sm">Price Watch Alerts</h4>
                                     <p className="text-xs text-silver-500">Notify me when flights I'm watching change price.</p>
                                 </div>
                                 <button onClick={() => setPriceAlerts(!priceAlerts)}>
                                     {priceAlerts ? <ToggleRight size={32} className="text-green-500" /> : <ToggleLeft size={32} className="text-silver-300" />}
                                 </button>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Settings */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800">
                        <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                            <Lock size={18} /> Security
                        </h2>
                        <button className="w-full text-left py-3 px-4 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-950 font-medium text-sm transition-colors mb-2">Change Password</button>
                        <button className="w-full text-left py-3 px-4 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-950 font-medium text-sm transition-colors">Two-Factor Authentication</button>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800">
                        <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                            <CreditCard size={18} /> Payment Methods
                        </h2>
                        <div className="p-4 bg-silver-50 dark:bg-zinc-950 rounded-xl mb-4 flex items-center justify-between">
                            <span className="text-sm font-medium">Visa ending in 4242</span>
                            <span className="text-xs bg-black text-white px-2 py-1 rounded">Default</span>
                        </div>
                        <button className="w-full py-2 border border-silver-300 dark:border-zinc-700 rounded-xl font-bold text-sm">+ Add New Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSettings;
