# Updated SAFETY_CHECK logic for price_tracker.py

SALMON_CATEGORIES = {
    "farmed_atlantic": {
        "keywords": ["atlantic", "farm raised", "farmed", "marine harvest"],
        "retail_price": 17.99,  # Superstore/Loblaws typical
        "dockside_comparison": "You sell wild, they sell farmed - not comparable"
    },
    "wild_pacific": {
        "keywords": ["wild", "sockeye", "coho", "spring", "chinook", "pink", "pacific"],
        "retail_price": 28.00,  # Safeway/Whole Foods wild sockeye
        "dockside_vs_retail": 0.26  # You charge 26% below this
    }
}

def categorize_salmon(product_name: str, price: float):
    name = product_name.lower()
    
    if any(k in name for k in SALMON_CATEGORIES["farmed_atlantic"]["keywords"]):
        return "farmed_atlantic", price, "NOT_COMPARABLE"
    
    elif any(k in name for k in SALMON_CATEGORIES["wild_pacific"]["keywords"]):
        return "wild_pacific", price, "YOUR_COMPETITION"
    
    return "unknown", price, "CHECK_MANUALLY"
