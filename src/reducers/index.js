import { combineReducers } from 'redux';

// Reducers

const songsReducer = () => {
    // static list of songs
    return [
        {
            title: 'No scrubs',
            duration: '4:05'
        },
        {
            title: 'Macarena',
            duration: '2:36'
        },
        {
            title: 'All stars',
            duration: '1:45'
        },
        {
            title: 'I want it that way',
            duration: '3:15'
        }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if( action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});