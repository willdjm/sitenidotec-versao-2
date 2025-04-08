'use client';

import React from 'react';

export const Parceiros = () => {
  return (
    <section className="py-24 flex flex-col items-center justify-center bg-gray-100">
      
      {/* Header Section */}
      <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
          <p className="text-lg font-medium leading-8 text-indigo-600/95">
            Introducing Design Data Platform
          </p>
          <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
            Distribute your brand from&nbsp;design to code
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">
            Specify helps you unify your brand identity by collecting, storing and distributing design tokens and assets — automatically.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="#" className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">
            Get started for free
          </a>
          <a href="#" className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50">
            Request a demo
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 border my-12 w-full" />

      {/* Logo Grid */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        
        {/* Logos */}
        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img src="/logo-imob-2.png" alt="Logo 1" className="px-10 h-24" />
        </div>

        <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
          <img src="/logo-imob-3.png" alt="Logo 2" className="px-10 h-24" />
        </div>
        
        <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
          <img src="/logo-imob-4.png" alt="Logo 3" className="px-10 h-24" />
        </div>

        <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
          <img src="/logo-imob-5.png" alt="Logo 4" className="px-10 h-24" />
        </div>
        
        <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
          <img src="/logo-imob-6.png" alt="Logo 5" className="px-10 h-24" />
        </div>
        
      </div>

    </section>
  );
};
