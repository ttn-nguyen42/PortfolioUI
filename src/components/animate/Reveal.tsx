import { motion } from 'framer-motion';
import React from 'react';
import {
  initialReveal,
  reveal,
  whileInViewReveal,
} from '../../utils/AnimatationVariant';

export default function Reveal({ children }: RevealProps) {
  return (
    <motion.div
      viewport={{ once: true }}
      variants={reveal}
      initial={initialReveal}
      whileInView={whileInViewReveal}
    >
      {children}
    </motion.div>
  );
}

export interface RevealProps {
  children?: undefined | React.ReactNode | React.ReactNode[];
}
