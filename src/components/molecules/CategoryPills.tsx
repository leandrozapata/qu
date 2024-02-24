const CategoryPills = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}) => (
  <div style={styles.pillList}>
    {categories.map((category) => (
      <button
        key={category}
        style={selectedCategory === category ? styles.activePill : styles.pill}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

const styles = {
  pillList: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  pill: {
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "white",
    cursor: "pointer",
  },
  activePill: {
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
  },
};

export default CategoryPills;
