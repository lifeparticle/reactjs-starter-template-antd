import { Button, ConfigProvider } from "antd";
import { useTheme } from "hooks";
import { useNavigate } from "react-router-dom";
import { Routes } from "routes";

function App() {
	const navigate = useNavigate();
	const theme = useTheme();

	return (
		<div>
			<ConfigProvider theme={theme}>
				<Routes />
				<Button onClick={() => navigate("/pagea")}>Go to Page A</Button>
				<Button onClick={() => navigate("/pageb")}>Go to Page B</Button>
			</ConfigProvider>
		</div>
	);
}

export default App;
