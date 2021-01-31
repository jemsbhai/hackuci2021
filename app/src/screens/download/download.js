import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './download.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

//import assets
import Logo from '../../assets/logo.png';
import DownloadBtn from '../../assets/dl.png';
import YoutubeBtn from '../../assets/youtube.png';
import { IoNotificationsOutline } from 'react-icons/io5';
import {BsCameraVideoFill} from 'react-icons/bs';
import {BsMusicNoteBeamed} from 'react-icons/bs';
import {BsFillImageFill} from 'react-icons/bs';



class Download extends Component {
  constructor(props) {
    super(props);
  } 
    render() {
        return (
         <div style={{}}>
            <div style={{alignContent:'left', width: '100%', display:'inline-block', textAlign:'left', alignSelf:'left', position:'absolute', left:0, top:0}}>
            <img src={Logo} height="60vh" width="59vh" style={{ marginRight:'2.5%', float:'left'}}></img>
              <div style={{fontFamily:"Montserrat", fontWeight:400, fontSize:"2.75vh", color:"#9F60A8", marginTop:10}}>Home</div>
            </div >
            <div style={{marginTop:'10%'}}>
                <div style={{fontFamily:"Montserrat", lineHeight:"100%", fontSize:"3vh", marginTop: "5%", color:'#FFF', marginLeft:'-5%'}}>
                Download your AI song
                </div>
                <div style={{ marginRight:"5%"}}>
                <Link to="/download"><button type="primary" style={{backgroundColor:"#333333", height:"20.5vh", width: "30vh", border:"none", borderRadius:20, color:'white', fontFamily:'Montserrat',  fontSize:'2vh', marginTop:'2.5%'}}>  <img src={DownloadBtn} style={{marginBottom:'1.5%'}}></img> <br/>Download Now </button></Link>
                <br></br>
                <AudioPlayer
                  autoPlay
                  src="https://raw.githubusercontent.com/ebtesam25/swamp-files/main/teamzero.wav?token=AGHHPHLRADXXDWUPKCB7UHLAD7ISU"
                  onPlay={e => console.log("onPlay")}
                  style={{background:'transparent'}}
                  // other props here
                />
                <Link to="/download"><button type="primary" style={{backgroundColor:"#333333", height:"5.5vh", width: "30vh", border:"none", borderRadius:40, color:'white', fontFamily:'Montserrat',  fontSize:'2vh', marginTop:'2.5%', paddingBottom:'1.5%', verticalAlign:'middle' }}> <img src={YoutubeBtn} style={{marginTop:'2.5%'}}></img> Share to YouTube </button></Link>
    
                     
                </div>
            </div>
         </div>   
        );
    }
}

export default Download;