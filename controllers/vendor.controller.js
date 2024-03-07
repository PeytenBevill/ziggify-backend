let Vendor = require("../models/vendor.model");

exports.create = (req, res) => {
  const vendorData = {
    vName: req.body.vName,
    contactInfo: req.body.contactInfo,
    contactPerson: req.body.contactPerson,
    taxId: req.body.taxId,
    leadTime: req.body.leadTime,
    moq: req.body.moq,
    companyAccount: req.body.companyAccount,
  };

  const vendor = new Vendor(vendorData);

  vendor
    .save()
    .then((savedVendor) => {
      return res.status(200).json({
        message: `${savedVendor._id} successfully created`,
      });
    })
    .catch((err) => {
      console.error("Error saving vendor:", err);
      return res.status(500).json({ error: "internal server error" });
    });
};

exports.getAll = async (req, res) => {
  const companyAccount = req.params;
  try {
    const vendors = await Vendor.find(companyAccount);
    res.status(200).json(vendors);
  } catch (err) {
    console.error("Error in fetching vendors:", error);
    res.status(500).json({ error: "Error fetching vendors" });
  }
};

exports.updateVendor = async (req, res) => {
  try {
    const vendorArray = req.body;
    if (!vendorArray || !Array.isArray(vendorArray)) {
      return res.status(400).send("Invalid vendorArray provided");
    }

    await Promise.all(
      vendorArray.map(async (vendor) => {
        const id = vendor._id
        const updatedVendor = await Vendor.findByIdAndUpdate(
          id,
          {
            vName: vendorItem.vName,
            contactInfo: vendorItem.contactInfo,
            contactPerson: vendorItem.contactPerson,
            taxId: vendorItem.taxId,
            leadTime: vendorItem.leadTime,
            moq: vendorItem.moq,
          },
          { new: true }
        );
        console.log("Updated Vendor:", updatedVendor)

      })
    )
    res.send("Vendor updated");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("You messed up :/");
  }
};

exports.deleteItem = async (req, res) => {
  let id = req.params._id;
  console.log(id);
  try {
    const result = await Vendor.deleteOne({ _id: id });

    if (result.deletedCount === 1) {
      res.json({ message: "Vendor deleted successfully." });
    } else {
      res.status(404).json({ message: "Vendor not found." });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: err.message });
  }
};
