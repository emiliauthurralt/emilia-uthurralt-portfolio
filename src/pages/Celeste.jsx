import React from 'react'
import stylesheet from '../css/celeste.css'


export default function Celeste() {
return (
    <>
    <section className="flexbox navSpace celesteCase">
        <div className="secCyb margin20">
        <header className='flexCeleste'>
            <div>
            <h1 className=''>Is it possible to play Celeste with a keyboard?</h1>
            <p>The short answer is yes. But it has some obstacles you must solve before you can play the game using the keyboard instead of a joystick.</p>
            </div>
            <img id='headerCelesteImg' src="images/Celeste/celestePic (6).png" alt="" />
            
        </header>
        <section>
            <h2 id='backgroundId'>Background</h2>
            <p>
            I am a keyboard gamer. I bought my first joystick in late 2022, although every time I start a new game, my first instinct is to play with my keyboard. <br/>
            So, after beating Hollow Knight I wanted to play a platform game and started <a href="https://www.celestegame.com/" target='_blank' rel="noreferrer">Celeste</a>. I know platform games are recommended to play with a gamepad, but I didn’t have one at the moment.
            
            <br/>The first thing I want to say is that Celeste is a wonderful game. The story was really touching to me, the topics and lessons are so important, the art is incredible and the accessibility options are something admirable. So go and play this lovely game!
            </p>
            <img id='celeste8' src="images/Celeste/celestePic (8).png" alt="" className='center margin20'/>
            <p>
            <br/><span className='bold'>But, I had to solve some issues before playing it and I want to address them in a case study.</span>
            <br/>I opened the game for the first time, heard the wind blowing and suddenly Celeste Mountain was in front of me.<br/>
            Let’s start this, I press enter key but nothing happened. Tried pressing the space and ESC keys but still nothing happened. Mouse click didn’t work either.<br/>
            Then I saw the letter C on the corner of the screen and pressed that key, it felt weird but it worked. 
            </p>
            <p className='bordeCeleste center margin10'>💡 I think a solution for this would be to receive feedback indicating the correct key to press.</p>
            <img className='margin20 center' src="images/Celeste/celestePic (4).png" alt="" />
            <p className='margin10'>
            I pressed the button and it takes me to the menu, it was pretty simple, and this time I paid attention to the indications at the bottom of the screen. While navigating the menu, the keys didn't  feel right but I decided not to remap them so I can play the game as the developers intended. 
            </p>
            <img src="images/Celeste/celestePic (1).png" alt="" className="margin20 center" />
            <p className='margin10'>
            There are lots of keys that the game lets you remap, even the keys used for navigating menus can be different from the ones used for the gameplay.
            <br/>All of this doesn’t bother me, I just wanted to play the game. But then the real problem started while playing with a keyboard.
            </p>
        </section>
        <section>
            <h2>Problem statement</h2>
            <p>The game started and as I passed through the screens, there are little tutorials that teach how to play it. 
                <br/>In the picture below you can see the part in which you learn how to dash. This is where I discovered the hardware limitations of my keyboard: <span className='bold'>Ghosting.</span></p>
            <img src="images/Celeste/celestePic (2).png" alt="" className="margin20 center" />
            <p className="bordeCeleste margin10"><span className='bold'>Ghosting</span> is a design flaw present on membrane keyboards that happens when you’re pressing several keys at once and makes it freeze.</p>
            <p>
            In Celeste, to dash you need to press the keys up, right, and x (3 keys at the same time), and my Logitech MK120 can’t do that because it lacks ghosting prevention, something that gaming keyboards already have.
            <br/>While trying some key combinations, found out the problem was the arrow keys. Pressing more than one arrow key plus any other key doesn’t work as it should and it was frustrating because dashing it’s crucial to play Celeste.
            </p>
        </section>
        <section>
            <h2>The solution I found</h2>
            <p>Thanks to having the option of remapping keys and the help from some friends, I try this keyboard configuration:</p>
            <img id='celeste3' src="images/Celeste/celestePic (3).png" alt="" className="center margin20" />
            <p className='margin10'>And that was the end of it, I could play it without problems and climbed all the way to the top of Celeste Mountain!</p>
            <img id='celeste5' src="images/Celeste/celestePic (5).png" alt="" className="center" />
        </section>
        

        </div>
    </section>
    </>
)
}
