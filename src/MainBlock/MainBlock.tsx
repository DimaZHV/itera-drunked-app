import { useState } from "react";
import "./MainBlock.scss";
import InputContainer from "../InputContainer/InputContainer";
import CardLesson from "../CardLesson/CardLesson";
import { useFetchCourse } from "../useFetchCourse/useFetchCourse";

function MainBlock() {
	const [value, setValue] = useState<string>("");
	const { course, error } = useFetchCourse(value);

	const giveProps = (keyWord: string) => {
		setValue(keyWord);
	};

	if (error?.status === "empty") {
		return (
			<div className="input_block">
				<InputContainer giveProps={giveProps} />

				<p>Please, write correct key word</p>
			</div>
		);
	}

	if (error?.status === "error") {
		return (
			<div className="input_block">
				<p>{course[0].title}</p>
			</div>
		);
	}

	return (
		<>
			<InputContainer giveProps={giveProps} />
			<CardLesson course={course} />
		</>
	);
}
export default MainBlock;
