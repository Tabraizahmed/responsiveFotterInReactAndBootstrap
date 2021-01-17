import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import companylogo from './images/logo-pli-plus.svg';
import linkedin from './images/social-media-linkedin.svg';
import twitter from './images/social-media-twitter.svg';
import youtube from './images/social-media-youtube.svg';

function App() {
  return (
    <div className='container-fluid backgroundImage'>
      <footer>
        <div className='row align-item-center'>
          <div className='col-12 py-4'>
            <img src={companylogo} className='img-fluid logo' alt='' />
          </div>
        </div>
        {/* Mobile design  */}
        <div className='row'>
          <div className='col-3 align-self-start'>
            <hr
              style={{
                backgroundColor: 'red',
                height: '2px',
              }}
            ></hr>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 no-gutter'>
            <ul className='list-group mx-auto'>
              <li className='list-group-item'>Cras justo odio</li>
              <li className='list-group-item'>Dapibus ac facilisis in</li>
              <li className='list-group-item'>Morbi leo risus</li>
              <li className='list-group-item'>Porta ac consectetur ac</li>
              <li className='list-group-item'>Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      <div style={{ backgroundColor: '#2b2b2b', fontSize: '13px' }}>
        <div className='row'>
          <div
            className='col-12 text-white py-3'>
            <p>
              All Contents Copyright © 1996-2021 Practising Law Institute.
              Continuing Legal Education since 1933.
            </p>
            <p>
              <a className='linkhref' href='#'>
                Disclaimer
              </a>{' '}
              |&nbsp;
              <a className='linkhref' href='#'>
                Privacy Policy
              </a>{' '}
              |&nbsp;
              <a className='linkhref' href='#'>
                Terms of Use
              </a>{' '}
              |&nbsp;
              <a className='linkhref' href='#'>
                About Our Adds
              </a>
            </p>
            
          </div>
          </div>
             <div className='row  socialmediaicons'>
            <div className="col text-center">
              <img src={twitter}></img>
          </div>
            <div className="col  text-center">
              <img src={linkedin} ></img>
          </div>
            <div className="col  text-center">
              <img src={youtube}></img>
          </div>
          </div>
       
     </div>
          {/* Desktop design */}
      </footer>
    </div>
  );
}

export default App;
