
import "../Cards.css"
import gitLogo from "../assets/githublogo.svg"
import linkedinlogo from "../assets/linkedinlogo.svg"
import twitterlogo from "../assets/twitterlogo.png"
const Cards = () => {

    const cardsData = [

        {key:1,
         id: 'cardOne',
         name : 'Rahul Sharma',
         role : 'Frontend Developer',
         discription : 'I build Interective and responsive user interface with React.',
         profilePhoto : "https://picsum.photos/200?random=1",
         gitLink : 'https://github.com/',
         linkedinLink : 'https://www.linkedin.com/',
         twitterLink : 'https://x.com/'
        },
        {key:2,
         id: 'cardTwo',
         name : 'Priya Singh',
         role : 'UI/UX Designer',
         discription : 'I love designing clean and simple interface that users enjoy.',
         profilePhoto : "https://picsum.photos/200?random=2",
          gitLink : 'https://github.com/',
         linkedinLink : 'https://www.linkedin.com/',
         twitterLink : 'https://x.com/'
        },
        {key: 3,
         id: 'cardThree',
         name : 'Aman Verma',
         role : 'React Developer',
         discription : 'I enjoy building reusable React components and custom hooks.',
         profilePhoto : "https://picsum.photos/200?random=3",
          gitLink : 'https://github.com/',
         linkedinLink : 'https://www.linkedin.com/',
         twitterLink : 'https://x.com/'
        },
        {key: 4,
         id: 'cardFour',
         name : 'Arjun Mehta',
         role : 'Project Manager',
         discription : 'I manage tasks, coordinate with the team and keep us on track.',
         profilePhoto : "https://picsum.photos/200?random=4",
          gitLink : 'https://github.com/',
         linkedinLink : 'https://www.linkedin.com/',
         twitterLink : 'https://x.com/'
        }
    ]
  return (
    <div className="cards">  
       {cardsData.map((card) => (   
         <div className="card" id= {card.id} key={card.key} >

            <div className="image"><img src = {card.profilePhoto} /></div>
            <div className="name"><h2>{card.name}</h2></div>
            <div className="role" id= {card.id}><h3>{card.role}</h3></div>
            <div className="discription"><p>{card.discription}</p></div>   
            <div className="socialLinks">
              <div className="gitlogo socialicon"><a href= {card.gitLink} target="blank"><img src={gitLogo} alt="gitlogo" /></a></div>
              <div className="linkedinlogo socialicon"><a href= {card.linkedinLink} target="blank"><img src={linkedinlogo} alt="linked in logo" /></a></div>
              <div className="twitterlogo socialicon"><a href= {card.twitterLink} target="blank"><img src={twitterlogo} alt="twitter logo" /></a></div>

            </div>
         </div>
       ))}
      
    </div>
  );
}

export default Cards;
