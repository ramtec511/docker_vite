import {Route,Redirect} from 'react-router-dom';
function Rutasprivadas({ children, isAuthenticated, ...rest }) {
    return (
      <Route
      {...rest}
      render={
        ({ location }) => (
          isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location }
              }}
            />
          ))
      }
    />
    );
  }
export default Rutasprivadas;
