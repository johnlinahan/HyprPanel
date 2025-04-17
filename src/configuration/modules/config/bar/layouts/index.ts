import { opt } from 'src/lib/options';
import { BarLayouts } from 'src/lib/options/types';

export default opt<BarLayouts>({
    '1': {
        left: ['dashboard', 'workspaces', 'windowtitle'],
        middle: ['media'],
        right: ['volume', 'clock'],
    },
    '2': {
        left: ['dashboard', 'workspaces', 'windowtitle'],
        middle: ['media'],
        right: ['volume', 'clock'],
    },
    '0': {
        left: ['dashboard', 'workspaces', 'windowtitle'],
        middle: ['media'],
        right: ['volume', 'network', 'bluetooth', 'battery', 'systray', 'clock'],
    },
});
