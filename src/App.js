import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceReconiton from './components/FaceReconiton/FaceReconiton';
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'a33facf1252f4cadbee8514149cc325f'
});

const particlesOptions= {
  particles: {
          number: {
            value:30,
            density: {
              enable: true,
              value_area: 80     
            }
          }
         }
}


class App extends Component {
  constructor(){
    super();
    this.state= {
      input:'',
      imageUrl:''
    }
  }
  onInputChange = (event) => {
      this.setState({input: event.target.value})
  }
  onButtonClick = (event) => {
    this.setState({imageUrl: this.state.input});
    console.log(this.state.input);
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
            },
         function(err) {
          console.log("error");
         }
      );
  }
  render() {
    return (
      <div className="App">
      <Particles className="particles"
                params={{particlesOptions}}/>
        <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick} />  
          <FaceReconiton imageUrl={this.state.imageUrl}/>
            
          
      </div>
    );
  }
}

export default App;
