import { useState } from "react";
import "./CardLesson.scss";

type CourseBox = {
	title: string;
};

interface CourseList {
	course: CourseBox[];
}

function CardLesson({ course }: CourseList) {
	const [position, setPosition] = useState(0);

	const prev = () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		position >= -1840 ? setPosition((prev) => prev - 184) : null;
	};

	const next = () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		position >= 0 ? null : setPosition((prev) => prev + 184);
	};

	return (
		<div className="courses">
			{course.length > 6 ? (
				<button onClick={next} className="buttons">
					Prev
				</button>
			) : null}
			<div className="slider">
				<div className="slider_line" style={{ left: position + "px" }}>
					{course?.map((el, index) => (
						<div key={index} className={"course_box"}>
							<p>{el.title}</p>
						</div>
					))}
				</div>
			</div>
			{course.length > 6 ? (
				<button onClick={prev} className="buttons">
					Next
				</button>
			) : null}
		</div>
	);
}
export default CardLesson;
