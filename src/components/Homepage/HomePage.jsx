"use client";
import React from "react";
import { FaThumbsUp, FaThumbsDown, FaCommentAlt, FaShare } from "react-icons/fa";

const HomePage = () => {
    return (
        <div className="bg-gray-100 py-10 px-4">
            <div className="container mx-auto">
                {/* Responsive grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Generate cards dynamically */}
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((card, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                                <h2 className="text-xl font-semibold text-gray-800">Card Title {card}</h2>
                                <p className="text-gray-600 mt-2">
                                    This is a description of card {card}. It contains brief content.
                                </p>

                                {/* Action Buttons */}
                                <div className="flex justify-between items-center mt-4 border-t pt-4">
                                    <div className="flex items-center space-x-4">
                                        <button className="flex items-center text-blue-500 hover:text-blue-600">
                                            <FaThumbsUp className="mr-2" /> Like
                                        </button>
                                        <button className="flex items-center text-red-500 hover:text-red-600">
                                            <FaThumbsDown className="mr-2" /> Unlike
                                        </button>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <button className="flex items-center text-gray-500 hover:text-gray-600">
                                            <FaCommentAlt className="mr-2" /> Comment
                                        </button>
                                        <button className="flex items-center text-green-500 hover:text-green-600">
                                            <FaShare className="mr-2" /> Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;