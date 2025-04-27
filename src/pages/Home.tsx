
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome to Portal Admin</h1>
      
      <div className="flex flex-col items-start gap-4">
        <p className="text-muted-foreground mb-4">
          Use this portal to manage your application settings including network security.
        </p>
        
        <Link to="/settings">
          <Button className="flex items-center gap-2">
            <SettingsIcon className="h-4 w-4" />
            Go to Settings
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
