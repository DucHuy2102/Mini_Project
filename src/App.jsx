import Accordian from './components/accordian/Accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
    return (
        <div className='App'>
            {/* Accordian */}
            {/* <Accordian /> */}

            {/* Random Color */}
            {/* <RandomColor /> */}

            {/* Star Rating */}
            {/* <StarRating numberOfStar={10} /> */}

            {/* Image Slider */}
            <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} />
        </div>
    );
}

export default App;
