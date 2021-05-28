import './Landing.css'
import Brainstorm from "./Images/Brainstorm.jpg"
import Lightning from "./Images/Lightning.jpg"
import Bulb from "./Images/Bulb.jpg"
import Ideas from "./Images/Ideas.jpg"
import Mind from "./Images/Mind.jpg"
import {FaGithubSquare, FaLinkedin} from "react-icons/fa"

function Landing() {
  return (
    <div class="grid-2">
        <div class="section-1">
            <h2>Sorting through Chaos</h2>
            <p>The theory behind what you see.</p>
            <p>© Gabriel Go 2021</p>
            <FaGithubSquare size="4em" />
            <FaLinkedin size="4em" />
        </div>
        <div class="section-2">
          <div class="subsection-1">
            <h2>Anatomy of a Brainstorm</h2>
            <img src={Brainstorm} alt="Brainstorm" width="100" height="100" />
            <img src={Lightning} alt="Lightning" width="100" height="100" />
            <img src={Bulb} alt="Bulb" width="100" height="100" />
            <img src={Ideas} alt="Ideas" width="100" height="100" />
            <img src={Mind} alt="Mind" width="100" height="100" />
            <p>Have you ever looked at your own work and wondered how the finished product became what it was when when all was said and done?
              Of course "work" can apply to things such as art, writing, and music.. but in this particular case, I'm specifically talking about the product of coding. 
            </p>

            <p>I took a step back and asked myself some questions about my work because it truly fascinated me. How do I come up with the things that I do?
              Should it be this difficult for me to translate what I see in my head on to what I see on the screen? Why did I go with this particular idea? Do I think I'm funny? 
              Am I borderline psychopathic? You know, questions like that. </p>

            <p>What exactly goes on in in our heads when those little sparks of information are being carried across one end of the brain to the other?
              I suppose there isn't an exact answer for that, but it sure is fascinating to think of all the possibilities.
            </p>

          </div>

          <div class="subsection-2">
            <h2>The Cycle of the Thought Process</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in maiores autem quidem.</p>
          </div>

          <div class="subsection-3">
            <h2>How it all translates to code</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in maiores autem quidem obcaecati excepturi! Cupiditate eaque itaque magni voluptatibus neque nobis est dolor? Atque sunt minus ipsa asperiores. At.</p>
          </div>

          <div class="subsection-4">
            <h2>Result of the code</h2>
            <a href="#">Project 1</a>
            <a href="#">Project 2</a>
            <a href="#">Project 3</a>
            <a href="#">Project 4</a>
            <a href="#">Project 5</a>
          </div>
        </div>

    </div>
  )
}

export default Landing
