import './App.css';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { LandingPage, PremiumPage, AboutLanding, ErrorPage } from './Pages.Lands'
import { DashboardRoutes } from './Pages.Dashboard/routes/index'
import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from '@apollo/client';


import { menuPageQuery } from './graphql/queries';
import { PulseLoader } from 'react-spinners';
import { AdminPage } from './Pages.Lands/Admin';

function App() { 

  const { loading, data } = useQuery(menuPageQuery);

  const drawer = useDisclosure()
  const drawerRef = React.useRef()


  const [windowDimensions, setWindowDimensions] = React.useState({ width: window.innerWidth, height: window.innerHeight });

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width, height } = windowDimensions;

  const [lang, setLang] = React.useState(
    () => localStorage.getItem("lang") || "en"
  )

  React.useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  if(!loading) {
    return (
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <LandingPage {...props} lang={lang} setLang={setLang} width={width} height={height} drawer={drawer} drawerRef={drawerRef} data={data} />}
          >
          </Route>
          <Route
            path="/pricing"
            exact
            render={(props) => <PremiumPage {...props} lang={lang} setLang={setLang} width={width} height={height} drawer={drawer} drawerRef={drawerRef} data={data} />}
          >
          </Route>
          <Route
            path="/about"
            exact
            render={(props) => <AboutLanding {...props} lang={lang} setLang={setLang} width={width} height={height} drawer={drawer} drawerRef={drawerRef} data={data} />}
          >
          </Route>
          <Route
            path="/dashboard"
            render={(props) => <DashboardRoutes {...props} lang={lang} setLang={setLang} width={width} height={height} drawer={drawer} drawerRef={drawerRef} data={data} />}
          >
          </Route>
          <Route
          path="/error"
          render={(props) => <ErrorPage {...props} lang={lang} setLang={setLang} width={width} height={height} drawer={drawer} drawerRef={drawerRef} />}
          >
          </Route>
          <Route
          path="/admin"
          render={(props) => <AdminPage {...props} lang={lang} setLang={setLang} width={width} height={height} drawer={drawer} drawerRef={drawerRef} data={data} />}
          >
          </Route>
          <Redirect to="/" />
        </Switch>
  )} else {
    return (<div className="loader"> 
      <PulseLoader color="#ffffff" />
    </div>)
  }
};

export default App;
