import NavBar from '../Shared/NavBar/NavBar.jsx'



const layout = ({ children }) => {
  return (
    <div>
      <div className="w-[1280px] mx-auto">
        <div>
          <NavBar></NavBar>
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;