import * as React from 'react';
import './Job.css';

type props = {
    jobName: string;
}

function Job (props: props){
    return(
        <div className="job-component">
            <h2 className="job-name">{props.jobName}</h2>
            <p className="job-description">
            ● Executed test plans, test designs and test cases.
            <br/>
            ● Influenced the requirements definition and software design to maximize
            testability.
            <br/>
            ● Participated in product design reviews.
            <br/>
            ● Worked on automating the testing process.
            <br/>
            ● Worked with the Agile scrum framework.
            </p>
        </div>
    )
}

export default Job