"use client"
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    const user = auth.currentUser;
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const db = getFirestore();
      const wishlistRef = collection(db, 'wishlists', user.uid, 'movies');
      const querySnapshot = await getDocs(wishlistRef);
      
      const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setWishlistItems(items);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!auth.currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#00112C] to-[#012256] text-white p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Please Sign In</h1>
          <p className="text-gray-300">You need to be signed in to view your wishlist.</p>
          <Link href="/" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00112C] to-[#012256] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
        
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        ) : wishlistItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-300 mb-4">Your wishlist is empty</p>
            <Link href="/home" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Browse Movies
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-[#1a1a3a]/80 rounded-lg overflow-hidden shadow-xl backdrop-blur-sm">
                <Link href={`/movies/${item.id}`}>
                  <div className="relative h-48">
                    <Image
                      src={item.thumbnail || '/placeholder.jpg'}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 truncate">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{item.year}</p>
                  <div className="flex justify-between items-center">
                    <Link 
                      href={`/movies/${item.id}`}
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 