import React from 'react';
import ActionHelp from 'material-ui/svg-icons/action/help';

const About = ({children}) => {
  return (
    <div className="about">
      О нас
    </div>
  );
};

About.icon = <ActionHelp/>;

export default About;
