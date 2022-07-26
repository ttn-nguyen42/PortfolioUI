import { motion } from 'framer-motion';
import React from 'react';
import {
  initialReveal,
  reveal,
  whileInViewReveal,
} from '../../utils/AnimatationVariant';
import s from './PageTitle.module.scss';

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <motion.h2
      variants={reveal}
      initial={initialReveal}
      whileInView={whileInViewReveal}
      viewport={{ once: true }}
      className={s['title']}
    >
      {children}
    </motion.h2>
  );
}

export interface PageTitleProps {
  children: React.ReactNode;
}
