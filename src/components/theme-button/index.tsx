import {
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { BsMoon } from 'react-icons/bs';
import { WiDaySunny } from 'react-icons/wi';

const variants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.2,
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: 'easeOut',
    },
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 1.8,
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: 'easeOut',
    },
  },
};

const MotionIconButton = motion<IconButtonProps>(IconButton);

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode='wait'>
      <MotionIconButton
        aria-label='Toggle color mode'
        size='lg'
        key={mode('light', 'dark')}
        initial='initial'
        animate='enter'
        exit='exit'
        colorScheme={mode('purple', 'orange')}
        icon={mode(<BsMoon />, <WiDaySunny />)}
        variants={variants}
        onClick={toggleColorMode}
      />
    </AnimatePresence>
  );
};

export default ThemeButton;
