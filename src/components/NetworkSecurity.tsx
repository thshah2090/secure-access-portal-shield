
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Network } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IpAddress {
  id: string;
  address: string;
}

export const NetworkSecurity = () => {
  const [ipAddresses, setIpAddresses] = useState<IpAddress[]>([]);
  const [newIp, setNewIp] = useState('');

  const handleAddIp = () => {
    if (newIp && isValidIp(newIp)) {
      setIpAddresses([...ipAddresses, { id: crypto.randomUUID(), address: newIp }]);
      setNewIp('');
    }
  };

  const handleRemoveIp = (id: string) => {
    setIpAddresses(ipAddresses.filter(ip => ip.id !== id));
  };

  const isValidIp = (ip: string) => {
    const regex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!regex.test(ip)) return false;
    const parts = ip.split('.');
    return parts.every(part => parseInt(part) >= 0 && parseInt(part) <= 255);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Network Security
        </CardTitle>
        <CardDescription>
          Manage IP-based access control for this portal
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter IP address (e.g., 192.168.1.1)"
              value={newIp}
              onChange={(e) => setNewIp(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleAddIp} disabled={!newIp || !isValidIp(newIp)}>
              Add IP
            </Button>
          </div>
          
          <div className="space-y-2">
            {ipAddresses.map((ip) => (
              <div
                key={ip.id}
                className="flex items-center justify-between p-2 border rounded"
              >
                <div className="flex items-center gap-2">
                  <Network className="h-4 w-4 text-muted-foreground" />
                  <span>{ip.address}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveIp(ip.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
