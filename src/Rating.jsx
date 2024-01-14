import { useState } from "react";

const Rating = ({ ratingLength, rating, ratingItem, loading, loadingItem, onRating }) => {
	const [hoverIndex, setHoverIndex] = useState(null);

	const isFilled = (currentIndex) => {
		return hoverIndex ? currentIndex <= hoverIndex : currentIndex + 1 <= rating;
	};

	return (
		<>
			<div className="rating-container">
				{Array.from({ length: ratingLength }).map((item, index) => (
					<span
						key={index}
						onMouseOver={() => setHoverIndex(index)}
						onMouseLeave={() => setHoverIndex(null)}
						onClick={() => onRating(index + 1)}
					>
						{ratingItem(isFilled(index))}
					</span>
				))}
			</div>
			{loading && loadingItem()}
		</>
	);
};

export default Rating;
