import React, { useState } from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import './RandomMovie.css'
const RandomMovie = () => {
    const [time, setTime] = useState(true);
    setTimeout(() => {
        setTime(false)
    }, 6000)
    const img = 'https://cdn.onebauer.media/one/media/5f49/116e/b8b3/9b89/088f/d7f7/empire-october-2020-cover-crop.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill'
    // const video = "https://rr4---sn-4g5lznez.googlevideo.com/videoplayback?expire=1654564152&ei=2FCeYs2YJdKJvdIP56yI8Ak&ip=156.220.17.159&id=o-ANKOCiu27FfjjdLHbzYEtOmDbd-oTzYlyLNGConw9pjf&itag=135&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&spc=4ocVC3_1Qs3jqASmUvm8WKibCmHQ_qgQzr9EW4BsTnwf&vprv=1&mime=video%2Fmp4&ns=9GnlC5mryZ1s_wekg-r3KAYG&gir=yes&clen=6862337&dur=76.701&lmt=1539385559708491&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5432432&n=AuTWYB0BdtVmCJT1g6&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAOPvkbZx7UVHj6ykHTPKtvvCCBHUtNNfjnAYIVxaLwERAiACWTCAMp8kHvTeHK9p6vdsz2vDP_8wiBfnbhNFH0RF6A%3D%3D&cm2rm=sn-uxaxjvhxbt2u-u4g67l,sn-hgner7s&req_id=5d5949f3d2eba3ee&ipbypass=yes&redirect_counter=2&cms_redirect=yes&cmsv=e&mh=38&mm=34&mn=sn-4g5lznez&ms=ltu&mt=1654542767&mv=m&mvi=4&pl=21&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgDe4PTbsq3XIxPKhahaXp4CfHWlQjmosPqmn1eOAQpeYCIQDkcT3o3OpJxkqyIDLO-6MQP7EOS5YIbWfWcJFBUJAVpw%3D%3D"
    // const video ='https://imdb-video.media-imdb.com/vi1050657305/1434659607842-/pgv4ql-1651759497734.mp4?Expires=1654680887&Signature=dpmknxdBMG8UJgqHSQjTyqitDaCLli6bMT2zat~eaiXZKnC0VkwIgcL1BNjCXZ2SEdkBdPdVN4oYjsTWTEsdMWmWoM-Xz2cb1pbMKhzd78P7gl2seQ4gdDaLYTQ2~kK7JdJMXuWfVzWurFRJ0FIMZlktOUIX9GoRCL4fB9KXJLtvdJPGJVip1K2rcFZsjkdF1DbpPUXK2hnLsXov6UyJ7tMkSAcwZOYjBfBOraAhnN53U0ROJTXDj~eUDXIaxPPICcPLeAOZ1L5uoBt6UHOBhwYeMOigdPhD6PalZcRiPak~e1HHj3lF3hzqaDSRdNUT2ON6YmzCwBUvAc47rKWZbQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'
    const video ="https://imdb-video.media-imdb.com/vi764854809/1434659607842-pgv4ql-1651159417077.mp4?Expires=1654684969&Signature=JxBDBm24CJkCXgvu3v6nF8du6JMMS8-K4T0JjiM9jqiImeEz~KnWYHqIhIojai18UyZHLXAoC0Fxpc1u-hpuvA7TLXWafsyIcu~gZeLZ3XSHwdk-4ppcb7c5YAEpTi0z04yuT3GgdGbvcDeNQymqk8chwIM0Gu5jvh7Q~CKtbb~h5mJ0~s6p4DPp7E6n~uar4D2siaIKXf-AqJCn9CzXCD8isIxtFrFEGVTX2eOQ4bvOJ2mXsL5CQa8TGEz4sLhtByPofKjpoDCYszm6ISsGUqn3vw7B6WW~toWr-yetbdJDyamOaZj1ffu7fxMkhvk8Al4u1TczYkfsRqoqNqVWSA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
    return (
        <div >
            {time && (<>
                <img src={img} />
            </>)}
            {!time && (<>
                <video src={video} autoPlay muted width='100%' />
            </>)}
            <div className='data'>
                <h1>Evambire</h1>
                <span>Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.</span>
                <div className='buttons'>
                <Button variant="outlined" startIcon={<PlayArrowIcon sx={{color:'black'}} style={{fontSize:'30px'}}/>}  className='btn' sx={{mr:1}}>
                    Play
                </Button>
                <Button variant="outlined" startIcon={<InfoIcon sx={{color:'white'}} style={{fontSize:'30px'}}/> } className='btn2'>
                    More Info
                </Button>
                </div>

            </div>

        </div>
    );
}

export default RandomMovie;
