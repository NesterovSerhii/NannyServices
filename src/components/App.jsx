import Header from './Header/';
import css from './App.module.css'
import WelcomePage from 'pages/WelcomePage/WelcomePage';
export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.backgroundContainer}>
      <Header />
        <WelcomePage />
      </div>
    </div>
  );
};
