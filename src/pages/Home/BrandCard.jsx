import pt from "prop-types"
import { useNavigate } from "react-router-dom";

const BrandCard = ({ card }) => {
    let nav = useNavigate()

    function handleCard() {
        let title = card.name
        nav(`/brand/${title}`)

    }
    
    return (
        <div onClick={handleCard} className="hover:cursor-pointer text-center flex bg-fadegray hover:bg-[#33333359] justify-center items-center flex-col rounded-md">
            <figure className="flex-grow p-4">
                <img src={card.img} alt="" className="h-20" />
            </figure>
            <p className="text-3xl bg-low w-full text-white p-1 my-4">{card.name}</p>
        </div>
    );
};
BrandCard.propTypes = {
    card: pt.object,
}
export default BrandCard;