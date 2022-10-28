import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import './App.css'

function App() {

  useEffect(() => {

  },[])

  const [count, setCount] = useState(0)
  const scrollingDiv = (index) => {
    
  }

  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

  return (
    <div className="App">
      <div className='w-full flex flex-col'>
          <div className='h-screen w-full relative'>
            <div className='bg-gradient-to-b from-indigo-300 w-full h-56 absolute top-0 -z-5'></div>
            <div className="nuage1 w-full h-screen bg-nuage1 bg-cover absolute bottom-0 -z-5"></div>
            <div className="fond w-full h-screen bg-moutain bg-fond bg-center absolute bottom-0 -z-20"></div>
            <div className="nuage2 w-full h-screen bg-nuage2 bg-cover absolute bottom-0 -z-20"></div>
            <div className="moutain w-full h-screen bg-moutain bg-cover bg-center absolute bottom-0 -z-10"></div>
            <div className="fond2 w-full h-screen bg-fond2 bg-cover bg-center absolute bottom-0"></div>
            <h1 id='textH1' className='text-7xl mx-auto w-[300px] mt-[170px] font-bold text-pink-800 text-left -z-0'>Kata Temple</h1>
            <div className="fond3 w-full h-screen bg-fond3 bg-cover bg-center absolute bottom-0"></div>
            <div className="fond4 w-full h-screen bg-fond4 bg-cover bg-center absolute bottom-0"></div>
            <div className="fond5 w-full h-screen bg-fond5 bg-cover bg-center absolute bottom-0"></div>
            <div className="w-full h-screen bg-fond6 bg-cover bg-center absolute bottom-0"></div>
            <div className="arbre w-full h-screen bg-arbre bg-cover bg-center absolute bottom-0"></div>
            <div className="tour w-full h-screen bg-tour bg-cover bg-center absolute bottom-0"></div>
            <div className='bg-gradient-to-t from-[#474290] w-full h-24 absolute bottom-0'></div>
          </div>

        <div className='w-full h-screen bg-[#474290]'>
            <div className='max-w-2xl mx-auto flex flex-col p-2'>
              
              <div className='w-full flex flex-col items-center justify-center p-3'>
    
                <h2 className='text-white'>
                  <span className='font-comforter text-3xl'>30</span>
                  <span className='text-red-500 font-bold text-2xl'>DAYS</span>
                  <span className='font-bold text-2xl'> KATA CHALLENGE 🥷</span>
                </h2>

                <span className='text-[0.59em] text-white font-bold italic mt-3'>
                  <span>Improve yourself in technical test with the Kata Temple challenge and take up the temple sensei's kata from level </span>
                  <span className='text-red-500'>8kyu </span>
                  <span>to </span>
                  <span className='text-red-500'>4kyu </span>
                  <span>- Ruby Edition </span>
                </span>

                <span className='text-[0.6em] font-bold mt-4'>
                  <span className='text-white'>👉 prerequisite : </span>
                  <span className='text-red-500 underline'>Codewars account</span>
                </span>

              </div>

              <div className='w-full mt-4 '>
                <div className=''>
                
                  <h3 className='text-xl font-bold text-red-500'>Week 1 - 8kyu 🤙</h3>
                  <div className='accordion mt-1'>

                      <div>
                        <input type='checkbox' id='section_1' className='accordion_input'></input>
                        <label for='section_1' className='accordion_label'><span className='mx-2 text-[0.8em] font-semibold'>Day 1</span></label>
                        <div className='accordion_content'>
                          <div className='flex flex-col'>
                            <span className='text-[0.6em] font-bold mt-1'>Début</span>
                            <span className='text-[0.8em] font-bold underline decoration-orange-400'>Mission :</span>
                            <span className='text-[0.6em] font-bold mt-1'>Given 2 strings, a and b, write a method that return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside 🔥</span>
                            <span className='text-[0.6em] font-bold mt-4'>Language : Ruby ♦️</span>
                            <span className='text-[0.6em] font-bold mt-1'>Difficulty : 8kyu 🤙</span>
                            <span className='text-[0.6em] font-bold mt-1'>Difficulty : 8kyu 🤙</span>
                            <span className='text-[0.6em] font-bold mt-1'>Difficulty : 8kyu 🤙</span>
                            <span className='text-[0.6em] font-bold mt-1'>Fin</span>

                          </div>
                        </div>
                      </div>

                      <div>
                        <input type='checkbox' id='section_2' className='accordion_input'></input>
                        <label for='section_2' className='accordion_label mx-2 border-b-[.8px] border-slate-200 text-[0.8em] font-semibold'>Day 2</label>
                        <div className='accordion_content'>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quis veritatis dolor ab reiciendis! Nesciunt quidem blanditiis modi exercitationem suscipit maiores fuga molestiae, excepturi id rem, debitis temporibus explicabo officiis!</p>
                        </div>
                      </div>

                    </div>
                  
                </div>

                <div className='mt-5'>
                
                  <h3 className='text-xl font-bold text-red-500'>Week 2 - 7kyu 👀</h3>
                  <div className='accordion mt-1'>

                      <div>
                        <input type='checkbox' id='section_8' className='accordion_input'></input>
                        <label for='section_8' className='accordion_label'><span className='mx-2 text-[0.8em] font-semibold'>Day 8</span></label>
                        <div className='accordion_content'>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quis veritatis dolor ab reiciendis! Nesciunt quidem blanditiis modi exercitationem suscipit maiores fuga molestiae, excepturi id rem, debitis temporibus explicabo officiis!</p>
                        </div>
                      </div>

                      <div>
                        <input type='checkbox' id='section_9' className='accordion_input'></input>
                        <label for='section_9' className='accordion_label mx-2 border-b-[.8px] border-slate-200 text-[0.8em] font-semibold'>Day 9</label>
                        <div className='accordion_content'>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quis veritatis dolor ab reiciendis! Nesciunt quidem blanditiis modi exercitationem suscipit maiores fuga molestiae, excepturi id rem, debitis temporibus explicabo officiis!</p>
                        </div>
                      </div>

                    </div>
                  
                </div>
              </div>

            </div>

        </div>
      </div>
      

    </div>
  )
}

export default App
