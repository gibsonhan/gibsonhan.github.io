'use strict';

const projects = 
    [
        { id: 1,
        description: 'Login w/ JWT auth and create, read, and update profile with React', 
        img: './assests/mobile_mern_crud_landing.png',
        tecStack: ['Express ', 'MongoDB ', 'Node ', 'React '],
        title: 'MERN CRUD', 
        url: 'https://github.com/gibsonhan/MERN_CRUD'
        },
        {
        id: 2,
        description: 'Login w/ JWT auth and create, read, and update profile with React', 
        img: './assests/mobile_mern_crud_landing.png',
        tecStack: ['Express ', 'MongoDB ', 'Node ', 'React '],
        title: 'MERN CRUD', 
        url: 'https://github.com/gibsonhan/MERN_CRUD'
        },
        {
        id: 3,
        description: 'Login w/ JWT auth and create, read, and update profile with React', 
        img: './assests/mobile_mern_crud_landing.png',
        tecStack: ['Express ', 'MongoDB ', 'Node ', 'React '],
        title: 'MERN CRUD', 
        url: 'https://github.com/gibsonhan/MERN_CRUD'
        },
        {
        id: 4,
        description: 'Login w/ JWT auth and create, read, and update profile with React', 
        img: './assests/mobile_mern_crud_landing.png',
        tecStack: ['Express ', 'MongoDB ', 'Node ', 'React '],
        title: 'MERN CRUD', 
        url: 'https://github.com/gibsonhan/MERN_CRUD'
        }

    ]

const e = React.createElement;

function ProjectCard (props){
    const {img, description, tecStack, title, url} = props.card;
    const image = `<img src=${img}>`
    return e('div', {key: 'Card', className: 'card' },
            e('a', { key: 'link', href: url},
                [
                    e('div', {key: 'img', className: 'image'},
                    e('div', {className: 'image-wrapper', dangerouslySetInnerHTML: {__html: image}})),
                    e('div', {key: 'box', className: 'box'},
                        [
                            e('div', {key: 'title', className: 'title'}, title),
                            e('div', {key: 'summary', className: 'description'}, description ),
                            e('div', {key: 'keywords', className: 'keywords'}, tecStack),
                        ]) 
                ]
            )
    );
}

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: projects };
  }
  render() {
    const data = this.state.projects
    return e(
        "div", {key:'cardList', className: 'card-list'}, data.map(data => e(ProjectCard, {key: data.id, card: data}))
    );
  }
}

const domContainer = document.querySelector('#project-list-container');
ReactDOM.render(e(Project), domContainer);

