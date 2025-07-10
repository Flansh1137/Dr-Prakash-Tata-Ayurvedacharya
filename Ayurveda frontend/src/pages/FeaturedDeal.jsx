import { Link } from 'react-router-dom';

function FeaturedDeal() {
  return (
    <div className="p-4 bg-green-50">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-green-800">Featured Deal</h2>
        <Link to="/featured-deals" className="text-sm text-green-600 hover:underline">
          View All →
        </Link>
      </div>

      {/* Featured Cards go here */}
    </div>
  );
}
