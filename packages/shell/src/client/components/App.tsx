import React from 'react';
import { Helmet } from 'react-helmet';

/*
import type { ContentProps } from 'remote1/Content';
const Content = React.lazy(
  () => import('remote1/Content') as Promise<{ default: React.FC<ContentProps> }>,
);
*/

const App = () => {
  const [state, setState] = React.useState<string>('');

  return (
    <div
      style={{
        padding: '1rem',
        borderRadius: '0.25rem',
        border: '4px dashed #fc451e',
      }}
    >
      <Helmet>
        <title>QCU PWA-SSR</title>
      </Helmet>

      <React.Suspense fallback={<h1>Loading....</h1>}>
        <>
        <h1>Loaded....</h1>
        </>
      </React.Suspense>
    </div>
  );
};

export default App;