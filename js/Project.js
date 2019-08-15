'use strict';

const projects = [
            { id: 1, img: '#', title: 'MERN CRUD', description: 'Add company profiles, view in a list and edit', tecStack: ['Express ', 'MongoDB ', 'Node ', 'React ']},
            { id: 2, img: '#', title: 'test title', description: 'description', tecStack: ['webpack', 'babel', 'wordpress']},
        ]

const e = React.createElement;

function ProjectCard (props){
    const {img, title, description, tecStack} = props.card;
    const image = `<img src=${img}>`
    return e(
        'div', {key: 'Card', className: 'card'},
        [
            e('div', {key: 'img', className: 'image'},
                e('div', {dangerouslySetInnerHTML: {__html: image}})
            ),
            e('div', {key: 'box', className: 'box'},
                [
                    e('div', {key: 'title', className: 'title'}, title),
                    e('div', {key: 'summary', className: 'description'}, description ),
                    e('div', {key: 'keywords', className: 'keywords'}, tecStack)
                ]) 
        ]
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
        "div", null, data.map(data => e(ProjectCard, {key: data.id, card: data}))
    );
  }
}

const domContainer = document.querySelector('#project-list-container');
ReactDOM.render(e(Project), domContainer);

