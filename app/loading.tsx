'use client';

export default function Loading() {
  return (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>

      <style jsx>{`
        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .loader-spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #e0e0e0;
          border-top: 5px solid #B75BAA;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
