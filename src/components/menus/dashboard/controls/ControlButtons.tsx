import { bind } from 'astal';
import { isWifiEnabled } from './helpers';
import AstalBluetooth from 'gi://AstalBluetooth?version=0.1';
import AstalNetwork from 'gi://AstalNetwork?version=0.1';
import AstalWp from 'gi://AstalWp?version=0.1';
import { isPrimaryClick } from 'src/lib/events/mouse';

const wireplumber = AstalWp.get_default() as AstalWp.Wp;
const audioService = wireplumber.audio;

const networkService = AstalNetwork.get_default();

const bluetoothService = AstalBluetooth.get_default();


export const WifiButton = (): JSX.Element => {
    return (
        <button
            className={bind(isWifiEnabled).as(
                (isEnabled) => `dashboard-button wifi ${!isEnabled ? 'disabled' : ''}`,
            )}
            onClick={(_, event) => {
                if (isPrimaryClick(event)) {
                    networkService.wifi?.set_enabled(!networkService.wifi.enabled);
                }
            }}
            tooltipText={'Toggle Wifi'}
            expand
        >
            <label
                className={'txt-icon'}
                label={bind(isWifiEnabled).as((isEnabled) => (isEnabled ? '󰤨' : '󰤭'))}
            />
        </button>
    );
};

export const BluetoothButton = (): JSX.Element => {
    return (
        <button
            className={bind(bluetoothService, 'isPowered').as(
                (isEnabled) => `dashboard-button bluetooth ${!isEnabled ? 'disabled' : ''}`,
            )}
            onClick={(_, event) => {
                if (isPrimaryClick(event)) {
                    bluetoothService.toggle();
                }
            }}
            tooltipText={'Toggle Bluetooth'}
            expand
        >
            <label
                className={'txt-icon'}
                label={bind(bluetoothService, 'isPowered').as((isEnabled) => (isEnabled ? '󰂯' : '󰂲'))}
            />
        </button>
    );
};

export const PlaybackButton = (): JSX.Element => {
    return (
        <button
            className={bind(audioService.defaultSpeaker, 'mute').as(
                (isMuted) => `dashboard-button playback ${isMuted ? 'disabled' : ''}`,
            )}
            onClick={(_, event) => {
                if (isPrimaryClick(event)) {
                    audioService.defaultSpeaker.set_mute(!audioService.defaultSpeaker.mute);
                }
            }}
            tooltipText={'Toggle Mute (Playback)'}
            expand
        >
            <label
                className={'txt-icon'}
                label={bind(audioService.defaultSpeaker, 'mute').as((isMuted) => (isMuted ? '󰖁' : '󰕾'))}
            />
        </button>
    );
};

export const MicrophoneButton = (): JSX.Element => {
    return (
        <button
            className={bind(audioService.defaultMicrophone, 'mute').as(
                (isMuted) => `dashboard-button input ${isMuted ? 'disabled' : ''}`,
            )}
            onClick={(_, event) => {
                if (isPrimaryClick(event)) {
                    audioService.defaultMicrophone.set_mute(!audioService.defaultMicrophone.mute);
                }
            }}
            tooltipText={'Toggle Mute (Microphone)'}
            expand
        >
            <label
                className={'txt-icon'}
                label={bind(audioService.defaultMicrophone, 'mute').as((isMuted) => (isMuted ? '󰍭' : '󰍬'))}
            />
        </button>
    );
};
