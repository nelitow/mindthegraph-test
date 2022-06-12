import IcoShare from './assets/images/ico_share.svg';
import AppImage from './assets/images/head-02.png';
import IcoDragDrop from './assets/images/ico_drag.svg';
import IcoMultiple from './assets/images/ico_multiple.svg';
import IcoPlatform from './assets/images/ico_platform.svg';
import BetterSlides from './assets/images/better-slides.svg';
import IcoPremade from './assets/images/ico_premade.svg';
import IcoOdemand from './assets/images/ico_odemand.svg';
import ScientificPapers from './assets/images/scientific-papers.svg';
import GraphicalAbstracts from './assets/images/graphical-abstracts.svg';

import Card from './components/Card';
import Menu from './components/Menu';
import Button from './components/Button';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <div className="App-hero">
        <div className='container'>
          <div className='App-hero-text'>
            <h1>
              Discover all possibilities of using this powerfull tool and create science figures, posters and infographics.
            </h1>
            <Button text='Start creating now' className='button primary' />
          </div>
          <div className='App-hero-image'>
            <img src={AppImage} className="App-image" alt="Mind the GRAPH" />
          </div>
        </div>
      </div>
      <div className="App-visualize">
        <div className='container'>
          <div className='App-visualize-text'>
            <h2>
              Visualize what Mind the Graph can do for you
            </h2>
          </div>
          <div className='App-cards'>
            <Card image={GraphicalAbstracts} title='Graphical Abstracts and Infographics' text="Improve your paper's impact and visibility through quality visual communication" button='Learn more' />
            <Card image={ScientificPapers} title='Scientific Poster in a few clicks' text="Add visual impact to your posters with scientific illustrations and graphics" button='Learn more' />
            <Card image={BetterSlides} title='Make better Slide Presentation' text="Transform your lectures, meetings and classes into high-impact visual experiences" button='Learn more' />
          </div>
        </div>
      </div>
      <div className="App-science-figures">
        <div className='container'>
          <h2>
            Create effective science figures in minutes
          </h2>
          <p>
            We built Mind the Graph for simplicity. The platform is easy to use and just about anybody  can use it to create great infographics and presentations - from beginners to professionals,  individuals to groups and small labs to large organisations
          </p>
          <div className="App-cards">

            <Card image={IcoDragDrop} title="Drag and Drop" text="Easily select and  manage illustrations, text and templates"></Card>
            <Card image={IcoPremade} title="Pre-Made Resources" text="Don’t waste time! Use our templates and just customize colours, text etc."></Card>
            <Card image={IcoPlatform} title="Online Platform" text="Access your creations at any time and from anywhere"></Card>
            <Card image={IcoOdemand} title="On-demand Illustrations" text="Don’t find exactly what you need? We will design it for you!"></Card>
            <Card image={IcoMultiple} title="Multiple Sizing Options" text="Ready-to-go templates in all popular sizes"></Card>
            <Card image={IcoShare} title="Share creations" text="Share your creations  with your team or  other users"></Card>
          </div>
          <Button text="EXPLORE MIND THE GRAPH" className="button secondary"></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
