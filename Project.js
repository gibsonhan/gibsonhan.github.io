'use strict';

const e = React.createElement;


function ProjectList(props){
    return e(
        'div',
        null,
        'Project List Place Holder'
    )
}

function ProjectCard (prop){
    return e(
        'div',
        null,
        'Project Card'
    )
}

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return e(
        'div', {key: 'Card', className: 'card'},
        [
            e('div', {key: 'image', className: 'image'}, 'img' ),
            e('div', {key: 'box', className: 'box'},
                [
                    e('div', {key: 'title', className: 'title'}, 'This is the card title' ),
                    e('div', {key: 'summary', className: 'description'}, 'Project Description for have to this is something we will to and learn how to map' ),
                    e('div', {key: 'keywords', className: 'keywords'}, 'React, MongoDB, Javascript')
                ]) 
        ]
    );
  }
}

const domContainer = document.querySelector('#project-list-container');
ReactDOM.render(e(Project), domContainer);

