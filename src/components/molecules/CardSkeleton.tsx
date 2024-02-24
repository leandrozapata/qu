const CardSkeleton = () => (
  <>
    <style>
      {`
        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #f8f8f8 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1s infinite;
          border-radius: 15px;
          width: 100%;
          height: 360px;
          margin-bottom: 20px;
          align-self: center;
        }
      `}
    </style>
    <div className="skeleton" />
  </>
);

export default CardSkeleton;