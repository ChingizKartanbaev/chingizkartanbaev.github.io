import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock5 from "../img/mock5.png"



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;


export const info = {
    firstName: "Chingiz",
    lastName: "Kartanbaev",
    initials: "ck", 
    position: "a Java Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🌎',
            text: 'based in the DE'
        },
        {
            emoji: "💼",
            text: "Intern at WHZ"
        },
        {
            emoji: "📧",
            text: "chingiz.kartanbaev@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/kartanbaeev/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/ChingizKartanbaev",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/chingiz-kartanbaev/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],
    bio: "Hello! My name is Chingiz. I am currently studying at WHZ and completing my practical training as part of my university program. I am gaining hands-on experience alongside my studies and developing my technical and professional skills.",
    skills:
        {
            proficientWith: ['java', 'spring boot', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['javaScript', 'python', 'docker']
        }
    ,
    hobbies: [
        {
            label: 'volleyball',
            emoji: '⚽'
        },
        {
            label: 'computer games',
            emoji: '🎮'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }

    ],
    portfolio: [ 
        {
            title: "Pizza App",
            source: "https://github.com/ChingizKartanbaev/PizzaApp", 
            image: mock1
        },
        {
            title: "Schatz in Datenbank",
            source: "https://github.com/bekturmsv/Schatz-in-DB",
            image: mock2
        },
        {
            title: "Coolband",
            source: "https://github.com/ChingizKartanbaev/Coolband",
            image: mock3
        },
        {
            title: "Cinimatica",
            source: "https://github.com/ChingizKartanbaev/Cinimatica",
            image: mock5
        }
    ]
}