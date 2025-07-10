const { db } = require('../firebase');

exports.addComment = async (req, res) => {
  const { repairId } = req.params;
  const { userId, text } = req.body;

  const comment = {
    userId,
    text,
    timestamp: new Date(),
  };

  await db.collection('repairs').doc(repairId).update({
    comments: admin.firestore.FieldValue.arrayUnion(comment)
  });

  const repairDoc = await db.collection('repairs').doc(repairId).get();
  res.json({ id: repairDoc.id, ...repairDoc.data() });
};
