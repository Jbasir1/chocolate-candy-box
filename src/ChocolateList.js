import ChocolateCard from './ChocolateCard';
import chocolates from './ChocolateData';


const ChocolateList = () => {
    return(
        <div className="chocolate-list">
            {chocolates.map((chocolate, index) => (
                <ChocolateCard key={index} chocolate={chocolate} />
            ))}
        </div>
    );
};

export default ChocolateList;