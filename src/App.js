import React, {Suspense, lazy} from 'react';
import logo from './logo.svg';
import './App.css';
import {Helmet} from 'react-helmet';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

const RegionalSummary = lazy(() =>
  import('./component/RegionalSummary' )
);
const DailySummary = lazy(() =>
  import('./component/DailySummary')
);

function App() {

  const pages = [
    {
      pageLink: '/',
      view: DailySummary,
      displayName: 'DailySummary',
      animationDelayForNavbar: 0.2,
      showInNavbar: true
    },
    {
      pageLink: '/regionalsummary',
      view: RegionalSummary,
      displayName: 'RegionalSummary',
      animationDelayForNavbar: 0.3,
      showInNavbar: true
    }  
  ];
  const schemaMarkup = {
    '@context': 'http://schema.org/',
    '@type': 'NGO',
    name: 'Coronavirus Outbreak in India: Latest Map and Case Count',
    alternateName: 'COVID-19 Tracker',
    url: 'https://www.covid19india.org/',
    image: 'https://www.covid19india.org/thumbnail.png',
  };
  
  return (
    <div className="App">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

    <Router>
        <Suspense fallback={<div className="lazy"></div>}>
          <Route
            render={({location}) => (
              <React.Fragment>
                <Switch location={location}>
                  {pages.map((page, index) => {
                    return (
                      <Route
                        exact
                        path={page.pageLink}
                        render={({match}) => (
                          <page.view key={match.params.stateCode || index} />
                        )}
                        key={index}
                      />
                    );
                  })}
                  <Redirect to="/" />
                </Switch>
              </React.Fragment>
            )}
          />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
