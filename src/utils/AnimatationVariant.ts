export const reveal = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'circOut',
    },
  },
  hidden: { opacity: 0, x: 70 },
};

export const initialReveal = 'hidden';
export const whileInViewReveal = 'visible';
