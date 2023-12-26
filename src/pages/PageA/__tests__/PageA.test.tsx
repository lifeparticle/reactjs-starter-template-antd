import { render } from "@testing-library/react";
import PageA from "pages/PageA";

describe("PageA Component", () => {
	it("renders correctly", () => {
		const { getByText } = render(<PageA />);
		expect(getByText("Page A")).toBeInTheDocument();
	});
});
