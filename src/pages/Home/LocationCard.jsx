import pt from "prop-types"

const LocationCard = ({ location }) => {
    return (
        <div className="bg-fadegray rounded-lg overflow-hidden">
            <h3 className="bg-gray-400 text-2xl p-2 mb-4 font-bold text-center">{location.branch}</h3>
            <div className="h-[2px] my-4 w-full bg-low"></div>
            <p className="text-center text-low">{location.address}</p>
            <button className="block mx-auto btn p-2 w-1/2 text-amber-400 font-semibold text-lg my-4 bg-mid rounded-md">Visit</button>

        </div>
    );
};
LocationCard.propTypes = {
    location: pt.object,
}
export default LocationCard;