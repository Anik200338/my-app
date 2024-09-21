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
                        <div key={index} className="card card-compact bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-between items-center">
                                    {/* Icon buttons for interactions */}
                                    <div className="flex space-x-4 text-gray-600">
                                        <button className="flex items-center space-x-1 hover:text-blue-500">
                                            <FaThumbsUp />
                                            <span>Like</span>
                                        </button>
                                        <button className="flex items-center space-x-1 hover:text-red-500">
                                            <FaThumbsDown />
                                            <span>Dislike</span>
                                        </button>
                                        <button className="flex items-center space-x-1 hover:text-green-500">
                                            <FaCommentAlt />
                                            <span>Comment</span>
                                        </button>
                                        <button className="flex items-center space-x-1 hover:text-purple-500">
                                            <FaShare />
                                            <span>Share</span>
                                        </button>
                                    </div>
                                    <button className="btn btn-primary">Buy Now</button>
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