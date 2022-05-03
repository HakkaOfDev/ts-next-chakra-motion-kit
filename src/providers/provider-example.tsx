import { createContext, PropsWithChildren } from 'react';

type ExampleContextType = {
  example: string;
};

export const ExampleContext = createContext<ExampleContextType>({
  example: '',
});

const ExampleProvider = ({ children }: PropsWithChildren<{}>) => {
  const example = 'example';

  return (
    <ExampleContext.Provider
      value={{
        example,
      }}
    >
      {children}
    </ExampleContext.Provider>
  );
};

export default ExampleProvider;
