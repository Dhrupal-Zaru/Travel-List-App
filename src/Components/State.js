
export default function State({ items }) {

    if (!items.length) {
        return <footer className="stats">Start adding some items to your packing list!✈️</footer>
    }
    const numItem = items.length;
    const numPackedItem = items.filter((item) => item.packed).length;
    const percentage = numItem === 0 ? 0 : Math.round((numPackedItem / numItem) * 100);

    return (
        <footer className="stats">
            {percentage === 100 ? <p>You got everything! Ready to go...✈️</p> :
                <p>You have {numItem} items in your list, and you already packed {numPackedItem} ({percentage}%)</p>
            }
        </footer>
    );
}