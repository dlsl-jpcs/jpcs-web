import './App.css'
import rainbow from './assets/stickers-v40.png'
import rainbowRight from './assets/stickers-v28.png'

import MainBg from './components/main-bg/MainBg'

function App() {

  if (true) {
    return (
      <>
        <MainBg />

        <div className="fg">
          <div className="fg-body">
            <div className="title-container">
              <div className="row">
                <div className="overlap top-part">
                  <h1 className='background-text'> JPCS </h1>
                  <h1 className='foreground-text'> JPCS </h1>
                </div>
              </div>

              <div className="row">
                <div className="box"></div>
                <div className="overlap bottom-part">
                  <h1 className='background-text'> DLSL</h1>
                  <h1 className='foreground-text-2'> DLSL</h1>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
    )
  }

}

export default App
