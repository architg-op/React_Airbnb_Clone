import image_grid from '../image_grid.png';

export default function Navbar() {
    return (
        <div>
            <img className="airbnb_imageGrid" src={image_grid} alt="airbnb img grid"/>
            <h1>
                Online Experiences
            </h1>
            <p>
                Join unique interactive activites led by one-of-a-kind hosts all without leaving home.
            </p>
        </div>
    )
}