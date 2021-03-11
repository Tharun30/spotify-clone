import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img className="footer__albumLogo" src="data:image/jpeg;base64,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" alt="" />
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" classname="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />

            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
