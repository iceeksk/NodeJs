import React, {Component} from 'react';
import {getAll} from 'api/tasks';

import './TaskList.scss';

export default class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }
    }

    async componentDidMount() {
        const tasks = await getAll();
        this.setState({tasks});
    }

    render() {
        return (
            <div className='task-list'>
                {this.state.tasks.map(task => (
                    <div key={task.id}>
                        <span>{task.id}</span>
                        <span>{task.title}</span>
                        <span>{task.done ? '✓' : '❌'}</span>
                    </div>))
                }
            </div>
        );
    }
}
