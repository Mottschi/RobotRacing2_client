import { useContext } from 'react';
import { SoundManagerContext } from '../context/SoundManager/SoundManager';

export function useSoundManager() {
    const currentSoundManagerContext = useContext(SoundManagerContext);

    if (!currentSoundManagerContext) {
        throw new Error('SoundManagerContext is null');
    }

    return currentSoundManagerContext;
}