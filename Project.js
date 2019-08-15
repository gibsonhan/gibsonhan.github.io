'use strict';

const e = React.createElement;

function ProjectCard (props){
    const {img, title, description, tecStack} = props.card;
    return e(
        'div', {key: 'Card', className: 'card'},
        [
            e('div', {key: 'img', className: 'image'},
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

let data = [
            {id: 1, img: 'assets/image.png', title: 'test title', description: 'description', tecStack: ['webpack ', 'babel ', 'wordpress ']},
            {id: 2, img: 'assets/image.png', title: 'test title', description: 'description', tecStack: ['webpack', 'babel', 'wordpress']},
            {id: 3, img: 'assets/image.png', title: 'test title', description: 'description', tecStack: ['webpack', 'babel', 'wordpress']}
        ]

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: data };
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

