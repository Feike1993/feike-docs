import React, {type ReactNode} from 'react';

import {BrandThemeProvider} from '@site/src/components/BrandThemeSwitcher';

export default function Root({children}: {children: ReactNode}): ReactNode {
  return <BrandThemeProvider>{children}</BrandThemeProvider>;
}
