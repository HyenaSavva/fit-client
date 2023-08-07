import { ElementType, Suspense } from "react";

export const Loadable = (Component: ElementType) => {
  return function fn(props: any) {
    return (
      <Suspense fallback={<>Loading...</>}>
        <Component {...props} />
      </Suspense>
    );
  };
};
