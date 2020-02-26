import React, { Suspense } from 'react';
const OtherComponent = React.lazy(() => import('../components/OtherComponent'));

export default function Lazy() {
  return (
    <div>
      <Suspense fallback={<div>等待加载，Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}