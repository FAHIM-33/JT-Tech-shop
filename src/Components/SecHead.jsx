/* eslint-disable react/prop-types */

const SecHead = ({ title, details }) => {
    return (
        <div className="text-center my-8">
            <h2 className='text-3xl mb-3 font-semibold'>{title}</h2>
            <p>{details}</p>
        </div>
    );
};

export default SecHead;