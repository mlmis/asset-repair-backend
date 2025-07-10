const { db } = require('../firebase');

exports.createAssetType = async (req, res) => {
  const { name, description, customFields } = req.body;
  const assetTypeRef = await db.collection('assetTypes').add({
    name,
    description,
    customFields,
    createdAt: new Date(),
  });

  const assetType = await assetTypeRef.get();
  res.status(201).json({ id: assetType.id, ...assetType.data() });
};
