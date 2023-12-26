import { render } from "@testing-library/react";
import PageB from "pages/PageB";

describe("PageB Component", () => {
	it("renders correctly", () => {
		const { getByText } = render(<PageB />);
		expect(getByText("Page B")).toBeInTheDocument();
	});
});
