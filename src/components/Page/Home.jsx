import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';

const Home = ({children}) => {
  return (
    <div className="home">
      Главная
    </div>
  );
};

Home.icon = <ActionHome/>;

export default Home;
