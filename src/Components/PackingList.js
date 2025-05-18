import React, { useState } from 'react'
import Item from './Item';

export default function PackingList({ items, onDeleteItem, onUpdateItem, onClearList }) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;
    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));

    return (
        <div className="list">
            <ul>
                {sortedItems.map((i) => (<Item item={i} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} key={i.id} />))}
            </ul>
            <div className='actions'>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by Description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear List</button>
            </div>
        </div>
    );
}