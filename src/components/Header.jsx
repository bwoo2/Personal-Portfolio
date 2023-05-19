import '../style/Header.css'
import Me from '../image/Brian.jpg' 

export default function Header() {
  return (
    <div className='intro'>
      <div className='svg-container'>
        <svg viewBox="0 0 100 100" width="200" height="500">
          <defs>
            <path id="circle"
              d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0"/>
          </defs>
          <text font-size="17">
            <textPath href="#circle">
              Hello, I'm Brian
            </textPath>
          </text>
        </svg>
      </div>
      <div className='img-container'>
        <img src={Me} alt="Me" />
      </div>
    </div>
  );
}

