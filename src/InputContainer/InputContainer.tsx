import "./InputContainer.scss";
import { useState } from "react";

type Props = {
	giveProps: (keyWord: string) => void;
};

function InputContainer({ giveProps }: Props) {
	const [value, setValue] = useState("");
	return (
		<div className="input_block">
			<form action="">
				<label className="search" htmlFor="Search">
					Lesson finder
				</label>
				<input
					onChange={(e) => setValue(e.currentTarget.value)}
					onBlur={(e) => {
						giveProps(e.currentTarget.value.toLowerCase());
						setValue("");
					}}
					type="text"
					placeholder="Write here lesson name"
					value={value}
					id="Search"
				/>
				<button type="submit">Search</button>
			</form>
		</div>
	);
}
export default InputContainer;
