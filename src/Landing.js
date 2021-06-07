import './Landing.css'
import Brainstorm from "./Images/Brainstorm.jpg"
import Lightning from "./Images/Lightning.jpg"
import Rainbulb from "./Images/Rainbulb.jpg"
import Bulb from "./Images/Bulb.jpg"
import Ideas from "./Images/Ideas.jpg"
import Mind from "./Images/Mind.jpg"

import Idea from "./Images/ThoughtProcess/Idea.png"
import Choose from "./Images/ThoughtProcess/Choose.jpg"
import Plan from "./Images/ThoughtProcess/Plan.jpg"
import RoughDraft from "./Images/ThoughtProcess/RoughDraft.jpg"
import Revision from "./Images/ThoughtProcess/Revision.jpg"
import Edit from "./Images/ThoughtProcess/Edit.png"
import FinalDraft from "./Images/ThoughtProcess/FinalDraft.jpg"
import Restart from "./Images/ThoughtProcess/Restart.jpg"

import Codes from "./Images/Translate/Codes.png"

import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import Button from "@material-ui/core/Button"


function Landing() {
  return (
    <div class="grid-2">
        <div class="section-1">
            <img src={Rainbulb} alt="Rainbulb" width="300" height="300" />
            <h1>Sorting Through Chaos</h1>
            <p>A look behind the curtains...</p>
            <p class="copyright">© Gabriel Go 2021</p>
            <div class="links">
            <Button target="_blank" href="https://github.com/granddivino">
            <FaGithubSquare size="3em" />
            </Button>
            <Button target="_blank" href="https://www.linkedin.com/in/gabriel-go-10192bb3/">
            <FaLinkedin size="3em" />
            </Button>
            </div>
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
            <h3>Generate Ideas:</h3><img src={Idea} alt="Idea" width="75" height="75" class="miniImg" /> <p>Personally my favorite part! Coming up with all the possible ways you want to convey whatever your vision 
              is for the project or task at hand.</p>
            <p><h3>Choose:</h3><img src={Choose} alt="Choose" width="75" height="75" class="miniImg" /> Decide which idea resonates most with you and which will be best to showcase your strengths and/or what it will
              take to sell your idea to your possible audience.
            </p>
            <p><h3>Plan:</h3><img src={Plan} alt="Plan" width="75" height="75" class="miniImg" /> Now you paint a watercolor image for the chosen idea you have in your head, and how you think you want your idea to be mapped out. It's okay
              if it's not exactly what you want yet at this stage, it's meant to be able to have a point A to B to C, even if it doesn't make sense yet.
            </p>
            <p><h3>Rough Draft:</h3><img src={RoughDraft} alt="RoughDraft" width="75" height="75" class="miniImg" /> Now that you have a plan in mind, this is where you begin to bring to life. It still may not be perfect when you finish
              the rough draft, but after you see it all laid out, you can see the things you might want to move around or change easier.
            </p>
            <p><h3>Revision:</h3><img src={Revision} alt="Revision" width="75" height="75" class="miniImg" /> This is where you begin to nitpick on the things that your mind keeps bringing you back to. You'll ask questions such as:
              "Is it necessary for me to have this here?" or "Would this make more sense if I move this elsewhere, or just get rid of it altogether?".
              This is the stage you'll want to finalize the content you're producing, and make those changes as needed.
            </p>
            <p><h3>Edit:</h3><img src={Edit} alt="Edit" width="75" height="75" class="miniImg" /> Not to be confused with revising, although they are quite similar! In the editing stage, this is where you correct
              any final grammar, punctuation or spelling mistakes if it applies to what you're doing.
            </p>
            <p><h3>Final Draft:</h3><img src={FinalDraft} alt="FinalDraft" width="75" height="75" class="miniImg" /> Now that you've put your final touches on your work, you can sit back and look at what you've made and be
              proud of it! 
            </p>
            <p><h3>Restart:</h3><img src={Restart} alt="Restart" width="75" height="75" class="miniImg" /> After you've had some time to rest your brain between your last project and right now, then you start the process all 
              over again. There's never really a full rest for those with a mind of a creator, the thoughts never stop coming! We should be thankful
              for that because if you really think about it, we wouldn't have all that we have (including the screen you're reading this from) if we
              it weren't for those innovators!
            </p>
          </div>

          <div class="subsection-3">
            <h2>How it all translates to code</h2>
            <img src={Codes} alt="Idea" width="500" height="100" /> 
            <p>In coding, in a lot of cases there's never a true final draft really, you'll always come across things that will
              inspire you and bring about new ideas to add to your previous projects, no matter how big or small. You add it if you really 
              are dedicated to keeping your passion for those said projects alive. Or, you bring those new ideas to a brand new project.</p>

            <p>The world of software engineering provides us with all sorts of languages to express our ideas and theories in the most
              creative and efficient way possible. There's many coding languages that can mean the same things, but you can find multiple ways to express it,
              much like the languages we use to communicate with other human beings. The possibilities are endless, seeing how new coding languages
              are born all the time.</p> 
            
            <p>So maybe there isn't an exact science to why we choose the ideas that we do, and run with it. Maybe it's meant to be that way.
              Why? Because say if there was a way to predict a pattern or exact way we see the world, it would mean that every idea that has
              existed, would have been published by now, right? The world of coding, we'd have already seen everything, and all possible apps
              to do everything already exists. Without the freedom to think of new ideas, well... It would truly be a boring world without 
              innovation. 
            </p>
          </div>

          {/* <div class="subsection-4">
            <h2>Result of the code</h2>
            <a href="#">Project 1</a>
            <a href="#">Project 2</a>
            <a href="#">Project 3</a>
            <a href="#">Project 4</a>
            <a href="#">Project 5</a>
          </div> */}
        </div>

    </div>
  )
}

export default Landing
