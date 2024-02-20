import Accordian from './components/accordian/Accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
    return (
        <div className='App'>
            {/* Accordian */}
            <Accordian />

            {/* Random Color */}
            <RandomColor />

            {/* Star Rating */}
            <StarRating numberOfStar={10} />
        </div>
    );
}

export default App;
