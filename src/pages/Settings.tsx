
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NetworkSecurity } from '@/components/NetworkSecurity';
import { Shield, Settings as SettingsIcon } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <SettingsIcon className="h-6 w-6" />
        Settings
      </h1>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="network">
            <Shield className="h-4 w-4 mr-2" />
            Network Security
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <div className="text-muted-foreground">
            General settings will be added here.
          </div>
        </TabsContent>
        
        <TabsContent value="network">
          <NetworkSecurity />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
