import React from "react";

const LoadingSpinner = ({ loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative">
          {/* Outer spinning circle */}
          <div
            className="w-16 h-16 rounded-full animate-spin 
                        bg-gradient-to-r from-blue-200 to-purple-200
                        flex items-center justify-center"
          >
            {/* Inner static circle */}
            <div className="w-12 h-12 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default LoadingSpinner;
