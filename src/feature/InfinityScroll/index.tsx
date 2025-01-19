import { useRef, type ReactNode } from 'react';
import { useObserver } from '../hooks/useObserver';

type InfinityScrollProps = {
  canLoad?: boolean;
  children: ReactNode[] | ReactNode;
  onNext?: () => void;
};

const InfinityScroll = ({
  children = [],
  onNext = () => {},
  canLoad = false,
}: InfinityScrollProps): JSX.Element => {
  const crossingElement = useRef<HTMLDivElement>(null);

  useObserver({
    ref: crossingElement,
    canLoad,
    callback: onNext,
  });

  return (
    <>
      {children}
      <div ref={crossingElement} />
    </>
  );
};

export default InfinityScroll;
