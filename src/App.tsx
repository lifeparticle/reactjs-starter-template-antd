import { Button, ConfigProvider } from "antd";
import { Icon } from "components/General";
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
				<Icon name="LayoutTemplate" />
			</ConfigProvider>
		</div>
	);
}

export default App;
