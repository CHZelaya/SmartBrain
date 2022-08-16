import React, { Component } from "react";
import Clarifai from 'clarifai';
import "tachyons";
import './App.css';
import Navigation from './components/navigation';
import Logo from './components/Logo';
import Rank from './components/Rank';
import ImageLinkForm from './components/ImageLinkForm';
import FaceRecognition from "./components/FaceRecognition";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


console.log(`
Here's an Object containing all of the Clarifai Models, use it to add extra features later on`,
  Clarifai
);


const app = new Clarifai.App({
  apiKey: `1452858574db4606bd2e499b122d97cb`
});

//! Code for Particles starts here
const particlesInit = async (main) => {
  // console.log(main);
  await loadFull(main);
};

const particlesLoaded = (container) => {
  // console.log(container);
};
//! Code for Particles ends here


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'SignIn',
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ''
      },
    }
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log("width:", width, "height:", height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayBoundingBox = (box) => {
    this.setState = ({ box: box })
    console.log("App.js:", box);
  }

  onInputChange = (event) => {
    try {
      return this.setState({ input: event.target.value });

    } catch (error) {
      console.log(error);
      return this.state.input = "";
    }
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    // this.state.imageUrl = this.state.input;
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.displayBoundingBox(this.calculateFaceLocation(response)))
      .catch(error => console.log(error))
  }

  onRouteChange = (route) => {
    if (route === 'signOut') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });

  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (

      <div className="App">
        <Particles className="particles"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 0.5,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "true",
                enable: true,
                outModes: {
                  default: "loop",
                },
                random: true,
                speed: 6,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: ["circle", "square", "triangle",]
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange} />
        {route === 'home'
          ? <>
            <Logo />
            <Rank
              user={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </>
          : (
            this.state.route === "SignIn"
              ? <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
              : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
          )
        }

      </div>
    );
  }
}



export default App;