import React from 'react';

export default function Subpoint({ children }: SubpointProps) {
  return <li>{children}</li>;
}

export interface SubpointProps {
  children: React.ReactNode;
}
