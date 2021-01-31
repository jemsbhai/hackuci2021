import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './landing.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

//import assets
import Logo from '../../assets/logo.png';
import { IoNotificationsOutline } from 'react-icons/io5';
import {BsCalendar} from 'react-icons/bs';
import {BsBookmark} from 'react-icons/bs';
import {BsPencil} from 'react-icons/bs';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vaccine: false,
    };
  } 
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }
  
 _onSelect(){
   this.setState({vaccine:true})
 }
    render() {
      const options =['Pfizer-BioNTech Vaccine', 'Moderna']
        return (
         <div style={{}}>
            <div style={{alignContent:'left', width: '100%', display:'inline-block', textAlign:'left', alignSelf:'left', position:'absolute', left:0, top:0}}>
            <img src={Logo} height="60vh" width="59vh" style={{ marginRight:'2.5%', float:'left'}}></img>
            
            <Link to="/new"> <div style={{fontFamily:"Montserrat", fontWeight:400, fontSize:"2.75vh", color:"#F88644", marginTop:10}}>Home</div></Link>
           
            </div >
            <div style={{marginTop:'10%'}}>
            
           <div style={{display:'inline-block'}}>
                <div style={{ marginRight:"5%"}}>
               <button type="primary" style={{backgroundColor:"#333333", height:"5.5vh", width: "30vh", border:"none", borderRadius:40, color:'white', fontFamily:'Montserrat',  fontSize:'2vh', marginTop:'2.5%'}} onClick={()=>this.setState({vid:true})}> <BsCalendar/>   Check calendar </button>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                <input
                  style={{backgroundColor:'transparent', borderBottomColor:'white', border:'none', width:200, borderBottomWidth:2, color:'white'}}
                  type="text"
                  name="video"
                  ref={(input) => this.input = input}
                />
              </form>
           
                <br></br>
                <Link to="/new"><button type="primary" style={{backgroundColor:"#333333", height:"5.5vh", width: "30vh", border:"none", borderRadius:40, color:'white', fontFamily:'Montserrat',  fontSize:'2vh', marginTop:'2.5%'}}> <BsBookmark/>   Manage bookings </button></Link>
                <br></br>
                <form onSubmit={this.handleVSubmit}>
                <input
                  style={{backgroundColor:'transparent', borderBottomColor:'white', border:'none', width:200, borderBottomWidth:2, color:'white'}}
                  type="text"
                  name="music"
                  ref={(input) => this.input = input}
                />
              </form>
               <button type="primary" style={{backgroundColor:"#333333", height:"5.5vh", width: "30vh", border:"none", borderRadius:40, color:'white', fontFamily:'Montserrat',  fontSize:'2vh', marginTop:'2.5%'}} onClick={()=>this.setState({img:true})}> <BsPencil/>   Edit vaccine information </button>                     
               <form onSubmit={this.handleSubmit}>
                <input
                  style={{backgroundColor:'transparent', borderBottomColor:'white', border:'none', width:200, borderBottomWidth:2, color:'white'}}
                  type="text"
                  name="music"
                  ref={(input) => this.input = input}
                />
              </form>
        
                </div>
                <Dropdown options={options} className="decor" onChange={()=>this.setState({vaccine:true})}  placeholder="Select a vaccine"  />;
                {this.state.vaccine &&
                <div>
                  <div style={{fontFamily:'Montserrat', fontSize:20, color:'#FFF'}}>Number:3,000</div>
                  <div style={{fontFamily:'Montserrat', fontSize:20, color:'#FFF'}}>Extra dose:500</div>
                  <div style={{fontFamily:'Montserrat', fontSize:20, color:'#FFF'}}>Extra dose for today:2</div>

                </div>
                }
                <button type="primary" style={{backgroundColor:"#F88644", height:"5.5vh", width: "30vh", border:"none", borderRadius:40, color:'white', fontFamily:'Montserrat',  fontSize:'2vh', marginTop:'15%', marginLeft:'-5%'}} onClick={()=>alert('Users within a 50 miles radius have been notified')}> Send notiication </button>  
                </div>            
            </div>
         </div>   
        );
    }
}

export default Landing;