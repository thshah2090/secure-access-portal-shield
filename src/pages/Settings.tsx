
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NetworkSecurity } from '@/components/NetworkSecurity';
import { Shield, Settings as SettingsIcon, Lock, Timer, User } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="container mx-auto p-6 flex">
      {/* Sidebar */}
      <div className="w-64 pr-6 border-r">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <SettingsIcon className="h-5 w-5" />
          Settings
        </h2>
        
        <nav className="space-y-2">
          <div className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
            <SettingsIcon className="h-4 w-4" />
            General
          </div>
          <div className="flex items-center gap-2 p-2 bg-accent rounded cursor-pointer">
            <Shield className="h-4 w-4" />
            Security
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
            <Lock className="h-4 w-4" />
            Two-Factor Auth
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
            <Timer className="h-4 w-4" />
            Session Timeout
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
            <User className="h-4 w-4" />
            Password Policy
          </div>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 pl-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-6 w-6" />
          Security Settings
        </h1>
        
        <Tabs defaultValue="network" className="space-y-4">
          <TabsList>
            <TabsTrigger value="network">
              <Shield className="h-4 w-4 mr-2" />
              Network Security
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="network">
            <NetworkSecurity />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
