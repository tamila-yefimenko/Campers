import PuffLoader from 'react-spinners/PuffLoader';

const override = {
  display: 'block',
  margin: '0 auto',
};

const Loader = () => {
  return (
    <div>
      <PuffLoader color="#FF7F00" cssOverride={override} />
    </div>
  );
};
export default Loader;
