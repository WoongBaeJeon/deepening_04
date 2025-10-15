const Filter = ({ categories, currentFilter, onFilterChange }) => {
    return (
        <div className="filter-container">
            <span>카테고리 필터:</span>
            <div className="filter-buttons">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`filter-button ${currentFilter === category ? 'active' : ''}`}
                        onClick={() => onFilterChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Filter;
