window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQCxrng0KNGOcXx4Wk15pasKvjMphmpKTg9zESQBhmLZdiGxE_zL9b05K3ckkaZgD3GXm5L8K66jShc4jcVEADLkEUVZP5r2A71_FU7Uz4ZoiFRRfGHl1Q9rajFCZz7lPRwneiFSuedbykOtG-LDapSl1vtrDJ46SDnGvAwm_WhTjAMCzk0zUZzJC0vbLFxNMP9kMY4gOkPV86Tya1PP54IzhSctkt6d5mWKDrxJmFpFpgjUkUkZKaGc0h-e16FVFpQkHIgPfYE5YACt5BAUCPibg45MR-_9mnKqgr9ca-cIbua0J-Mk2Ecwg8fGWkZ9T7if8FJl1RgaPsJWQcuH_oRadVbS8H8JgaUJpU2GJ2aTzQBt4bI';
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
    })
};

// Ready
player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
});

// Not Ready
player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
});
player.addListener('initialization_error', ({ message }) => {
    console.error(message);
});

player.addListener('authentication_error', ({ message }) => {
    console.error(message);
});

player.addListener('account_error', ({ message }) => {
    console.error(message);
});

player.connect();
