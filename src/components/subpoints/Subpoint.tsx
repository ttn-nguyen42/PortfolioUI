import React from 'react';
import s from './Subpoint.module.scss';

export default function Subpoint({ children }: SubpointProps) {
  return <li>{children}</li>;
}

export interface SubpointProps {
  children: React.ReactNode;
}
