import { createContext, useState, useEffect, useRef } from 'react';

type SoundManagerContextType = {
    playSoundEffect: (name: string) => void;
    playMusicTrack: (name: string) => void;
    registerSoundEffect: (name: string, filename: string) => void;
    registerMusicTrack: (name: string, filename: string) => void;
    stopMusic: () => void;
};

type Props = {
    children: JSX.Element;
};

type AudioCollection = {
    [key: string]: HTMLAudioElement;
};

type MusicTrackMap = {
    [key: string]: string;
};

export const SoundManagerContext =
    createContext<SoundManagerContextType | null>(null);

function SoundManager({ children }: Props) {
    const [soundEffects, setSoundEffects] = useState<AudioCollection>({});
    const [musicTracks, setMusicTracks] = useState<MusicTrackMap>({});
    const musicElement = useRef(new Audio());

    function playSoundEffect(name: string) {
        if (name in soundEffects) {
            const audio = soundEffects[name];

            // if sound effect is already playing, just rewind to 0 and let it continue playing, otherwise, hit play
            if (!audio.paused) audio.currentTime = 0;
            else audio.play();
        }
    }

    function playMusicTrack(name: string) {
        if (name in musicTracks) {
            const audio = musicElement.current;

            audio.pause();
            audio.src = `/audio/sound/${musicTracks[name]}`;
            audio.loop = true;
            audio.play();
        }
    }

    function stopMusic() {
        musicElement.current.pause();
    }

    function registerSoundEffect(name: string, filename: string) {
        let audio: HTMLAudioElement;
        if (name in soundEffects) audio = soundEffects[name];
        else audio = new Audio();

        audio.src = `/audio/sound/${filename}`;
        setSoundEffects({ ...soundEffects, [name]: audio });
    }

    /**
     * Register a new music track in the sound manager.
     * If the name already exists, it's value will be replaced.
     * This does not change the music if the track is currently running,
     * it will only start taking effect the next time the track is
     * set to be played.
     * @param name Name of the track
     * @param filename URL to the audio file
     */
    function registerMusicTrack(name: string, filename: string) {
        setMusicTracks({ ...musicTracks, [name]: filename });
    }

    return (
        <SoundManagerContext.Provider
            value={{
                playSoundEffect,
                playMusicTrack,
                registerSoundEffect,
                registerMusicTrack,
                stopMusic,
            }}
        >
            {children}
        </SoundManagerContext.Provider>
    );
}

export default SoundManager;
