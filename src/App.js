import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import News from './Components/News';
import Games from './Components/Games';
import Metafund from './Components/Metafund';
import Moboxchain from './Components/Moboxchain';
import Paintview from './Components/Paintview';
import Momoverse from './Components/Momoverse';
import Milestones from './Components/Milestones';
import Avatergame from './Components/Avatergame';

function App() {
  return (
    <div className="App">
      <div>
              <Header/>
              <div data-v-4062b494="" className="notification"></div>
              <div data-v-9e07b0de className='main-box'>
                <Avatergame/>
                <Milestones/>
                <Momoverse/>
                <Paintview/>
                <Moboxchain/>
                <Metafund/>
                <Games/>
                <News/>
              </div>
                
              <Footer/>

      </div>

      <div aria-hidden="true" style={{backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(215, 215, 215)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 4px', borderRadius: '4px', left: '-10000px', top: '-10000px', zIndex: '-2147483648', position: 'absolute', transition: 'opacity 0.15s ease-out 0s', opacity: '0', visibility: 'hidden'}}>

          <div style={{position: 'relative', zIndex: '1'}}>

                    <iframe src="https://newassets.hcaptcha.com/captcha/v1/2ebd8c0/static/hcaptcha-challenge.html#id=06bjj08f5ftw&amp;host=www.mobox.io&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=true&amp;custom=false&amp;tplinks=on&amp;hl=en&amp;sitekey=9c9a154b-d8dd-45f1-a123-861e18f6be59&amp;theme=light" title="Main content of the hCaptcha challenge" frameborder="0" scrolling="no" style={{border: '0px', zIndex: '2000000000', position: 'relative'}}>
                      
                    </iframe>
                               </div>
                            <div style={{width: '100%', height: '100%', position: 'fixed', pointerEvents: 'none', top: '0px', left: '0px', zIndex: '0', backgroundColor: 'rgb(255, 255, 255)', opacity: '0.05'}}>
                              
                            </div>
                            <div style={{borderWidth: '11px', position: 'absolute', pointerEvents: 'none', marginTop: '-11px', zIndex: '1', right: '100%'}}>
                              <div style={{borderWidth: '10px', borderStyle: 'solid', borderColor: 'transparent rgb(255, 255, 255) transparent transparent', position: 'relative', top: '10px', zIndex: '1'}}>
                                
                              </div>
                              <div style={{borderWidth: '11px', borderStyle: 'solid', borderColor: 'transparent rgb(215, 215, 215) transparent transparent', position: 'relative', top: '-11px', zIndex: '0'}}>
                                
                              </div>
                            </div>
            </div>



                <iframe src="about:blank" style={{display: 'none'}}></iframe>
     
    </div>
  );
}

export default App;
