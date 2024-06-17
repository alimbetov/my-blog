
import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from '../AuthContext';
import LogoutButton from '../components/LogoutButton';

const Layout = () => {

  const { user, logout } = useAuth();

  return (
    <>
      <nav className="p-4 bg-gray-800 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{user ? `Welcome, ${user}` : 'Welcome, Guest'}</h1>
         
          </div>
          <ul className="flex space-x-6">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/blogs" 
                className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}
              >
                Contact
              </NavLink>
            </li>
            {user && (
              <li>
                <LogoutButton onLogout={logout} />
              </li>
            )}
   {user ?(<div></div>):
             ( <li> <NavLink 
                to="/Login"   className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}
                end >
                Login
              </NavLink>
            </li>
            )
          }
            {user? (<div></div>) : (
    <li> <NavLink 
    to="/form"   className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}
    end >
    registration
  </NavLink>
</li>
            )
            }

          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;