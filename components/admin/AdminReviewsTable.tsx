// components/admin/AdminReviewsTable.tsx
import { fetchAllReviews, deleteReviewByAdminAction } from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';

export default async function AdminReviewsTable() {
  const reviews = await fetchAllReviews();

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Alle reviews</h2>
      <ul className="space-y-4">
        {reviews.map((review) => (
          <li key={review.id} className="border p-4 rounded flex justify-between items-center">
            <div>
              <p className="font-medium">
                {review.profile.firstName} over <strong>{review.property.name}</strong>
              </p>
              <p className="text-sm text-gray-600">
                {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>{i < review.rating ? '⭐' : '☆'}</span>
                ))} – {review.comment}
              </p>
            </div>
            <FormContainer action={deleteReviewByAdminAction.bind(null, { reviewId: review.id })}>
              <button type="submit" className="text-red-600 hover:underline">
                Verwijder
              </button>
            </FormContainer>
          </li>
        ))}
      </ul>
    </div>
  );
}
