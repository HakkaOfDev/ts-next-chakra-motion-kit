import { availableLanguages } from '@/internationalization/i18n';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

type CountryFlagProps = {
  lang: string;
};

const CountryFlag = ({ lang }: CountryFlagProps) => {
  return (
    <ReactCountryFlag
      style={{
        fontSize: '1.5em',
        lineHeight: '1.5em',
      }}
      countryCode={lang.toUpperCase()}
      aria-label={`${lang.toUpperCase()}'s Flag`}
    />
  );
};

const LanguagesButton = () => {
  const { i18n } = useTranslation();

  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme='brand'
        rightIcon={<CountryFlag lang={i18n.language} />}
      >
        {i18n.language.toUpperCase()}
      </MenuButton>
      <MenuList>
        {availableLanguages.map((lang) => (
          <MenuItem
            key={lang}
            icon={<CountryFlag lang={lang} />}
            isDisabled={i18n.language === lang ? true : false}
            onClick={() => i18n.changeLanguage(lang)}
          >
            {lang.toUpperCase()}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguagesButton;
