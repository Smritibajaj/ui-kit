import type { TooltipProps } from '@mui/material/Tooltip';

import type { IconName } from '../Icon/types';

export type IProps = TooltipProps & {
	iconName?: IconName;
};