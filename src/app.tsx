import routes from './containers/routes';
import renderRoutes from './containers/routes/render';

const App = () => {
	return <>{renderRoutes(routes)}</>;
};

export default App;
