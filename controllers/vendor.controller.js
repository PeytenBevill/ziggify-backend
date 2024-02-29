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
    await Vendor.findByIdAndUpdate(req.params.id, {
      vName: req.body.vName,
      contactInfo: req.body.contactInfo,
      contactPerson: req.body.contactPerson,
      taxId: req.body.taxId,
      leadTime: req.body.leadTime,
      moq: req.body.moq,
    });
    res.send("Vendor updated");
  } catch (err) {
    console.error(err.message);
    res.send(400).send("You messed up :/");
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Vendor.findByIdAndDelete(req.params.id);
    res.json("Vendor deleted.");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};
