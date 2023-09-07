import React from 'react';

const NoticeBoard = () => {
    return (
        <div className='h-[90vh] flex items-center justify-center gap-6 rounded-lg py-10'>
            
            <div className='border-dotted border-4 border-sky-600 h-full w-full flex items-center justify-center'><h2 className='text-7xl font-serif'>Notice Board</h2></div>
            <div className='border-dotted border-4 border-sky-600 h-full w-[40%] flex items-center justify-center'></div>
        </div>
    );
};

export default NoticeBoard;