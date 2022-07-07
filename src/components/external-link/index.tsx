import {
  Icon,
  Link,
  LinkProps,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';

const ExternalLink = ({ children, ...linkProps }: LinkProps) => {
  return (
    <span>
      <Link
        {...linkProps}
        color={mode('brand.500', 'brand.300')}
        display='inline-flex'
        isExternal
        target='_blank'
      >
        {children}
      </Link>
      <Icon
        ml={2}
        as={FiExternalLink}
        color={mode('gray.800', 'white')}
        display='inline'
      />
    </span>
  );
};

export default ExternalLink;
