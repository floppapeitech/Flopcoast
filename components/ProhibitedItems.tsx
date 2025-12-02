
import React from 'react';
import { ArrowLeft, AlertTriangle, XCircle, CheckCircle, Flame, Battery, ShieldAlert, Ban } from 'lucide-react';
import { ViewState } from '../types';

interface ProhibitedItemsProps {
    onBack: () => void;
}

const ProhibitedItems: React.FC<ProhibitedItemsProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-in fade-in slide-in-from-right-8">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors"
            >
                <ArrowLeft size={20} /> Back to Baggage Info
            </button>

            <div className="text-center mb-12 space-y-4">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto text-red-600 dark:text-red-400">
                    <Ban size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold">Prohibited Items</h1>
                <p className="text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
                    To ensure the safety of all passengers and crew, the following items are strictly prohibited or restricted on Flopcoast flights.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Completely Banned */}
                <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-red-200 dark:border-red-900/30 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">
                        BANNED EVERYWHERE
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                        <AlertTriangle size={32} className="text-red-600 dark:text-red-500" />
                        <h2 className="text-2xl font-display font-bold">Strictly Prohibited</h2>
                    </div>
                    <p className="text-silver-500 mb-6 text-sm">
                        These items are not allowed in carry-on or checked baggage under any circumstances.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex gap-4 items-start bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl">
                            <Flame size={20} className="text-red-500 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-sm">Explosives & Flammables</h4>
                                <p className="text-xs text-silver-500">Fireworks, flares, lighter fluid, paints, thinners, and replicas of explosives.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl">
                            <ShieldAlert size={20} className="text-red-500 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-sm">Chemicals & Toxins</h4>
                                <p className="text-xs text-silver-500">Bleach, tear gas, pepper spray, radioactive materials, and poisons.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl">
                            <Battery size={20} className="text-red-500 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-sm">Lithium Batteries (Damaged)</h4>
                                <p className="text-xs text-silver-500">Batteries that are recalled, damaged, or defective are a fire hazard.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Restricted / Carry-on Restrictions */}
                <div className="space-y-8">
                    <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <XCircle size={28} className="text-orange-500" />
                            <h2 className="text-2xl font-display font-bold">No Carry-On</h2>
                        </div>
                        <p className="text-silver-500 mb-4 text-sm">
                            These items must be packed in checked luggage only.
                        </p>
                        <ul className="grid grid-cols-2 gap-4">
                            <li className="flex items-center gap-2 text-sm font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Sharp Objects (Knives, scissors >6cm)
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Tools (Drills, crowbars, saws)
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Sporting Goods (Bats, clubs)
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Firearms & Ammunition
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <CheckCircle size={28} className="text-green-500" />
                            <h2 className="text-2xl font-display font-bold">Liquids Rule (Carry-On)</h2>
                        </div>
                        <div className="flex items-start gap-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
                            <div className="text-3xl font-display font-bold text-blue-600 dark:text-blue-400">3-1-1</div>
                            <div className="text-sm text-blue-800 dark:text-blue-200">
                                <p className="mb-1"><strong>3.4 oz (100ml)</strong> bottle or less.</p>
                                <p className="mb-1"><strong>1 quart-sized</strong> clear plastic bag.</p>
                                <p><strong>1 bag</strong> per passenger.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2rem] text-center border border-silver-200 dark:border-zinc-800">
                <p className="text-silver-500 text-sm">
                    Final decision rests with the airport security personnel (TSA/local authority). 
                    When in doubt, leave it out or put it in checked baggage.
                </p>
            </div>
        </div>
    );
};

export default ProhibitedItems;
