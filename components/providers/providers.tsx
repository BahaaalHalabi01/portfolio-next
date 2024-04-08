import { FC, PropsWithChildren } from "react";
import { IntlProvider } from "./intl-provider";

export const Providers: FC<PropsWithChildren<{locale:string}>> = ({ children ,locale}) => {
  return (
    <>
      <IntlProvider locale={locale}>{children}</IntlProvider>
    </>
  );
};
