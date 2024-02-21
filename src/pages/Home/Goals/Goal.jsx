import pt from 'prop-types'

const Goal = ({data}) => {
    return (
        <div className='lg:p-4 p-2 lg:mt-8 mt-4 rounded-md bg-low text-back' >
            <h1 className='text-center md:text-2xl text-lg '>{data.title}</h1>
            <p className='font-light text-center text-sm p-8'>{data.details}</p>
        </div>
    );
};
Goal.propTypes = {
    data: pt.object,
}
export default Goal;