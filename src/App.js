import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import cn from 'classnames';
import MenuHeader from './components/MenuHeader';
import HomePage from './routes/Home';
import GamePage from './routes/Game';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import NotFound from './routes/NotFound';
import Footer from './components/Footer';
import s from './style.module.css';
import { FirebaseContext } from './context/firebaseContext';
import FirebaseClass from './service/firebase';

const App = () => {
  const match = useRouteMatch('/');

  return (
    <FirebaseContext.Provider value={FirebaseClass}>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact} />
            <div className={cn(s.wrap, { [s.isHomePage]: match.isExact })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </FirebaseContext.Provider>
  );
};

export default App;
