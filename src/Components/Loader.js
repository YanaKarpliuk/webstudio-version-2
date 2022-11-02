import { RevolvingDot } from 'react-loader-spinner';

export default function Loader() {
  return (
    <RevolvingDot
      height="100"
      width="100"
      radius="6"
      color="#2196F3"
      secondaryColor=""
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
