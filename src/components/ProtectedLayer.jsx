import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

export default function ProtectedLayer() {
    const { token } = useContext(AuthContext);

    useEffect(() => {
        if (!token) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [token]);

    if(token) return null;

    return(
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-white text-xl">
        Silakan login untuk melanjutkan.
        <button
          onClick={() => (window.location.href = "/login")}
          className="block mt-4 px-4 py-2 bg-blue-600 rounded">
          Login Sekarang
        </button>
      </div>
    </div>
    )
}