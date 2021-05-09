import { useContext } from 'react';

import { isNullish } from '../../utils';

import { LayoutContext } from '../providers/Layout';

export default function () {
  const layoutContext = useContext(LayoutContext);
  if (isNullish(layoutContext)) throw new Error('useLayout must be used within a LayoutProvider');

  return layoutContext;
}
