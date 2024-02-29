let Inventory = require("../models/inventory.model");

exports.create = (req, res) => {
  const inventoryData = {
    name: req.body.name,
    category: req.body.category,
    upc: req.body.upc,
    cost: req.body.cost,
    price: req.body.price,
    discount: req.body.discount,
    qty: req.body.qty,
    reorder: req.body.reorder,
    roAmount: req.body.roAmount,
    sku: req.body.sku,
    vendor: req.body.vendor,
    sellerId: req.body.sellerId,
    date: req.body.date,
    status: req.body.status,
    companyAccount: req.body.companyAccount,
  };

  const inventory = new Inventory(inventoryData);

  inventory
    .save()
    .then((savedInventory) => {
      return res.status(200).json({
        message: `${savedInventory._id} successfully created`,
      });
    })
    .catch((err) => {
      console.error("Error saving inventory:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    });
};

exports.getAll = async (req, res) => {
  const companyAccount = req.params;
  try {
    const allInventory = await Inventory.find(companyAccount);
    res.status(200).json(allInventory);
  } catch (error) {
    console.error("Error in fetching inventory:", error);
    res.status(500).json({ error: "Error fetching inventory" });
  }
};

// exports.updateInventory = async (req, res) => {
//   try {
//     await Inventory.findByIdAndUpdate(req.params.id, {
//       name: req.body.name,
//       category: req.body.category,
//       upc: req.body.upc,
//       cost: req.body.cost,
//       price: req.body.price,
//       discount: req.body.discount,
//       qty: req.body.qty,
//       reorder: req.body.reorder,
//       roAmount: req.body.roAmount,
//       sku: req.body.sku,
//       vendor: req.body.vendor,
//       sellerId: req.body.sellerId,
//       date: req.body.date,
//       status: req.body.status,
//     });
//     res.send("Item updated");
//   } catch (err) {
//     console.error(err.message);
//     res.send(400).send("You messed up :/");
//   }
// };

exports.updateInventory = async (req, res) => {
  try {
    const itemsArray  = req.body;

    if (!itemsArray || !Array.isArray(itemsArray)) {
      return res.status(400).send("Invalid itemsArray provided");
    }

    await Promise.all(
      itemsArray.map(async (item) => {
        const id = item._id;

        const updatedItem = await Inventory.findByIdAndUpdate(
          id,
          {
            name: item.name,
            category: item.category,
            upc: item.upc,
            cost: item.cost,
            price: item.price,
            discount: item.discount,
            qty: item.qty,
            reorder: item.reorder,
            roAmount: item.roAmount,
            sku: item.sku,
            vendor: item.vendor,
            sellerId: item.sellerId,
            date: item.date,
            status: item.status,
          },
          { new: true }
        );

        console.log("Updated Item:", updatedItem);
      })
    );

    res.send("Items updated");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
};



exports.deleteItem = async (req, res) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);
    res.json(" Item deleted.");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};
