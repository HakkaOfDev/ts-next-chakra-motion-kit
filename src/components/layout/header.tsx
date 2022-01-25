import LanguagesButton from '@/components/languages-button';
import ThemeButton from '@/components/theme-button';
import { HStack } from '@chakra-ui/react';

const Header = () => {
  return (
    <HStack
      as='header'
      position='fixed'
      top='0'
      p={8}
      zIndex='tooltip'
      justify='space-between'
      align='center'
      w='100%'
    >
      <ThemeButton />
      <LanguagesButton />
    </HStack>
  );
};

export default Header;
