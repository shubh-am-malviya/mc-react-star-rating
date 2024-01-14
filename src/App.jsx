import { useRef, useState } from "react";
import "./App.css";
import Loading from "./Loading";
import Rating from "./Rating";
import Star from "./Star";

function App() {
	const [rating, setRating] = useState(2);
	const [loading, setLoading] = useState(false);
	const previousRating = useRef(null);

	const handleRating = (newRating) => {
		previousRating.current = rating;
		setRating(newRating);
		setLoading(true);

		// simulating optimistic update failure case
		setTimeout(() => {
			const random = Math.random() * 10;
			if (random <= 5) {
				setRating(previousRating.current);
			}
			setLoading(false);
		}, 2000);
	};

	return (
		<>
			<Rating
				ratingLength={5}
				rating={rating}
				ratingItem={(isFilled) => <Star filled={isFilled} />}
				loading={loading}
				loadingItem={() => <Loading />}
				onRating={handleRating}
			/>
		</>
	);
}

export default App;
