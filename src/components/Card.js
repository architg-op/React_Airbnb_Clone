import firstCard from '../firstCard.png';

export default function Navbar() {
    return (
        <div className='card_MainImage'>
            <img src={firstCard} alt="Zaferes USA"/>
            <p>Life lessons from Katie Zaferes</p>
            <p>
                <b> From $136 </b> / person
            </p>
        </div>
    )
}