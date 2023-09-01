import NavBar from '../Shared/NavBar/NavBar.jsx'



const layout = ({children}) => {
  return (
    <div>
      <div>
        <div>
          <NavBar></NavBar>
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;