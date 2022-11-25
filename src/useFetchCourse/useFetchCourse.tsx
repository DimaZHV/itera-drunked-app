import { useState, useEffect } from "react";

type AllStatus = { status: "empty" | "error" | "ok" };

type CourseBox = {
	title: string;
};

export const useFetchCourse = (SEARCH_KEYWORD?: string) => {
	const [course, setCourse] = useState<CourseBox[]>([]);
	const [error, setError] = useState<AllStatus>();

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		SEARCH_KEYWORD !== ""
			? fetch(
					`https://react-course-api.azurewebsites.net/lesson/${SEARCH_KEYWORD}`
			  )
					.then((x) => x.json())
					.then((res) =>
						res.length === 0
							? setError({ status: "empty" })
							: (setCourse(res), setError({ status: "ok" }))
					)
					.catch((error: Error) => {
						setError({ status: "error" });
						setCourse([
							{
								title:
									"Sorry, we have some problems. Our team already works to fix it",
							},
						]);
					})
			: null;
	}, [SEARCH_KEYWORD]);

	return { course, error };
};
