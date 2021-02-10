import logo from './logo.svg';
import './App.css';
import './style.css'
import ReactPlayer from 'react-player'
import Image from './sunset.jpg'

function App() {
  return (
    <div>
      
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

 <h1 className="title red">Kais Doss</h1>

 <br />
<h3>Image in src</h3>
 <img className="imgs" src={Image} />

 <br />
 <h3>Image in public</h3>
 <img className="imgs" src="/full-moon.jpg" />

</div>
<ReactPlayer id='video'  controls  url='https://www.youtube.com/watch?v=BFfOtbp-vd8&ab_channel=Madilyn' />


<h2>JSX</h2>
    </div>


  );
}

export default App;
