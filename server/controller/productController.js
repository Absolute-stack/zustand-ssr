import { Product } from '../models/productModel.js';

export async function getProducts(req, res) {
  try {
    const {
      category,
      minPrice,
      maxPrice,
      search,
      limit = 6,
      cursor,
    } = req.query;

    let filter = {};

    const limitNum = Math.min(Number(limit), 50);

    if (category) {
      filter.category = category;
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    if (search) {
      filter.search = { $regex: search, $options: 'i' };
    }

    if (cursor) {
      filter._id = { $lt: cursor };
    }

    const products = await Product.find(filter)
      .sort({ createdAt: -1 })
      .limit(limitNum + 1)
      .lean();

    const hasNextPage = products.length > limitNum;

    if (hasNextPage) products.pop();

    const nextCursor = hasNextPage ? products[products.length - 1]._id : null;

    return res.json({
      products,
      nextCursor,
      hasNextPage,
    });
  } catch (error) {
    console.error(error);
  }
}

// ✅ correct — Promise.all only has two items, res.json() is outside
export async function getFilters(req, res) {
  try {
    const [categories, priceRange] = await Promise.all([
      Product.distinct('category'),
      Product.aggregate([
        {
          $group: {
            _id: null,
            minPrice: { $min: '$price' },
            maxPrice: { $max: '$price' },
          },
        },
      ]),
    ]);

    res.json({
      categories,
      minPrice: priceRange?.[0]?.minPrice ?? 0,
      maxPrice: priceRange?.[0]?.maxPrice ?? 0,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
