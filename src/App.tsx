import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Routes } from "routes";

function App() {
	const navigate = useNavigate();

	return (
		<div>
			<Routes />
			<Button onClick={() => navigate("/pagea")}>Go to Page A</Button>
			<Button onClick={() => navigate("/pageb")}>Go to Page B</Button>
		</div>
	);
}

export default App;
