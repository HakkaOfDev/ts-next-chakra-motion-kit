import { availableLanguages } from '@/internationalization/i18n';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const LanguagesButton = () => {
  const { i18n } = useTranslation();

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} colorScheme='brand'>
          {i18n.language.toUpperCase()}
        </MenuButton>
        <MenuList minW='fit-content'>
          {availableLanguages.map((lang) => (
            <MenuItem
              key={lang}
              isDisabled={i18n.language === lang ? true : false}
              onClick={() => i18n.changeLanguage(lang)}
            >
              {lang.toUpperCase()}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguagesButton;
